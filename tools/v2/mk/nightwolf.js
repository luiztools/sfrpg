function Nightwolf() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Machado", 5);
    tecnicas[1] = newCaracteristica("Arco", 5);

    const armas = [];
    armas[0] = "Machado Curto";

    const personagem =
    {
        Nome: "Nightwolf",
        Estilo: "Luta Live Nativo Americana",
        Escola: "Tribo",
        Equipe: "Nenhum",
        Time: "Nenhum",
        Conceito: "Líder da Tribo",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        Armas: armas,
        NovasTecnicas: tecnicas,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 4,
        Honra: 6,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Fireball, Psychokinetic Channeling, Missile Reflection, Energy Reflection, Shadow Shoulder, God Invocation",
        Combos: "Strong para Machado Strong para Machado Jab (Dizzy); Energy Reflection para Fireball (Dizzy); Forward para Forward para Roundhouse (Dizzy); Jab para Jab para String (Dizzy); Jab para Jab para Machado Jab (Dizzy); Short para Jab para Machado Jab (Dizzy)"
    };
    return personagem;
}

let npc = Nightwolf();

npc = calcPC(npc);