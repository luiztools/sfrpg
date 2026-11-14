function SaisyuKusanagi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const personagem = {
        Nome: "Saisyu Kusanagi",
        Estilo: "Karatê Shotokan",
        Escola: "Clã Kusanagi",
        Jogador: "NPC",
        Assinatura: "Chamas nos punhos",
        Conceito: "Mestre",
        Cronica: "The King of Fighters",
        Equipe: "Clã Kusanagi",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 4,
        Labia: 4,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Dragon Punch, Flaming Dragon Punch, Fireball, Flaming Fist, Fire Strike, Hurricane Kick, Spinning Back Fist, Foot Sweep, Kippup, Flying Tackle, Elemental Rage",
        Combos: "Flaming Fist Fierce para Flaming Dragon Punch; Flaming Fist Jab para Flaming Fist Strong para Flaming Fist Fierce (Dizzy); Flying Tackle para Elemental Rage; Short para Strong para Flaming Dragon Punch",
        Gloria: 0,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = SaisyuKusanagi();

npc = calcPC(npc);
