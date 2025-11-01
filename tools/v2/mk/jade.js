function Jade() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 6);
    tecnicas[1] = newCaracteristica("Arremesso", 7);

    const armas = ["Bastão Longo", "Bumerangue"];

    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Jade",
        Estilo: "Ninjitsu (Bojutsu)",
        Escola: "Outworld",
        Equipe: "Outworld",
        Time: "Nenhuma",
        Conceito: "Guarda-Costas",
        Assinatura: "Golpeia com Bastão",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 5,
        Manha: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 3,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Back Roll Throw, Wall Spring, Shadow Kick",
        Combos: "Jab para Short para Foot Sweep; Bastão Jab para Bastão Strong para Bastão Jab (dizzy); Forward para Forward para Forward (dizzy); Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Jade());