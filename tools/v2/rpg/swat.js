function Swat() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Aliados", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const personagem = {
        Nome: "S.W.A.T.",
        Estilo: "Briga",
        Escola: "Academia da S.W.A.T.",
        Jogador: "",
        Assinatura: "Algema oponente",
        Conceito: "Membro do Batalhão",
        Cronica: "",
        Equipe: "S.W.A.T.",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 2,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 1,
        Bloqueio: 1,
        Apresamento: 2,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Power Uppercut, Spinning Back Fist, Jump, Pistola (vel. 6, Dano 6, Mov. 0), Fuzil (Vel.4, Dano 8, Mov. 0)",
        Combos: "",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc = Swat();

npc = calcPC(npc);