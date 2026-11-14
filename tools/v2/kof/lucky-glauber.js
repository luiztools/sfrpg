function Lucky() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = [];
    armas[0] = "Bola de Basquete";

    const personagem = {
        Nome: "Lucky Glauber",
        Estilo: "Karatê Rindoukan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Movimentos de basquete",
        Conceito: "Jogador de basquete",
        Cronica: "King of Fighters",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 5,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Knee Basher, Alacer Wrist, Wheel Kick, Double Hit Kick, Gekiro, Empty Step, Light Feet, Final Wave",
        Combos: "nenhum",
        Gloria: 7,
        Honra: 7,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Lucky();
npc = calcPC(npc);