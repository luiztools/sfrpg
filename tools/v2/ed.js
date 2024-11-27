function EdSF5() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Psycho Power", 5);
    antecedentes[3] = newCaracteristica("Sensei", 3);
    var ed =
    {
        Nome: "Ed",
        Estilo: "Boxe",
        Escola: "Professor particular",
        Conceito: "Comandante",
        Assinatura: "Chamas psíquicas",
        Jogador: "NPC",
        Equipe: "Shadaloo",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 2,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 0,
        Esportes: 5,
        Foco: 5,
        Gloria: 6,
        Honra: 3,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 8,
        Divisao: "Estilo Livre",
        ManobrasEspeciais: "Jump, Dashing Punch, Psychokinetic Channeling, Power Uppercut, Esquives, Foot Sweep, Chi Pull, Sonic Boom, Fireball, Hyper Fist, Psycho Knuckle, Criminal Upper, Monkey Grab Punch, Flash Kick",
        Combos: "Criminal Upper para Fireball para Power Uppercut; Esquives para Fierce (Psychokinetic Channeling) (dizzy), Flash Kick para Power Knuckle",
    };
    return calcPC(ed);
}
const npc = EdSF5();