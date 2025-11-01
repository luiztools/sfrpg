function Sindel() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 4);

    const tecnicas = [];

    const armas = [];

    const talentos = [];
    const pericias = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Sindel",
        Estilo: "Kung Fu",
        Escola: "Edenia",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Rainha de Edênia",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 4,
        Destreza: 7,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 6,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 3,
        Intimidacao: 2,
        Labia: 2,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 4,
        Estilos: 0,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 7,
        Honra: 1,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Fireball, Flying Fireball, Improved Fireball, Stunning Shout, Levitation",
        Combos: "Power Uppercut para Power Uppercut; Foot Sweep para Stunning Shout para Power Uppercut (dizzy); Short para Short para Foot Sweep (dizzy); Short para Short para Power Uppercut (dizzy); Jab para Jab para Power Uppercut (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Sindel());