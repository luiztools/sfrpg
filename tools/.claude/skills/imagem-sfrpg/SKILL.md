---
name: imagem-sfrpg
description: Cuida das imagens do sfrpg.com.br. Cria imagens em três tipos — personagem vertical (anime, fundo branco, 300px de largura) e cena horizontal (anime, HD 1280x720, com um ou mais personagens em uma arena ou ambiente), ambos com a API da OpenAI (GPT), e busto de personagem (recorte local 3x4, sem API, como o das tabelas de personagens). Também extrai imagens de PDFs, baixa e reaproveita imagens existentes, converte imagem principal e banner, envia à biblioteca do WordPress (FTP e anexo) e mantém as tabelas de bustos. Use quando o usuário pedir para gerar, criar ou desenhar uma imagem, ilustração, arte ou cena de personagem, redesenhar uma imagem em estilo anime, gerar a imagem da arena de um personagem, recortar um busto, converter, enviar ou trocar uma imagem do site, ou ajustar uma tabela de bustos. As skills personagem-sfrpg e manobra-sfrpg usam esta skill para o tratamento das imagens dos seus posts.
---

# Imagens do site (SF RPG Brasil)

Esta skill concentra o tratamento de imagens: criação, origem, conversão, publicação e tabelas de bustos. Quais imagens cada post precisa, onde ficam e com que marcação são regras das skills `personagem-sfrpg` e `manobra-sfrpg`.

**Tipos gerados por IA (personagem vertical e cena horizontal):** toda imagem é em **estilo anime**, inclusive quando há referências. Qualquer imagem fornecida é só um guia de aparência e deve ser redesenhada nesse estilo, nunca copiada ou colada. O script já coloca isso no prompt.

Geração: `scripts/gerar_imagem.py`, com a API da OpenAI e a chave `OPENAI_API_KEY` do `.env` de `tools/`. Nunca imprima a chave.

**Busto de personagem:** é só um recorte da imagem original, sem IA e sem redesenho. Tem fluxo próprio, em "Busto de personagem".

## Criação de imagens

1. **Tipo da imagem.** O usuário deve informar: **personagem vertical**, **cena horizontal** ou **busto de personagem**. Se o pedido não disser, pergunte antes de gerar. A única exceção é a imagem de arena pedida no fluxo de personagem (skill `personagem-sfrpg`), que é sempre uma cena horizontal.
2. **Reunir os dados** conforme o tipo, abaixo. Escreva no script as descrições em inglês.
3. **Gerar** com o script, a partir de `tools/`. Se ainda não houver venv com Pillow, crie um: `python3 -m venv <scratchpad>/venv && <scratchpad>/venv/bin/pip install pillow`.
4. **Conferir:** abra a imagem gerada (Read) e confira se bate com o pedido e a aparência do personagem. Avalie também os `AVISO:` do script.
5. **Entregar** ao usuário o caminho completo do arquivo. Publicar no blog só se ele pedir (ver "Publicação").

**Cada chamada custa créditos da OpenAI.** Gere uma imagem por pedido e só gere de novo se o usuário pedir ou se o resultado estiver claramente errado (personagem cortado, parecendo colado, fundo errado). Para rever o texto sem gastar, use `--mostrar-prompt`. Para refazer só o recorte ou o tamanho, use `--de-original <saida>-original.png`, que não chama a API.

Se a API recusar (ex.: 429 sem créditos, bloqueio de moderação), informe o erro e, como alternativa, escreva um prompt em inglês para o usuário gerar por conta própria, com o nome de arquivo sugerido (modelo em `~/Downloads/prompts-arenas-sfrpg.md`).

## Personagem vertical

Sempre **fundo branco**, **300px de largura** e a altura que o personagem e a pose precisarem. O personagem é criado conforme o prompt do usuário. Se houver imagens ou post dele, use também como referência (ver "Buscar dados em um post").

```sh
<scratchpad>/venv/bin/python -I .claude/skills/imagem-sfrpg/scripts/gerar_imagem.py personagem <scratchpad>/<slug>.png \
  --personagem "<nome e aparência em inglês, a partir do prompt>" \
  --acao "<pose em inglês, se o prompt indicar>" \
  --ref <imagem de referência>
```

A API não gera nessa largura: o script pede 1024x1536, recorta o branco em volta do personagem e reduz para 300px de largura. Personagem muito estreito fica com branco nas laterais, com no máximo 300x600. `--acao` e `--ref` são opcionais; sem `--acao`, ele fica em pose de luta.

