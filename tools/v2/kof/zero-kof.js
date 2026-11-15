function ZeroClone() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "Zero Clone (Ling)",
        Estilo: "Forças Especiais",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Bigodes",
        Conceito: "Espião",
        Cronica: "KoF 2000",
        Equipe: "NESTS",
        Time: "Nenhum",
        Forca: 7,
        Destreza: 6,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 7,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 2,
        Labia: 7,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 4,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Elemental Rage, Shock Treatment, Rekka Ken, Flash Kick, Face Slam, Maka Wara, Energy Reflection, Missile Reflection, Haymaker, Repeating Fireball, Fireball, Levitation",
        Combos: "",
        Gloria: 7,
        Honra: 1,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

function ZeroOriginal() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);
    antecedentes[3] = newCaracteristica("Mascote", 3);

    const personagem = {
        Nome: "Zero (Original)",
        Estilo: "Forças Especiais",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Mascote preto",
        Conceito: "Espião",
        Cronica: "KoF 2001",
        Equipe: "NESTS",
        Time: "Nenhum",
        Forca: 7,
        Destreza: 6,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 2,
        Labia: 5,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 4,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Elemental Rage, Shock Treatment, Rekka Ken, Flash Kick, Face Slam, Maka Wara, Energy Reflection, Missile Reflection, Haymaker, Repeating Fireball, Fireball, Levitation",
        Combos: "",
        Gloria: 7,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'kof2001')
    npc = ZeroOriginal();
else
    npc = ZeroClone();

npc = calcPC(npc);
