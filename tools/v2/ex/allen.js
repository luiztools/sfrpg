function AllenEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Empresário", 5);
    antecedentes[3] = newCaracteristica("Fama", 4);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    return {
        Nome: "Allen Snider",
        Estilo: "Karatê Shotokan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Competidor",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 1,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Foot Sweep, Brain Cracker, Fireball, Dragon Punch, Jump, Hurricane Kick, Tameshiwari, Kippup",
        Combos: "Jumping Roundhouse para Tameshiwari (Dizzy); Hurricane Kick para Fireball (Dizzy); Short para Brain Cracker",
        Gloria: 8,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(AllenEX());
