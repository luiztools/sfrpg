function Baraka() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Tarkatan", 4);
    antecedentes[4] = newCaracteristica("Recursos", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 5);

    const armas = ["Garra"];

    const talentos = [];

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    const personagem =
    {
        Nome: "Baraka",
        Estilo: "Kickboxe",
        Escola: "Autodidata",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Conceito: "Imperador",
        Assinatura: "Exibe suas lâminas",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 2,
        Perspicacia: 2,
        Manha: 2,
        Interrogacao: 0,
        Intimidacao: 6,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 2,
        Estilos: 1,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 5,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Fireball, Hyper Fist, Throw, Bite, Claw, Athletic",
        Combos: "Power Uppercut para Fireball (dizzy); Jab para Hyper Fist (Dizzy); Short para Forward para Foot Sweep (Dizzy); Jab para Jab para Claw (Dizzy)"
    };
    return personagem;
}

let npc = calcPC(Baraka());