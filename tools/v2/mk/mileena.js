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

    const personagem = {
        Nome: "Mileena",
        Estilo: "Kung Fu",
        Escola: "Shao Kahn",
        Jogador: "NPC",
        Assinatura: "Golpeia com adagas",
        Conceito: "Clone de Kitana",
        Cronica: "Mortal Kombat",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
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
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 1,
        Labia: 0,
        NovosTalentos: talentos,
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
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Back Roll Throw, Backflip, Tumbling Attack, Bite, Athletic, Head Bite",
        Combos: "Tumbling Attack para Short (dizzy); Sai Arremessada para Tumbling Attack; Forward para Forward para Forward (dizzy); Jab para Jab para Forward (dizzy)",
        Gloria: 4,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

function MileenaMKX() {
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

    const personagem = {
        Nome: "Mileena",
        Estilo: "Kung Fu",
        Escola: "Shao Kahn",
        Jogador: "NPC",
        Assinatura: "Golpeia com adagas",
        Conceito: "Clone de Kitana",
        Cronica: "Mortal Kombat X",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
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
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 1,
        Labia: 0,
        NovosTalentos: talentos,
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
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Back Roll Throw, Backflip, Tumbling Attack, Bite, Athletic, Head Bite, Double Hit Kick, Ax Kick, Handstand Kick",
        Combos: "Tumbling Attack para Short (dizzy); Sai Arremessada para Tumbling Attack; Forward para Forward para Forward (dizzy); Jab para Jab para Forward (dizzy); Ax Kick para Handstand Kick para Foot Sweep (dizzy)",
        Gloria: 4,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mkx')
    npc = calcPC(MileenaMKX());
else
    npc = calcPC(Mileena());