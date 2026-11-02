function Orihime() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);

    const orihime = {
        Nome: "Orihime",
        Estilo: "Kung Fu",
        Escola: "Academia de Kung Fu de Tokyo",
        Jogador: "NPC",
        Assinatura: "Sinal de Vitória!",
        Conceito: "Mulher de Negócios",
        Equipe: "Excalibur Produções",
        Time: "Chimu Nihon",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Perspicacia: 1,
        Manha: 1,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 2,
        Foco: 2,
        ManobrasEspeciais: "Hundred Hand Slap, Monkey Grab Punch, Double Hit Kick, Throw, Hair Throw, Knife Hand Strike, Drunken Monkey Roll",
        Combos: "Drunken Monkey Roll para Double Hit Kick para Hundred Hand Slap (Dizzy)",
        Gloria: 1,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 3
    };
    return orihime;
}

let npc = Orihime();

npc = calcPC(npc);