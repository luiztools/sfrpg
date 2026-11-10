function KairiEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Satsui no Hadou", 5);

    return {
        Nome: "Kairi",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Olhar vazio",
        Conceito: "Eremita",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 1,
        Computador: 1,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Foot Sweep, Power Uppercut, Flying Knee Thrust, Throw, Back Roll Throw, Fireball, Dragon Punch, Hurricane Kick, Jump, Instant Hell Murder, Psychokinetic Channeling, Kippup, Ansatsuken",
        Combos: "Flying Knee Thrust para Dragon Punch; Flying Knee Thrust para Hurricane Kick (Dizzy); Back Roll Throw para Instant Hell Murder",
        Gloria: 7,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

function KairiFEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Satsui no Hadou", 5);

    return {
        Nome: "Kairi",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Energia maligna",
        Conceito: "Eremita",
        Cronica: "Fighting EX",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 6,
        Inteligencia: 5,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Foot Sweep, Power Uppercut, Flying Knee Thrust, Throw, Back Roll Throw, Fireball, Dragon Punch, Hurricane Kick, Jump, Instant Hell Murder, Psychokinetic Channeling, Kippup, Ansatsuken",
        Combos: "Flying Knee Thrust para Dragon Punch; Flying Knee Thrust para Hurricane Kick (Dizzy); Back Roll Throw para Instant Hell Murder; Hurricane Kick para Dragon Punch (Dizzy); Bloqueio para Instant Hell Murder",
        Gloria: 9,
        Honra: 1,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc;
if (getParameterByName('age') === 'fex') npc = KairiFEX();
else npc = KairiEX();
npc = calcPC(npc);
