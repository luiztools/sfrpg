function TerryFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Arena", 2);

    const personagem = {
        Nome: "Terry Bogard",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata / Tung Fu Rue",
        Jogador: "NPC",
        Assinatura: "Joga o boné",
        Conceito: "Justiceiro",
        Cronica: "Fatal Fury",
        Equipe: "Fatal Fury Team",
        Time: "Fatal Fury Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 4,
        Labia: 3,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Fireball, Shockwave, Burn Knuckle, Throw, Jump, Kippup, Foot Sweep, Flying Knee Thrust, Spinning Back Fist, Wheel Kick, Hyper Tackle, Gekiro, Final Wave",
        Combos: "Fireball para Fireball; Flying Knee Thrust para Burn Knuckle (Dizzy); Burn Knuckle para Fireball (Dizzy); Hyper Tackle para Shockwave (Dizzy); Short para Jab para Burn Knuckle (Dizzy); Foot Sweep para Spinning Back Fist para Wheel Kick",
        Gloria: 10,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 10
    };
    return personagem;
}

function TerryGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Fama", 4);
    antecedentes[5] = newCaracteristica("Arena", 2);
    antecedentes[6] = newCaracteristica("Mascote", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 5);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 3);

    const personagem = {
        Nome: "Terry Bogard",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata / Tung Fu Rue",
        Jogador: "NPC",
        Assinatura: "Grita \"OK!\" e joga a jaqueta nos ombros",
        Conceito: "Justiceiro",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Fatal Fury Team",
        Time: "Fatal Fury Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        Labia: 3,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 2,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Fireball, Shockwave, Burn Knuckle, Throw, Jump, Kippup, Foot Sweep, Flying Knee Thrust, Spinning Back Fist, Wheel Kick, Hyper Tackle, Gekiro, Final Wave",
        Combos: "Fireball para Fireball; Flying Knee Thrust para Burn Knuckle (Dizzy); Burn Knuckle para Fireball (Dizzy); Hyper Tackle para Shockwave (Dizzy); Short para Jab para Burn Knuckle (Dizzy); Foot Sweep para Spinning Back Fist para Wheel Kick",
        Gloria: 10,
        Honra: 9,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 10
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'garou')
    npc = TerryGarou();
else
    npc = TerryFF();

npc = calcPC(npc);
