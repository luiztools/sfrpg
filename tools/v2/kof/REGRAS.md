# Regras da franquia SNK (pasta `v2/kof/`)

Art of Fighting, Fatal Fury, The King of Fighters e Garou: Mark of the Wolves. Complementa a skill `personagem-sfrpg`: o que estiver lá vale aqui, e estas regras valem só para personagens desta pasta.

## Origem e crédito

- Suplemento King of Fighters da Shotokan RPG: `<em><strong>Referência:</strong> personagem extraído da adaptação "The King of Fighters" da Shotokan RPG. Todos os direitos são dos autores da adaptação.</em>`
- Posts SNK escritos pelo próprio site também citam o suplemento KoF da Shotokan.
- Post de referência da franquia: `ryo-sakazaki`.

## Ficha

- Antecedente "Orochi" da fonte → `newCaracteristica("Sangue de Orochi", N)`.
- **Divisão:** exceções decididas pelo usuário: Ryuhaku e Kasumi Todoh ficam em "Livre" (e o post diz que não usam armas contra oponentes desarmados).
- **The King of Fighters é a base e a verdade.** As versões de Art of Fighting (1 a 3) e Fatal Fury (1 a 3) partem da ficha de KoF (a da `age=kof`):
  - Saúde no máximo 18 (valores menores da fonte ficam como estão). A versão KoF de quem também tem versão AoF/FF recebe pelo menos +2 de Saúde em relação a ela, salvo instrução do PDF. Garou (botão KoF) não segue esse teto. Exceções de chefões, com Saúde 20 em todas as versões: Geese Howard, Takuma Sakazaki e Wolfgang Krauser;
  - Chi, Força de Vontade, Honra, Glória e Posto são **1 a menos** que na ficha de KoF (Chi e Força de Vontade nunca abaixo de 1; Honra, Glória e Posto podem chegar a 0). Ao mudar a ficha de KoF, ajuste as de AoF/FF. Em fichas cuja versão KoF é calculada a partir da AoF/FF (`Math.min(x + 1, ...)`, ex.: Takuma, Eiji), confira se o teto do `Math.min` não deixou as duas iguais.
  - Sem versão KoF, só vale o teto de Saúde.
- **Botões dos personagens de Fatal Fury:** quem lutou em FF1, FF2, FF3 ou Real Bout tem o botão FF (`age=ff`). Quem também lutou em KoF (tag `kof rpg`) tem ainda o botão KoF (`age=kof`, acima do FF). Quem lutou em Garou ou City of the Wolves **sem** ter lutado em KoF tem o botão `planilha-mark-city-wolves.jpg` (ver Hokutomaru). Quem tem KoF e Garou/City fica só com o botão KoF. Ninguém tem três botões. Variação que ainda não existe: copie a função, mude a `Cronica` ("The King of Fighters" ou o jogo), Saúde 20, +1 Chi e +1 Força de Vontade (limite 10) e acrescente 3 combos "Bloqueio para X" com as 3 manobras de maior PC (`getPCManobra`; empate pela ordem da lista).
- **Garou: Mark of the Wolves** (`age=garou`): planilha `<a title="Planilha em Garou" href="...&amp;age=garou" ...>` com o botão `planilha-kof`; `Cronica: "Garou: Mark of the Wolves"`; o parágrafo da crônica é `<strong>Crônica em Garou (2006):</strong>` também para os estreantes.
- **Mapeamento de estilos:** Kyokugen-ryu → `Karatê Rindoukan`; Ankoku Shinkuu-ken/Ankoku Karate → `Karatê Shotokan`; Hakkyokuseiken (inclusive o de Rock, misturado com MMA) → só `Jeet Kune Dô`, como o Terry; LK Arts → `Savate`; Gou-kei e Juu-kei → `Kung Fu`; lucha libre → `Wrestling`; Zanki → `Tai Chi Chuan`; SWAT + Sambo → `Forças Especiais`.

## Pesquisa

