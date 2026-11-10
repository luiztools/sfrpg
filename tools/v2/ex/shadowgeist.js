function ShadowgeistEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    return {
        Nome: "Shadowgeist",
        Estilo: "Wu Shu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Capa vermelha",
        Conceito: "Vingador",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Throw, Backflip, Hyper Tackle, Flying Body Spear, Backflip Kick, Forward Backflip Kick, Criminal Upper, Jump",
        Combos: "Backflip para Hyper Tackle; Criminal Upper para Hyper Tackle (Dizzy); Forward Backflip Kick para Flying Body Spear (Dizzy)",
        Gloria: 5,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
}

const npc = calcPC(ShadowgeistEX());
