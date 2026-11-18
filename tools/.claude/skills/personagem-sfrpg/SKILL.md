---
name: personagem-sfrpg
description: Cria ou atualiza a ficha (.js em v2/) e o post do blog sfrpg.com.br de um personagem, incluindo imagens, seções de arma/mascote/arena/sensei, banners, listas cruzadas e publicação por FTP e direto no banco do WordPress. Use quando o usuário pedir para criar personagem, ficha, post de personagem, adaptar personagem de um PDF/suplemento, ou ajustar estilo, arma, mascote ou banners de personagens.
---

# Ficha e post de personagem (SF RPG Brasil)

Tudo em português (exceto nomes de manobras). Leia o CLAUDE.md do projeto antes: formato das fichas, encoding com BOM, cache-buster e a proibição de ler `v2/wp-config.php`.

Scripts de apoio nesta pasta (`scripts/`):
- `wp.sh`: banco (credenciais temporárias, GET/PUT de post com checagem de concorrência) e FTP.

Para gerar, extrair, converter e publicar imagens, use a skill `imagem-sfrpg`.

**Regras por franquia:** esta skill só tem regras gerais. As específicas de cada franquia (eras e Saúde, botões de planilha, cronologia, crédito, banners de times/clãs, tags e listas próprias, slugs) ficam em `v2/<franquia>/REGRAS.md`. **Antes de criar ou alterar um personagem, leia o `REGRAS.md` da pasta dele**, se existir; ele complementa (e, onde for mais específico, prevalece sobre) o que está aqui. Regra nova que só vale para uma franquia vai para o `REGRAS.md` dela, não para esta skill.

## Fluxo

1. **Confirmar a origem com o usuário.** Os personagens vêm de fontes diferentes (suplementos da Shotokan RPG, livros da White Wolf, PDFs de fãs, criações próprias), então não presuma que é o mesmo PDF de antes. Se o pedido não disser de onde vem o personagem (arquivo, páginas e autoria), **pergunte antes de começar**. A origem define o conteúdo da ficha, a franquia/pasta em `v2/` e o crédito do post. Depois, leia a fonte. Para PDF, se não houver `pdftoppm` na máquina, crie um venv e use `pymupdf` (`fitz`) para extrair texto e renderizar páginas.
2. **Ler `v2/<franquia>/REGRAS.md`** (se existir) e **criar a ficha** `v2/<franquia>/<slug>.js`. Ver "Ficha" abaixo.
3. **Validar a ficha** em Node, sem navegador:
   ```sh
   node -e 'global.getParameterByName=()=>null;global.newCaracteristica=(n,v)=>({n,v});global.calcPC=x=>x;eval(require("fs").readFileSync("v2/kof/<slug>.js","utf8")+";console.log(npc.Estilo,npc.NovasTecnicas,npc.Armas)")'
   ```
4. **Enviar a ficha por FTP** para `public/tools/v2/<franquia>/<slug>.js` e conferir com `curl -s https://www.sfrpg.com.br/tools/v2/... | cmp - <local>`.
5. **Pesquisar dados físicos** (altura, peso, país, nascimento) na internet. Ver "Pesquisa".
6. **Imagens**: principal, banner do personagem e imagem destacada. Ver "Imagens".
7. **Montar o HTML do post** seguindo o post de referência da franquia. Ver "Estrutura do post".
8. **Inserir o post como rascunho** direto no banco. Ver "Banco".
9. **Atualizar as listas cruzadas** (armas, estilos, mascote, Forças Especiais...). Ver "Listas cruzadas".
10. **Informar ao usuário** o link de edição `https://www.sfrpg.com.br/wp-admin/post.php?post=<ID>&action=edit` e todas as dúvidas de uma vez no final.

O usuário prefere receber **todas as dúvidas juntas no fim** da geração, em vez de interromper a cada personagem. Quando ele mandar correções em sequência (uma por mensagem, enquanto você trabalha), aplique cada uma e siga em frente.

## Ficha (.js)

- Base: CLAUDE.md. Indentação de 4 espaços. Campos sem acento (`Forca`, `Raciocinio`...).
- **Estilo combinado** usa parênteses: `"Forças Especiais (Bojutsu)"`, `"Ninjitsu (Kenjutsu)"`, `"Karatê Rindoukan (Kenjutsu)"`. O `GeraLinkEstilo` em `scripts.js` gera um link para cada parte. Não use barra "/" (não é suportada e o usuário preferiu parênteses).
- Grafias de estilo que geram link válido: `Karatê Rindoukan` (post `karate-rindoukan`), `Kenjutsu`, `Bojutsu`, `Ninjitsu`, `Forças Especiais`, `Baraqah`, `Ler Drit`, `Kickboxe`. Para confirmar, procure o slug no banco (`SELECT post_name FROM wp_posts WHERE post_name='...'`). **Kobujutsu** é arte marcial que luta com arma: quem usa espada fica `Kenjutsu`, quem usa bastão fica `Bojutsu`. Personagem de clã ninja é Ninjitsu: combine com a arma, como `Ninjitsu (Bojutsu)` (Nanase).
- **Estilo "coringa": Jeet Kune Dô.** Personagem sem estilo definido (a fonte diz "Desconhecido" ou "Variável") ou que muda de forma e imita outros lutadores fica com `Estilo: "Jeet Kune Dô"`, nunca "Desconhecido". Exemplos: Q, Twelve e Eleven. No post, a frase sobre o estilo cita "(adaptado como <a>Jeet Kune Dô</a>)". O post leva a tag `jeet kune do`, e nas tabelas de bustos a célula fica "J. Kune Dô". Personagem sem ficha (como o Eleven) registra o estilo no texto do post e na tag.
- **Personagem armado** (modelo: `v2/ff/carlos.js`, `v2/sf/vega.js`, `v2/sf/eagle.js`):
  ```js
  const tecnicas = [];
  tecnicas[0] = newCaracteristica("Espada", 4);   // Espada, Bastão, Chicote, Garra, Armas de Fogo...
  const armas = [];
  armas[0] = "Bokken";                            // nome exato de uma chave de `armas` em manobras.js
  ...
  Foco: 5,
  NovasTecnicas: tecnicas,
  Armas: armas,
  ManobrasEspeciais: "...",
  ```
  Armas comuns em `manobras.js`: Katana (+1/+3/+0), Bokken (+1/+3/+0), Cimitarra (+0/+3/+0), Tonfa (+0/+1/+0), Garra (+1/+1/+0), Chicote (-1/+2/nenhum, alcance 6), Pistola (+2/+3/-), Pistola Pesada (+2/+4/-).
  Armas de duas ou mais partes ligadas por corrente curta usam a técnica **"Mangual"** (Nunchaku). Corrente com mais de 30 cm é Chicote (Corrente, Kusari, Kusarigama, Maça-Estrela), como diz o post `tecnicas-com-armas`.
  A técnica de arma de fogo nas fichas se chama **"Armas de Fogo"** (é o nome que o cálculo reconhece), embora o post Armas de Fogo fale em técnica "Pistola".