- **Cronologia de Art of Fighting** (a oficial do site): AoF = **1978**, AoF2 = **1979**, AoF3 = **1980**. Como não há ano de nascimento oficial, use a idade (oficial ou aproximada) no jogo de estreia do lutador e calcule o ano subtraindo-a do ano desse jogo. Formato: `<strong>Nascimento:</strong> 02/08/1956 (22 anos em AoF)`; para estreantes de AoF2/AoF3 use "(N anos em AoF2)" e "(N anos em AoF3)" (ex.: Geese 21/01/1953, 26 anos em AoF2; Kasumi 29/03/1964, 16 anos em AoF3). Sem idade conhecida: `dd/mm (ano desconhecido)`. O peso também segue a era AoF quando as fontes divergem.
- **Cronologia de Fatal Fury** (fim do post `fatal-fury`): FF1 = **1991**, FF2 = **1992** (Special conta como era FF2), FF3 = **1995**. Mesma regra: idade no jogo de estreia, ano = ano do jogo − idade, formato "(21 anos em FF1)", "(28 anos em FF2)", "(22 anos em FF3)". Se a fonte só dá a idade em um jogo posterior, desconte os anos até a estreia (Terry: 22 em FF2 → 21 em FF1 → 1970).
- **Garou: Mark of the Wolves = 2006** (dez anos após FF3, também no post `fatal-fury`). Formato "(17 anos em Garou)" (Rock: 24/06/1989). A cidade se chama Second Southtown (South Town reconstruída).
- **South Town:** quem cresceu ou mora lá, sem outro país conhecido, fica `<strong>País:</strong> EUA (<a href="https://www.sfrpg.com.br/post/south-town">South Town</a>)` (Kain, Grant).
- **Fontes:** `https://days366.com/title/21_02_26.html` tem aniversário, tipo sanguíneo, altura e peso de toda a série Ryuuko no Ken (AoF).

## Post

- **Sangue de Orochi:** seção obrigatória para quem tem o antecedente, no lugar da seção Satsui no Hadou (o banner e a lista "Sangue de Orochi" do post `satsui-no-hadou` são os mesmos do Satsui):
  ```html
  <h3>Sangue de Orochi</h3>
  Em situações de grande estresse, <Nome> rola seu antecedente Sangue de Orochi (que usa as mesmas regras do Satsui no Hadou) e se passar, entra em fúria, recebendo bônus em velocidade, dano e absorção, mas só pensa em matar seu oponente. Veja mais em <a href="https://www.sfrpg.com.br/post/satsui-no-hadou">Satsui no Hadou</a>.
  ```