## Cena horizontal

Sempre em **HD 1280x720** (o script garante esse tamanho). Reúna, nesta ordem:

**1. Personagens.** Cada um deve vir como imagem ou como post do personagem, de onde se pega a imagem. Se faltar referência para algum, peça ao usuário antes de gerar. Mantenha a ordem do prompt: ela define quem é o "primeiro personagem" nas regras abaixo.

**2. Ambiente.** Use a primeira opção disponível:
1. O ambiente descrito no prompt.
2. A arena do **primeiro personagem** informado.
3. A arena de **qualquer outro personagem** da cena.
4. Uma **situação de rua do país do primeiro personagem**, com detalhes típicos do lugar. Se o país for desconhecido, pergunte ao usuário.

Um personagem tem arena se o post dele tiver a seção "Arena de X" ou se a ficha tiver o antecedente `Arena`. Use o texto da seção em `--cenario` e, se ela tiver imagem, passe-a em `--ref-cenario`. Se a ficha tiver o antecedente mas o post não tiver a seção, procure o nome da arena na lista "Locais de Conflito" do post `arena`. Só o conhecimento `Arena: N` não conta.

**3. Ação.** Use o que o prompt disser. Se ele não informar, o personagem faz uma **pose da sua arte marcial**: pegue o `Estilo` da ficha e escreva, por exemplo, `full body, each one striking a fighting stance of their martial art (Ryu: Shotokan karate; Chun-Li: kung fu)`.

```sh
<scratchpad>/venv/bin/python -I .claude/skills/imagem-sfrpg/scripts/gerar_imagem.py cena <scratchpad>/<slug>-cena.jpg \
  --cenario "<ambiente em inglês>" \
  --acao "<ação em inglês>" \
  --personagem "<nome e aparência do 1º, em inglês>" --ref <imagem do 1º> \
  --personagem "<nome e aparência do 2º, em inglês>" --ref <imagem do 2º> \
  --ref-cenario <imagem da arena>
```

Passe as `--ref` na mesma ordem dos `--personagem`, uma por personagem. Sem imagem de ambiente, omita `--ref-cenario`.

## Busto de personagem

Recorte local em **3x4 (72x96)**, no padrão das tabelas de personagens (ex.: post `street-fighter-2`): enquadramento fechado, com a cabeça ocupando quase todo o quadro e um pouco de pescoço e ombros. **Não usa a API da OpenAI** e não gasta créditos. Mantém o desenho e o fundo originais.

1. **Origem:** a imagem fornecida pelo usuário ou, se ele indicar um personagem do site, a imagem do post (ver "Buscar dados em um post"). Se nenhuma mostrar o rosto em tamanho suficiente, procure nas outras imagens do post (banner, imagens de crônica) e, se não houver, peça uma imagem ao usuário. A busca no banco só é necessária para post em rascunho: nos publicados, `curl` em `https://www.sfrpg.com.br/post/<slug>` basta.
2. **Gerar a grade** e abri-la (Read) para ler a posição da cabeça, em porcentagem:
   ```sh
   <scratchpad>/venv/bin/python -I .claude/skills/imagem-sfrpg/scripts/recortar_busto.py grade <origem> <scratchpad>/<slug>-grade.png
   ```
3. **Recortar**, informando a caixa da cabeça: `ESQ,TOPO,DIR,QUEIXO`, do alto do cabelo (sem contar pontas soltas ou faixas) até o queixo:
   ```sh
   <scratchpad>/venv/bin/python -I .claude/skills/imagem-sfrpg/scripts/recortar_busto.py recortar <origem> <scratchpad>/<nome>-face.jpg --cabeca 19,3,46,29
   ```
4. **Conferir:** abra o resultado (Read). A cabeça deve estar inteira e centrada. Se não estiver, ajuste `--cabeca` e recorte de novo. `--folga` (padrão 1.4) mostra mais ombros quando aumenta. Se o script avisar que o recorte foi ampliado, procure uma imagem maior; se não houver, entregue assim e avise o usuário que o busto ficou com baixa resolução.

Se a imagem tiver mais de um personagem, a caixa escolhe qual. Se o rosto não estiver visível (de costas, mascarado de um jeito que esconda a cabeça, fora do quadro), avise o usuário em vez de recortar outra parte.

