function JPSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Psycho Power", 3);
    antecedentes[6] = newCaracteristica("Mascote", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Bengala";

    const personagem = {
        Nome: "JP",
        Estilo: "Ler Drit (Bojutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Líder misterioso",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 7,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Psychokinetic Channeling, Fireball, Yoga Teleport, Monkey Grab Punch, Telepathy, Telekinesis",
        Combos: "Telekinesis para Fireball; Fireball para Fireball (Dizzy); Jumping Forward para Bengala Strong para Bengala Fierce (Dizzy)",
        Gloria: 7,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
    return personagem;
}

let npc = JPSF6();

npc = calcPC(npc);
