function JoeSF1() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Empresario", 2);
    antecedentes[2] = newCaracteristica("Sensei", 1);

    var joe =
    {
        Nome: "Joe",
        Estilo: "Kickboxe",
        Escola: "Ruas de Chicago",
        Conceito: "Lutador de Rua",
        Assinatura: "Ergue os braços",
        Jogador: "NPC",
        Cronica: "Street Fighter 1",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 5,
        Manha: 5,
        Labia: 3,
        LutaCega: 3,
        Conducao: 4,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
        Medicina: 1,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Forward Flip Knee, Jump, Throw, Power Uppercut, Spinning Back Fist, Double Hit Kick, Double Dread Kick, Backflip Kick, Back Breaker",
        Combos: "Jab para Forward Flip Knee (Dizzy)",
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 7,
        Divisao: "Tradicional",
        Gloria: 4,
        Honra: 1
    };
    return calcPC(joe);
}
const npc = JoeSF1();