# CLAUDE.md

Ferramentas do **Street Fighter RPG Brasil** (sfrpg.com.br): fichas de personagens/NPCs e cálculo de manobras do sistema Street Fighter RPG. Todo o conteúdo (código, nomes de campos, textos) é em **português**, exceto nomes de manobras, que ficam em inglês (ex.: "Dragon Punch").

Não há build, bundler, testes nem package.json. É HTML + JavaScript puro (jQuery), servido estaticamente em produção a partir de `https://www.sfrpg.com.br/tools/`.

## Estrutura

- [scripts.js](scripts.js) — renderização da ficha e regras gerais: `AutoGeradorP(npc)` (gera o HTML da ficha), `calcPC(char)` (pontos de criação/XP), `getParameterByName`, `newCaracteristica(nome, valor)`, `CarregarEdicao` etc.
- [manobras.js](manobras.js) — base de dados das manobras (`const manobras = { "Nome": { Tecnica, ModVel, ModDano, ModMov, Chi, FdV, Sistema } }`) e de armas (`const armas`), mais os cálculos derivados: `prepareNpc`, `carregarTabela(npc)` (tabela de manobras com Vel/Dano/Mov finais), `carregarCartas(npc)`, `calculaDano/Velocidade/Movimento`, `getPCManobra(nome)`.
- [StyleSheet.css](StyleSheet.css) + [sheet-img/](sheet-img/) — visual da ficha (imagens de bolinhas de pontuação, logo). [styles.css](styles.css) é CSS do tema WordPress do site, não da ficha.
- [gerador.html](gerador.html) — formulário do gerador de personagem. [personagem.html](personagem.html) — página antiga de exibição de personagem.
- [v2/](v2/) — fichas de personagens, uma por arquivo:
  - raiz: Street Fighter; subpastas por franquia: `ff/` (Final Fight), `kof/`, `mk/` (Mortal Kombat), `tekken/`, `kungfudo/`, `mma/`, `rpg/` (NPCs originais/de campanhas).
  - [v2/_framework.html](v2/_framework.html) é o template; [v2/_character.php](v2/_character.php) lê `?name=<arquivo>` e substitui `[NPCHERE]` pelo conteúdo do `.js`.
- Arquivos de apoio (não usados em runtime): `Planilha de Manobras Especiais - Shotokan.csv` (fonte das manobras; convertida para JSON e colada em `manobras.js`), `ajustes tabelas de manobras.txt` (notas de renomeações/custos de manobras), `champs.txt` (regras de balanceamento para criar manobras).

## Rodando localmente

```sh
cd v2 && php -S localhost:8000
# http://localhost:8000/_character.php?name=ryu&age=sfa
# http://localhost:8000/_character.php?name=mk/scorpion&age=mkx
```

Atenção: `_framework.html` carrega `manobras.js`, `scripts.js` e o CSS **da produção** (sfrpg.com.br), não os arquivos locais. Para testar alterações nesses arquivos localmente, aponte temporariamente o template para os arquivos locais (e não commite isso).

Parâmetros de query: `age` (versão/era do personagem), `format=json` (dump do objeto) e `format=cards` (cartas de manobras).

## Formato de uma ficha em `v2/`

Arquivos `.js` (formato atual) definem uma função por versão do personagem e terminam escolhendo uma pelo parâmetro `age`, sempre atribuindo à variável global `npc` e passando por `calcPC`:

```js
function RyuSF2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 5);
    return {
        Nome: "Ryu", Estilo: "Karate Shotokan", Forca: 5, /* ... */
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Dragon Punch, Fireball, Jump",   // separadas por vírgula, nomes iguais às chaves de `manobras`
        Combos: "Jab para Fireball (Dizzy), Short para Short", // "para" entre manobras, "(Dizzy)" quando aplicável
        Chi: 9, ForcaVontade: 9, Saude: 18, /* ... */
    };
}
let npc;
if (getParameterByName('age') === 'sfa') npc = RyuSFZ3();
else npc = RyuSF2();
npc = calcPC(npc);
```

