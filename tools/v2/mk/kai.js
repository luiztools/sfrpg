function Kai() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    const talentos = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const armas = ["Faca"];

    const personagem = {
        Nome: "Kai",
        Estilo: "Jeet Kune Dô",
        Escola: "Templo da Luz",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Monge",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat",
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
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 1,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        NovosTalentos: talentos,
        Estilos: 1,
        Antecedentes: antecedentes,
        Armas: armas,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 6,
        ManobrasEspeciais: "Jump, Kippup, Backflip, Foot Sweep, Power Uppercut, Throw, Fireball, Flying Fireball, Slide Kick, Hair Throw, Tumbling Attack, Dragon Punch, Back Breaker",
        Combos: "Strong - Strong - Power Uppercut; Jumping Short - Flying Fireball - Slide Kick; Drunken Monkey Roll - Fireball - Flying Fireball",
        Gloria: 6,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Kai();
npc = calcPC(npc);