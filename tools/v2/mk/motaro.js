function Motaro() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Híbrido Animal", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const armas = [];
    const talentos = [];
    const pericias = [];
    const conhecimentos = [];
    const tecnicas = [];

    const personagem =
    {
        Nome: "Motaro",
        Estilo: "Briga",
        Escola: "Centaureons",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "General do Outworld",
        Assinatura: "Grito de Vitória",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 8,
        Destreza: 2,
        Vigor: 8,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 8,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 9,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Brain Cracker, Sonic Boom, Power Uppercut, Yoga Teleport, Tail Sweep, Tail Slash, Upper Tail Strike, Head Butt, Bull Head, Bull Horn, Double Hit Kick, Face Slam",
        Combos: "nenhum"
    };
    return personagem;
}

let npc = calcPC(Motaro());