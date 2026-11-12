function HanzoFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);

    const personagem = {
        Nome: "Hanzo Shiranui",
        Estilo: "Ninjitsu",
        Escola: "Shiranui-ryu",
        Jogador: "NPC",
        Assinatura: "Cruza os braços e observa",
        Conceito: "Mestre Ninja",
        Cronica: "Fatal Fury",
        Equipe: "Clã Shiranui",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 1,
        Labia: 4,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Wall Spring, Throw, Elemental Explosion, Flaming Fist, Cartwheel Kick, Air Throw, Breakfall, Flying Body Spear, Hyper Tackle, Energy Ball, Fire Strike, Double Hit Kick, Thigh Press, Hair Throw, Flash Kick, Heel Stamp, Handstand Kick, Fireball, Power Uppercut, Snake Strike",
        Combos: "Cartwheel Kick para Hyper Tackle; Fierce para Elemental Explosion; Wall Spring para Flying Body Spear para Flying Body Spear (Dizzy); Jumping Forward para Handstand Kick para Double Hit Kick (Dizzy); Double Hit Kick para Hyper Tackle; Heel Stamp para Flying Body Spear; Hyper Tackle para Power Uppercut para Energy Ball (Dizzy); Short para Foot Sweep para Flying Body Spear; Jumping Forward para Strong para Snake Strike (Dizzy); Jumping Forward para Handstand Kick para Hyper Tackle",
        Gloria: 6,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return personagem;
}

let npc = HanzoFF();

npc = calcPC(npc);
