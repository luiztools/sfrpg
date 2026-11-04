function JubeiFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Arena", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 4);

    const armas = [];
    armas[0] = "Chakram";

    const personagem = {
        Nome: "Jubei Yamada",
        Estilo: "Judô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Chinelos de madeira",
        Conceito: "Velho mestre de Judô",
        Cronica: "Fatal Fury 2",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 0,
        Labia: 1,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Pile Driver, Slide Kick, Jump, Throw, Back Roll Throw, Air Throw, Grappling Defense, Siberian Bear Crusher, Breakfall, Back Breaker",
        Combos: "Short para Short para Pile Driver (Dizzy); Jab para Forward para Chakram (Dizzy)",
        Gloria: 1,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 5,
        Saude: 15,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = JubeiFF();

npc = calcPC(npc);
