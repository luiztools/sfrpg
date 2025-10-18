function Shokan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Shokan", 3);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Shokan",
        Estilo: "Boxe",
        Escola: "Nenhuma",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Shokan Médio",
        Assinatura: "Ergue os braços",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 8,
        Destreza: 2,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 3,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 6,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 1,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Tradicional",
        Posto: 1,
        Gloria: 0,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Brain Cracker, Power Uppercut",
        Combos: "Jab para Brain Cracker (Dizzy)"
    };
    return personagem;
}

let npc = calcPC(Shokan());