## Buscar dados em um post

```sh
source .claude/skills/personagem-sfrpg/scripts/wp.sh
wp_db_open
wp_sql -N -e "SELECT ID, post_status FROM wp_posts WHERE post_name='<slug>' AND post_type='post'"
wp_post_get <ID> <scratchpad>/<slug>.html
wp_db_close
```

- **Aparência:** o parágrafo `<strong>Aparência:</strong>`, traduzido para `--personagem`.
- **Imagem do personagem:** o primeiro `<img>` do post, ignorando os botões `/img/planilha-*`. Em post de gêmeos ou duplas, use o bloco do personagem certo. Prefira o arquivo sem sufixo de tamanho (`-300x300`).
- **Arena:** a seção `<h3>` "Arena de X" e a imagem logo abaixo dela.
- **País:** a linha `<strong>País:</strong>`.
- **Ficha (`Estilo` e antecedente Arena):** o link da planilha `_character.php?name=<caminho>` aponta para `v2/<caminho>.js`.

O slug do post nem sempre é o nome do personagem (`kai-mk`, `mike-sf`, `drake-ff`...). Em caso de dúvida, veja "Ficha → post" na skill `personagem-sfrpg`.

A API aceita PNG, JPG e WebP: converta GIF para PNG antes. Para baixar imagens, veja "Origem da imagem".

## Origem da imagem

- **Reaproveitar:** antes de subir qualquer arquivo de manobra, procure se a imagem já existe no blog, a começar pelos posts relacionados (pré-requisito, variações). Baixe a imagem existente e compare com `cmp` com a que o usuário mandou. Se for igual, **reaproveite o anexo** (`wp-image-<ID>` e a URL existente) e não suba nada. Ex.: a Multiple Stomp usa o GIF da Flying Heel Stomp (anexo 9511, `2024/03/flying-heel-stomp.gif`).
  ```sql
  SELECT p.ID FROM wp_posts p JOIN wp_postmeta m ON m.post_id=p.ID AND m.meta_key='_wp_attached_file' WHERE m.meta_value LIKE '%<nome>%';
  ```
- **PDF:** extraia a imagem embutida com `pymupdf` (`page.get_images()` + `doc.extract_image(xref)`). Se ela vier fatiada, com máscara/transparência quebrada ou muito pequena, renderize só a área dela (`page.get_pixmap(clip=rect, dpi=200)`). Abra o resultado (Read) para conferir se é a imagem certa e se não veio com texto ou moldura da página, e depois converta.
- **URLs:** o usuário costuma mandar URLs. As da Fandom (`static.wikia.nocookie.net`) dão 403 (Cloudflare): **não contorne**. Peça para ele salvar em `~/Downloads` e use o arquivo local. Pinterest, ytimg, gstatic, redd.it e twimg baixam normalmente com `curl`.
- **Downloads:** coloque cada download numa pasta nova e vazia do scratchpad e rode o Python com `-I`.

## Conversão

Use `scripts/img.py`, que requer Pillow (sem Pillow no sistema, crie o venv de "Criação de imagens"):

- **Imagem principal:** `img.py main <origem> <pasta_saida> <slug>` gera `<slug>.webp`, uma versão média que cabe em 300x300 e a de 150x150.
- **Banner:** `img.py banner <origem> <pasta_saida> <slug>-banner` corta o letterbox (comum em `sddefault.jpg` do YouTube, 640x480), limita imagens 4K a 1920 e gera as versões menores. O script imprime as dimensões finais.
- **GIF animado:** mantenha o `.gif` original como arquivo principal e use o script só para as miniaturas.
- **Imagem avulsa (ex.: manobra):** renomeie para `<slug>.<ext>` numa pasta nova do scratchpad e gere a miniatura 150x150 (GIF: quadro estático em `.gif`; outras: `img.py`).

## Publicação

Faça só se o usuário pedir ou se a imagem fizer parte do fluxo de um post (skills `personagem-sfrpg` e `manobra-sfrpg`).

