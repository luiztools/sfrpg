function Shinnok() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Arena", 5);
    antecedentes[4] = newCaracteristica("Elemental", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Naginata";

    const personagem = {
        Nome: "Shinnok",
        Estilo: "Kabaddi (Bojutsu)",
        Escola: "Deuses Anciões",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Deus Ancião Caído",
        Time: "Netherrealm",
        Cronica: "Mortal Kombat 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 7,
        Raciocinio: 7,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 8,
        Perspicacia: 7,
        Manha: 4,
        Labia: 4,
        LutaCega: 8,
        Conducao: 0,
        Lideranca: 6,
        Seguranca: 0,
        Furtividade: 6,
        Sobrevivencia: 8,
        Arena: 6,
        Computador: 0,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 8,
        Estilos: 7,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 7,
        Apresamento: 5,
        Esportes: 4,
        Foco: 7,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double-Hit Kick, Power Uppercut, Throw, Face Slam, Weapon Sweep, Metamorphose, The Hand From Hell, Absorb Soul, Improved Yoga Teleport, Improved Fireball",
        Combos: "Nenhum",
        Gloria: 10,
        Honra: 0,
        Chi: 15,
        ForcaVontade: 15,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return personagem;
}

function ShinnokCorrompido() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Arena", 5);
    antecedentes[4] = newCaracteristica("Elemental", 7);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Naginata";

    const personagem = {
        Nome: "Shinnok Corrompido",
        Estilo: "Kabaddi (Bojutsu)",
        Escola: "Deuses Anciões",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Deus Ancião Corrompido",
        Time: "Netherrealm",
        Cronica: "Mortal Kombat X",
        Forca: 7,
        Destreza: 8,
        Vigor: 7,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 8,
        Raciocinio: 8,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 8,
        Perspicacia: 7,
        Manha: 4,
        Labia: 4,
        LutaCega: 8,
        Conducao: 0,
        Lideranca: 6,
        Seguranca: 0,
        Furtividade: 6,
        Sobrevivencia: 8,
        Arena: 6,
        Computador: 0,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 8,
        Estilos: 7,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 8,
        Apresamento: 6,
        Esportes: 5,
        Foco: 8,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double-Hit Kick, Power Uppercut, Throw, Face Slam, Weapon Sweep, Metamorphose, The Hand From Hell, Absorb Soul, Improved Yoga Teleport, Improved Fireball",
        Combos: "Nenhum",
        Gloria: 10,
        Honra: 0,
        Chi: 15,
        ForcaVontade: 15,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk4')
    npc = calcPC(Shinnok());
else if (getParameterByName('age') === 'mkx')
    npc = calcPC(ShinnokCorrompido());