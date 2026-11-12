function RalfJones() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Faca", 3);
    tecnicas[2] = newCaracteristica("Arremesso", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);

    const armas = [];
    armas[0] = "Granada";

    const personagem = {
        Nome: "Ralf Jones",
        Estilo: "Forças Especiais",
        Escola: "Exército Americano",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Militar em atividade",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Ikari Team",
        Forca: 6,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 4,
        Labia: 4,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Hyper Fist, Tameshiwari, Turn Punch, Flying Body Spear, Head Butt, Power Uppercut, Foot Sweep, Spinning Back Fist, Spinning Knuckle, Flying Tackle, Brain Cracker",
        Combos: "Bloqueio para Spinning Knuckle para Power Uppercut (Dizzy); Hyper Fist para Power Uppercut; Flying Tackle para Brain Cracker para Turn Punch (Dizzy); Jab para Forward para Hyper Fist",
        Gloria: 7,
        Honra: 4,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = RalfJones();

npc = calcPC(npc);