- **Envio:** por FTP para `public/wp-content/uploads/AAAA/MM/` com `wp_upload_imgs AAAA/MM <arquivos>` (de `.claude/skills/personagem-sfrpg/scripts/wp.sh`), e confira HTTP 200.
- **Anexo no banco:** um `wp_posts` com `post_type='attachment'`, `post_status='inherit'`, `post_parent=<ID do post>`, `guid=<URL do arquivo>`, `post_mime_type`. Mais `wp_postmeta` com `_wp_attached_file` = `AAAA/MM/arquivo` e `_wp_attachment_metadata` = saída de `scripts/wp_meta.py` (valide com `php -r 'unserialize(...)'`). Depois adicione `wp-image-<ID>` na classe do `<img>`.
- **Trocar uma imagem que já tem anexo:** sobrescreva os arquivos com o mesmo nome e atualize apenas o `_wp_attachment_metadata` do anexo existente.
- **GIF animado nunca é imagem destacada** (`_thumbnail_id`), em nenhum post. A destacada é sempre uma imagem estática (jpg/png/webp, de preferência banner 16:9); se o post só tiver GIF, fica sem destacada. Há duas exceções: o usuário fornecer expressamente esse GIF (URL ou arquivo) para ser a destacada, ou já tê-lo definido manualmente no post. Nesse segundo caso, não troque nem remova.

Conforme o tipo:

- **Personagem vertical:** `img.py main`, como imagem principal do post.
- **Cena horizontal:** `img.py banner`, como banner ou imagem de seção.
- **Busto:** vai sempre para a **biblioteca de imagens**, como `<nome>-face.jpg`, com o nome do personagem em minúsculas e separado por hifens (a pasta `public/ps` não existe mais). Use `wp_upload_imgs` e crie o anexo com `post_title` e `post_name` iguais a `<nome>-face`, `post_parent` no post do personagem, `_wp_attachment_image_alt` com o nome dele e `sizes` vazio no `wp_meta.py` (a imagem é menor que as miniaturas do WordPress). Antes, veja se já existe um anexo `<nome>-face` e, se existir, confirme com o usuário antes de substituir. Homônimos usam o slug do post (`kai-mk-face`, `mike-kf-face`).

## Tabelas de personagens

Os posts de franquia usam tabelas de bustos: `street-fighter-1`, `street-fighter-alpha`, `street-fighter-2`, `street-fighter-4`, `street-fighter-5`, `street-fighter-ex`, `art-of-fighting`, `fatal-fury`, `captain-commando`, `kung-fu-do-fighting`, `mortal-kombat` e `mortal-kombat-4`. Copie a marcação de um desses posts. São **6 personagens por linha**, em blocos de 3 linhas:

1. **Nome** (linha com fundo amarelo): `<td><a title="Nome" href="/post/<slug>">Nome</a></td>`
2. **Busto:** `<td><a title="Nome" href="/post/<slug>"><img class="size-full wp-image-<ID>" src=".../<nome>-face.jpg" width="72" height="96" alt="Nome" border="1" /></a></td>`
3. **Estilo e bandeira:** `<td><a title="Karatê Shotokan" href="/post/karate-shotokan">K. Shotokan</a> <img class="size-full wp-image-<ID>" style="vertical-align: middle;" src=".../bandeira-japao.png" alt="Japão" title="Japão" width="20" height="15" /></td>`

Regras:
- **Estilo:** vem do `Estilo` da ficha, só a parte principal (`Ninjitsu (Kenjutsu)` vira `Ninjitsu`). Nomes com mais de 10 caracteres e mais de uma palavra abreviam a primeira palavra (`K. Shotokan`, `N. Espanhol`, `F. Especiais`, `T. Kwon Dô`, `J. Kune Dô`). Nomes curtos ficam inteiros (`Kung Fu`, `Wu Shu`). Exceções: `L.L.N.A` e `M. C. Kung Fu`. O `title` do link mantém o nome completo. Grafias que precisam de ajuste no link: `Kickboxing` → `Kickboxe`, `Ninjutsu` → `Ninjitsu`, `Muay Thai` → `Thai Kickboxe`. Se o estilo não tiver post, fica sem link.
- **Bandeira:** vem do campo `País` do post. As bandeiras são anexos da biblioteca (`bandeira-<país>.png`, 40x30 exibida em 20x15). País novo: baixe de `https://flagcdn.com/40x30/<código>.png`, envie à biblioteca e crie o anexo. País com dúvida (`China?`) leva a bandeira, com `(?)` no `title`. Desconhecido, fictício (Edenia, Outworld...) ou região (Oriente Médio) fica sem bandeira.
- **Personagem novo:** entra na tabela da franquia, na mesma ordem usada ali. Gêmeos e duplas ocupam duas células, com o mesmo link de post.
