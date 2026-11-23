function MardukTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Empresário", 3);
    antecedentes[4] = newCaracteristica("Fama", 3);
    antecedentes[5] = newCaracteristica("Recursos", 3);
    antecedentes[6] = newCaracteristica("Staff", 3);
    antecedentes[7] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Craig Marduk",
        Estilo: "Vale-Tudo",
        Escola: "Bodokan",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Campeão de Vale Tudo",
        Cronica: "Tekken 4",
        Forca: 7,
        Destreza: 3,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Buffalo Punch, Power Uppercut, Head Butt, Jumping Hammer Punch, Foot Sweep, Wounded Knee, Rhino Horn, Block And Grab, Grappling Defense, Throw, Back Breaker, Pile Driver, Argentine Back Breaker, Stomach Pump, Dislocate Limb, Flying Tackle, Pin, Improved Pin, Jump, Kippup, Breakfall, Hyper Tackle, Psychokinetic Channeling",
        Combos: "Argentine Back Breaker para Argentine Back Breaker para Improved Pin, Improved Pin para Back Breaker para Pile Driver, Rhino Horn para Back Breaker para Dislocate Limb, Jump Roundhouse para Wounded Knee para Foot Sweep, Movimento para Hyper Tackle",
        Gloria: 8,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = MardukTk4();
npc = calcPC(npc);
