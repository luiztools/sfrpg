function KotalKahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 5);
    antecedentes[3] = newCaracteristica("Staff", 5);

    const armas = ["Espada Larga"];

    const talentos = [];
    const pericias = [];
    const conhecimentos = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const personagem =
    {
        Nome: "Kotal Kahn",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Osh-Tekk",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Imperador do Outworld",
        Assinatura: "Cruza os Braços",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Perspicacia: 3,
        Manha: 0,
        Interrogacao: 3,
        Intimidacao: 6,
        Labia: 4,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 4,
        Estilos: 3,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 10,
        Gloria: 8,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Power Uppercut, Fireball, Jumping Shoulder Butt, Foot Sweep, Buffalo Punch, Face Slam, Throw",
        Combos: "Jab – Strong – Jumping Shoulder Butt (dizzy); Jab – Strong – Forward (dizzy); Jumping Strong – Throw; Espada Jab – Espada Fierce (dizzy); Bloqueio – Face Slam – Buffalo Punch"
    };
    return personagem;
}

let npc = calcPC(KotalKahn());