function Rufus() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);

    const rufus =
    {
        Nome: "Rufus",
        Conceito: "Motoqueiro Fanfarrão",
        Escola: "Auto-didata",
        Estilo: "Kung Fu",
        Assinatura: "Circunferência",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 6,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 1,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 3,
        Manha: 5,
        Labia: 1,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        Gloria: 6,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Guerreiros Mundiais",
        Posto: 9,
        ManobrasEspeciais: "Foot Sweep, Dive Kick, Brain Cracker, Power Uppercut, Gekiro, Snake Strike, Tornado Punch",
        Combos: "Jump + Roundhouse para Snake Strike (Dizzy); Dive Kick para Fierce para Tornado Punch; Dive Kick para Short para Roundhouse"
    };
    return calcPC(rufus);
}

const npc = Rufus();