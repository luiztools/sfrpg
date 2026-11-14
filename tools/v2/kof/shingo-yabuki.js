function ShingoYabuki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 1);
    antecedentes[1] = newCaracteristica("Sensei", 3);

    const personagem = {
        Nome: "Shingo Yabuki",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Toca gaita",
        Conceito: "Estudante",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Japan Hero",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Dragon Punch, Hurricane Kick, Spinning Back Fist, Foot Sweep, Breakfall, Kippup, Haymaker, Double Hit Kick, Punch Defense, Deflecting Punch, Dashing Clothesline",
        Combos: "Fierce para Dragon Punch; Jab para Strong para Fierce (Dizzy); Deflecting Punch para Power Uppercut para Dragon Punch (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = ShingoYabuki();

npc = calcPC(npc);
