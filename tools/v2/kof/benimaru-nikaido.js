function BenimaruNikaido() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 4);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Apoio", 2);
    antecedentes[4] = newCaracteristica("Elemental (Eletricidade)", 4);

    const personagem = {
        Nome: "Benimaru Nikaido",
        Estilo: "Kickboxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Flashes de eletricidade",
        Conceito: "Modelo",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Japan Hero",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 0,
        Manha: 5,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Throw, Suplex, Foot Sweep, Spinning Foot Sweep, Sonic Scythe, Double Hit Kick, Flying Body Spear, Shock Treatment, Elemental Rage, Flash Kick, Lightning Bolt",
        Combos: "Sonic Scythe para Flying Body Spear (Dizzy); Jumping Forward para Lightning Bolt; Double Hit Kick para Flash Kick (Dizzy)",
        Gloria: 7,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = BenimaruNikaido();

npc = calcPC(npc);
