---
name: manobra-sfrpg
description: Cadastra uma Manobra Especial nova no sfrpg.com.br — entrada em manobras.js (com cálculo de PC), post do blog como rascunho, imagem, e atualização das listas da técnica, de Movimentos Comuns e dos posts de estilo, além das fichas que usam a manobra. Use quando o usuário pedir para cadastrar, adicionar, criar ou adaptar uma manobra especial, colar o texto de uma manobra (Pré-requisitos, Pontos de Poder, Sistema, Custo...) ou ajustar listas de manobras dos posts de técnicas e estilos.
---

# Cadastro de Manobra Especial (SF RPG Brasil)

Tudo em português, exceto o nome da manobra, que fica em inglês. Antes de começar, leia o CLAUDE.md do projeto: encoding com BOM, tabs em `manobras.js`, cache-buster e a proibição de ler `v2/wp-config.php`.

Os scripts de banco e FTP são os da skill de personagens (`.claude/skills/personagem-sfrpg/scripts/wp.sh`), e o tratamento de imagens está na skill `imagem-sfrpg`. A seção "Banco (WordPress)" da skill de personagens vale aqui também: nunca imprima credenciais, grave o texto em hex, use `wp_post_get`/`wp_post_put` para editar posts existentes e mostre o `diff` antes de gravar.

## Fluxo

1. **Ler o texto da manobra.** O usuário cola o texto completo (Pré-requisitos, Pontos de Poder, descrição, Sistema, Custo, Velocidade, Dano, Movimento). Se não disser de onde a manobra vem, veja as fichas que já a citam (passo 2); a origem delas costuma indicar a fonte. Pergunte para confirmar e não invente crédito.
2. **Procurar usos e nomes parecidos:**
   ```sh
   grep -n -i '<parte do nome>' manobras.js
   grep -rln -i '<nome da manobra>' v2
   ```
   Fichas que citam uma manobra que ainda não está em `manobras.js` contam 1 PC para ela e não a mostram na tabela de cálculos. Depois do cadastro, elas passam a mostrar.
3. **Entrada em `manobras.js`.** Ver "manobras.js".
4. **Validar o custo em PC, enviar por FTP e atualizar o cache-buster.** Ver "manobras.js".
5. **Imagem.** Ver "Imagem". Antes de subir qualquer arquivo, verifique se a imagem já existe no blog.
6. **Post da manobra como rascunho.** Ver "Post da manobra".
7. **Listas cruzadas** (posts publicados): post da técnica, Movimentos Comuns e posts de estilo. Ver "Listas cruzadas".
8. **Fichas:** se o usuário pedir para colocar a manobra em um personagem, edite todas as versões (`age`) da ficha, valide em Node e envie por FTP (fluxo da skill personagem-sfrpg).
9. **Informar** o link de edição `https://www.sfrpg.com.br/wp-admin/post.php?post=<ID>&action=edit` e juntar todas as dúvidas no fim.

Quando o usuário mandar correções uma por mensagem, aplique cada uma e siga em frente. Se ele editar algo pelo wp-admin no meio do caminho, baixe o post de novo antes de mexer (o `wp_post_put` aborta se o post mudou).

## manobras.js

- O objeto `manobras` é agrupado por técnica, com comentários (`//Esportes`, `//Apresamento`...). Coloque a entrada no bloco da técnica, perto de uma manobra relacionada (ex.: logo depois do pré-requisito).
- **Técnica = a primeira técnica dos Pré-requisitos.** Essa é a categoria da manobra: vira o `Tecnica` da entrada, a tag do post e a lista do post da técnica. Ex.: "Esportes 4, Flying Heel Stomp" → `Tecnica: "Esportes"`.
  - **Cada manobra tem UMA categoria só:** uma única tag de técnica e uma única lista de técnica. Se os pré-requisitos estiverem fora de ordem, reordene no post para que a categoria venha primeiro (ex.: Take Down → "Apresamento 3, Chute 3").
  - Exceção: a categoria pode seguir a manobra pré-requisito.
  - O `Tecnica` em `manobras.js` é a técnica usada no **cálculo do dano**. Normalmente é a mesma da categoria, mas não quando o Sistema diz outra (Take Down: categoria Apresamento, mas "o dano é calculado com Chute" → `Tecnica: "Chute"`).
  - Manobra de Foco exclusiva de Elemental (ex.: Flaming Fist, "Foco 1, Soco 1, Elemental 2") é da categoria Foco e fica no post Elemental, não na lista de Soco.
