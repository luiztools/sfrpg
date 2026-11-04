function FreemanGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 3);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Arena", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);
    talentos[1] = newCaracteristica("Administrar", 2);
    talentos[2] = newCaracteristica("Procurar", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 2);
    pericias[1] = newCaracteristica("Demolições", 3);
    pericias[2] = newCaracteristica("Disfarce", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 3);
    conhecimentos[1] = newCaracteristica("Finanças", 3);
    conhecimentos[2] = newCaracteristica("Direito", 4);
    conhecimentos[3] = newCaracteristica("Linguística", 3);

    const personagem = {
        Nome: "Freeman",
        Estilo: "Tai Chi Chuan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Lambe as garras, abre os braços e olha para o céu",
        Conceito: "Assassino em série",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 3,
        Labia: 5,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 3,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Foot Sweep, Jump, Double Hit Knee, Power Uppercut, Haymaker, Dim Mak, Chi Kun Healing, Ghost Form, Knife Hand Strike, Wall Spring",
        Combos: "Knife Hand Strike para Knife Hand Strike para Haymaker (Dizzy); Knife Hand Strike para Double Hit Knee; Wall Spring para Dim Mak",
        Gloria: 8,
        Honra: 2,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = FreemanGarou();

npc = calcPC(npc);
