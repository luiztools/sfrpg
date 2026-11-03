function RoboElite() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Cibernético", 5);

    const personagem = {
        Nome: "Robô de Elite",
        Estilo: "",
        Escola: "",
        Jogador: "",
        Assinatura: "Beep!",
        Conceito: "Guarda-Robô",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 2,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 0,
        Apresamento: 2,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Electro Bolt",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 4,
        ForcaVontade: 3,
        Saude: 15,
        Divisao: "",
        Posto: 0
    };
    return personagem;
}

let npc = RoboElite();

npc = calcPC(npc);