function JeffAoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Sensei", 5);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Fama", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const personagem = {
        Nome: "Jeff Bogard",
        Estilo: "Jeet Kune Dô",
        Escola: "Tung Fu Rue",
        Jogador: "NPC",
        Assinatura: "Aperta os punhos antes da luta",
        Conceito: "Pai e mestre",
        Cronica: "Art of Fighting",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 3,
        Labia: 3,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Fireball, Energy Ball, Shockwave, Burn Knuckle, Power Uppercut, Throw, Jump, Kippup, Breakfall, Foot Sweep, Flying Knee Thrust, Spinning Back Fist, Wheel Kick, Handstand Kick, Snake Strike, Hyper Tackle, Flying Body Spear, Gekiro, Final Wave",
        Combos: "Fireball para Fireball; Flying Knee Thrust para Burn Knuckle (Dizzy); Burn Knuckle para Fireball (Dizzy); Hyper Tackle para Shockwave (Dizzy); Short para Jab para Burn Knuckle (Dizzy); Foot Sweep para Spinning Back Fist para Wheel Kick; Hyper Tackle para Power Uppercut para Energy Ball (Dizzy); Short para Foot Sweep para Flying Body Spear; Jumping Forward para Strong para Snake Strike (Dizzy); Jumping Forward para Handstand Kick para Hyper Tackle",
        Gloria: 8,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 10
    };
    return personagem;
}

let npc = JeffAoF();

npc = calcPC(npc);
