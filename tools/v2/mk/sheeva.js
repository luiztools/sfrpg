function Sheeva() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Shokan", 4);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Sheeva",
        Estilo: "Boxe",
        Escola: "Kuatan",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Serva de Kuatan",
        Assinatura: "Cumprimento oriental",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 3,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 3,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        Armas: armas,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 4,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Jump, Power Uppercut, Fireball, Flying Heel Stomp, Foot Sweep",
        Combos: "Fireball para Flying Heel Stomp (dizzy); Short para Forward para Jab (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Power Uppercut (dizzy); Jab para Jab para Power Uppercut (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Sheeva());