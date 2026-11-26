function GuyFF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Sensei", 5);
    antecedentes[2] = newCaracteristica("Herança de Clã", 4);
    
    const guy = {
        Nome: "Guy",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Jogador: "NPC",
        Assinatura: "Dá as costas",
        Conceito: "Ninja",
        Cronica: "Final Fight",
        Time: "Final Fight",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 2,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 1,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Knee Basher, Rekka Ken, Kippup, Bushin Sempu Kyaku",
        Combos: "Knee Basher para Throw",
        Gloria: 1,
        Honra: 4,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 4
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
    
    const guy = {
        Nome: "Guy",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Jogador: "NPC",
        Assinatura: "Dá as costas",
        Conceito: "Ninja",
        Cronica: "Street Fighter 4",
        Time: "Final Fight",
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
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Suplex, Air Suplex, Knee Basher, Elbow Smash, Slide Kick, Heel Stamp, Bushin Sempu Kyaku, Choke Throw, Bushin Musou Renge, Rekka Ken, Light Feet, Push (Body)",
        Combos: "Knee Basher para Throw, Rekka Ken para Roundhouse (dizzy), Rekka Ken para Throw",
        Gloria: 5,
        Honra: 10,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7
    };
    return guy;
}

let npc;
if (getParameterByName('age') === 'ff1')
    npc = GuyFF1();
else
    npc = GuySF4();
npc = calcPC(npc);