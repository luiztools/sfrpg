function LiPak() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const lipak = {
        Nome: "Li Pak",
        Estilo: "Kung Fu",
        Escola: "Lótus Branca",
        Jogador: "NPC",
        Assinatura: "Kin Lai",
        Conceito: "Monge Andarilho",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 3,
        Manha: 1,
        LutaCega: 3,
        Lideranca: 4,
        Furtividade: 3,
        Sobrevivencia: 1,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 6,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Drunken Monkey Roll, Jump, Kippup, Wall Spring, Foot Sweep, Slide Kick, Monkey Grab Punch, Power Uppercut, Fireball, Flying Fireball, Throw, Hair Throw",
        Combos: "Strong para Strong para Power Uppercut; Jump + Forward para Flying Fireball para Slide Kick; Drunken Monkey Roll para Fireball para Flying Fireball",
        Gloria: 6,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return lipak;
}

let npc = LiPak();

npc = calcPC(npc);