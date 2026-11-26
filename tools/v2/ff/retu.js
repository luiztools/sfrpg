function Retu() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);

    const tecnicas = [];

    const npc = {
        Nome: "Retu",
        Estilo: "Karatê Shotokan",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Pose de kabuki",
        Conceito: "Líder de Gangue",
        Cronica: "Final Fight 2",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Light Feet, Hurricane Kick, Air Hurricane Kick, Wheel Kick, Lightning Leg, Stepping Front Kick, Power Uppercut, Shikan Ken, Double Hit Kick, Foot Sweep",
        Combos: "Hurricane Kick para Hurricane Kick (Dizzy); Air Hurricane Kick para Shikan Ken (Dizzy); Lightning Leg para Wheel Kick; Bloqueio para Hurricane Kick",
        Gloria: 5,
        Honra: 1,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return npc;
}

const npc = calcPC(Retu());
