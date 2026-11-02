function Pantara() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Mascote", 4);
    antecedentes[2] = newCaracteristica("Empresario", 1);

    const pantara = {
        Nome: "Pantara",
        Estilo: "Wu Shu",
        Escola: "Lao-Da",
        Jogador: "NPC",
        Assinatura: "Acaricia o leopardo",
        Conceito: "Beleza Exótica",
        Equipe: "Gordon Produções",
        Time: "Os Corvos",
        Forca: 3,
        Destreza: 5,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Intimidacao: 2,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 3,
        Medicina: 1,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 3,
        ManobrasEspeciais: "Backflip Kick, Double Hit Kick, Handstand Kick, Jump",
        Combos: "Shor para Backflip Kick (Dizzy)",
        Gloria: 2,
        Honra: 1,
        Chi: 4,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return pantara;
}

let npc = Pantara();

npc = calcPC(npc);