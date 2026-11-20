function DragunovTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    return {
        Nome: "Sergei Dragunov",
        Estilo: "Forças Especiais",
        Escola: "Spetsnaz",
        Equipe: "Spetsnaz",
        Jogador: "NPC",
        Assinatura: "Nunca diz uma palavra: encara o adversário caído em silêncio e faz o gesto de cortar a garganta",
        Conceito: "Anjo Branco da Morte",
        Cronica: "Tekken 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 2,
        Labia: 0,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 2,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Grappling Defense, Block And Grab, Arm Wrist Lock, Esquives, Double Hit Punch, Elbow Smash, Spinning Back Fist, Foot Sweep, Slide Kick, Wounded Knee, Knee Basher, Flying Tackle, Suplex, Dislocate Limb, Neck Choke, Ground Fighting",
        Combos: "Double Hit Punch para Elbow Smash para Flying Tackle, Block And Grab para Dislocate Limb, Esquives para Neck Choke, Wounded Knee para Knee Basher (Dizzy), Slide Kick para Suplex",
        Gloria: 6,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

let npc = DragunovTk4();
npc = calcPC(npc);
