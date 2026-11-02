function ShoujoTora() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 3);

    const shoujo = {
        Nome: "Shoujo Tora",
        Estilo: "Capoeira",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Flexiona seus músculos e ronrona",
        Conceito: "Híbrida Tigresa",
        Equipe: "Excalibur Produções",
        Time: "Chimu Nihon",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 1,
        Prontidao: 3,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 1,
        LutaCega: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 1,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 4,
        ManobrasEspeciais: "Tearing Bite, Head Bite, Jaw Spin, Jump, Pounce, Back Roll Throw",
        Combos: "Bloqueio para Pounce para Jaw Spin (Dizzy)",
        Gloria: 3,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return shoujo;
}

let npc = ShoujoTora();

npc = calcPC(npc);