- Formato (uma linha, tab no início):
  ```js
  	"Multiple Stomp": { Tecnica: "Esportes", ModVel: -1, ModDano: "0/0/0", ModMov: -1, FdV: 1, Sistema: "Aérea; Linha Reta; dano rolado três vezes; esquiva de projétil como Jump; oponente em manobra de agachamento ainda é atingido pelo último chute" },
  ```
  - `Chi: N` e/ou `FdV: N` conforme o custo (omita quando o custo for "nenhum").
  - `ModMov`: número, ou `"Nenhum"`, `"Um"`, `"Dois"`, `"Três"`, `"Especial"`.
  - Multi-hit: `ModDano` com um valor por acerto (`"1/1"`, `"0/0/0"`, `"2/0"`).
- **O texto de `Sistema` decide o custo em PC** (`getPCManobra`):
  - Repetição de dano só é contada com "dois testes", "duas vezes", "três testes" ou "três vezes". "3 hits" e "Três Hits" **não** contam. Para multi-hit, escreva "dano rolado três vezes".
  - Somam +1 cada: "KD"/"knockdown", "área", "aérea" (ou "como Jump"/"esquivar de projétil"), "agachamento", "ignora" (e técnicas Bloqueio/Apresamento).
  - Chi e FdV subtraem.
- Antes de editar, confira se a produção é igual ao `HEAD`:
  ```sh
  git show HEAD:./manobras.js | cmp - <(curl -s https://www.sfrpg.com.br/tools/manobras.js) && echo PROD=HEAD
  ```
- Valide a sintaxe, o BOM e o custo, comparando com manobras parecidas e com o pré-requisito:
  ```sh
  head -c3 manobras.js | xxd | head -1   # efbb bf
  node --check manobras.js && node -e 'const vm=require("vm");const c={};vm.createContext(c);vm.runInContext(require("fs").readFileSync("manobras.js","utf8")+";this.g=getPCManobra",c);for(const n of ["<Nova>","<Pré-requisito>"])console.log(n,c.g(n))'
  ```
- Cache-buster: atualize **só** o `?date=AAAAMMDDhhmm` do `manobras.js` (horário de São Paulo) em `v2/_framework.html` e `gerador.html`; não mexa no do `scripts.js` se ele não mudou. Envie os três arquivos e confira:
  ```sh
  source .claude/skills/personagem-sfrpg/scripts/wp.sh
  wp_ftp_put manobras.js public/tools/manobras.js
  wp_ftp_put v2/_framework.html public/tools/v2/_framework.html
  wp_ftp_put gerador.html public/tools/gerador.html
  for f in manobras.js v2/_framework.html gerador.html; do curl -s "https://www.sfrpg.com.br/tools/$f?x=$RANDOM" | cmp - $f && echo "OK $f"; done
  ```

## Post da manobra

Modelos: `double-hit-kick`, `brain-cracker`, `drunken-monkey-roll`. Linhas soltas com `<strong>` e links relativos `/post/<slug>`; o WordPress transforma as quebras em `<br>`/`<p>`.

```html
<strong>Pré-Requisitos:</strong> <a title="Esportes" href="/post/esportes">Esportes</a> 4, <a title="Flying Heel Stomp" href="/post/flying-heel-stomp">Flying Heel Stomp</a>
<strong>Pontos de Poder:</strong> <a title="Kung Fu" href="/post/kung-fu">Kung Fu</a>, <a title="Wu Shu" href="/post/wu-shu">Wu Shu</a>, <a title="Forças Especiais" href="/post/forcas-especiais">Forças Especiais</a> 3; Outros 4.

<descrição, um parágrafo por bloco>

<strong>Sistema:</strong> ... (links na primeira menção: /post/manobra-aerea, /post/manobra-de-projetil, /post/manobra-de-agachamento, /post/jump, /post/knockdown, técnicas e estilos)

<strong>Custo:</strong> 1 <a title="Força de Vontade" href="/post/forca-de-vontade">Força de Vontade</a>
<strong>Velocidade:</strong> -1
<strong>Dano:</strong> +0
<strong>Movimento:</strong> -1

<em>Manobra não oficial, extraída da adaptação "The King of Fighters" da Shotokan RPG. Créditos aos autores.</em>

<img ... />   (imagem vertical sempre aqui no fim; ver "Imagem")
```

