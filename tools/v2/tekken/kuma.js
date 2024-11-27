function Kuma() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Empresário", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    var personagem =
    {
        Nome: "Kuma",
        Estilo: "Luta Livre",
        Escola: "Dojô Mishima",
        Conceito: "Urso",
        Assinatura: "Levanta os braços",
        Jogador: "NPC",
        Cronica: "Tekken 4",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 5,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Bear Hug, Double Hit Punch, Buffalo Punch, Head Bite, Head Butt",
        Combos: "Double Hit Punch para Double Hit Punch para Buffalo Punch, Bloqueio para Bear Hug para Head Bite"
    };
    return personagem;
}

var npc = Kuma();
npc = calcPC(npc);