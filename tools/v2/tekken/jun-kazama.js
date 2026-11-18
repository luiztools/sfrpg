function JunBase(cronica, conceito) {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Paranormal", 1);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);

    return {
        Nome: "Jun Kazama",
        Estilo: "Aikidô",
        Escola: "Família Kazama",
        Jogador: "NPC",
        Assinatura: "Junta as mãos diante do peito e faz uma reverência serena",
        Conceito: conceito,
        Cronica: cronica,
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 1,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovosConhecimentos: conhecimentos,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Throw, Knife Hand Strike, Double Hit Kick, Stepping Front Kick, Lightning Leg, Foot Sweep, Deflecting Punch, Punch Defense, Kick Defense, Block And Grab, Grappling Defense, Esquives, Zen No Mind, Chi Kun Healing",
        Combos: "Punch Defense para Block And Grab, Knife Hand Strike para Double Hit Kick (Dizzy), Esquives para Stepping Front Kick",
        Gloria: 5,
        Honra: 9,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function JunTk1() {
    return JunBase("Tekken 2", "Agente de proteção à vida selvagem");
}

function JunTk8() {
    const jun = JunBase("Tekken 8", "Guardiã da linhagem Kazama");
    jun.Raciocinio = 5;
    jun.Misterios = 5;
    jun.Investigacao = 2;
    jun.Foco = 5;
    jun.ManobrasEspeciais += ", Empty Step, Regeneration, Mu No Hadou";
    jun.Combos += ", Deflecting Punch para Lightning Leg";
    jun.Gloria = 6;
    jun.Honra = 10;
    jun.Chi = 8;
    jun.ForcaVontade = 9;
    jun.Saude = 19;
    jun.Posto = 7;
    return jun;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = JunTk1();
else npc = JunTk8();
npc = calcPC(npc);
