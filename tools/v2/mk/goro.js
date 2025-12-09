function Goro() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Arena", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);
    antecedentes[5] = newCaracteristica("Shokan", 5);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Goro",
        Estilo: "Boxe",
        Escola: "Nenhuma",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Príncipe de Kuatan",
        Assinatura: "Grito de Vitória",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 10,
        Destreza: 3,
        Vigor: 10,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 0,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 8,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 5,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 3,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        Armas: armas,
        Divisao: "Livre",
        Posto: 10,
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Brain Cracker, Fireball, Power Uppercut, Air Smash",
        Combos: "Jab para Brain Cracker (dizzy); Bloqueio para Fireball; Bloqueio para Roundhouse; Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Goro());