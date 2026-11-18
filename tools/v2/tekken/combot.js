function CombotTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    return {
        Nome: "Combot",
        Estilo: "Jeet Kune Dô",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Variável",
        Conceito: "Robô",
        Cronica: "Tekken 4",
        Forca: 4,
        Destreza: 4,
        Vigor: 6,
        Carisma: 0,
        Manipulacao: 0,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 4,
        Investigacao: 4,
        Medicina: 4,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = CombotTk4();
npc = calcPC(npc);
