function Shokan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Tarkatan", 3);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Tarkatan",
        Estilo: "Briga",
        Escola: "Nenhuma",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Tarkatan Médio",
        Assinatura: "Exibe as presas",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 4,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 1,
        Gloria: 0,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 7,
        Saude: 10,
        ManobrasEspeciais: "Jump, Kippup, Power Uppercut, Throw, Bite, Athletic, Claw",
        Combos: ""
    };
    return personagem;
}

let npc = calcPC(Shokan());