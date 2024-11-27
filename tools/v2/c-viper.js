function CViper() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio (CIA)", 5);
    antecedentes[1] = newCaracteristica("Apoio (SIN)", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Cibernético", 6);

    const tecnicas = [];
    
    const viper =
    {
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 6,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 4,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Double Hit Kick, Elbow Smash, Foot Sweep, Shockwave, Light Feet, Psychokinetic Channeling, Levitation",
        Combos: "Psychokinetic + Strong para Forward para Psychokinetic + Strong (Dizzy); Shockwave para Jump + Psychokinetic + Forward (Dizzy)",
        Prontidao: 5,
        Interrogacao: 5,
        Perspicacia: 5,
        Labia: 6,
        Manha: 5,
        Furtividade: 5,
        Intimidacao: 3,
        Sobrevivencia: 4,
        Arena: 5,
        Estilos: 2,
        Medicina: 2,
        Computador: 5,
        Seguranca: 5,
        Misterios: 3,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 4,
        Investigacao: 5,
        Antecedentes: antecedentes,
        Gloria: 7,
        Honra: 4,
        Divisao: "Duelistas",
        ForcaVontade: 10,
        Chi: 8,
        Estilo: "Forças Especiais",
        Saude: 20,
        NovasTecnicas: tecnicas,
        Posto: 9,
        Nome: "Crinsom Viper (Maya)",
        Conceito: "Espiã",
        Assinatura: "Faz uma ligação.",
        Escola: "CIA",
        Equipe: "CIA",
        Time: "SIN",
        Jogador: "NPC",
        Cronica: "Street Fighter 4"
    };
    return calcPC(viper);
}
const npc = CViper();