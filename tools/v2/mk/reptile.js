function Reptile() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Híbrido Animal", 4);

    const tecnicas = [];
    const armas = [];

    const personagem =
    {
        Nome: "Reptile",
        Estilo: "Kung Fu",
        Escola: "Desconhecida",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Conceito: "Espião do Outworld",
        Assinatura: "Come o oponente",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 6,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 5,
        Honra: 0,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Acid Breath, Slide Kick, Sonic Boom, Throw, Back Roll Throw, Power Uppercut, Bite, Claw, Ripping Bite, Tearing Bite, Jaw Spin",
        Combos: "Jab para Power Uppercut (dizzy); Jump + Short para Slide Kick para Acid Breath; Sonic Boom para Acid Breath (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Jab (dizzy); Jab para Jab para Power Uppercut (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Reptile());