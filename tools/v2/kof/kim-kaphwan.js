function KimFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Sensei", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Kim Kaphwan",
        Estilo: "Tae Kwon Dô",
        Escola: "Gang-Li",
        Jogador: "NPC",
        Assinatura: "Pose de vitória",
        Conceito: "Campeão Mundial de Tae Kwon Dô",
        Cronica: "Fatal Fury 2",
        Equipe: "Nenhuma",
        Time: "Korea Justice",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 1,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Double Hit Kick, Foot Sweep, Jump, Kippup, Throw, Flash Kick, Ax Kick, Flying Heel Stomp, Multiple Stomp, Kick Defense, Lightning Leg, Hurricane Kick",
        Combos: "Jumping Short para Combo Strike (Dizzy); Short para Short para Short; Multiple Stomp para Foot Sweep; Roundhouse para Flash Kick para Jumping Roundhouse (Dizzy); Movimento para Lightning Leg para Flash Kick (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KimFF();

npc = calcPC(npc);
