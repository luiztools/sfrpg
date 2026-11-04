function CaptainCommando() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Captain Commando",
        Estilo: "Forças Especiais",
        Escola: "Commando Team",
        Jogador: "NPC",
        Assinatura: "Pose heroica com o punho erguido",
        Conceito: "Super-herói",
        Cronica: "Captain Commando",
        Equipe: "Metro City",
        Time: "Commando Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 4,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 2,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Shock Treatment, Fireball, Yoga Flame",
        Combos: "Jab para Strong para Forward (Dizzy)",
        Gloria: 6,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = CaptainCommando();
npc = calcPC(npc);
