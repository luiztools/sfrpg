---
name: personagem-sfrpg
description: Cria ou atualiza a ficha (.js em v2/) e o post do blog sfrpg.com.br de um personagem, incluindo imagens, seções de arma/mascote/arena/sensei, banners, listas cruzadas e publicação por FTP e direto no banco do WordPress. Use quando o usuário pedir para criar personagem, ficha, post de personagem, adaptar personagem de um PDF/suplemento, ou ajustar estilo, arma, mascote ou banners de personagens.
---

# Ficha e post de personagem (SF RPG Brasil)

Tudo em português (exceto nomes de manobras). Leia o CLAUDE.md do projeto antes: formato das fichas, encoding com BOM, cache-buster e a proibição de ler `v2/wp-config.php`.

Scripts de apoio nesta pasta (`scripts/`):
- `wp.sh`: banco (credenciais temporárias, GET/PUT de post com checagem de concorrência) e FTP.
- `img.py`: conversão da imagem principal e de banners.
- `wp_meta.py`: gera o `_wp_attachment_metadata` serializado.

## Fluxo

1. **Confirmar a origem com o usuário.** Os personagens vêm de fontes diferentes (suplementos da Shotokan RPG, livros da White Wolf, PDFs de fãs, criações próprias), então não presuma que é o mesmo PDF de antes. Se o pedido não disser de onde vem o personagem (arquivo, páginas e autoria), **pergunte antes de começar**. A origem define o conteúdo da ficha, a franquia/pasta em `v2/` e o crédito do post. Depois, leia a fonte. Para PDF, se não houver `pdftoppm` na máquina, crie um venv e use `pymupdf` (`fitz`) para extrair texto e renderizar páginas.
2. **Criar a ficha** `v2/<franquia>/<slug>.js`. Ver "Ficha" abaixo.
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
- Grafias de estilo que geram link válido: `Karatê Rindoukan` (post `karate-rindoukan`), `Kenjutsu`, `Bojutsu`, `Ninjitsu`, `Forças Especiais`, `Baraqah`, `Ler Drit`, `Kickboxe`. Para confirmar, procure o slug no banco (`SELECT post_name FROM wp_posts WHERE post_name='...'`).
- **Personagem armado** (modelo: `v2/ff/carlos.js`, `v2/vega.js`, `v2/eagle.js`):
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
  Armas comuns em `manobras.js`: Katana (+1/+3/+0), Bokken (+1/+3/+0), Cimitarra (+0/+3/+0), Tonfa (+1/+1/+1), Garra (+1/+1/+0), Chicote (-1/+2/+0, alcance 6), Pistola (+2/+3/-), Pistola Pesada (+2/+4/-).
  A técnica de arma de fogo nas fichas se chama **"Armas de Fogo"** (é o nome que o cálculo reconhece), embora o post Armas de Fogo fale em técnica "Pistola".
- Antecedente Mascote: `antecedentes[i] = newCaracteristica("Mascote", 1);`.
- **Divisão e Posto não definidos na fonte:** use `Posto: 8` e `Divisao: "Livre"`; se o personagem porta arma branca, `Divisao: "Duelistas"`. Exceções decididas pelo usuário: Fei Long fica em "Tradicional", Ryuhaku e Kasumi Todoh em "Livre" (e o post diz que não usam armas contra oponentes desarmados).
- **Habilidades zeradas na fonte:** preencha com base na história, sem passar de 5 numa mesma habilidade e de 20 pontos em Talentos (Prontidão, Interrogação, Intimidação, Perspicácia, Manha, Lábia), 18 em Perícias (Luta às Cegas, Condução, Liderança, Segurança, Furtividade, Sobrevivência) e 15 em Conhecimentos (Arena, Computador, Investigação, Medicina, Mistérios, Estilos).
- **Arma de uma mão só** (garra, cimitarra...): o lutador continua podendo socar com a outra mão; a cada ataque escolhe usar a arma (Manobras Básicas com Armas) ou um soco normal. Não escreva que a arma "substitui" os socos.
- Manobra citada que não existe em `manobras.js` vale 1 PC e não aparece na tabela. Liste-as como dúvida.
- Fichas com versões (`age`): uma função por versão e `if (getParameterByName('age') === 'aof') ...`. Ex.: `v2/kof/robert-garcia.js`, `v2/kof/mr-big.js`.

