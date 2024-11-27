function JuriSF5() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    var juri =
    {
        Nome: "Juri Han",
        Estilo: "Tae Kwon Dô",
        Escola: "Nenhuma",
        Conceito: "Agente da S.I.N",
        Assinatura: "Lambe os Lábios",
        Cronica: "Street Fighter 5",
        Time: "SIN",
        Equipe: "SIN",
        Jogador: "NPC",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        LutaCega: 6,
        Conducao: 2,
        Lideranca: 2,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 3,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 7,
        Apresamento: 2,
        Bloqueio: 5,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Accuracy, Air Crush, Double Hit Kick, Fireball, Foot Sweep, Handstand Kick, Jump, Kick Defense, Killing Stare, Kippup, Knee Basher, Second Impact, Sniper Kick, Third Strike, Throw, Windmill Kick",
        Combos: "Forward para Fireball; Fireball para Windmill Kick (Dizzy); Handstand Kick para Windmill Kick; Double Hit Kick para Fireball para Windmill Kick (Dizzy); Jump + Strong para Jump + Strong para Windmill Kick (Dizzy); Third Strike para Windmill Kick",
        Gloria: 6,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 10,
        Divisao: "Estilo Livre"
    };
    return juri;
}

function JuriSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);

    var juri =
    {
        Nome: "Juri Han",
        Estilo: "Tae Kwon Dô",
        Escola: "Nenhuma",
        Conceito: "Agente da S.I.N",
        Assinatura: "Lambe os Lábios",
        Cronica: "Street Fighter 4",
        Time: "SIN",
        Equipe: "SIN",
        Jogador: "NPC",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        LutaCega: 6,
        Conducao: 2,
        Lideranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 3,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 7,
        Apresamento: 2,
        Bloqueio: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Accuracy, Air Crush, Double Hit Kick, Fireball, Foot Sweep, Handstand Kick, Jump, Kick Defense, Killing Stare, Kippup, Knee Basher, Second Impact, Sniper Kick, Third Strike, Throw, Windmill Kick",
        Combos: "Forward para Fireball; Fireball para Windmill Kick (Dizzy); Handstand Kick para Windmill Kick; Double Hit Kick para Fireball para Windmill Kick (Dizzy); Jump + Strong para Jump + Strong para Windmill Kick (Dizzy); Third Strike para Windmill Kick",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 9,
        Divisao: "Estilo Livre"
    };
    return juri;
}

var npc;
if (getParameterByName('age') === 'sf4')
    npc = JuriSF4();
else
    npc = JuriSF5();
npc = calcPC(npc);