function HeihachiTekken4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Arena", 4);
    antecedentes[4] = newCaracteristica("Empresário", 5);
    antecedentes[5] = newCaracteristica("Recursos", 5);
    antecedentes[6] = newCaracteristica("Fama", 3);
    antecedentes[7] = newCaracteristica("Staff", 5);

    const personagem = {
        Nome: "Heihachi Mishima",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Equipe: "Tekken Force",
        Time: "Tekken Force",
        Jogador: "NPC",
        Assinatura: "Determinação",
        Conceito: "Lutador em busca de poder pessoal",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Buffalo Punch, Double Hit Punch, Ducking Fierce, Hurricane Kick, Power Uppercut, Dragon Punch, Head Butt, Spinning Back Fist, Double Hit Kick, Foot Sweep, Throw, Head Butt Grab Attack, Take Down, Brain Cracker, Pile Driver, Air Suplex, Suplex, Jump, Kippup, Hyper Tackle, Psychokinetic Channeling, Block And Grab, Cross Counter, Punch Defense, Kick Defense, Deflecting Punch, Zen No Mind",
        Combos: "Double Hit Punch para Power Uppercut para Power Uppercut; Double Hit Punch para Double Hit Punch para Buffalo Punch; Jump Foward para Foot Sweep para Dragon Punch; Fierce para Hurricane Kick para Foot Sweep; Bloqueio para Pile Driver para Foot Sweep; Movimento para Hyper Tackle",
        Gloria: 9,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = HeihachiTekken4();

npc = calcPC(npc);