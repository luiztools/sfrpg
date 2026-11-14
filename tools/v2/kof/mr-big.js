function MrBig() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 6);

    const armas = [];
    armas[0] = "Tonfa de Ferro";

    const personagem = {
        Nome: "Mr. Big",
        Estilo: "Bojutsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Mafioso",
        Cronica: "Art of Fighting",
        Equipe: "Howard Connection",
        Time: "South Town Team",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Head Butt, Jump, Flying Head Butt, Throw, Fireball, Weapon Uppercut, Shock Treatment, Triple Blow",
        Combos: "Fierce para Fireball para Weapon Uppercut (Dizzy)",
        Gloria: 4,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

function BigAoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Fama", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Tonfa de Ferro";

    const personagem = {
        Nome: "Mr. Big",
        Estilo: "Bojutsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Mafioso",
        Cronica: "Art of Fighting",
        Equipe: "Howard Connection",
        Time: "South Town Team",
        Forca: 5,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 3,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Head Butt, Jump, Flying Head Butt, Throw, Fireball, Weapon Uppercut, Shock Treatment, Triple Blow",
        Combos: "Fierce para Fireball para Weapon Uppercut (Dizzy)",
        Gloria: 3,
        Honra: 0,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 7
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'aof')
    npc = BigAoF();
else
    npc = MrBig();

npc = calcPC(npc);