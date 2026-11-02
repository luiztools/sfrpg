function HarpolJhaliwal() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);

    const Harpol = {
        Nome: "Harpol Jhaliwal",
        Estilo: "Kabaddi",
        Escola: "Nova Dheli",
        Jogador: "NPC",
        Assinatura: "Ajuda o oponente a se levantar",
        Conceito: "Moradora de Rua",
        Equipe: "Excalibur Produções",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 1,
        Foco: 4,
        ManobrasEspeciais: "Head Butt, Slide Kick, Jump, Acid Breath, Ice Blast, Cobra Charm",
        Combos: "Jab para Head Butt para Slide Kick (Dizzy); Cobra Charm para Acid Breath para Ice Blast (Dizzy);",
        Gloria: 1,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 4,
        Saude: 12,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return Harpol;
}

let npc = HarpolJhaliwal();

npc = calcPC(npc);