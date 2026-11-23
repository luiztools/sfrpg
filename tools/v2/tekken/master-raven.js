function MasterRavenTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Herança de Clã", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);

    const armas = [];
    armas[0] = "Ninjato";

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    return {
        Nome: "Master Raven",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Dá as costas ao oponente, desaparece num borrão de sombras e reaparece com a lâmina já no pescoço dele.",
        Conceito: "Agente secreta e mestra ninja",
        Cronica: "Tekken 7",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 3,
        Labia: 0,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 3,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Deflecting Weapon, Spinning Weapon, Backflip Kick, Cartwheel Kick, Handstand Kick, Slide Kick, Spin Kick, Double Hit Kick, Foot Sweep, Tumbling Attack, Backflip, Double Jump, Empty Step, Wall Spring, Missile Reflection, Sakki, Shrouded Moon, Soul Illusion, Speed Of The Mongoose, Ashura Senku",
        Combos: "Shrouded Moon para Espada Fierce, Soul Illusion para Slide Kick, Deflecting Weapon para Backflip Kick, Tumbling Attack para Handstand Kick (Dizzy)",
        Gloria: 5,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 16,
        Divisao: "Duelistas",
        Posto: 7
    };
}

let npc = MasterRavenTk4();
npc = calcPC(npc);
