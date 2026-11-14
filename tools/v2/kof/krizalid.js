function Krizalid() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[1] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "Krizalid",
        Estilo: "Forças Especiais",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Cria uma grande chama",
        Conceito: "Guerreiro perfeito",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 3,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Criminal Upper, Fireball, Elemental Explosion, Tameshiwari, Improved Fireball, Kippup, Shockwave, Spinning Back Fist, Double Hit Kick, Face Slam, Jet Uppercut, Flying Tackle, Foot Sweep, Elemental Rage, Punch Defense, Kick Defense",
        Combos: "Improved Fireball para Jet Uppercut; Flying Tackle para Face Slam (Dizzy)",
        Gloria: 9,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Krizalid();

npc = calcPC(npc);
