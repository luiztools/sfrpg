function Jarek() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Empresário", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const personagem =
    {
        Nome: "Jarek",
        Estilo: "Aikidô",
        Escola: "Black Dragon",
        Equipe: "Black Dragon",
        Time: "Black Dragon",
        Conceito: "Mercenário",
        Assinatura: "Levanta o braço",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 4",
        Forca: 5,
        Destreza: 4,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 5,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 3,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Divisao: "Tradicional",
        Posto: 8,
        Gloria: 10,
        Honra: 1,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Power Uppercut, Double-Hit Punch, Double-Hit Kick, Foot Sweep, Handstand Kick, Knee Basher, Throw, Suplex, Rolling Attack",
        Combos: "Double-Hit Punch para Double-Hit Kick para Power Uppercut (Dizzy); Double-Hit Punch para Double-Hit Kick para Handstand Kick (Dizzy); Jump + Short para Foot Sweep para Power Uppercut (Dizzy); Bloqueio para Rolling Attack para Power Uppercut"
    };
    return personagem;
}

let npc = Jarek();

npc = calcPC(npc);