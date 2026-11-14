function Lin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Herança de Clã", 4);
    antecedentes[2] = newCaracteristica("Apoio", 3);

    const personagem = {
        Nome: "Lin",
        Estilo: "Ninjitsu",
        Escola: "Vários mestres",
        Jogador: "NPC",
        Assinatura: "Mão envenenada",
        Conceito: "Assassino",
        Cronica: "The King of Fighters",
        Equipe: "Flying Brigands",
        Time: "K Dash Hero",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 3,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Throw, Sakki, Shrouded Moon, Empty Step, Rekka Ken, Light Feet, Wheel Kick, Hundred Hand Slap, Acid Breath, Venom, Neck Choke, Foot Sweep, Shuto, Shikan Ken",
        Combos: "Strong para Hundred Hand Slap (Dizzy); Shrouded Moon para Wheel Kick para Shikan Ken; Empty Step para Neck Choke (Dizzy)",
        Gloria: 6,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Lin();

npc = calcPC(npc);
