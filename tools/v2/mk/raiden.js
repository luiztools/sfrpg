function RaidenMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Elemental", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Martelo", 5);

    const armas = ["Martelo"];

    const personagem = {
        Nome: "Raiden",
        Estilo: "Jeet Kune Dô",
        Escola: "Elder Gods",
        Jogador: "NPC",
        Assinatura: "Flashes de eletricidade",
        Conceito: "Deus do Trovão",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 5,
        Investigacao: 5,
        Medicina: 5,
        Misterios: 5,
        NovosTalentos: talentos,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Shock Treatment, Yoga Teleport, Flying Head Butt, Lightning, Psychokinetic Channeling, Improved Yoga Teleport",
        Combos: "Strong para Power Uppercut para Roundhouse (dizzy); Throw para Flyng Head Butt; Jab para Jab para Power Uppercut (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Jab (Dizzy)",
        Gloria: 10,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return personagem;
}

let npc = RaidenMK3();
npc = calcPC(npc);