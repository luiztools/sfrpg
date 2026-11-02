function CViper() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio (CIA)", 5);
    antecedentes[1] = newCaracteristica("Apoio (SIN)", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Cibernético", 6);

    const tecnicas = [];
    
    const viper = {
        Nome: "Crinsom Viper (Maya)",
        Estilo: "Forças Especiais",
        Escola: "CIA",
        Jogador: "NPC",
        Assinatura: "Faz uma ligação.",
        Conceito: "Espiã",
        Cronica: "Street Fighter 4",
        Equipe: "CIA",
        Time: "SIN",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 6,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 5,
        Labia: 6,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 5,
        Investigacao: 5,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Double Hit Kick, Elbow Smash, Foot Sweep, Shockwave, Light Feet, Psychokinetic Channeling, Levitation, Balance",
        Combos: "Psychokinetic + Strong para Forward para Psychokinetic + Strong (Dizzy); Shockwave para Jump + Psychokinetic + Forward (Dizzy)",
        Gloria: 7,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return calcPC(viper);
}
const npc = CViper();