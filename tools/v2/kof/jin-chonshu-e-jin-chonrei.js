function JinChonshu() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);

    const personagem = {
        Nome: "Jin Chonshu",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Cruza os braços",
        Conceito: "Lutador",
        Cronica: "Fatal Fury 3",
        Equipe: "Irmãos Jin",
        Time: "Irmãos Jin",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Elbow Smash, Dragon Punch, Power Uppercut, Fireball, Improved Fireball, Breakfall, Punch Defense, Gekiro, Hyper Tackle, Fire Strike",
        Combos: "",
        Gloria: 4,
        Honra: 2,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function JinChonrei() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);

    const personagem = {
        Nome: "Jin Chonrei",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Lutador",
        Cronica: "Fatal Fury 3",
        Equipe: "Irmãos Jin",
        Time: "Irmãos Jin",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Elbow Smash, Dragon Punch, Power Uppercut, Fireball, Improved Fireball, Breakfall, Punch Defense, Gekiro, Hyper Tackle, Missile Reflection, Energy Reflection, Flaming Fist, Elemental Stride",
        Combos: "",
        Gloria: 4,
        Honra: 2,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'chonrei')
    npc = JinChonrei();
else
    npc = JinChonshu();

npc = calcPC(npc);
