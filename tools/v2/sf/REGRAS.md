# Regras da franquia Street Fighter (pasta `v2/sf/`)

Complementa a skill `personagem-sfrpg`: o que estiver lá vale aqui, e estas regras valem só para personagens desta pasta.

- **Tag da franquia:** `guerreiro mundial` (`term_taxonomy_id` 110; post `guerreiros-mundiais`; não existe tag "street fighter"). **Só** para quem está no elenco jogável de um jogo principal (numerado) de Street Fighter: SF1, SF2 (e revisões), SF3, SF4, SF5 e SF6. Em SF1, como só Ryu e Ken eram jogáveis, contam todos os lutadores do torneio (Retsu, Geki, Joe, Mike, Lee, Gen, Birdie, Eagle, Adon e Sagat). Quem só foi jogável em spin-offs (Alpha, EX, crossovers...) ou nunca foi jogável (NPCs, chefes não jogáveis, personagens só da história) **não** leva.
- **Versões:** `sf1`, `sfa`, `sf2` (padrão), `sf4`, `sf5`, `sf6`, com as equivalências e a ordem de PC descritas no CLAUDE.md (`sf3` = `sf5`, `sf4` = `sf2`).
- **Street Fighter 2 é a base e a verdade.** As versões de Street Fighter 1 (`sf1`) e Alpha (`sfa`) partem da ficha de SF2 (ou da SF4, que é sinônimo, quando não há SF2):
  - Saúde no máximo 18 (valores menores ficam como estão), exceto os chefões: Sagat em SF1 e M. Bison na Alpha;
  - Chi, Força de Vontade, Honra, Glória e Posto são **1 a menos** que na ficha de SF2 (Chi e Força de Vontade nunca abaixo de 1; Honra, Glória e Posto podem chegar a 0). Ao mudar a ficha de SF2, ajuste as de SF1/Alpha.
  - Sem versão SF2/SF4, só vale o teto de Saúde.
  - Exceções decididas pelo usuário: **M. Bison** não baixa nada na Alpha (era mais forte na Alpha do que na SF2); **Cammy** fica com Honra 2 na Alpha (era uma Doll sem vontade própria).
- **Evil Ryu e Oni** têm Honra 0 e Glória 0 em todas as versões.
- **Akuma sempre tem Saúde 20**, em todos os jogos em que participa (inclusive a forma Oni). O "1 a menos" continua valendo para ele.
- **Divisão:** exceção decidida pelo usuário: Fei Long fica em "Tradicional".
- **Slugs:** `mike-sf` (Mike de SF1), `joe-sf`, `lee` (o de SF1), `akira-sf` (Akira Kazama), `seth-sf`, `laura-matsuda`, `alex-sf` (`mike`, `joe`, `akira`, `seth`, `laura` e `alex` são desambiguações).
- Modelos de personagem armado: `v2/sf/vega.js`, `v2/sf/eagle.js`. Modelo de Sensei: post `gouken`.
