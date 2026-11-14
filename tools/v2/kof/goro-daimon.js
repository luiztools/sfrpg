function GoroDaimon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Apoio", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Arena", 4);

    const personagem = {
        Nome: "Goro Daimon",
        Estilo: "Jiu Jitsu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de Vitória!",
        Conceito: "Lutador Profissional",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Japan Hero",
        Forca: 7,
        Destreza: 3,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Air Throw, Grappling Defense, Argentine Back Breaker, Face Slam, Foot Sweep, Pin, Improved Pin, Shockwave",
        Combos: "Face Slam para Throw (Dizzy); Improved Pin para Throw; Argentine Back Breaker para Improved Pin; Throw para Shockwave (Dizzy)",
        Gloria: 7,
        Honra: 8,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = GoroDaimon();

npc = calcPC(npc);
