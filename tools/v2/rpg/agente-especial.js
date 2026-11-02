function AgenteEspecial() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Agente Especial",
        Estilo: "",
        Escola: "Agência Especial",
        Jogador: "",
        Assinatura: "",
        Conceito: "Agente Secreto",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 1,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 1,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Head Butt, Throw, Pistola (Vel. 6, Dano 6, Mov. 0)",
        Combos: "",
        Gloria: 0,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: 1,
        Posto: 1
    };
    return personagem;
}

let npc = AgenteEspecial();

npc = calcPC(npc);