## Pesquisa

- **Cronologia SNK (AoF/KoF):** a oficial do site é a de **Art of Fighting (1979)**. Formato: `<strong>Nascimento:</strong> 02/08/1957 (22 anos em AoF)`. Para personagens de AoF2/AoF3 use "(N anos em AoF2)" e "(N anos em AoF3)" com o mesmo ano-base 1979 (ex.: Kasumi 29/03/1963, 16 anos em AoF3). Sem idade conhecida: `dd/mm (ano desconhecido)`. O peso também segue a era AoF quando as fontes divergem.
- **Fontes:** a wiki da SNK no Fandom, breezewiki, dreamcancel, pixiv e nicovideo bloqueiam o WebFetch (403/Anubis). O que funciona:
  - `https://days366.com/title/21_02_26.html`: tabela de aniversário, tipo sanguíneo, altura e peso de toda a série Ryuuko no Ken (AoF).
  - WebSearch em **japonês** com o nome em katakana/kanji (ex.: `ロディ・バーツ 国籍 出身 プロフィール`): o resumo da busca traz o perfil da Pixiv Encyclopedia e do Nico Nico Pedia.
  - Se o usuário tiver o Claude in Chrome conectado (https://claude.ai/chrome), use-o para as páginas bloqueadas.
- O que não for encontrado fica com `?` (ou "Desconhecido" se o usuário confirmar) e entra na lista de dúvidas.
- Se as fontes oficiais contradisserem o texto do suplemento adaptado (profissão, afiliação), aponte a diferença ao usuário. Quando ele pedir para seguir o cânone, reescreva o texto e acrescente, logo abaixo da linha de Referência/créditos: `<em><strong>Observação:</strong> o texto deste personagem foi ajustado para seguir o cânone dos jogos ...</em>` (já feito para Wang, Karman e Rody).
- País que não dá para presumir: use `<strong>País:</strong> Desconhecido` (sem tag). Posts de grupos, NPCs genéricos e mascotes não recebem o campo.

## Imagens

- O usuário costuma mandar URLs. As da Fandom (`static.wikia.nocookie.net`) dão 403 (Cloudflare): **não contorne**. Peça para ele salvar em `~/Downloads` e use o arquivo local. Pinterest, ytimg, gstatic, redd.it e twimg baixam normalmente com `curl`.
- Coloque cada download numa pasta nova e vazia do scratchpad e rode o Python com `-I`.
- **Imagem principal:** `img.py main` gera `<slug>.webp`, uma versão média que cabe em 300x300 e a de 150x150. No post, use `width="300"`, ou a largura real se a imagem tiver menos de 300px (para não esticar).
- **Banner do personagem** (fica no fim do post e também é a imagem destacada / `_thumbnail_id`): `img.py banner` corta o letterbox (comum em `sddefault.jpg` do YouTube, 640x480) e limita imagens 4K a 1920.
  - 16:9 grande (1280x720): use a versão 1024x576 com `class="size-large ..." width="474" height="267"`.
  - Pequeno ou quadrado: `size-full` com as dimensões reais (quadrado 1024: exibir em 474x474).
  - GIF animado: mantenha o `.gif` original como arquivo principal.
  - Vários personagens podem reutilizar o mesmo anexo de banner (ex.: pai e filha).
- Sem banner próprio: use o genérico da franquia (AoF: `wp-image-6229`, `.../2025/01/art-of-fighting-1024x576.jpg`, 474x267).
- Envie por FTP para `public/wp-content/uploads/AAAA/MM/` (`wp_upload_imgs`) e confira HTTP 200.
- **Anexo no banco:** um `wp_posts` com `post_type='attachment'`, `post_status='inherit'`, `post_parent=<ID do post>`, `guid=<URL do arquivo>`, `post_mime_type`. Mais `wp_postmeta` com `_wp_attached_file` = `AAAA/MM/arquivo` e `_wp_attachment_metadata` = saída de `wp_meta.py` (valide com `php -r 'unserialize(...)'`). Depois adicione `wp-image-<ID>` na classe do `<img>`.
- **Trocar uma imagem que já tem anexo:** sobrescreva os arquivos com o mesmo nome e atualize apenas o `_wp_attachment_metadata` do anexo existente.

## Estrutura do post

Copie o post de referência da franquia (AoF/KoF: `ryo-sakazaki`; Sensei: `gouken`; arma: `carlos`, `vega`, `eagle`). Ordem:

1. `<p style="float: left; margin: 10px;"><img class="alignnone size-full wp-image-ID" src=".../<slug>.webp" alt="" width="300" /></p>`
2. Link da planilha: `<a title="Planilha em AoF" href="https://sfrpg.com.br/tools/v2/_character.php?name=kof/<slug>&amp;age=aof" target="_blank" rel="noopener"><img src="/img/planilha-aof.jpg" alt="" /></a>` (uma linha por versão/era).
3. `<strong>Altura:</strong>`, `Peso`, `País`, `Nascimento` (uma linha cada).
4. História (com links `/post/<slug>` para personagens, estilos e lugares), `<strong>X em <Jogo>:</strong> ...`, `<strong>Aparência:</strong>`, `<strong>Interpretando X:</strong>`.
5. Seções `<h3>` conforme o caso:
   - **Arma**: título com o nome da arma ("Katana de Eiji", "Cimitarra de Sinclair", "Chicote de Lenny", "Garra de Lee", "Pistola de Karman"). **Se o lutador tiver mais de uma arma, crie uma única seção "Armas de X"** e explique todas dentro dela (ex.: "Armas de Kasumi" com bokken e yumi; "Armas de Rody" com tonfa e pistola pesada). Arcos, bestas e armas de arremesso usam o post `armas-brancas-de-combate-a-distancia` (lembre que arcos e bestas não são permitidos em torneios, nem entre Duelistas). Texto e estatísticas copiados do post de regras: espadas em `lutando-com-espadas`, bastões/tonfas em `lutando-com-bastoes`, chicotes/garras/facas em `armas-brancas`, armas de fogo em `armas-de-fogo`. Inclua quais manobras usam a arma, uma linha `<strong>Arma:</strong> Técnica Básica: X. Velocidade +N, Dano +N, Movimento +N. Tipo de Dano: ... Empunhadura: ...`, a imagem da arma usada no post de regras e o link para esse post.
   - **Mascote** ("Mascote de X"): o animal e o nível do antecedente (nível 1 = mascote caseiro, manso e bem treinado; proibido em torneios; é um NPC do Narrador).
   - **Arena** ("Arena de X"): **obrigatória para todo personagem com o antecedente Arena** (`newCaracteristica("Arena", N)`). Diz onde fica a arena e como ela é (2 ou 3 frases). De onde tirar a informação, nesta ordem:
     1. A lista "Locais de Conflito" do post `arena` (nomes oficiais dos livros, ex.: "Casa de Banhos Edo (E. Honda)", "Templo Toji (Retsu)", "Cemitério de Trens em Chicago (Joe)"). Use esse nome.
     2. O próprio texto do personagem (bar, dojô, navio, favela...).
     3. O cenário do personagem nos jogos (pesquise na internet).
     4. **Personagens de MMA**: o octógono da sua academia, a menos que o texto diga outra coisa.
     5. Se nada disso definir a arena, pergunte ao usuário (junte as dúvidas no fim).
     As arenas que ainda aguardam imagem estão numeradas em `arenas-pendentes.txt` (nesta pasta), com o passo a passo para colocar cada imagem; o usuário responde com "número + imagem". Atualize esse arquivo ao concluir cada uma e ao criar personagens novos com Arena.
     Depois de escrever, passe ao usuário uma lista "Personagem: Nome da arena" para ele enviar as imagens, que entram logo abaixo do texto da seção (sem repetir uma imagem que o post já mostra ali). Não há ferramenta de geração de imagens nesta sessão: não prometa gerar ilustrações; use só imagens que o usuário fornecer ou indicar. Se o usuário não tiver imagem, escreva um prompt em inglês para ele gerar a imagem em estilo anime (modelo em `~/Downloads/prompts-arenas-sfrpg.md`: cenário + "anime background art, cel-shaded, vibrant colors, 90s fighting game anime look, wide 16:9, empty open area in the foreground for a fight, no people, no text, no logos") com o nome de arquivo `<slug>-arena.jpg`. Quando ele mandar a imagem, suba como anexo do post e coloque logo abaixo do texto da seção.
   - **Sensei** ("X como Sensei", modelo `gouken`, com `<img class="aligncenter" src="/img/2010/3/Sensei-logo.jpg" alt="Sensei" />`). O nível de Sensei vem da ficha.
   - Na primeira menção a um estilo do jogo original, acrescente o estilo adaptado: "Karatê Kyokugen-ryu (adaptado como <a>Karatê Rindoukan</a>)".
6. Crédito em itálico, **sempre de acordo com a origem informada pelo usuário** (suplemento, autores). Exemplos já usados:
   - personagens de `v2/kof/` (suplemento King of Fighters da Shotokan RPG): `<em><strong>Referência:</strong> personagem extraído da adaptação "The King of Fighters" da Shotokan RPG. Todos os direitos são dos autores da adaptação.</em>`
   - MK: `<em>Adaptação extraída e modificada a partir do ebook Mortal Kombat da Shotokan RPG, créditos aos seus autores.</em>`
   - criações do site: `<em><strong>* Fontes:</strong> ...</em>`, citando quem criou e em que se baseou.
   Se não souber a quem dar o crédito, pergunte; não invente.
7. Banner do personagem.
8. Banners de categoria, conforme o caso:
   - Mascote: `<p align="center"><a href="https://www.sfrpg.com.br/post/mascote"><img class="size-full wp-image-10061 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/09/mascotes.jpg" alt="" width="450" height="253" /></a></p>`
   - Duelistas (todo personagem que **porta** arma branca na planilha): `<p align="center"><a href="https://www.sfrpg.com.br/post/duelistas"><img class="size-full wp-image-11154 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2025/10/duelista.jpg" alt="" width="450" height="253" /></a></p>`
   - Arena (todo personagem com antecedente Arena, mesmo que a seção ainda não exista): `<p align="center"><a href="https://www.sfrpg.com.br/post/arena"><img class="size-full wp-image-11127 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/arena-banner.jpg" alt="" width="450" height="253" /></a></p>`
   - Forças Especiais (estilo com "Forças Especiais", inclusive combinado): `<a href="https://www.sfrpg.com.br/post/forcas-especiais"><img class="size-full wp-image-8039 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2024/04/forcas-especiais-banner.jpg" alt="" width="1200" height="675" /></a>`
   - Franquia: AoF `wp-image-10505` (`/post/art-of-fighting`), KoF `wp-image-10461` (`/post/the-king-of-fighters-rpg`). Copie a marcação exata de um post existente. **Nem todo personagem da pasta `v2/kof/` esteve em jogos KoF**: quem só apareceu em Art of Fighting (Jack Turner, Lee Pai Long, Mickey Rogers, John Crawley, Ryuhaku Todoh, Temjin, Wang Koh San, Rody Birts, Karman Cole, Jin Fuha, Lenny Creston, Sinclair, Tom Wyler) leva só o banner de AoF, **sem** o banner de KoF, e precisa estar na lista "Lutadores de Art of Fighting" (no fim do post `art-of-fighting`, agrupada por jogo). Personagens de AoF que também estão em KoF (Ryo, Robert, Yuri, Takuma, King, Kasumi, Eiji, Mr. Big, Geese) levam os dois banners.

## Banco (WordPress)

```sh
source .claude/skills/personagem-sfrpg/scripts/wp.sh
wp_db_open
...
wp_db_close   # sempre; o my.cnf contém a senha
```

- **Nunca** imprima credenciais nem leia `v2/wp-config.php`.
- Grave o texto como hex (`CONVERT(0x... USING utf8mb4)`) para não quebrar acentos. Em `REPLACE` com literais, use `COLLATE utf8mb4_unicode_ci` (senão dá "Illegal mix of collations").
- Novo post: `post_status='draft'`, `post_type='post'`, `post_author=1`, `post_date` no horário de São Paulo, `post_date_gmt='0000-00-00 00:00:00'`, depois `guid = CONCAT('https://www.sfrpg.com.br/?p=', ID)`. Metas: `_edit_last=1` e `_thumbnail_id=<anexo do banner>`.
- **Categoria:** "Personagens" (`term_taxonomy_id` 20).
- **Tags (post_tag) obrigatórias em todo post de personagem:**
  - `personagem`;
  - o **país** do campo "País", em minúsculas e sem acento (`japao`, `eua`, `coreia do sul`, `oriente medio`, `hong kong`...). Todo post deve ter a linha `<strong>País:</strong> X`; em posts antigos sem o campo, deduza o país pela história (ou por informação canônica óbvia) e insira a linha antes do primeiro parágrafo da história. Se não for possível presumir, não crie nem o campo nem a tag;
  - **cada estilo** do campo `Estilo` da ficha, em todas as versões, separando os combinados (`"Forças Especiais (Bojutsu)"` → `forcas especiais` e `bojutsu`), em minúsculas e sem acento, usando o nome que já existe como tag (ex.: Kickboxing → `kickboxe`, Ninjutsu → `ninjitsu`, Muay Thai → `thai kickboxe`);
  - `kof rpg` se o personagem lutou em algum jogo The King of Fighters;
  - `Art of Fighting` se lutou em algum jogo Art of Fighting.
  Não copie as tags de outro post sem conferir (personagens só de AoF **não** levam `kof rpg`). Para criar uma tag nova: `wp_terms` (name, slug com hífens) + `wp_term_taxonomy` (taxonomy `post_tag`). Ao ligar ou desligar tags, recalcule o `count` das tags afetadas contando só os posts publicados.
- **Editar post existente:** use `wp_post_get` para guardar o original (é seu backup) e gere o novo arquivo em Python com `open(..., newline="")`. **Posts antigos usam CRLF**: ler e escrever sem `newline=""` converte todas as quebras e o diff vira o post inteiro. Depois use `wp_post_put ID original novo`, que aborta se alguém editou no wp-admin e confere o resultado byte a byte. Sempre mostre o `diff` antes de gravar.
- Inserção de banner no fim de posts heterogêneos: depois da última linha com `<img` (absorvendo linhas que só fecham `</a></p></div>`) e antes de link de YouTube ou nota de créditos. Se a última imagem estiver antes do texto de fontes (ex.: Eagle), coloque no fim.
- Posts publicados também podem ser alterados quando o usuário pedir, mas mostre o diff e preserve o resto do conteúdo.

## Listas cruzadas (posts publicados)

Ao criar ou alterar personagem, mantenha atualizadas as listas no fim destes posts:

| Post | Lista | Quem entra |
|---|---|---|
| `lutando-com-espadas` | Lutadores que usam Espada | quem usa espada ou tem Kenjutsu |
| `lutando-com-bastoes` | Personagens que lutam com Bastão | quem usa bastão/tonfa ou tem Bojutsu |
| `duelistas` | Duelistas Famosos (agrupado por franquia: Street Fighter, Final Fight, KoF/AoF, Mortal Kombat, outras franquias, personagens do RPG) | quem **porta** na planilha uma arma branca (qualquer arma de `armas` que não seja de técnica Armas de Fogo, Arco ou Besta; granada, molotov e rede não contam). Ter só a técnica não basta: "Nome (armas)". Todos recebem o banner de Duelistas e a ficha deve ter `Divisao: "Duelistas"` (no plural) nas versões em que porta a arma |
| `armas-brancas-de-combate-a-distancia` | frase de arcos e bestas + "Duelistas Notáveis" (arremesso) | quem porta arco/besta (`Tecnica` Arco ou Besta) e quem porta arma de arremesso (shuriken, kunai, faca arremessada, arpão, bumerangue, leque, rede...; sem granada/molotov) |
| `armas-de-fogo` | Lutadores que usam Armas de Fogo | quem **porta** na planilha (`Armas`) uma arma de técnica "Armas de Fogo" (Pistola, Pistola Pesada, Pistola de Choque, Submetralhadora, Escopeta, Fuzil, Fuzil de Assalto, Bazuca). Ter só a técnica não basta: "Nome (armas, franquia)" |
| `lutando-com-facas` | Lutadores que usam Facas e Garras | quem tem arma de técnica Faca ou Garra (Faca, Garra, Katar, Kunai, Sai, Machadinha, Wind Blade, Navalha, Kama, Kris...) ou a técnica Faca/Garra na ficha: "Nome (arma, franquia)" |
| `mascote` | Lista de Mascotes | quem tem antecedente Mascote: "Animal (Dono)". Todos também recebem o banner de Mascote |
| `forcas-especiais` | Membros famosos | estilo Forças Especiais, com unidade/país entre parênteses (pesquise se o post não disser). Todos também recebem o banner |
| `arena` | Locais de Conflito: "No Ringue" (arenas de luta) e "Fora do Ringue" (dojôs, academias, templos, octógonos de academia) | quem tem antecedente Arena: "Nome da arena (<a>Personagem</a>)". Se a arena já estiver listada com outro personagem, acrescente o nome no mesmo item. Todos também recebem o banner de Arena |

Listas de personagens em posts de franquia/história ficam **no final do post**, depois dos banners. Nos textos desses posts, coloque link no nome de cada personagem que tenha post, na primeira vez que ele aparece (personagens sem post, como Jeff Bogard ou Freia, ficam sem link).

Formato do item: `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (<a href=".../post/<franquia>">Franquia</a>)</li>`. Nas listas de Facas, Bastões e Espadas entram **só personagens com nome** (nada de NPCs genéricos como Capangas, Matadores, Tarkatans). **Todo lutador citado nessas listas precisa de link para o próprio post** (confira o slug; ex.: Mike de SF1 é `mike-sf`, Mike Haggar é `haggar`, Juni e Juli dividem `juni-e-juli`). Só fica sem link quem não tem post. Linke a franquia só na primeira vez; nas seguintes use a sigla ("(AoF)", "(MK)"). Avise que links para posts em rascunho dão erro até serem publicados.

Para achar quem usa um tipo de arma, não basta `grep` (o nome da técnica "Faca" é igual ao da arma, e há arquivos com vários personagens): carregue `manobras.js` e cada ficha em Node (`vm.runInNewContext`), chame cada função da ficha e filtre `Armas` pela `Tecnica` do objeto `armas` e `NovasTecnicas` pelo nome da técnica.

Para achar personagens por estilo: `grep -rn 'Estilo: "[^"]*Bojutsu' v2`. Por antecedente: `grep -rln 'newCaracteristica("Arena"' v2`. Personagens sem ficha (ex.: Yoshimitsu) têm a planilha escrita no próprio post.

**Ficha → post:** não presuma que o slug do post é o nome do arquivo. Há páginas de desambiguação (`mike`, `drake`) e homônimos (`kai` é outro personagem; o de MK é `kai-mk`; `lee` é o de SF1, o de Kung Fu Do é `lee-2`; `joe-sf`, `mike-sf`, `drake-ff`). Confirme procurando o post que contém o link da planilha: `post_content LIKE '%_character.php?name=<pasta>/<arquivo>&%'`. Alguns posts antigos ainda usam o caminho sem a pasta (`name=damnd` em vez de `name=ff/damnd`).

**Inserir seção em posts antigos:** coloque-a antes da nota de fontes (que pode estar em `<em>`, `<i>` ou `<strong>`) e antes do bloco final de imagens e banners, nunca dentro de um `<p>` aberto. Se a última imagem do post for só o link da planilha no topo, coloque o banner no fim do post. Depois confira que todas as linhas originais continuam lá, na mesma ordem.

## Alterações em manobras.js / scripts.js

Confira antes se o arquivo em produção é igual ao `HEAD` (`git show HEAD:./scripts.js | cmp - <(curl -s https://www.sfrpg.com.br/tools/scripts.js)`), preserve o BOM, rode `node --check`, atualize o `?date=AAAAMMDDhhmm` em `v2/_framework.html` e `gerador.html` e envie os três arquivos.

## Commit

Só quando o usuário pedir. Mensagem curta em português (ex.: "fichas de Art of Fighting 2 e 3").
