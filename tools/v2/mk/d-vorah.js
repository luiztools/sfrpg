function DVorah() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Híbrido Animal", 4);

    const tecnicas = [];
    const conhecimentos = [];
    const armas = [];

    const personagem =
    {
        Nome: "D'Vorah",
        Estilo: "Briga",
        Escola: "Autodidata",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Mulher Vespa",
        Assinatura: "Voa",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 4,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 4,
        NovasTecnicas: tecnicas,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 5,
        Honra: 2,
        Chi: 9,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Monkey Grab Punch, Acid Breath, Throw, Air Throw, Upper Tail Strike, Typhoon Tail, Claw, Tail Slash",
        Combos: "Jab – Claw – Tail Slash (dizzy); Jab – Strong – Fierce (dizzy); Power Uppercut – Tail Slash; Acid Breath – Acid Breath (dizzy)"
    };
    return personagem;
}

let npc = calcPC(DVorah());