function ShaoKahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Shokan", 5);

    const armas = ["Martelo de Guerra"];

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);
    const pericias = [];
    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 8);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Martelo", 5);

    const personagem =
    {
        Nome: "Shao Kahn",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Equipe: "Nenhuma",
        Time: "Outworld",
        Conceito: "Imperador do Outworld",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 2",
        Forca: 9,
        Destreza: 5,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Perspicacia: 6,
        Manha: 2,
        Interrogacao: 3,
        Intimidacao: 8,
        Labia: 4,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 8,
        Estilos: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 2,
        Esportes: 3,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 10,
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Tiger Knee, Power Uppercut, Fireball, Improved Fireball, Jumping Shoulder Butt, Brain Cracker, Leech, Absorb Soul, Face Slam",
        Combos: "Jab para Jab para Martelo Jab (Dizzy); Forward para Forward para Martelo Jab (Dizzy);"
    };
    return personagem;
}

let npc = calcPC(ShaoKahn());