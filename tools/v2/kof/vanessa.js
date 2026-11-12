function Vanessa() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Elemental (Ar)", 3);

    const personagem = {
        Nome: "Vanessa",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Manda um beijo",
        Conceito: "Mercenária",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Agents Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 0,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Power Uppercut, Punch Defense, Fist Sweep, Dashing Punch, Dashing Uppercut, Hyper Fist, Missile Reflection, Energy Reflection, Light Feet, Stomach Pump, Air Blast, Throw, Turn Punch, Rekka Ken",
        Combos: "Strong para Strong para Power Uppercut (Dizzy); Stomach Pump para Throw; Rekka Ken para Rekka Ken para Turn Punch",
        Gloria: 4,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Vanessa();

npc = calcPC(npc);
