function LuckyChloeTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Publicidade", 3);
    pericias[1] = newCaracteristica("Música", 2);

    return {
        Nome: "Lucky Chloe",
        Estilo: "Capoeira",
        Escola: "Autodidata (dança freestyle)",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "Faz a pose de gatinha com as patinhas e solta um \"Nyan!\"",
        Conceito: "Ídolo pop e dançarina",
        Cronica: "Tekken 7",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 4,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        NovasPericias: pericias,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 1,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Throw, Esquives, Light Feet, Musical Accompaniment, Power Up, Backflip, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Cartwheel Kick, Backflip Kick, Forward Backflip Kick, Tumbling Attack, Wheel Kick, Slide Kick, Lightning Leg, Rolling Attack",
        Combos: "Double Hit Kick para Lightning Leg (Dizzy), Cartwheel Kick para Tumbling Attack, Foot Sweep para Handstand Kick, Esquives para Backflip Kick, Power Up para Forward Backflip Kick, Slide Kick para Wheel Kick (Dizzy)",
        Gloria: 4,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

let npc = LuckyChloeTk4();
npc = calcPC(npc);
