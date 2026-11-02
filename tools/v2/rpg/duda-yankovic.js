function DudaYankovic() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Empresario", 5);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 1);

    const duda = {
        Nome: "Duda Yankovic",
        Estilo: "Boxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Ergue o braço!",
        Conceito: "Campeã Profissional",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 4,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 2,
        NovasPericias: [],
        Computador: 2,
        Investigacao: 2,
        Estilos: 3,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 1,
        Esportes: 3,
        ManobrasEspeciais: "Fist Sweep, Dashing Punch, Dashing Uppercut, Jump, Power Uppercut, Hyper Fist, Double Hit Kick",
        Combos: "Bloqueio para Fist Sweep para Hyper Fist (Dizzy); Dashing Uppercut para Hyper Fist (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 15,
        Divisao: "Tradicional",
        Posto: 5
    };
    return duda;
}

let npc = DudaYankovic();

npc = calcPC(npc);