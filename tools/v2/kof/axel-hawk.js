function AxelFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Axel Hawk",
        Estilo: "Boxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Campeão Mundial de Boxe",
        Cronica: "Fatal Fury 2",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 1,
        Manha: 2,
        Labia: 0,
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 3,
        ManobrasEspeciais: "Jump, Fist Sweep, Criminal Upper, Brain Cracker, Dashing Punch, Dashing Uppercut, Power Uppercut, Punch Defense, Deflecting Punch, Rekka Ken",
        Combos: "Dashing Punch para Dashing Uppercut para Power Uppercut (Dizzy); Rekka Ken para Power Uppercut (Dizzy)",
        Gloria: 5,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = AxelFF();

npc = calcPC(npc);
