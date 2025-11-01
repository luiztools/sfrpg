function Kintaro() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Shokan", 5);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Kintaro",
        Estilo: "Boxe",
        Escola: "Nenhuma",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Guerreiro de Kuatan",
        Assinatura: "Levanta o Braço",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 2",
        Forca: 10,
        Destreza: 4,
        Vigor: 10,
        Carisma: 0,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 8,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 5,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 7,
        Apresamento: 2,
        Esportes: 6,
        Foco: 6,
        Armas: armas,
        Divisao: "Livre",
        Posto: 9,
        Gloria: 8,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Brain Cracker, Sonic Boom, Power Uppercut, Flying Heel Stomp, Grappling Defense, Double Hit Punch",
        Combos: "Jab para Brain Cracker (dizzy); Flying Heel Stomp para Power Uppercut; Bloqueio para Sonic Boom; Forward para Forward para Roundhouse (dizzy); Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Kintaro());