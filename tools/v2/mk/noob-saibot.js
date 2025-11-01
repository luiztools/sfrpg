function NoobSaibot() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Irmão das Sombras", 5);
    antecedentes[3] = newCaracteristica("Herança do Clã", 5);
    antecedentes[4] = newCaracteristica("Elemental", 5);

    const tecnicas = [];
    const armas = [];

    const personagem =
    {
        Nome: "Bi \"Noob Saibot\" Han",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin Kuei",
        Equipe: "Clã Irmãos das Sombras",
        Time: "Clã Irmãos das Sombras",
        Conceito: "Elemental das Trevas",
        Assinatura: "Desaparece nas sombras",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 2",
        Forca: 5,
        Destreza: 7,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 6,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 0,
        Labia: 0,
        LutaCega: 6,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 8,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 7,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 9,
        Gloria: 4,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Pile Driver, Shrouded Moon, Deaths Visage, Sakki, Elemental Stride, Elemental Skin",
        Combos: "Power Uppercut par Deaths Visage para Short (Dizzy); Shrounded Moon para Pile Driver (Dizzy); Short para Short para Short (Dizzy); Short para Short para Jab (dizzy); Jab para Jab para Power Uppercut (Dizzy)"
    };
    return personagem;
}

let npc = calcPC(NoobSaibot());