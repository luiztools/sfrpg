function VitorBelfort() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Sensei", 5);
    antecedentes[2] = newCaracteristica("Staff", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);

    const vitor = {
        Nome: "Vitor 'Phenom' Belfort",
        Estilo: "Vale-Tudo (Jiu Jitsu)",
        Escola: "Brazilian Jiu Jitsu",
        Jogador: "NPC",
        Assinatura: "Ergue os braços!",
        Conceito: "Lutador Profissional",
        Equipe: "Xtreme Couture",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Power Uppercut, Turn Punch, Throw, Elbow Smash, Dashing Punch, Esquives, Pin, Improved Pin, Double Hit Punch, Heart Punch, Lunging Punch, Hyper Fist, Double Hit Knee, Foot Sweep, Arm Wrist Lock, Brain Cracker, Breakfall",
        Combos: "Pin para Bloqueio para Arm Wrist Lock; Hyper Fist para Turn Punch; Double Hit Knee para Brain Cracker; Esquives para Breakfall",
        Gloria: 4,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7
    };
    return vitor;
}

let npc = VitorBelfort();

npc = calcPC(npc);