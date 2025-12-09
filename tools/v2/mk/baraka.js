function Baraka() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Tarkatan", 5);
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

function Tarkatan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Tarkatan", 3);

    const armas = ["Garra"];
    const talentos = [];
    const conhecimentos = [];
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 3);

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
        ManobrasEspeciais: "Jump, Kippup, Power Uppercut, Throw, Bite, Athletic",
        Combos: ""
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk2')
    npc = calcPC(Baraka());
else if (getParameterByName('age') === 'tarkatan')
    npc = calcPC(Tarkatan());