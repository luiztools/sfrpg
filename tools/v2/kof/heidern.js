function Heidern() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Contatos", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const personagem = {
        Nome: "Heidern",
        Estilo: "Forças Especiais",
        Escola: "Forças Especiais (Brasil)",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Comandante Militar",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Ikari Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 3,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Power Uppercut, Foot Sweep, Sonic Boom, Grappling Defense, Knife Hand Strike, Double Hit Kick, Flying Body Spear, Haymaker, Widowmaker",
        Combos: "Jab para Strong para Fierce; Strong para Double Hit Kick para Haymaker (Dizzy); Bloqueio para Foot Sweep para Sonic Boom",
        Gloria: 8,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Heidern();

npc = calcPC(npc);
