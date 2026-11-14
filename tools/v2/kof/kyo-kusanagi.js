function KyoKusanagi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const personagem = {
        Nome: "Kyo Kusanagi",
        Estilo: "Karatê Shotokan",
        Escola: "Clã Kusanagi",
        Jogador: "NPC",
        Assinatura: "Fogo",
        Conceito: "Estudante",
        Cronica: "The King of Fighters",
        Equipe: "Clã Kusanagi",
        Time: "Japan Hero",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Dragon Punch, Flaming Dragon Punch, Fireball, Hurricane Kick, Punch Defense, Deflecting Punch, Flaming Fist, Fire Strike, Dashing Clothesline, Double Hit Kick, Foot Sweep, Kippup, Flying Tackle, Wheel Kick, Elemental Rage",
        Combos: "Flying Tackle para Elemental Rage; Flaming Fist Jab para Flaming Fist Strong para Flaming Fist Strong (Dizzy); Flaming Fist Jab para Flaming Fist Strong para Flaming Fist Roundhouse (Dizzy); Flaming Fist Jab para Flaming Fist Strong para Flaming Dragon Punch (Dizzy)",
        Gloria: 9,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KyoKusanagi();

npc = calcPC(npc);