- Antecedente Mascote: `antecedentes[i] = newCaracteristica("Mascote", 1);`.
- **Divisão e Posto não definidos na fonte:** use `Posto: 8` e `Divisao: "Livre"`; se o personagem porta arma branca ou tem o antecedente Cibernético, `Divisao: "Duelistas"`. Exceções por personagem estão no `REGRAS.md` da franquia.
- **Valores mínimos (todas as fichas):**
  - Chi, Força de Vontade, Posto e Saúde nunca são menores que 1 (se faltar o campo, use 1). Honra e Glória podem ser 0.
  - **Exceção do Posto:** o Elenco de Apoio (personagens listados no post `elenco-de-apoio` ou que se apresentam como tal, ex.: Shade, Drakis, Karen Corr, Yuri Karkaroff, Apostador) pode ter `Posto: 0`.
  - Personagem que luta em algum jogo (controlado pelo jogador ou pela CPU) nunca tem Saúde menor que 10. **Exceção:** capangas (tag `capanga`; ex.: Skull Cross, Mad Gear e inimigos genéricos de beat 'em up) podem ter menos, assim como NPCs de campanha (`v2/rpg/`).
  - Atributos nunca ficam abaixo de 1, exceto com motivo explicado no post (ex.: a máscara do Yoshimitsu deixa Aparência 0; robôs como Combot sem Carisma/Manipulação; monstros como Goro sem Aparência).
- **Habilidades zeradas na fonte:** preencha com base na história, sem passar de 5 numa mesma habilidade e de 20 pontos em Talentos (Prontidão, Interrogação, Intimidação, Perspicácia, Manha, Lábia), 18 em Perícias (Luta às Cegas, Condução, Liderança, Segurança, Furtividade, Sobrevivência) e 15 em Conhecimentos (Arena, Computador, Investigação, Medicina, Mistérios, Estilos).
- **Arma de uma mão só** (garra, cimitarra...): o lutador continua podendo socar com a outra mão; a cada ataque escolhe usar a arma (Manobras Básicas com Armas) ou um soco normal. Não escreva que a arma "substitui" os socos.
- Manobra citada que não existe em `manobras.js` vale 1 PC e não aparece na tabela. **Antes de listá-la como não encontrada, procure o nome na descrição (conteúdo, não só o título) dos posts da categoria Manobras Especiais** (`term_taxonomy_id` 17): muitas manobras têm sinônimos citados no texto ("também chamado de...", "Americanos chamam de..."). Ex.: Short Fireball → Energy Ball, Rising Tackle → Gekiro, Dashing Elbow → Hyper Tackle, Rising/Raising Storm → Shock Treatment. Equivalências decididas pelo usuário: Hammer Punch → Jumping Hammer Punch, Power Punch → Tameshiwari, Kobokushi → Tameshiwari (Kobokushi foi removida de `manobras.js`), Shumpo (Rock) → Empty Step + Light Feet, Shoulder Throw → Argentine Back Breaker, Double Strike → Double Hit Blow, Deflecting Strike → Deflecting Weapon, Lightning Strike → Spinning Weapon, Vulcan Punch (Ralf) → Tameshiwari na lista e Hyper Fist nos combos; Throttle (Whip) é descartada. Exporte os posts uma vez e busque com Python (o `grep`/`sed` do macOS quebra com o texto em latin1/UTF-8 misturado):
  ```sh
  wp_sql -N --raw -e "SELECT p.ID, p.post_title, REPLACE(REPLACE(p.post_content,'\n',' '),'\r',' ') FROM wp_posts p JOIN wp_term_relationships r ON r.object_id=p.ID WHERE r.term_taxonomy_id=17 AND p.post_type='post' AND p.post_status='publish'" > <scratchpad>/manobras-posts.tsv
  ```
  Achando o sinônimo, use na ficha a chave de `manobras.js` e cite no post o nome do jogo entre parênteses ("Reppuken (Fireball)"). Só o que não aparecer em lugar nenhum entra na lista de dúvidas.
- **Poder exclusivo do personagem** (manobra que só ele usa, explicada no próprio post, como Tanden Vortex do Seth, Gore do Diablo, Brain Mulch da Rosa Radioativa e Scuba Slash dos Homens Rã): cadastre em `manobras.js` para calcular na planilha, mas **não crie post de manobra**. Como a planilha gera o link `/post/<slug-da-manobra>` para toda manobra, redirecione esse endereço para o post do personagem inserindo em `wp_postmeta` a linha `_wp_old_slug=<slug-da-manobra>` no post dele (301 nativo do WordPress). Antes, confirme com `grep` que nenhuma outra ficha usa a manobra e que o post cita o nome dela; depois, teste com `curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://www.sfrpg.com.br/post/<slug-da-manobra>`.
- Grafias da fonte que precisam de ajuste para bater com as chaves: `Headbutt` → `Head Butt`, `Double-Hit X` → `Double Hit X`, `Shikan-Ken` → `Shikan Ken`, `Drunk Monkey Roll` → `Drunken Monkey Roll`, `Thing Press` → `Thigh Press`. Valide com um script que carrega `manobras.js` e compara ignorando caixa e pontuação.
- **Combo com manobra que não está na lista** do personagem (ex.: combo com Dive Kick sem ter Dive Kick): acrescente a manobra a `ManobrasEspeciais` e avise o usuário. Combos com arma usam "Espada Fierce", "Espada Jab".
- **Erros de copiar e colar na fonte**: confira se Conceito, Assinatura, Interpretação ou habilidades não foram copiados de outro personagem (no PDF de KoF, a Interpretação de B. Jenet era a do Hokutomaru e o Conceito/Assinatura de Hotaru eram os de Jenet). Reescreva com base no cânone e avise.
- **Habilidades secundárias** da fonte vão nos arrays opcionais: Talentos (Instrução, Administrar, Procurar) em `NovosTalentos`, Perícias (Apostar, Demolições, Disfarce, Reparos, Publicidade, Mecânica, Música) em `NovasPericias` e Conhecimentos (Ciências, Finanças, Direito, Linguística, Música) em `NovosConhecimentos`, cada um com `newCaracteristica` e acentuação normal. Habilidade primária ausente na fonte: preencha pela história (Condução 0 para uma criança da floresta é válido).
- Antecedentes da fonte com outro nome: "Escola" → `"Arena"`; "Empresário" (com acento); Elemental sempre com o tipo: `"Elemental (Fogo)"`, `"Elemental (Ar)"`. Equivalências próprias de uma franquia (ex.: "Orochi", "Pacto") estão no `REGRAS.md` dela.
- **Saúde máxima e botões por era** variam por franquia: veja o `REGRAS.md`.
- Fichas com versões (`age`): uma função por versão e `if (getParameterByName('age') === 'aof') ...`. Ex.: `v2/kof/robert-garcia.js`, `v2/kof/mr-big.js`, `v2/kof/terry-bogard.js` (FF e Garou).
- **Nova versão de personagem existente** (ex.: Garou para quem já tem ficha de FF): copie a função existente, renomeie (`TerryGarou`), aplique só as "Mudanças na ficha" da fonte (o resto fica igual), troque `Cronica`, e mude o fim do arquivo para escolher pela `age`. No post: acrescente a linha de planilha da nova era **acima** das antigas, um parágrafo `<strong>Crônica em Garou (2006):</strong> ...` logo depois do parágrafo da crônica anterior (com uma imagem da nova era, se a fonte tiver) e as seções/banners que a nova versão exigir (ex.: Mascote).
- **Versão desperta/transformada** (forma suprema ou possuída do mesmo personagem, como Shinnok Corrompido, Saiki Desperto e Dark Ash): siga a seção "Shinnok Corrompido" do post `shinnok`. Na ficha, uma função própria com `Nome` da forma ("Saiki Desperto") e uma `age` própria (`corrompido`, `desperto`, `dark`). No post, o botão dessa planilha **não** fica no topo: vai numa seção `<h3>Nome da Forma</h3>` no fim do texto do personagem, antes do crédito, com `<div style="float: left; margin: 10px;">` e a imagem da forma (se houver), o botão da mesma franquia/era das outras planilhas (ex.: `planilha-kof`, `planilha-mkx`) com `age` da forma, as linhas Altura/Peso/País/Nascimento da forma e um parágrafo explicando a transformação e as mudanças na ficha, fechando com `<div style="clear: both;"></div>` quando houver imagem.

## Pesquisa

- **Cronologia:** cada franquia tem seu ano de referência e formato de nascimento ("(22 anos em AoF)", "(17 anos em SF EX)"...), descritos no `REGRAS.md`.
- **Cidades fictícias dos EUA:** quem cresceu ou mora numa cidade fictícia (South Town, Metro City), sem outro país conhecido, fica `<strong>País:</strong> EUA (<a href="https://www.sfrpg.com.br/post/<cidade>">Cidade</a>)`.
- **Fontes** (fontes específicas de uma franquia estão no `REGRAS.md`): a wiki da SNK no Fandom, breezewiki, dreamcancel, pixiv e nicovideo bloqueiam o WebFetch (403/Anubis). O que funciona:
  - WebSearch em **japonês** com o nome em katakana/kanji (ex.: `ロディ・バーツ 国籍 出身 プロフィール`): o resumo da busca traz o perfil da Pixiv Encyclopedia e do Nico Nico Pedia.
  - Se o usuário tiver o Claude in Chrome conectado (https://claude.ai/chrome), use-o para as páginas bloqueadas.
- O que não for encontrado fica com `?` (ou "Desconhecido" se o usuário confirmar) e entra na lista de dúvidas.
- Se as fontes oficiais contradisserem o texto do suplemento adaptado (profissão, afiliação), aponte a diferença ao usuário. Quando ele pedir para seguir o cânone, reescreva o texto e acrescente, logo abaixo da linha de Referência/créditos: `<em><strong>Observação:</strong> o texto deste personagem foi ajustado para seguir o cânone dos jogos ...</em>` (já feito para Wang, Karman e Rody).
- País que não dá para presumir: use `<strong>País:</strong> Desconhecido` (sem tag). Posts de grupos, NPCs genéricos e mascotes não recebem o campo.

## Imagens

Extração de PDF, downloads, conversão, envio e anexos estão na skill `imagem-sfrpg`. Aqui ficam só as regras do post de personagem:

- **Imagem principal:** se a fonte for um PDF e houver ilustração junto ao personagem, use-a sem perguntar. **Se o PDF não tiver imagem do personagem, peça a imagem ao usuário** (junto com as outras dúvidas do fim). No post, use `width="300"`, ou a largura real se a imagem tiver menos de 300px (para não esticar).
- **Banner do personagem:** fica no fim do post e também é a imagem destacada (`_thumbnail_id`), exceto se for GIF animado (ver a regra de GIF em "Publicação", na skill `imagem-sfrpg`).
  - 16:9 grande (1280x720): use a versão 1024x576 com `class="size-large ..." width="474" height="267"`.
  - Pequeno ou quadrado: `size-full` com as dimensões reais (quadrado 1024: exibir em 474x474).
  - Vários personagens podem reutilizar o mesmo anexo de banner (ex.: pai e filha).
- Sem banner próprio: **nunca use banner genérico** (de franquia ou de jogo, como `art-of-fighting-1024x576.jpg` ou `garou.jpeg`), para nenhum personagem. Deixe o post **sem banner do personagem e sem imagem destacada** e peça as imagens ao usuário na lista de dúvidas. Se o PDF tiver uma segunda ilustração (cena, close), ela pode ser o banner do personagem (ex.: Rock com Terry, close da máscara de Grant).

## Estrutura do post

Copie o post de referência da franquia (indicado no `REGRAS.md`; Sensei: `gouken`; arma: `carlos`, `vega`, `eagle`). Ordem:

**Gêmeos (ou dupla que a fonte trata como um personagem só) num mesmo post:** siga a estrutura de `yun-e-yang` (exemplo já convertido: `jin-chonshu-e-jin-chonrei`):
- topo sem imagem: Altura/Peso/País/Nascimento comuns e depois a história e as crônicas comuns aos dois;
- um bloco por gêmeo: `<div style="float: left; margin: 10px;"><img ... wp-image-ID src=".../<slug-do-gemeo>.webp" width="..." /></div>`, os links de planilha daquele gêmeo, `<strong>Aparência de X:</strong>` e `<strong>Interpretando X:</strong>`, fechando com `<div style="clear: both;"></div>`. Cada gêmeo tem sua própria imagem principal e seu anexo; se as imagens forem bem altas, reduza o `width` para as duas ficarem com altura parecida (cerca de 450px);
- depois as seções comuns (NPC, Arena, Arma...), o crédito, uma imagem dos dois juntos (se houver) e os banners.

1. `<p style="float: left; margin: 10px;"><img class="alignnone size-full wp-image-ID" src=".../<slug>.webp" alt="" width="300" /></p>`
2. Link da planilha: `<a title="Planilha em AoF" href="https://sfrpg.com.br/tools/v2/_character.php?name=kof/<slug>&amp;age=aof" target="_blank" rel="noopener"><img class="alignnone size-full wp-image-13484" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/planilha-aof.jpg" alt="" width="200" height="50" /></a>` (uma linha por versão/era; qual botão cada era usa está no `REGRAS.md`).

   **Botões de planilha:** são anexos da biblioteca de mídia (200x50, em `uploads/2026/11/<nome>.jpg`), sempre com a marcação acima e o `wp-image-<ID>` do botão. Nunca use `/img/planilha*.jpg`, que é o caminho antigo. IDs: `planilha` (genérico) 13516, `planilha-aof` 13484, `planilha-combate` 13485, `planilha-ff` 13486, `planilha-ff1` 13487, `planilha-ff2` 13488, `planilha-ff3` 13489, `planilha-kof` 13490, `planilha-mark-city-wolves` 13451, `planilha-mk1` 13491, `planilha-mk4` 13492, `planilha-mka` 13493, `planilha-mkx` 13494, `planilha-mma` 13495, `planilha-real` 13496, `planilha-sf-alpha` 13497, `planilha-sf1-alpha-ff1-2` 13498, `planilha-sf1` 13499, `planilha-sf2-sf4-ff3` 13500, `planilha-sf2` 13501, `planilha-sf3` 13502, `planilha-sf4` 13503, `planilha-sf5-sf3` 13504, `planilha-sf5` 13505, `planilha-sf6` 13506, `planilha-sm1` 13507, `planilha-sm2` 13508, `planilha-tk1` 13509, `planilha-tk3` 13510, `planilha-tk4` 13511, `planilha-tk8` 13512. Botão novo: envie à biblioteca e crie o anexo como em "Publicação" da skill `imagem-sfrpg` (miniatura 150x50) e acrescente-o nesta lista.
3. `<strong>Altura:</strong>`, `Peso`, `País`, `Nascimento` (uma linha cada).
4. História (com links `/post/<slug>` para personagens, estilos e lugares), `<strong>X em <Jogo>:</strong> ...`, `<strong>Aparência:</strong>`, `<strong>Interpretando X:</strong>`.
5. Seções `<h3>` conforme o caso:
   - **Arma**: título com o nome da arma ("Katana de Eiji", "Cimitarra de Sinclair", "Chicote de Lenny", "Garra de Lee", "Pistola de Karman"). **Se o lutador tiver mais de uma arma, crie uma única seção "Armas de X"** e explique todas dentro dela (ex.: "Armas de Kasumi" com bokken e yumi; "Armas de Rody" com tonfa e pistola pesada). Arcos, bestas e armas de arremesso usam o post `armas-brancas-de-combate-a-distancia` (lembre que arcos e bestas não são permitidos em torneios, nem entre Duelistas). Texto e estatísticas copiados do post de regras: espadas em `lutando-com-espadas`, bastões/tonfas em `lutando-com-bastoes`, chicotes/garras/facas em `armas-brancas`, armas de fogo em `armas-de-fogo`. Inclua quais manobras usam a arma, uma linha `<strong>Arma:</strong> Técnica Básica: X. Velocidade +N, Dano +N, Movimento +N. Tipo de Dano: ... Empunhadura: ...` e o link para esse post. **Não copie a imagem do post de regras** (armas brancas, armas de fogo, espadas, bastões etc.): a seção da arma fica sem imagem, a não ser que o usuário mande uma imagem própria do personagem com a arma.
   - **Mascote** ("Mascote de X"): o animal e o nível do antecedente (nível 1 = mascote caseiro, manso e bem treinado; proibido em torneios; é um NPC do Narrador).
   - **Arena** ("Arena de X"): **obrigatória para todo personagem com o antecedente Arena** (`newCaracteristica("Arena", N)` ou, em fichas antigas, `{ Nome: "Arena", Valor: "N" }`), e **proibida para quem não tem** o antecedente em nenhuma versão da ficha: sem o antecedente, o post não tem seção de Arena nem banner de Arena, e o personagem não entra na lista do post `arena`. O conhecimento `Arena: N` não conta. Diz onde fica a arena e como ela é (2 ou 3 frases). De onde tirar a informação, nesta ordem:
     1. A lista "Locais de Conflito" do post `arena` (nomes oficiais dos livros, ex.: "Casa de Banhos Edo (E. Honda)", "Templo Toji (Retsu)", "Cemitério de Trens em Chicago (Joe)"). Use esse nome.
     2. O próprio texto do personagem (bar, dojô, navio, favela...).
     3. O cenário do personagem nos jogos (pesquise na internet).
     4. A regra da franquia, se o `REGRAS.md` tiver uma (ex.: MMA).
     5. Se nada disso definir a arena, pergunte ao usuário (junte as dúvidas no fim).
     Depois de escrever, passe ao usuário uma lista "Personagem: Nome da arena" para ele enviar as imagens, que entram logo abaixo do texto da seção (sem repetir uma imagem que o post já mostra ali). Quando o usuário pedir para **gerar** a imagem da arena, use a skill `imagem-sfrpg` (cena horizontal, com o texto da seção como ambiente e o personagem em pose de luta). Depois publique-a como banner (ver "Publicação" na mesma skill) e coloque o `<img>` logo abaixo do texto da seção. Se o post ainda não tiver imagem destacada (sem `_thumbnail_id` em `wp_postmeta`), use o anexo da imagem gerada como destacada (`_thumbnail_id=<ID do anexo>`); se já tiver, não troque.
   - **Sensei** ("X como Sensei", modelo `gouken`, com `<img class="aligncenter" src="/img/2010/3/Sensei-logo.jpg" alt="Sensei" />`). O nível de Sensei vem da ficha, e o banner `<a title="Sensei" href="/post/sensei"><img class="aligncenter" src="/img/2010/3/Sensei-logo.jpg" alt="Sensei" /></a>` entra junto dos banners finais (modelo `kim-kaphwan`). **Aluno com antecedente Sensei:** o antecedente do aluno é o nível do mestre dele. Não crie seção no post do aluno: crie a seção "<Mestre> como Sensei" no post do **mestre**, com o nível que está na ficha do aluno (Rock tem Sensei 4 → "Terry como Sensei", nível 4; Hokutomaru tem Sensei 3 → "Andy como Sensei", nível 3), ponha o banner de Sensei no fim do post do mestre e acrescente o mestre em "Exemplos de Senseis" do post `sensei`: são tabelas de bustos por franquia (Street Fighter e Final Fight; Art of Fighting, Fatal Fury e King of Fighters; Tekken; Mortal Kombat; Outros Senseis), no formato de "Tabelas de personagens" da skill `imagem-sfrpg`, com o mestre no fim da tabela da franquia dele. Criações do autor do blog levam "*" depois do nome; mestres sem post e sem imagem ficam na frase "Também são senseis..." abaixo da tabela. Se não souber quem é o mestre, pergunte.
   - **Satsui no Hadou**: obrigatória para todo personagem com o antecedente `newCaracteristica("Satsui no Hadou", N)` em qualquer versão da ficha (além do banner e da lista do post `satsui-no-hadou`, ver abaixo). Texto, trocando só o nome:
     ```html
     <h3>Satsui no Hadou</h3>
     Em situações de grande estresse, <Nome> rola seu antecedente Satsui no Hadou e se passar, entra em fúria, recebendo bônus em velocidade, dano e absorção, mas só pensa em matar seu oponente. Veja mais em <a href="https://www.sfrpg.com.br/post/satsui-no-hadou">Satsui no Hadou</a>.
     ```
     Franquias com antecedente equivalente (ex.: Sangue de Orochi em KoF) têm o texto da seção no `REGRAS.md`.
   - Na primeira menção a um estilo do jogo original, acrescente o estilo adaptado: "Karatê Kyokugen-ryu (adaptado como <a>Karatê Rindoukan</a>)".
6. Crédito em itálico, **sempre de acordo com a origem informada pelo usuário** (suplemento, autores). Exemplos já usados:
   - suplementos de franquia (KoF, MK...): o texto está no `REGRAS.md` da pasta;
   - criações do site: `<em><strong>* Fontes:</strong> ...</em>`, citando quem criou e em que se baseou.
   Se não souber a quem dar o crédito, pergunte; não invente.
7. Banner do personagem.
8. Banners de categoria, conforme o caso:
   - Mascote: `<p align="center"><a href="https://www.sfrpg.com.br/post/mascote"><img class="size-full wp-image-10061 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/09/mascotes.jpg" alt="" width="450" height="253" /></a></p>`
   - Duelistas (todo personagem que **porta** arma branca na planilha): `<p align="center"><a href="https://www.sfrpg.com.br/post/duelistas"><img class="size-full wp-image-11154 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2025/10/duelista.jpg" alt="" width="450" height="253" /></a></p>`
   - Arena (todo personagem com antecedente Arena, mesmo que a seção ainda não exista): `<p align="center"><a href="https://www.sfrpg.com.br/post/arena"><img class="size-full wp-image-11127 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/arena-banner.jpg" alt="" width="450" height="253" /></a></p>`
   - Ninja (estilo com "Ninjitsu", inclusive combinado e Ninjitsu Espanhol, ou antecedente Herança de Clã; também entra na lista "Exemplos de Ninjas" do post `ninjas`, com "(espanhol)" para Ninjitsu Espanhol). O antecedente se escreve sempre `newCaracteristica("Herança de Clã", N)`: `<p align="center"><a href="https://www.sfrpg.com.br/post/ninjas"><img class="size-full wp-image-11170 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/03/ninja.jpg" alt="" width="450" height="253" /></a></p>`
   - Psycho Power (todo personagem com o antecedente `newCaracteristica("Psycho Power", N)` em qualquer versão da ficha): `<p align="center"><a href="https://www.sfrpg.com.br/post/psycho-power"><img class="size-full wp-image-10608 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/10/psycho-power.jpg" alt="" width="450" height="253" /></a></p>`
   - Satsui no Hadou (todo personagem com o antecedente `newCaracteristica("Satsui no Hadou", N)` ou `newCaracteristica("Sangue de Orochi", N)` em qualquer versão da ficha; também entra na lista correspondente do post `satsui-no-hadou`: "Personagens e o Satsui no Hadou" ou "Sangue de Orochi"): `<p align="center"><a href="https://www.sfrpg.com.br/post/satsui-no-hadou"><img class="size-full wp-image-12623 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/satsui-no-hadou-banner.jpg" alt="" width="450" height="253" /></a></p>`
   - Cibernéticos (todo personagem com o antecedente `newCaracteristica("Cibernético", N)` em qualquer versão da ficha, inclusive trajes e robôs com gadgets, como Crimson Viper, Captain Commando e Hoover; também entra na lista do post `cibernetico`): `<p align="center"><a title="Cibernéticos" href="/post/cibernetico"><img src="/img/2010/3/Ciberneticos-Logo.jpg" alt="Cibernéticos" border="0" /></a></p>`. No post, explique quais implantes, gadgets ou equipamentos foram adaptados com o antecedente único Cibernético (modelo: `c-viper`)
   - Elemental (todo personagem com o antecedente `newCaracteristica("Elemental (<tipo>)", N)` em qualquer versão da ficha, inclusive sub-elementais como Gelo, Eletricidade, Trevas, Magma e Sangue; também entra na lista "Exemplos de Elementais" do post `elemental`): `<p align="center"><a title="Elementais" href="https://www.sfrpg.com.br/post/elemental"><img class="aligncenter" src="/img/2010/3/elementais-logo.jpg" alt="Elementais" /></a></p>`
   - Elenco de Apoio (todo personagem que é Elenco de Apoio: entra na "Lista de NPCs Diversos" do post `elenco-de-apoio`, na seção da franquia e em ordem alfabética, leva a tag `elenco de apoio` (`term_taxonomy_id` 314), e a ficha pode ter `Posto: 0`): `<p align="center"><a href="https://www.sfrpg.com.br/post/elenco-de-apoio"><img class="size-full wp-image-7594 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2025/04/Elenco-de-Apoio-1.jpg" alt="" width="450" height="205" /></a></p>`
   - Banner da franquia e banners de times, clãs e grupos (KoF, Tekken, Kung Fu Do...): estão no `REGRAS.md` da pasta, com as tags que os acompanham.
   - Forças Especiais (estilo com "Forças Especiais", inclusive combinado): `<a href="https://www.sfrpg.com.br/post/forcas-especiais"><img class="size-full wp-image-8039 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2024/04/forcas-especiais-banner.jpg" alt="" width="1200" height="675" /></a>`

## Banco (WordPress)

```sh
source .claude/skills/personagem-sfrpg/scripts/wp.sh
wp_db_open
...
wp_db_close   # sempre; o my.cnf contém a senha
```

- **Nunca** imprima credenciais nem leia `v2/wp-config.php`.
- O shell é **zsh**: variável sem aspas não se divide em palavras (`for t in $tags` roda uma vez só) e arrays associativos travam a checagem de segurança do `wp_db_close`. Gere SQL com Python (arquivo `.sql` + `wp_sql < arquivo`) quando houver listas, e use `while read` com heredoc para laços.
- Grave o texto como hex (`CONVERT(0x... USING utf8mb4)`) para não quebrar acentos. Em `REPLACE` com literais, use `COLLATE utf8mb4_unicode_ci` (senão dá "Illegal mix of collations").
- Novo post: `post_status='draft'`, `post_type='post'`, `post_author=1`, `post_date` no horário de São Paulo, `post_date_gmt='0000-00-00 00:00:00'`, depois `guid = CONCAT('https://www.sfrpg.com.br/?p=', ID)`. Metas: `_edit_last=1` e `_thumbnail_id=<anexo do banner>` (se o banner não for GIF animado).
- **Categoria:** "Personagens" (`term_taxonomy_id` 20).
- **Tags (post_tag) obrigatórias em todo post de personagem:**
  - `personagem`;
  - o **país** do campo "País", em minúsculas e sem acento (`japao`, `eua`, `coreia do sul`, `oriente medio`, `hong kong`...). Todo post deve ter a linha `<strong>País:</strong> X`; em posts antigos sem o campo, deduza o país pela história (ou por informação canônica óbvia) e insira a linha antes do primeiro parágrafo da história. Se não for possível presumir, não crie nem o campo nem a tag;
  - **cada estilo** do campo `Estilo` da ficha, em todas as versões, separando os combinados (`"Forças Especiais (Bojutsu)"` → `forcas especiais` e `bojutsu`), em minúsculas e sem acento, usando o nome que já existe como tag (ex.: Kickboxing → `kickboxe`, Ninjutsu → `ninjitsu`, Muay Thai → `thai kickboxe`);
  - `cibernetico` (`term_taxonomy_id` 50) se tem o antecedente Cibernético em qualquer versão da ficha (inclusive personagens sem ficha .js cuja planilha no post traz o antecedente);
  - `elemental` se tem o antecedente Elemental (qualquer tipo ou sub-elemento) em qualquer versão da ficha;
  - `paranormal` (`term_taxonomy_id` 169) se tem o antecedente Paranormal em qualquer versão da ficha (inclusive personagens sem ficha .js cuja planilha no post traz o antecedente);
  - `duelista` se tem `Divisao: "Duelistas"` em qualquer versão da ficha;
  - `satsui no hadou` (`term_taxonomy_id` 187) se tem o antecedente Satsui no Hadou, Devil Gene ou Sangue de Orochi em qualquer versão da ficha (quem leva a tag também leva o banner `satsui-no-hadou-banner.jpg`, anexo 12623, linkando para o post) (inclusive personagens sem ficha .js cuja planilha no post traz o antecedente).
  - tags próprias da franquia, conforme o `REGRAS.md` (ex.: `kof rpg`, `Art of Fighting`, times e clãs).
  Não copie as tags de outro post sem conferir. Para criar uma tag nova: `wp_terms` (name, slug com hífens) + `wp_term_taxonomy` (taxonomy `post_tag`). Ao ligar ou desligar tags, recalcule o `count` das tags afetadas contando só os posts publicados.
- **Editar post existente:** use `wp_post_get` para guardar o original (é seu backup) e gere o novo arquivo em Python com `open(..., newline="")`. **Posts antigos usam CRLF**: ler e escrever sem `newline=""` converte todas as quebras e o diff vira o post inteiro. Depois use `wp_post_put ID original novo`, que aborta se alguém editou no wp-admin e confere o resultado byte a byte. Sempre mostre o `diff` antes de gravar.
- Inserção de banner no fim de posts heterogêneos: depois da última linha com `<img` (absorvendo linhas que só fecham `</a></p></div>`) e antes de link de YouTube ou nota de créditos. Se a última imagem estiver antes do texto de fontes (ex.: Eagle), coloque no fim.
- Posts publicados também podem ser alterados quando o usuário pedir, mas mostre o diff e preserve o resto do conteúdo.
- **Cache:** o site usa WP Super Cache, e gravar direto no banco não o invalida. Depois de alterar um post publicado, rode `wp_cache_purge <slug> ...` e confira a URL **sem** parâmetros (`?x=` contorna o cache e esconde o problema). Antes de remover arquivos usados por posts, limpe o cache desses posts.

## Listas cruzadas (posts publicados)

Ao criar ou alterar personagem, mantenha atualizadas as listas no fim destes posts:

| Post | Lista | Quem entra |
|---|---|---|
| `lutando-com-espadas` | Lutadores que usam Espada | quem usa espada ou tem Kenjutsu |
| `lutando-com-bastoes` | Personagens que lutam com Bastão | quem usa bastão/tonfa ou tem Bojutsu |
| `duelistas` | Duelistas Famosos (agrupado por franquia: Street Fighter, Final Fight, KoF/AoF, Mortal Kombat, outras franquias, personagens do RPG) | quem **porta** na planilha uma arma branca (qualquer arma de `armas` que não seja de técnica Armas de Fogo, Arco ou Besta; granada, molotov e rede não contam). Ter só a técnica não basta: "Nome (armas)". Todos recebem o banner de Duelistas e a ficha deve ter `Divisao: "Duelistas"` (no plural) nas versões em que porta a arma |
| `armas-brancas-de-combate-a-distancia` | frase de arcos e bestas + "Duelistas Notáveis" (arremesso): tabelas de bustos, uma por franquia (`<h4>Capcom</h4>`, `SNK`, `Mortal Kombat`, `SF RPG`; franquia nova ganha a sua), 6 por linha, com linha amarela do nome, linha do busto (`<nome>-face.jpg`; sem busto, recorte conforme a skill `imagem-sfrpg`) e uma 3ª linha com a arma em texto ("Kunai", "Leque de Aço"), no lugar de estilo e bandeira | **sempre** que um personagem usar arma branca de combate à distância (na planilha ou citada no post): quem porta arco/besta (`Tecnica` Arco ou Besta) e quem porta arma de arremesso (shuriken, kunai, faca arremessada, arpão, bumerangue, leque, rede...; sem granada/molotov). Decisões do usuário: Lita fica em `Capcom`; Tick e Tock, Homens-Rã e Hockey Gangs ficam em `SF RPG`. Em caso de dúvida sobre a franquia, pergunte |
| `armas-de-fogo` | Lutadores que usam Armas de Fogo | quem **porta** na planilha (`Armas`) uma arma de técnica "Armas de Fogo" (Pistola, Pistola Pesada, Pistola de Choque, Submetralhadora, Escopeta, Fuzil, Fuzil de Assalto, Bazuca). Ter só a técnica não basta: "Nome (armas, franquia)" |
| `lutando-com-facas` | Lutadores que usam Facas e Garras | quem tem arma de técnica Faca ou Garra (Faca, Garra, Katar, Kunai, Sai, Machadinha, Wind Blade, Navalha, Kama, Kris...) ou a técnica Faca/Garra na ficha: "Nome (arma, franquia)" |
| `mascote` | Lista de Mascotes | quem tem antecedente Mascote: "Animal (Dono)". Todos também recebem o banner de Mascote |
| `forcas-especiais` | Membros famosos | estilo Forças Especiais, com unidade/país entre parênteses (pesquise se o post não disser). Todos também recebem o banner |
| `arena` | Locais de Conflito: "No Ringue" (arenas de luta) e "Fora do Ringue" (dojôs, academias, templos, octógonos de academia) | quem tem antecedente Arena: "Nome da arena (<a>Personagem</a>)". Se a arena já estiver listada com outro personagem, acrescente o nome no mesmo item. Todos também recebem o banner de Arena |
| listas próprias da franquia (tabelas de bustos por jogo, posts de times...) | ver `REGRAS.md` | — |
| `elemental` | "Exemplos de Elementais" (`<ul>` entre esse título e "Criando um Elemental") | quem tem o antecedente Elemental em qualquer versão da ficha: `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (Franquia, elemento)</li>`, com o elemento em minúsculas (ex.: "(Fatal Fury, fogo)", "(MK, gelo)"; sem franquia para Street Fighter e personagens do RPG). Todos também recebem o banner de Elemental. Ache-os com `grep -rln 'newCaracteristica("Elemental' v2` |
| `psycho-power` | "Personagens que possuem Psycho Power, em variados graus de controle" | quem tem o antecedente Psycho Power em qualquer versão da ficha: `<li><a href="/post/<slug>">Nome</a></li>` (personagens de fã com "(não-oficial)", como Raj). Todos também recebem o banner de Psycho Power. Ache-os com `grep -rln 'newCaracteristica("Psycho Power' v2` |
| `cibernetico` | lista de personagens cibernéticos (o primeiro `<ul>` do post, agrupado por franquia, antes de Killer Instinct e Tekken) | quem tem o antecedente Cibernético em qualquer versão da ficha: `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (Franquia)</li>`, com "(através do seu traje/robô)" quando o Cibernético representa equipamento. Todos também recebem o banner de Cibernéticos. Ache-os com `grep -rln 'newCaracteristica("Cibernético' v2` |
| `equipes` | "Veja alguns exemplos de Equipes" (`<ul>` no fim do post) | **todo post com a tag `equipe`** (organizações, empresas e agências que funcionam como Equipe no RPG): `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (Franquia)</li>`, agrupando os da mesma franquia em sequência (ex.: Hakkesshu e NESTS (KOF); Mishima Zaibatsu e Tekken Force (Tekken)). O post da equipe leva a tag `equipe` e o banner `equipe.jpg` (anexo 10101) |
| post de cada equipe com tag própria (ex.: `mishima-zaibatsu`, `tekken-force`, `nests`) | — | todo personagem que faz ou fez parte da equipe recebe a tag da equipe (`mishima zaibatsu`, `tekken force`...) e o banner dela, logo abaixo do banner da franquia (anexos e prioridades no `REGRAS.md`). Ninguém recebe a tag ou o banner de duas equipes: quem pertence a mais de uma fica só com a prioritária. A ficha do personagem também leva `Equipe: "<nome da equipe>"`, com a mesma prioridade |

Ao criar personagem de uma franquia com tabela de bustos (Street Fighter, EX, Art of Fighting, Fatal Fury, Captain Commando, Kung Fu Do Fighting, Mortal Kombat), recorte o busto e inclua-o na tabela, conforme a skill `imagem-sfrpg`.

Listas de personagens em posts de franquia/história ficam **no final do post**, depois dos banners. Nos textos desses posts, coloque link no nome de cada personagem que tenha post, na primeira vez que ele aparece (personagens sem post, como Jeff Bogard ou Freia, ficam sem link).

Formato do item: `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (<a href=".../post/<franquia>">Franquia</a>)</li>`. Nas listas de Facas, Bastões e Espadas entram **só personagens com nome** (nada de NPCs genéricos como Capangas, Matadores, Tarkatans). **Todo lutador citado nessas listas precisa de link para o próprio post** (confira o slug; ex.: Mike de SF1 é `mike-sf`, Mike Haggar é `haggar`, Juni e Juli dividem `juni-e-juli`). Só fica sem link quem não tem post. Linke a franquia só na primeira vez; nas seguintes use a sigla ("(AoF)", "(MK)"). Avise que links para posts em rascunho dão erro até serem publicados.

Para achar quem usa um tipo de arma, não basta `grep` (o nome da técnica "Faca" é igual ao da arma, e há arquivos com vários personagens): carregue `manobras.js` e cada ficha em Node (`vm.runInNewContext`), chame cada função da ficha e filtre `Armas` pela `Tecnica` do objeto `armas` e `NovasTecnicas` pelo nome da técnica.

Para achar personagens por estilo: `grep -rn 'Estilo: "[^"]*Bojutsu' v2`. Por antecedente: `grep -rln 'newCaracteristica("Arena"' v2`. Personagens sem ficha (ex.: Yoshimitsu) têm a planilha escrita no próprio post.

**Ficha → post:** não presuma que o slug do post é o nome do arquivo. Há páginas de desambiguação (`alex`, `angel`, `mike`, `drake`, `kim`, `laura`, `seth`, `yuri`, `raiden`, `goro`, `may`, `kuma`, `zero`, `hanzo`, `randi`, `akira`, `xiang`, `dana`, `samson`, `phoenix`, `lady`, `drago`...) e homônimos (`may-ff` é a May de Final Fight; `kuma-tekken` é o urso de Tekken; `akira-sf` é a Akira Kazama; `xiang-wei` é o Xiang Wei; `zero-kof`; `kai` é outro personagem; o de MK é `kai-mk`; o Goro de MK é `goro-mk` e o de KoF, `goro-daimon`; `lee` é o de SF1; `joe-sf`, `mike-sf`, `alex-sf` (o de Tekken é `alex-tekken`), `angel-kof` (a de Tekken é `angel-tekken`), `drake-ff`, `laura-matsuda`; o Seth de SF é `seth-sf` e o de KoF, `seth-kof`). Outros slugs por franquia estão no `REGRAS.md`. Confirme procurando o post que contém o link da planilha: `post_content LIKE '%_character.php?name=<pasta>/<arquivo>&%'`. Alguns posts antigos ainda usam o caminho sem a pasta (`name=damnd` em vez de `name=ff/damnd`).

**Posts de desambiguação:** quando um nome é compartilhado por mais de um personagem (ou manobra), o post com o slug do nome curto (ex.: `joe`, `kim`, `seth`) vira desambiguação e os personagens ficam em slugs com sufixo (`joe-sf`, `seth-kof`...). O **título** leva sempre o sufixo ` - Desambiguação` (ex.: `Seth - Desambiguação`), mas o **slug não muda** (`seth`, nunca `seth-desambiguacao`). Conteúdo no modelo dos existentes (`seth`, `goro`, `chris`):
```html
<strong>Post de desambiguação.</strong>

Você está procurando:
<ul>
 	<li><a href="https://www.sfrpg.com.br/post/<slug>"><strong>Nome</strong></a>: descrição curta, com franquia;</li>
</ul>
```
Sem banners, imagem nem tags de personagem. Ao criar um personagem homônimo de outro que já tem post, crie (ou atualize) a desambiguação e avise que links antigos para o slug curto passam a cair nela. Para listar as existentes: `post_content LIKE '%Post de desambigua%'`.

**Inserir seção em posts antigos:** coloque-a antes da nota de fontes (que pode estar em `<em>`, `<i>` ou `<strong>`) e antes do bloco final de imagens e banners, nunca dentro de um `<p>` aberto. Se a última imagem do post for só o link da planilha no topo, coloque o banner no fim do post. Depois confira que todas as linhas originais continuam lá, na mesma ordem.

## Alterações em manobras.js / scripts.js

Confira antes se o arquivo em produção é igual ao `HEAD` (`git show HEAD:./scripts.js | cmp - <(curl -s https://www.sfrpg.com.br/tools/scripts.js)`), preserve o BOM, rode `node --check`, atualize o `?date=AAAAMMDDhhmm` em `v2/_framework.html` e `gerador.html` e envie os três arquivos.

## Commit

Só quando o usuário pedir. Mensagem curta em português (ex.: "fichas de Art of Fighting 2 e 3").
