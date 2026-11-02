function Jaq() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 5);
    antecedentes[2] = newCaracteristica("Arena", 1);

    const jaq = {
        Nome: "Jaq",
        Estilo: "Luta-Livre Nativo Americana",
        Jogador: "NPC",
        Assinatura: "Morde o oponente",
        Conceito: "Híbrido Crocodilo",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 3,
        Manha: 1,
        LutaCega: 3,
        Furtividade: 5,
        Sobrevivencia: 7,
        Arena: 1,
        Misterios: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 5,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Jump, Jaw Spin, Throw, Wounded Knee, Sleeper, Air Throw, Eye Rake, Bear Hug, Tail Sweep, Bite, Tearing Bite, Ripping Bite",
        Combos: "Bloqueio para Tearing Bite para Claw (Dizzy); Bite para Jaw Spin para Bear Hug (Dizzy); Air Throw para Wounded Knee para Sleeper (Dizzy);<b>Manobras Básicas:</b>Claw, Tail Slash;<b>Hab. Natural:</b>Nadar",
        Gloria: 5,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 17,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return jaq;
}

let npc = Jaq();

npc = calcPC(npc);