function LeonaHeidern() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 4);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 4);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const armas = [];
    armas[0] = "Granada";

    const personagem = {
        Nome: "Leona Heidern",
        Estilo: "Forças Especiais",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Militar em atividade",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Ikari Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Power Uppercut, Air Throw, Foot Sweep, Energy Ball, Knife Hand Strike, Double Hit Knee, Flash Kick, Lunging Punch, Haymaker, Widowmaker, Flying Body Spear",
        Combos: "Flying Body Spear para Haymaker (Dizzy); Jumping Forward para Double Hit Knee para Widowmaker; Bloqueio para Energy Ball",
        Gloria: 6,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = LeonaHeidern();

npc = calcPC(npc);
