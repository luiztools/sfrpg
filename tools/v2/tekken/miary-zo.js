function MiaryZoTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 3);
    antecedentes[2] = newCaracteristica("Mascote", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 3);

    const armas = [];
    armas[0] = "Bastão Longo";

    return {
        Nome: "Miary Zo",
        Estilo: "Capoeira",
        Escola: "Autodidata (imitando os animais de Madagascar)",
        Jogador: "NPC",
        Assinatura: "Varre o chão com o pé no ritual do Moraingy e chama os lêmures Vanilla e Cacao",
        Conceito: "Deus da Luta renascido",
        Cronica: "Tekken 8",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Esquives, Backflip, Wall Spring, Monkey Grab Punch, Double Hit Kick, Foot Sweep, Cartwheel Kick, Handstand Kick, Backflip Kick, Tail Slash, Horn, Tail Sweep, Upper Tail Strike, Weapon Uppercut, Flight",
        Combos: "Esquives para Handstand Kick, Monkey Grab Punch para Horn (Dizzy), Foot Sweep para Upper Tail Strike, Double Hit Kick para Cartwheel Kick (Dizzy), Jab para Strong para Weapon Uppercut (Dizzy)",
        Gloria: 3,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 6
    };
}

let npc = MiaryZoTk8();
npc = calcPC(npc);
