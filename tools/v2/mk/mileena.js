function Mileena() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Tarkatan", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = ["Sai", "Sai Arremessada"];

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 1);

    const personagem =
    {
        Nome: "Mileena",
        Estilo: "Kung Fu",
        Escola: "Shao Kahn",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Clone de Kitana",
        Assinatura: "Golpeia com adagas",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 5,
        Manha: 1,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 4,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Back Roll Throw, Backflip, Tumbling Attack, Bite, Athletic, Head Bite",
        Combos: "Tumbling Attack para Short (dizzy); Sai Arremessada para Tumbling Attack; Forward para Forward para Forward (dizzy); Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Mileena());