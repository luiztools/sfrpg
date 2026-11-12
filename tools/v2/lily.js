function LilySF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Mascote", 3);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Clava";

    const personagem = {
        Nome: "Lily Hawk",
        Estilo: "Luta-Livre Nativo Americana (Maculelê)",
        Escola: "Tribo Thunderfoot",
        Jogador: "NPC",
        Assinatura: "Chama seu falcão",
        Conceito: "Jovem guerreira",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 1,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Diving Hawk, Thunderstrike, Storm Hammer, Spinning Clothesline",
        Combos: "Diving Hawk para Forward para Clava Fierce (Dizzy); Bloqueio para Storm Hammer; Diving Hawk para Spinning Clothesline (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 5
    };
    return personagem;
}

let npc = LilySF6();

npc = calcPC(npc);
