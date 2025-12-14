function Stryker() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);
    tecnicas[2] = newCaracteristica("Bastão", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 3);

    const pericias = [];
    talentos[0] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const armas = [];
    armas[0] = "Pistola Pesada";
    armas[1] = "Pistola de Choque";
    armas[2] = "Granada";
    armas[3] = "Cacetete";

    const personagem = {
        Nome: "Kurtis Stryker",
        Estilo: "Forças Especiais (Bojutsu)",
        Escola: "NYPD",
        Jogador: "NPC",
        Assinatura: "Cruza os Braços",
        Conceito: "Policial",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 5,
        Labia: 4,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 0,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Weapon Sweep",
        Combos: "Power Uppercut - Roundhouse; Foot Sweep - Granada (dizzy); Short - Short - Foot Sweep (dizzy); Short - Short - Jab (dizzy); Jab - Jab - Power Uppercut (dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return personagem;
}

let npc = Stryker();
npc = calcPC(npc);