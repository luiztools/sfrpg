function StephenMontgomery() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Apoio", 4);
    antecedentes[5] = newCaracteristica("Elemental (Ar)", 5);

    const stephen = {
        Nome: "Stephen Montgomery",
        Estilo: "Soul Power",
        Escola: "Discípulo de Sultana",
        Jogador: "NPC",
        Assinatura: "Levanta a vítima pelo pescoço!",
        Conceito: "Dragão da Shadaloo",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 6,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 5,
        ManobrasEspeciais: "Jump, Throw, Slide Kick, Psychokinetic Channeling, Fireball, Telepathy, Psychic Vise, Neck Choke, Air Blast, Flight, Vacuum",
        Combos: "Throw para Fireball (dizzy), Slide Kick para Neck Choke (dizzy), Short para Slide Kick",
        Gloria: 8,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return stephen;
}

let npc = StephenMontgomery();

npc = calcPC(npc);