function Ramon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);

    const personagem = {
        Nome: "Ramon",
        Estilo: "Lucha-Libre",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Sorriso cativante",
        Conceito: "Showman",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Agents Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 2,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Power Uppercut, Esquives, Air Smash, Grappling Defense, Ground Fighting, Back Breaker, Disengage, Flying Body Spear, Slide Kick, Wall Spring, Backflip Kick, Air Suplex, Neck Choke, Suplex, Handstand Kick, Foot Sweep",
        Combos: "Back Breaker para Back Breaker (Dizzy); Strong para Handstand Kick (Dizzy); Esquives para Air Smash para Foot Sweep; Esquives para Neck Choke para Air Smash (Dizzy)",
        Gloria: 7,
        Honra: 5,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Ramon();

npc = calcPC(npc);