- **Fiel à fonte.** Corrija só ortografia e pontuação. Não acrescente nada que não esteja no texto (ex.: uma frase "lutadores como King e Eiji usam esta manobra" foi removida pelo usuário).
- **Dano** é escrito como na fonte, mesmo em multi-hit (`+0`, não "+0 (três vezes)"), como na Double Hit Kick; o número de acertos fica no Sistema.
- Custo "nenhum": `<strong>Custo:</strong> nenhum.` Chi: link `/post/chi`.
- Confira os slugs dos links: `SELECT post_name FROM wp_posts WHERE post_status='publish' AND post_name IN (...)`.
- Crédito em itálico conforme a origem confirmada pelo usuário. Exemplos: `Manobra não oficial, extraída do suplemento Tekken 4 da Shotokan RPG. Créditos aos autores.`; `<strong>* OBS:</strong> manobra não-oficial retirada do suplemento Tempos de Glória da Shotokan RPG.`

**Inserir no banco** (como na skill de personagens): `post_status='draft'`, `post_type='post'`, `post_author=1`, `post_date` no horário de São Paulo, `post_date_gmt='0000-00-00 00:00:00'`, `post_name=<slug>`, depois `guid = CONCAT('https://www.sfrpg.com.br/?p=', ID)`. Confira o conteúdo gravado com `wp_post_get` + `cmp`.
- Categoria **Manobras Especiais** (`term_taxonomy_id` 17).
- Tags: `manobra especial` (30) e a tag da técnica (ex.: `esportes` 47, `apresamento`...; procure em `wp_terms`/`wp_term_taxonomy` com `taxonomy='post_tag'`). Não mexa no `count` (rascunho não conta).
- Metas: `_edit_last=1`, `_yoast_wpseo_primary_category=17`, `_yoast_wpseo_focuskw=<nome em minúsculas>`, `_yoast_wpseo_metadesc=<resumo da descrição, gravado em hex>`.

## Imagem

1. **Procure antes se ela já existe no blog** e reaproveite o anexo se for igual ("Origem da imagem", na skill `imagem-sfrpg`).
2. Se for nova: converta e publique conforme "Conversão" (imagem avulsa) e "Publicação", na mesma skill.
3. **Posição:**
   - imagem **vertical** (altura > largura): sempre no **fim do post**, depois do crédito;
   - imagem horizontal: pode ficar entre a descrição e o Sistema (como na Double Hit Kick) ou no fim.
   - Marcação: `<img class="size-full wp-image-<ID> aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/AAAA/MM/<arquivo>" alt="" width="W" height="H" />`.
4. **Imagem destacada:** siga a regra de GIF animado em "Publicação", na skill `imagem-sfrpg`. Se a manobra só tiver GIF, o post fica sem destacada.

## Listas cruzadas (posts publicados)

Toda manobra nova entra nestes três lugares. Edite sempre com `wp_post_get` → Python com `open(..., newline="")` → `diff` → `wp_post_put`. **Esses posts são antigos e usam CRLF**; preserve também a indentação de cada item (ex.: `" \t<li>"` com espaço e tab).

| Post | Onde | Formato do item |
|---|---|---|
| post da técnica (`esportes` ID 1387, `chute`, `soco`, `apresamento`, `foco`, `bloqueio`...) | lista "Manobras de <Técnica>", ordem alfabética | `<li><a href="https://www.sfrpg.com.br/post/<slug>">Nome</a>*</li>` |
| `movimentos-comuns` (ID 293) | coluna da técnica na tabela, ordem alfabética; **só se os Pontos de Poder tiverem "Outros"**, com o custo de Outros | `<a href="https://www.sfrpg.com.br/post/<slug>">Nome</a> (N)*` |
| post de **cada estilo** dos Pontos de Poder (ex.: `kung-fu` 368, `wu-shu` 412, `forcas-especiais` 377) | coluna da técnica na tabela de manobras do estilo, ordem alfabética, com o custo daquele estilo | `<a href="https://www.sfrpg.com.br/post/<slug>">Nome (N)</a>*` |

