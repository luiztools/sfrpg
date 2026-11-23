function VictorTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Fama", 3);
    antecedentes[5] = newCaracteristica("Cibernético", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);
    tecnicas[1] = newCaracteristica("Faca", 3);
    tecnicas[2] = newCaracteristica("Armas de Fogo", 4);

    const armas = [];
    armas[0] = "Katana";
    armas[1] = "Faca de Combate";
    armas[2] = "Pistola";

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 3);

    return {
        Nome: "Victor Chevalier",
        Estilo: "Forças Especiais (Kenjutsu)",
        Escola: "Marinha Francesa",
        Jogador: "NPC",
        Assinatura: "Ajeita o paletó, embainha a katana e diz: \"C'est fini.\"",
        Conceito: "Lendário militar e superespião",
        Cronica: "Tekken 8",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 2,
        Labia: 1,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 3,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 1,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Deflecting Punch, Knife Hand Strike, Lunging Punch, Spinning Back Fist, Double Hit Punch, Stepping Front Kick, Double Hit Kick, Spin Kick, Foot Sweep, Deflecting Weapon, Weapon Uppercut, Spinning Weapon, Killing Blade, Battojutsu, Weapon Channeling, Light Feet, Empty Step, Ashura Senku, Shrouded Moon, Speed Of The Mongoose",
        Combos: "Ashura Senku para Espada Fierce, Deflecting Weapon para Weapon Uppercut (Dizzy), Knife Hand Strike para Spin Kick, Double Hit Punch para Double Hit Kick, Shrouded Moon para Killing Blade (Dizzy)",
        Gloria: 7,
        Honra: 7,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = VictorTk8();
npc = calcPC(npc);
