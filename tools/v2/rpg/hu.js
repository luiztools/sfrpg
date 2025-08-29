function Hu() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem =
    {
        Nome: "Hu",
        Estilo: "Thai Kickboxe",
        Escola: "Dojô de Sagat",
        Time: "Punho das Sombras",
        Equipe: "Shadaloo",
        Conceito: "Aluno furioso",
        Jogador: "NPC",
        Equipe: "Nenhuma",
        Assinatura: "Fecha os punhos com força e grita",
        Forca: 5,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 4,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Gloria: 8,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 18,
        Posto: 9,
        Divisao: "Livre",
        ManobrasEspeciais: "Elbow Smash, Toughskin, Dragon Punch, Double Dread Kick, Flying Knee Thrust, Wounded Knee, Maka Wara, Punch Defense, Head Butt Hold, Knee Basher, Jump, Air Smash",
    };
    return personagem;
}

function HuOrochi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem =
    {
        Nome: "Hu (Orochi)",
        Estilo: "Thai Kickboxe",
        Escola: "Dojô de Sagat",
        Time: "Punho da Sombras",
        Equipe: "Shadaloo",
        Conceito: "Sangue de Orochi",
        Jogador: "NPC",
        Equipe: "Nenhuma",
        Assinatura: "Mata o oponente",
        Forca: 6,
        Destreza: 5,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 4,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Gloria: 8,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 9,
        Divisao: "Livre",
        ManobrasEspeciais: "Elbow Smash, Toughskin, Dragon Punch, Double Dread Kick, Flying Knee Thrust, Wounded Knee, Maka Wara, Punch Defense, Head Butt Hold, Knee Basher, Jump, Air Smash",
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'orochi')
    npc = HuOrochi();
else
    npc = Hu();

npc = calcPC(npc);