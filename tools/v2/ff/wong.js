function Wong() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Apoio", 3);
    antecedentes[3] = newCaracteristica("Staff", 1);

    const tecnicas = [];

    const npc =
    {
        Nome: "Wong",
        Estilo: "Kung Fu",
        Conceito: "Chefe de Cozinha",
        Escola: "Templo Shaolin",
        Time: "Skull Cross",
        Equipe: "Skull Cross",
        Assinatura: "Mantra",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 3,
        Labia: 3,
        Manha: 3,
        LutaCega: 4,
        Lideranca: 2,
        Conducao: 2,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 2,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 1,
        Esportes: 3,
        Foco: 4,
        Divisao: "Estilo Livre",
        Posto: 8,
        Gloria: 4,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Monkey Grab Punch, Double-Hit Punch, Double Hit Kick, Foot Sweep, Throw, Jump, Kippup, Punch Defense, Deflecting Punch, Drunken Monkey Roll, Regeneration, Dim Mak, Rolling Attack, Beast Roll, Knife Hand Strike, Vertical Rolling Attack",
        Combos: "Drunken Monkey Roll para Regeneration; Bloqueio para Double-Hit Punch (Dizzy); Bloqueio para Deflecting Punch para Dim Mak (Dizzy); Double-Hit Kick (Dizzy)",
    };
    return npc;
}

const npc = calcPC(Wong());