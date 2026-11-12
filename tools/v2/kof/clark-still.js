function ClarkStill() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Faca", 3);
    tecnicas[2] = newCaracteristica("Arremesso", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    const armas = [];
    armas[0] = "Granada";

    const personagem = {
        Nome: "Clark Still",
        Estilo: "Forças Especiais",
        Escola: "Exército Americano",
        Jogador: "NPC",
        Assinatura: "Sinal de positivo com a mão",
        Conceito: "Militar em atividade",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Ikari Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 5,
        Labia: 3,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 5,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 4,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Power Uppercut, Suplex, Thigh Press, Grappling Defense, Air Throw, Foot Sweep, Haymaker, Argentine Back Breaker, Ground Fighting, Pile Driver, Hyper Fist, Elbow Smash, Spinning Knuckle, Flying Tackle",
        Combos: "Strong para Argentine Back Breaker para Elbow Smash (Dizzy); Spinning Knuckle para Power Uppercut para Air Throw (Dizzy); Jumping Jab para Hyper Fist (Dizzy); Argentine Back Breaker para Argentine Back Breaker para Argentine Back Breaker (Dizzy); Flying Tackle para Pile Driver",
        Gloria: 7,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = ClarkStill();

npc = calcPC(npc);
