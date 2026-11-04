function MichaelMaxFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const personagem = {
        Nome: "Michael Max",
        Estilo: "Boxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Pugilista renegado",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 3,
        Labia: 1,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Jump, Fist Sweep, Criminal Upper, Throw, Dashing Punch, Dashing Uppercut, Punch Defense, Air Blast",
        Combos: "",
        Gloria: 5,
        Honra: 2,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 15,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = MichaelMaxFF();

npc = calcPC(npc);
