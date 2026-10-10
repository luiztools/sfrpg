function GuyFF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Sensei", 5);
    antecedentes[4] = newCaracteristica("Herança de Clã", 3);
    
    const guy =
    {
        Nome: "Guy",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Conceito: "Ninja",
        Assinatura: "Dá as costas",
        Cronica: "Final Fight",
        Time: "Final Fight",
        Jogador: "NPC",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 4,
        Labia: 2,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 2,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 7,
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Suplex, Air Suplex, Knee Basher, Elbow Smash, Rekka Ken, Light Feet, Slide Kick, Heel Stamp, Kippup, Bushin Sempu Kyaku, Power Uppercut",
        Combos: "Rekka Ken para Roundhouse (Dizzy), Rekka Ken para Throw, Rekka Ken para Heel Stamp para Jump + Forward (Dizzy)",
        Posto: 6,
        Gloria: 4,
        Honra: 9,
        Divisao: "Tradicional",
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20
    };
    return guy;
}

function GuySF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Sensei", 5);
    antecedentes[4] = newCaracteristica("Herança de Clã", 4);
    
    const guy =
    {
        Nome: "Guy",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Conceito: "Ninja",
        Assinatura: "Dá as costas",
        Cronica: "Street Fighter 4",
        Time: "Final Fight",
        Jogador: "NPC",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 5,
        Labia: 3,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 3,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 7,
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Suplex, Air Suplex, Knee Basher, Elbow Smash, Rekka Ken, Light Feet, Slide Kick, Heel Stamp, Kippup, Bushin Sempu Kyaku, Power Uppercut",
        Combos: "Rekka Ken para Roundhouse (Dizzy), Rekka Ken para Throw, Rekka Ken para Heel Stamp para Jump + Forward (Dizzy)",
        Posto: 7,
        Gloria: 5,
        Honra: 10,
        Divisao: "Tradicional",
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20
    };
    return guy;
}

let npc;
if (getParameterByName('age') === 'ff1')
    npc = GuyFF1();
else
    npc = GuySF4();
npc = calcPC(npc);