function G() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Elemental", 5);
    antecedentes[4] = newCaracteristica("Recursos", 4);

    const talentos = [];

    const personagem = {
        Nome: "G",
        Estilo: "Jeet Kune Do",
        Escola: "Várias",
        Jogador: "NPC",
        Assinatura: "Cartola Preta",
        Conceito: "Político",
        Cronica: "Street Fighter 5",
        Equipe: "",
        Time: "",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 4,
        NovosTalentos: talentos,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Throw, Head Butt, Buffalo Punch, Power Uppercut, Flaming Fist, Fire Strike, Back Breaker, Wheel Kick, Spinning Back Fist, Dashing Uppercut, Dashing Punch, Suplex, Double Hit Kick, Foot Sweep, Wall, Fireball, Flying Fireball, Air Smash, Power Up, Fist Sweep, Accuracy, Stomach Pump",
        Combos: "Strong para Buffalo Punch para P. Uppercut; Dashing Punch para Flaming Fist Strong; Back Breaker para Throw",
        Gloria: 6,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return calcPC(personagem);
}
const npc = G();