function Kraken() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);

    const personagem = {
        Nome: "Kraken Gigante",
        Estilo: "",
        Escola: "",
        Jogador: "",
        Assinatura: "Rodopia de alegria",
        Conceito: "Monstro Aquático",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 7,
        Destreza: 3,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 5,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 0,
        Apresamento: 5,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Extendible Limbs",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 3,
        Saude: 20,
        Divisao: "",
        Posto: 0
    };
    return personagem;
}

let npc = Kraken();

npc = calcPC(npc);