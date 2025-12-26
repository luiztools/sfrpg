function JuriSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const juri =
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
        Aparencia: 5,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 6,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 7,
        Apresamento: 3,
        Bloqueio: 5,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Accuracy, Double Hit Kick, Fireball, Foot Sweep, Handstand Kick, Jump, Kick Defense, Kippup, Knee Basher, Throw, Air Smash, Wheel Kick, Hurricane Kick, Gekiro",
        Combos: "Forward para Fireball; Fireball para Hurricane Kick (dizzy); Handstand Kick para Hurricane Kick; Double-Hit Kick para Fireball para Hurricane Kick (dizzy); Gekiro para Hurricane Kick (dizzy)",
        Gloria: 6,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 9,
        Divisao: "Estilo Livre"
    };
    return juri;
}

function JuriSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 1);

    const juri =
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
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 6,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 7,
        Apresamento: 3,
        Bloqueio: 5,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Accuracy, Double Hit Kick, Fireball, Foot Sweep, Handstand Kick, Jump, Kick Defense, Kippup, Knee Basher, Throw, Air Smash, Wheel Kick, Hurricane Kick, Gekiro",
        Combos: "Forward para Fireball; Fireball para Hurricane Kick (dizzy); Handstand Kick para Hurricane Kick; Double-Hit Kick para Fireball para Hurricane Kick (dizzy); Gekiro para Hurricane Kick (dizzy)",
        Gloria: 5,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Posto: 8,
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