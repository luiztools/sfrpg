# Regras da franquia Killer Instinct (pasta `v2/killer/`)

Complementa a skill `personagem-sfrpg`: o que estiver lá vale aqui, e estas regras valem só para personagens desta pasta.

## Origem e crédito

- Fonte: ebook **Killer Instinct** da Shotokan RPG (adaptação de Eric M. Souza e Gustavo Maru, `www.sfrpg.com.br/shotokan`), baseado no Killer Instinct (1994) da Rare.
- **Crédito obrigatório em todo post desta franquia** (o post `killer-instinct-rpg` e o de cada personagem, inclusive os que vierem a ser criados depois), em itálico, antes das imagens e banners finais:
  ```html
  <em><strong>* Fontes:</strong> adaptação extraída e modificada a partir do ebook Killer Instinct da <a href="https://www.sfrpg.com.br/shotokan">Shotokan RPG</a>, de Eric M. Souza e Gustavo Maru, baseada no game Killer Instinct da Rare. Créditos aos autores.</em>
  ```
  Personagem de Killer Instinct que não estiver no ebook (ex.: Killgore, Kim Wu, Maya, de KI2 e do KI de 2013) continua levando esse crédito, acrescido de uma frase dizendo que ele foi criado pela SF RPG Brasil a partir do jogo.

## Post da franquia

- O post da franquia é **Killer Instinct RPG** (slug `killer-instinct-rpg`, categoria Adaptação, tags `adaptacao` e `killer instinct`). Ele traz a introdução e o cenário do ebook, a história da série (um `<h3>` por jogo, cada um com sua tabela de bustos), as regras de Combos e Combo Breaker e as Sugestões de Leitura.
- **Tabelas de bustos por jogo:** cada `<h3>` da história (Killer Instinct (1994), Killer Instinct 2 (1996), Killer Instinct (2013)) termina com a tabela de todos os lutadores daquele jogo, na ordem do elenco do jogo (formato em "Tabelas de personagens" da skill `imagem-sfrpg`). Não há listas simples nem tabela geral "Os Personagens". Personagem novo entra na tabela de cada jogo em que luta. Convidados de outras franquias não entram; as formas transformadas (Shadow Jago, Shin Hisako) ficam fora da tabela, numa linha logo depois dela. Kan-Ra usa a bandeira do Iraque (anexo 15010) com `title="Babilônia (atual Iraque)"`.
- Links para a franquia apontam sempre para `/post/killer-instinct-rpg`. O slug `killer-instinct` redireciona para esse post (`_wp_old_slug` no post 14658).

## Ultratech (equipe)

- O post `ultratech` (ID 14855, categoria Personagens, tags `equipe`, `killer instinct` e `ultratech`, `term_taxonomy_id` 333) segue o modelo de equipe do post `mishima-zaibatsu`: Chefe, Objetivo, Funcionários e agentes, Forças, Inimigos e um parágrafo por jogo. Está na lista "Veja alguns exemplos de Equipes" do post `equipes`.
- **Membros** (quem luta pela Ultratech): Cinder, Riptor, Fulgore, Spinal, Eyedol, Sadira e ARIA. Eles têm `Equipe: "Ultratech"` e `Time: "Ultratech"` na ficha (logo depois de `Cronica`). **Todo personagem com `Equipe` ou `Time` Ultratech leva a tag `ultratech`**, assim como o próprio post da organização. Glacius (prisioneiro), Sabrewulf (atraído pela promessa de cura), T.J. Combo (inimigo), Kilgore (protótipo rebelado e reprogramado como aliado) e Aganos (dominado e depois libertado) só são citados no post, sem a tag nem os campos.
- **Banner da Ultratech** em todo post de membro, logo abaixo do banner de Killer Instinct RPG (o post da Ultratech não leva; a destacada dele é `ultratech-fabrica.webp`, anexo 14858, também exibida no texto):
  ```html
  <p align="center"><a href="https://www.sfrpg.com.br/post/ultratech"><img class="size-full wp-image-14857 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/ultratech-banner.jpg" alt="Ultratech" width="450" height="253" /></a></p>
  ```
