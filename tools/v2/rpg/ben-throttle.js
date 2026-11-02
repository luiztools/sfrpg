function Ben() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Staff", 4);

    const personagem = {
        Nome: "Ben Throttle",
        Estilo: "Kickboxe",
        Escola: "Polecats",
        Jogador: "NPC",
        Assinatura: "Encrenqueiro",
        Conceito: "Easy Rider",
        Cronica: "Final Fight",
        Equipe: "Polecats",
        Time: "Polecats",
        Forca: 4,
        Destreza: 3,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 4,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 6,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        NovasPericias: [],
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Power Uppercut, Spinning Back Fist, Head Butt, Throw, Brain Cracker, Double Hit Kick",
        Combos: '',
        Gloria: 2,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

let npc = Ben();

npc = calcPC(npc);