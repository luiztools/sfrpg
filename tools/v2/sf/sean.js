function SeanSF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    const sean = {
        Nome: "Sean",
        Estilo: "Karatê Shotokan",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Bola de Basquete",
        Conceito: "Estudante",
        Cronica: "Street Fighter 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Dragon Punch, Back Roll Throw, Throw, Wheel Kick, Power Uppercut, Flying Tackle, Foot Sweep, Hurricane Kick, Brain Cracker",
        Combos: "Jab para Dragon Punch (Dizzy), Hurricane Kick para Dragon Punch (Dizzy), Flying Tackle para Brain Cracker",
        Gloria: 4,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return sean;
}

let npc = SeanSF3();

npc = calcPC(npc);