- `*` marca manobra **não oficial** (fan-made), conforme a nota "* OBS" desses posts. Manobra oficial da White Wolf entra sem `*`.
- O custo de "Outros" vai **apenas** no Movimentos Comuns, nunca em post de estilo. Nos posts, ele aparece como "Outros N", "Outros Estilos N", "Qualquer N" ou "Qualquer Estilo N"; todos contam.
- Manobra cujos Pontos de Poder são **só** "Qualquer Estilo"/"Outros" (sem estilo nomeado, ex.: Power Uppercut) **não entra** nas listas dos posts de estilo; fica apenas no post da técnica e no Movimentos Comuns. Não aponte como faltando a ausência dela num post de estilo.
- No Movimentos Comuns, a coluna é a da tag de técnica da manobra. Manobras de arma sem tag de técnica (Buffalo Strike, Triple Blow, Weapon Uppercut...) ficam na linha **Armas** (`colspan="2"`, cabeçalho `background-color: silver`), no fim da tabela. Manobras comuns de Híbridos Animais ficam no post `explorando-os-hibridos-animais`.
- **O post da manobra é a fonte da verdade.** Se o custo de uma lista (Movimentos Comuns, post de estilo) for diferente do custo nos Pontos de Poder do post da manobra, corrija a lista.
- **Páginas de desambiguação:** `/post/push` explica que existem duas manobras com esse nome e aponta para elas: Push (Elemental), em `push-elemental`, e Push (Body), de Apresamento, em `push-body`. Nas listas, aponte sempre para a manobra, nunca para a desambiguação. Leia os custos sempre no post **atual** da manobra (o usuário pode ter editado).
- Ache a coluna pelo cabeçalho `<strong><Técnica></strong>`: a célula correspondente fica na linha `<tr>` seguinte, na mesma posição.
- Se um estilo dos Pontos de Poder não tiver post (ou não tiver tabela), liste como dúvida.
- **Itens colados:** em posts antigos, há itens sem quebra entre eles (`... (2)<a href=...`), que aparecem juntos na página. Ao editar uma lista, procure e separe com CRLF:
  ```python
  re.subn(r"(\)\**|</a>\**)[ \xa0]*(?=<a )", lambda m: m.group(1) + "\r\n", t)
  ```
- **Nomes antigos que não existem mais.** Se aparecerem numa lista que você estiver editando, remova o item (o nome atual já está listado) e confira os links com `SELECT ... WHERE post_content LIKE '%<slug-antigo>%'`:
  - Quesadilla Bomb, Dashing Shoulder, Shadow Shoulder → Hyper Tackle;
  - Ground Roll → Drunken Monkey Roll;
  - Flash Chop → Haymaker; Falling Sky → Choke Throw; Short Fireball → Energy Ball; Fajita Buster → Thigh Press.

  Para saber se um link morto é um nome antigo, veja para onde o site redireciona: `curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://www.sfrpg.com.br/post/<slug>` (301 → nome atual; 404 → manobra que não existe mais).
- **Seções especiais dos posts de técnica.** A lista principal fica sob "Manobras de <Técnica>", e as manobras exclusivas de um Antecedente Único ficam em seções próprias:
  - Soco: "Manobras com Tentáculos";
  - Esportes: "Manobras Exclusivas para Híbridos Animais";
  - Apresamento: "Manobras de Apresamento de Híbridos Animais";
  - Foco: "Manobras Exclusivas para Cibernéticos". As manobras de Elementais, Sub-Elementais, Satsui no Hadou, Psycho Power e Paranormais ficam nos posts desses antecedentes, e o post de Foco só aponta para eles.

  Manobra de Foco que tem alternativa sem antecedente (ex.: "Foco 3 ou Elemental (Gelo) 2") entra na lista principal de Foco. A que exige o antecedente em todas as alternativas (ex.: "Foco 2, Elemental 2") vai para o post do antecedente.
- **Conferir uma lista inteira:** a fonte de verdade são os posts publicados da categoria 17 com a tag da técnica. Ignore `manobras-basicas` e `movimentos-comuns`, que têm essas tags mas não são manobras, e as listas de exemplos dos posts (ex.: "Exemplos de Uso de Esportes"). Revisões antigas do post (`post_type='revision'`, `post_parent=<ID>`) guardam listas apagadas.

  O nome antigo pode continuar no texto do post da manobra como apelido ("Luchadores mexicanos chamam este movimento de Quesadilla Bomb"); isso está certo.

## Commit

Só quando o usuário pedir. Mensagem curta em português (ex.: "manobra Multiple Stomp").
