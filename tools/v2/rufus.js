function Rufus() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Recursos", 3);

    var rufus =
    {
        Nome: "Rufus",
        Conceito: "Motoqueiro Fanfarrão",
        Escola: "Auto-didata",
        Estilo: "Kung Fu",
        Assinatura: "Circunferência",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 6,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 1,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Manha: 5,
        Conducao: 4,
        Seguranca: 2,
        Sobrevivencia: 2,
        Arena: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 6,
        Foco: 0,
        Gloria: 7,
        Honra: 7,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Guerreiros Mundiais",
        Posto: 9,
        ManobrasEspeciais: "Brain Cracker, Flying Body Spear, Foot Sweep, Jump, Tumbling Attack, Messiah Kick, Power Uppercut, Snake Strike, Throw, Galactic Tornado",
        Combos: "Jump + Roundhouse para Snake Strike (Dizzy); Dive Kick para Fierce para Galactic Tornado; Dive Kick para Short para Roundhouse"
    };
    return calcPC(rufus);
}

const npc = Rufus();