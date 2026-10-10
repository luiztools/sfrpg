function Callman() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 3);

    const tecnicas = [];

    const npc =
    {
        Nome: "Callman",
        Estilo: "Savate",
        Conceito: "Barman",
        Escola: "Professor Particular",
        Time: "Skull Cross",
        Equipe: "Skull Cross",
        Assinatura: "Cara de Mau",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 1,
        Labia: 3,
        Manha: 3,
        LutaCega: 3,
        Lideranca: 3,
        Conducao: 3,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        Divisao: "Estilo Livre",
        Posto: 8,
        Gloria: 4,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Wall Spring, Jumping Shoulder Butt, Kippup, Wounded Knee, Punch Defense, Throw, Push Body, Kick Defense, Foot Sweep",
        Combos: "Wall Spring para Jumping Shoulder Butt para Foot Sweep (Dizzy); Punch Defense para Push Body; Kick Defense para Push Body; Fierce para Wounded Knee (Dizzy)",
    };
    return npc;
}

const npc = calcPC(Callman());