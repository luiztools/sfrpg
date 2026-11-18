function YoshimitsuTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Herança de Clã", 4);
    antecedentes[3] = newCaracteristica("Fama", 3);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Staff", 2);
    antecedentes[6] = newCaracteristica("Sensei", 3);
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);
    const armas = [];
    armas[0] = "Katana";

    return {
        Nome: "Yoshimitsu",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Clã Manji",
        Jogador: "NPC",
        Assinatura: "Mostra a habilidade com a espada!",
        Conceito: "Guerreiro",
        Cronica: "Tekken 4",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Double Hit Punch, Power Uppercut, Double Hit Kick, Slide Kick, Foot Sweep, Jump, Kippup, Throw, Suplex, Air Suplex, Flying Body Spear, Hyper Tackle, Chi Kun Healing, Regeneration, Shrouded Moon",
        Combos: "Double Hit Punch para Double Hit Kick para Double Hit Kick, Movimento para Hyper Tackle para Fierce, Bloqueio para Air Suplex para Fierce, Movimento para Flying Body Spear para Flying Body Spear, Regeneration para Shrouded Moon",
        Gloria: 6,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = YoshimitsuTk4();
npc = calcPC(npc);
