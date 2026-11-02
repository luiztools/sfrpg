function McCoy() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);
    antecedentes[4] = newCaracteristica("Cibernetico", 3);

    const personagem = {
        Nome: "Matthew R. McCoy",
        Estilo: "Forças Especiais",
        Escola: "MI6",
        Jogador: "NPC",
        Assinatura: "Implantes cibernéticos",
        Conceito: "Major MI6",
        Cronica: "Street Fighter 2",
        Equipe: "MI6",
        Time: "Delta Red",
        Forca: 5,
        Destreza: 2,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 1,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 0,
        Computador: 1,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 1,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Suplex, Throw, Buffalo Punch, Head Butt, Brain Cracker",
        Combos: "",
        Gloria: 3,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Duelistas",
        Posto: 1
    };
    return personagem;
}

let npc = McCoy();

npc = calcPC(npc);