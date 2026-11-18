function GanryuTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);

    return {
        Nome: "Ganryu",
        Estilo: "Sumô",
        Escola: "Associação de Sumô do Japão",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Bate os pés no chão (shiko) e grita",
        Conceito: "Lutador de Sumô",
        Cronica: "Tekken",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovasPericias: pericias,
        Soco: 5,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Hundred Hand Slap, Head Butt, Buffalo Punch, Double Hit Punch, Push Body, Throw, Bear Hug, Face Slam, Hyper Tackle, Air Smash, Toughskin, Foot Sweep, Jump",
        Combos: "Double Hit Punch para Hundred Hand Slap, Hundred Hand Slap para Hyper Tackle, Jump para Air Smash, Bloqueio para Bear Hug (Dizzy)",
        Gloria: 4,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 6
    };
}

function GanryuTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);

    return {
        Nome: "Ganryu",
        Estilo: "Sumô",
        Escola: "Estábulo Aranami",
        Jogador: "NPC",
        Assinatura: "Bate os pés no chão (shiko) e grita",
        Conceito: "Dono de restaurante",
        Cronica: "Tekken 5",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        NovasPericias: pericias,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Hundred Hand Slap, Head Butt, Buffalo Punch, Double Hit Punch, Push Body, Throw, Bear Hug, Face Slam, Hyper Tackle, Air Smash, Jumping Shoulder Butt, Thigh Press, Toughskin, Foot Sweep, Jump",
        Combos: "Double Hit Punch para Hundred Hand Slap, Hundred Hand Slap para Hyper Tackle, Jump para Air Smash, Face Slam para Jumping Shoulder Butt, Bloqueio para Bear Hug (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7
    };
}

let npc;
if (getParameterByName('age') === 'tk1') npc = GanryuTk1();
else npc = GanryuTk4();
npc = calcPC(npc);
