function GatoGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);
    talentos[1] = newCaracteristica("Administrar", 2);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Finanças", 2);
    conhecimentos[2] = newCaracteristica("Direito", 2);
    conhecimentos[3] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Gato",
        Estilo: "Kung Fu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Tira a camisa e revela uma cicatriz nas costas, feita pelas garras de um animal",
        Conceito: "Assassino e mestre de Gou-kei",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 2,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Shikan Ken, Jumping Hammer Punch, Chi Kun Healing, Flying Knee Thrust, Rekka Ken, Slide Kick, Dive Kick, Dim Mak, Multiple Stomp, Throw, Thigh Press, Foot Sweep, Dragon Kick, Double Hit Punch, Double Hit Kick",
        Combos: "Rekka Ken para Shikan Ken; Rekka Ken para Slide Kick; Dim Mak para Thigh Press",
        Gloria: 8,
        Honra: 4,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = GatoGarou();

npc = calcPC(npc);
