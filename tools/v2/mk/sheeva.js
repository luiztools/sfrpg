function Sheeva() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Shokan", 4);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem = {
        Nome: "Sheeva",
        Estilo: "Boxe",
        Escola: "Kuatan",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Serva de Kuatan",
        Cronica: "Mortal Kombat 3",
        Equipe: "Outworld",
        Time: "Outworld",
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
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        NovosTalentos: talentos,
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
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        Armas: armas,
        ManobrasEspeciais: "Jump, Power Uppercut, Fireball, Flying Heel Stomp, Foot Sweep",
        Combos: "Fireball para Flying Heel Stomp (dizzy); Short para Forward para Jab (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Power Uppercut (dizzy); Jab para Jab para Power Uppercut (dizzy)",
        Gloria: 4,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = calcPC(Sheeva());