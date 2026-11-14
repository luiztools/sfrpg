function FrancoFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Mecânica", 4);

    const personagem = {
        Nome: "Franco Bash",
        Estilo: "Kickboxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Ex-campeão",
        Cronica: "Fatal Fury 3",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 2,
        Labia: 1,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 3,
        Foco: 3,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Back Breaker, Power Uppercut, Double Hit Punch, Dashing Punch, Breakfall, Psychokinetic Channeling, Toughskin",
        Combos: "Jab para Strong para Dashing Punch (Dizzy); Short para Strong; Jab para Strong para Fierce (Dizzy); Strong para Fierce para Power Uppercut (Dizzy)",
        Gloria: 4,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = FrancoFF();

npc = calcPC(npc);