- Campos sem acento (`Forca`, `Manipulacao`, `Raciocinio`...). Opcionais: `NovasTecnicas`, `NovosTalentos`, `NovasPericias`, `NovosConhecimentos` (arrays de `newCaracteristica`) e `Armas` (array de nomes de `armas`).
- Valores comuns de `age`: `sf1`, `sf2` (padrão), `sfa`, `sf4`, `sf5`, `sf6`, `mk2`, `mk3`, `mk4`, `mkx`.
- `sf3` é sinônimo de `sf5` e `sf4` é sinônimo de `sf2`: a ficha com versão SF5 testa `=== 'sf5' || === 'sf3'`, a com versão SF2 explícita testa `=== 'sf2' || === 'sf4'` (sem SF2, uma versão SF4 testa `=== 'sf4' || === 'sf2'`). Nenhum personagem tem versões SF3 e SF5, ou SF2 e SF4, separadas. O PC das versões cresce na ordem dos jogos: SF1/Alpha (`sfa`) < SF2/SF4 < SF5/SF3 < SF6 (exceção: M. Bison é mais forte na Alpha).
- Antecedentes "únicos" (Elemental, Híbrido Animal, Tarkatan, Satsui no Hadou, Psycho Power...) afetam manobras; ver lista em `prepareNpc` em [manobras.js](manobras.js).
- Muitas fichas antigas (principalmente em `v2/rpg/` e `v2/mma/`) ainda são `.html` autocontidas. O caminho atual é migrar para `.js` no formato acima (remover o `.html` e criar o `.js` equivalente).

## Convenções e cuidados

- Ao adicionar/alterar manobra, edite o objeto `manobras` em [manobras.js](manobras.js). O nome usado em `ManobrasEspeciais` precisa bater exatamente com a chave; manobra (ou arma) não encontrada ainda vale 1 PC e aparece na tabela sem cálculos, com a mensagem de erro em vermelho na coluna Especial (`erroTabela`), sem interromper a montagem da tabela.
- `ModVel`/`ModDano`/`ModMov` podem ser número ou string (`"Um"`, `"Nenhum"`, `"Especial"`, `"0/0/0"` para multi-hit). `ModMov: "+<Técnica>"` (ex.: `"+Foco"`) soma o valor daquela técnica do personagem no movimento final (Esportes + Foco); no PC da manobra vale +2 fixo (o PC da manobra nunca usa atributos ou técnicas da ficha). Já `ModMov: "<Técnica>+N"` (ex.: `"Foco+2"`, Ashura Senku) usa a técnica no lugar de Esportes no movimento final (Foco + 2); no PC da manobra só conta o N. O PC da manobra (`getPCManobra`/`calculaPCManobra`; mede a eficiência em combate, não é custo) vem dos campos (sem `Vantagens`/`Desvantagens`, eles são deduzidos do texto de `Sistema` por regex): modificadores (`ModDano` numérico soma todos os hits, com +2 em cada; sem dano vale -2; `"Especial"` vale +1), hits do `ModDano`, `Alcance` (só quando o `ModDano` é numérico), `Vantagens`/`Desvantagens` (+1/-1 cada; `Ignora Vigor` e `Anula Ataque` valem +2, `Área`, `Aérea` e `Agachamento` valem 0 (`Esquiva de Projétil` vale +1), a desvantagem `Condição Rara` vale -3; nomes repetidos contam uma vez), Chi/FdV (custo total 1 vale -1, 2 vale -3) e, nas manobras "Especial", o campo `PC` (sem ele valem 1). Regras completas na skill `manobra-sfrpg`. Na ficha (`calcPC`), o PC soma atributos (Força, Destreza, Vigor, Percepção, Inteligência, Raciocínio), técnicas (Elemental ou Cibernético substituem o Foco se forem maiores; Híbrido Animal substitui o menor entre Apresamento e Esportes se for maior que ele), FdV, Chi, Saúde, +1 se tiver Satsui no Hadou ou Sangue de Orochi (os demais antecedentes não contam), combos ("para", "(Dizzy)", "2x", "3x") e só as 10 manobras de maior PC (incluindo as básicas com a melhor arma do personagem); as demais são ignoradas.
- Regras de balanceamento de manobras novas estão em [champs.txt](champs.txt).
- `manobras.js` e `scripts.js` são UTF-8 **com BOM**; preserve o encoding e os acentos.
- Indentação: tabs em `manobras.js`, 4 espaços em `scripts.js` e nas fichas.
- Após mudar `manobras.js`/`scripts.js`, atualize o cache-buster `?date=AAAAMMDDhhmm` nos `<script>` de [v2/_framework.html](v2/_framework.html) e [gerador.html](gerador.html).
- `v2/wp-config.php` é configuração do WordPress; não leia nem exponha seu conteúdo.
- Mensagens de commit em português, curtas e descritivas (ex.: "adaptações da Shotokan finalizadas").