- **Tags:** `kof rpg` se o personagem lutou em algum jogo The King of Fighters (como jogável, chefe **ou striker**); `Art of Fighting` se lutou em algum jogo Art of Fighting. Personagens só de AoF **não** levam `kof rpg`.
- **Banners da franquia:** AoF `wp-image-10505` (`/post/art-of-fighting`), KoF `wp-image-10461` (`/post/the-king-of-fighters-rpg`); copie a marcação exata de um post existente. Quem leva a tag `kof rpg` leva o banner de KoF. **Nem todo personagem desta pasta esteve em jogos KoF**: quem só apareceu em Art of Fighting (Jack Turner, Lee Pai Long, Mickey Rogers, John Crawley, Ryuhaku Todoh, Temjin, Wang Koh San, Rody Birts, Karman Cole, Jin Fuha, Lenny Creston, Sinclair, Tom Wyler) leva só o banner de AoF. Personagens de AoF que também estão em KoF (Ryo, Robert, Yuri, Takuma, King, Kasumi, Eiji, Mr. Big, Geese) levam os dois.
- **Banners e tags de times e grupos:**
  - Flying Brigands (todo membro do clã Hizoku listado em "Membros do Time" do post `flying-brigands`: Chat, Lin, Ron, Duo Lon, Xiao Lon, Luan, Sai; também leva a tag `flying brigands`, `term_taxonomy_id` 283): `<p align="center"><a href="https://www.sfrpg.com.br/post/flying-brigands"><img class="size-full wp-image-13077 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/flying-brigands-banner.jpg" alt="" width="450" height="253" /></a></p>`
  - Aqueles do Passado (membros listados em "Membros do Time" do post `aqueles-do-passado`: Saiki, Magaki, Shion, Mukai, Botan, Ash Crimson; também levam a tag `aqueles do passado`, `term_taxonomy_id` 305; menções ao nome em outros posts linkam para `/post/aqueles-do-passado`): `<p align="center"><a href="https://www.sfrpg.com.br/post/aqueles-do-passado"><img class="size-full wp-image-13724 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/aqueles-do-passado-banner.jpg" alt="" width="450" height="253" /></a></p>`
  - Ash Team (membros listados em "Membros do Time" do post `ash-team`: Ash Crimson, Duo Lon, Shen Woo, Oswald, Elisabeth Blanctorche; Kukri ainda não tem post; também levam a tag `ash team`, `term_taxonomy_id` 307, e `Time: "Ash Team"` na ficha), logo depois do banner de KoF: `<p align="center"><a title="Ash Team" href="https://www.sfrpg.com.br/post/ash-team"><img class="wp-image-13753 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/team-ash-banner-672x372.webp" alt="Ash Team" width="450" height="249" /></a></p>`
  - High School Girls (Malin e Hinako Shijou, do post `high-school-girls`; a Athena **não** entra, pois seu time principal é o Psycho Soldiers): tag `high school girls` (`term_taxonomy_id` 308), `Time: "High School Girls"` na ficha e, logo depois do banner de KoF: `<p align="center"><a title="High School Girls" href="https://www.sfrpg.com.br/post/high-school-girls"><img class="wp-image-13759 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/high-school-girls-team-672x372.jpg" alt="High School Girls" width="450" height="249" /></a></p>`
  - Garou Team (Tizoc, B. Jenet, Gato e Rock Howard, do post `garou-team`; **não** levam o banner nem a tag do Fatal Fury Team): tag `garou team` (`term_taxonomy_id` 309), `Time: "Garou Team"` na ficha e o banner `<p align="center"><a title="Garou Team" href="https://www.sfrpg.com.br/post/garou-team"><img class="size-full wp-image-13763 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/garou-team-banner.jpeg" alt="Garou Team" width="450" height="253" /></a></p>`
  - China Team (KoF XIV: Tung Fu Rue, Shun'ei e Meitenkun, do post `china-team`; Shun'ei e Meitenkun ainda não têm post): tag `china team` (`term_taxonomy_id` 310), `Time: "China Team"` na versão KoF da ficha e, logo depois do banner de KoF: `<p align="center"><a title="China Team" href="https://www.sfrpg.com.br/post/china-team"><img class="size-large wp-image-13773 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/china-team-banner-1024x576.jpg" alt="China Team" width="474" height="267" /></a></p>`
  - Clãs Sagrados (membros listados em "Membros do Clã" dos posts `cla-kusanagi`, `cla-yagami` e `cla-yata`; também levam a tag do clã: `cla kusanagi` 287, `cla yagami` 288, `cla yata` 306; menções ao clã em outros posts linkam para o post dele): banner logo depois do banner de KoF, `<p align="center"><a title="Clã Yata" href="https://www.sfrpg.com.br/post/cla-yata"><img class="size-full wp-image-13737 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/cla-yata-banner.jpg" alt="Clã Yata" width="450" height="253" /></a></p>` (Kusanagi: anexo 13228, `cla-kusanagi.jpg`; Yagami: anexo 13230, `cla-yagami.jpg`)
  - NESTS Team (membros do time listados no post `nests-team`: Kula, Foxy, K9999, Angel): banner `nests-team-banner.jpg` (anexo 13405, link `/post/nests-team`) e tags `nests team` (`term_taxonomy_id` 300) e `nests` (299). **Não** recebem o banner da NESTS.
  - NESTS (todo membro do cartel listado no post `nests` (Chefe, Executivos e Agentes) que **não** tem o banner do NESTS Team, ex.: Igniz, Ron, Zero, Krizalid, K', Maxima, Whip, Kyo-1 e Kyo-2; também leva a tag `nests`, `term_taxonomy_id` 299): `<p align="center"><a href="https://www.sfrpg.com.br/post/nests"><img class="size-full wp-image-13336 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/nests-banner.jpg" alt="NESTS" width="450" height="253" /></a></p>`

## Listas cruzadas

| Post | Lista | Quem entra |
|---|---|---|
| `art-of-fighting` | tabelas de bustos, uma por jogo, ao final da descrição daquele jogo | **todos** os lutadores de cada jogo, mesmo que já estejam em outro jogo (ver "Tabelas de personagens" na skill `imagem-sfrpg`) |
| `fatal-fury` | tabelas de bustos, uma por jogo, ao final da descrição daquele jogo (FF1 1991, FF2 1992 com o elenco de Special, FF3 1995, Garou 2006) | **todos** os lutadores de cada jogo, mesmo que já estejam em outro jogo; também linke o nome no texto do post na primeira menção |
| post do time de KoF (ex.: `american-sports`, `korea-justice`, `ikari-team`) | "Membros do Time" | todo lutador de KoF fica linkado no post do seu time (o post `the-king-of-fighters-rpg` não tem mais lista de personagens): troque o nome sem link pelo link do post |