- Nos posts de Killer Instinct, a primeira menção à Ultratech (fora de citações) linka para `/post/ultratech`.

## Ficha

- Uma única versão (`Cronica: "Killer Instinct"`), sem `age`; o arquivo termina com `const npc = calcPC(<Funcao>());`.
- Divisão: o ebook não define; use `Divisao: "Livre"`, ou `"Duelistas"` para quem porta arma branca ou tem Cibernético (Jago, Orchid, T.J. Combo, Riptor, Fulgore, Spinal, Chief Thunder, Eyedol, Eagle).
- **Posto conforme o PC** (o ebook não define): use a média de PC por Posto das fichas do site (Posto 6 ≈ 185, 7 ≈ 194, 8 ≈ 202, 9 ≈ 214, 10 ≈ 232) e fique com o mais próximo. Posto 9 só para a elite canônica (Fulgore, sub-chefe; Eyedol, chefe final) e Posto 10 só para o Jago, o "Ryu" do mundo de Killer Instinct, o topo do topo (decisão do usuário). Valores atuais: Glacius 6; T.J. Combo, Riptor, Sabrewulf e Eagle 7; Orchid, Cinder, Spinal, Chief Thunder, Kim Wu, Maya, Tusk, Sadira, Kan-Ra, Omen, Aganos, Hisako, Mira e Kilgore 8; Fulgore, Eyedol, Gargos e ARIA 9 (chefes); Jago 10. Quem passaria de 9 pelo PC sem ser elite fica em 8 (como Chief Thunder, 221).
- **Armas sem Técnica no ebook:** o lutador recebe a Técnica da arma no mesmo nível do seu Soco (Chief Thunder: Faca 5 para as machadinhas; Fulgore: Garra 5 para as garras).
- Estilos do ebook adaptados: Kickboxing Ocidental e Kickboxing Alienígena → `Kickboxe`; "Dezenas de estilos programados" (Fulgore) e "Desconhecido" (Eyedol) → `Jeet Kune Dô`. Riptor (Forças Especiais no ebook) luta `Wrestling`; é Híbrido Animal (banner e tabela do post `hibrido-animal`) e tem Cibernético 4 no lugar do Foco (implantes da Ultratech), com banner de Cibernéticos e item na lista do post `cibernetico`. Gargos é `Híbrido Animal (Demônio)` 5 (Claw, Horn e Tail Slash como as três básicas; Flight sem gastar Chi pelas asas, como Devil Jin/Kazuya; Portal Attack = Portal Punch; servos gárgulas = Aliados), com banner e tag `hibrido animal`.
- O antecedente **Espectro** (Spinal, Hisako) é explicado na seção "Espectros" do post `netherrealm` (`netherrealm#espectros`); na ficha, o link vai para lá pelo mapa `secoes` de `GeraLinkValido`. Banner e tag seguem a regra de Espectro do `v2/mk/REGRAS.md`.
- As manobras novas do ebook (Wind Kick, Tiger Attack, Elemental Embrace, Invisible Fire, Ground Uppercut, Energy Absorption) estão em `manobras.js` e são descritas no post do personagem que as apresenta, sem post próprio; o slug de cada uma redireciona para esse post por `_wp_old_slug`. O Iaijutsu do ebook não foi cadastrado: no site ele é o [Battojutsu](https://www.sfrpg.com.br/post/battojutsu) (`/post/iaijutsu` redireciona para ele).

## Post do personagem

- **Tag da franquia (obrigatória em todo personagem desta pasta):** `killer instinct` (`term_taxonomy_id` 329).
- **Botão de planilha:** o genérico `planilha` (anexo 13516), com `title="Planilha em Killer Instinct"` e o link `_character.php?name=killer/<slug>` (sem `age`).
- **Nascimento:** o jogo não tem ano; use `? (<idade> anos em Killer Instinct)`, com as idades dos perfis oficiais. **Quando as versões do jogo divergirem** (altura, peso, idade), use os dados da mais recente, citando-a: `? (50 anos no Killer Instinct de 2013)` (Sabrewulf, Orchid).
- **Tag obrigatória em todo post de Killer Instinct** (o post central `killer-instinct-rpg` e todos os personagens): `killer instinct`. **Banner obrigatório em todo post de personagem** (não no post central): ao final do post, o banner `killer-instinct-rpg.jpg` (anexo 14853, 450x253) com link para o post central Killer Instinct RPG. Ele fica logo depois do banner do personagem:
  ```html
  <p align="center"><a href="https://www.sfrpg.com.br/post/killer-instinct-rpg"><img class="size-full wp-image-14853 aligncenter" src="https://www.sfrpg.com.br/wp-content/uploads/2026/11/killer-instinct-rpg.jpg" alt="Killer Instinct RPG" width="450" height="253" /></a></p>
  ```
  O logo `killer-instinct-banner.jpg` (anexo 14692) é só a imagem do topo e a destacada do post central.
- **Arena:** a lista "Locais de Conflito" do post `arena` tem um bloco **Killer Instinct**; novas arenas da franquia entram nele.
- **Personagens fora do ebook** (KI2 e KI de 2013): Gargos, Kim Wu, Maya, Tusk, Sadira, Kan-Ra, Omen, Aganos, Hisako, ARIA, Mira, Kilgore e Eagle. As fichas foram calibradas pelas de lutadores de estilo parecido (ex.: Kim Wu ← Chin; Sadira ← Vega; Kan-Ra ← Anakaris/Shang Tsung; Mira ← Demitri/Morrigan; Kilgore e ARIA ← Fulgore/Cyrax; Eagle ← Nightwolf; Gargos ← Onaga/Shao Kahn; Aganos ← elementais da terra como Tremor e Urien, com Elemental (Terra) 5 e Foco 5). Sem estilo definido nos jogos → `Jeet Kune Dô`; Kan-Ra → `Baraqah`, Sadira → `Thai Kickboxe` (Muay Boran), Eagle → `Luta-Livre Nativo Americana` (como o irmão Chief Thunder; com Cibernético 2 e Foco 0, pois nos jogos foi "modificado pela Ultratech e por Glacius" (glifos luminosos no corpo), com Cibernético no lugar do Foco; a águia mecânica Weyekin é o antecedente Mascote e o arco tecnológico é só arma, Arco Curto; o post explica isso em "Eagle é cibernético?"), Aganos (golem de Micenas) → `Pankration`. Os convidados (Rash, Arbiter, General RAAM) não entram.
- **Formas transformadas:** Shadow Jago (`age=shadow`, função `ShadowJagoKI` em `jago.js`, seção no post do Jago) e Shin Hisako (`age=shin`, em `hisako.js`, seção no post da Hisako).
- **Bustos:** todos os personagens têm `<slug>-face.jpg` na biblioteca (os de KI2/2013 recortados das imagens dos posts; Gargos ficou em baixa resolução). O post central já tem todos. **Pendente:** os personagens novos ainda não entraram nas outras tabelas (Duelistas, espadas, facas, armas a distância).
- **Slugs:** `jago`, `orchid` (ficha `black-orchid.js`; `/post/black-orchid` redireciona), `cinder`, `glacius`, `tj-combo`, `sabrewulf`, `riptor`, `fulgore`, `spinal`, `chief-thunder`, `eyedol`, `gargos`, `kim-wu`, `maya`, `tusk`, `sadira`, `kan-ra`, `omen`, `aganos`, `hisako`, `aria`, `mira`, `kilgore`, `eagle-ki`. O Eagle de Killer Instinct (irmão do Chief Thunder) é `eagle-ki` (`eagle` é o Eagle de Street Fighter).
