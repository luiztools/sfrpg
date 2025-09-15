function Maki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Herança de Clã", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Tonfa";

    var maki =
    {
        Nome: "Maki Genryusai",
        Estilo: "Ninjitsu (Bojutsu)",
        Escola: "Bushinryu Ninpou",
        Conceito: "Kunoichi",
        Assinatura: "Pula de alegria!",
        Cronica: "Street Fighter Alpha",
        Time: "Final Fight",
        Equipe: "Nenhuma",
        Jogador: "NPC",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        Labia: 1,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 1,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Wall Spring, Throw, Air Smash, Handstand Kick, Flying Thrust Kick, Knee Basher, Slide Kick, Kippup",
        Combos: "Jab para Slide Kick; Slide Kick para Flying Thrust Kick",
        Posto: 6,
        Gloria: 5,
        Honra: 6,
        Divisao: "Duelistas",
        Chi: 5,
        ForcaVontade: 7,
        Saude: 17
    };
    return maki;
}

let npc = Maki();
npc = calcPC(npc);