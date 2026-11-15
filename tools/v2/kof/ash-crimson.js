function AshCrimson() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Ash Crimson",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Sorri enquanto cria chamas verdes",
        Conceito: "Diletante",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Ash Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Fireball, Flash Kick, Somersault Kick, Leech, Elemental Explosion, Dashing Clothesline, Sense Element, Heat Wave, Yoga Teleport, Elemental Rage, Ice Blast",
        Combos: "Elemental Explosion para Dashing Clothesline (Dizzy); Fireball para Fireball (Dizzy); Elemental Rage para Elemental Explosion (Dizzy); Short para Roundhouse para Flash Kick; Flash Kick para Somersault Kick (Dizzy)",
        Gloria: 8,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function DarkAsh() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Dark Ash",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Sorri enquanto cria chamas verdes",
        Conceito: "Diletante",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Ash Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Fireball, Flash Kick, Somersault Kick, Leech, Elemental Explosion, Dashing Clothesline, Sense Element, Heat Wave, Yoga Teleport, Elemental Rage, Ice Blast, Improved Fireball, Elemental Skin, Final Wave",
        Combos: "Elemental Explosion para Dashing Clothesline (Dizzy); Fireball para Fireball (Dizzy); Elemental Rage para Elemental Explosion (Dizzy); Short para Roundhouse para Flash Kick; Flash Kick para Somersault Kick (Dizzy)",
        Gloria: 8,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'dark')
    npc = DarkAsh();
else
    npc = AshCrimson();

npc = calcPC(npc);
