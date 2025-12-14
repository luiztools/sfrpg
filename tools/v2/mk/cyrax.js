function CyraxMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Cibernético", 5);
    antecedentes[3] = newCaracteristica("Herança do Clã", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 3);

    const armas = ["Granada", "Rede"];

    const personagem =
    {
        Nome: "Cyrax",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin-Kuei",
        Equipe: "Lin-Kuei",
        Time: "Lin-Kuei",
        Conceito: "Ninja Ciborgue",
        Assinatura: "Levanta os braços",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 3,
        Labia: 4,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 4,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Air Throw, Shrouded Moon, Pile Driver, Spinning Pile Driver",
        Combos: "Granada - Power Uppercut - Rede (dizzy); Rede - Granada - Rede (dizzy); Forward - Forward - Foot Sweep (dizzy); Forward - Forward - Power Uppercut (dizzy); Jab - Jab - Power Uppercut (dizzy)"
    };
    return personagem;
}

let npc = calcPC(CyraxMK3());