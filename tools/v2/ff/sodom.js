function Sodom() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Apoio", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 4);
    tecnicas[1] = newCaracteristica("Espada", 4);
    tecnicas[2] = newCaracteristica("Mangual", 4);

    const armas = [];
    armas[0] = "Katana";
    armas[1] = "Faca";
    armas[2] = "Nunchaku";

    var sodom = {
        Nome: "Sodom",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Cumprimento Oriental",
        Conceito: "Kabuki",
        Cronica: "Street Fighter Alpha",
        Equipe: "Nenhuma",
        Time: "Mad Gear",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 3,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Slide Kick, Throw, Suplex, Air Suplex, Butsumetsu Buster, Daikyou Burning",
        Combos: "Jitte Jab para Jitte Strong para Jitte Fierce (Dizzy); Bloqueio para Butsumetsu Buster; Bloqueio para Daikyou Burning",
        Gloria: 5,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return sodom;
}


let npc = Sodom();
npc = calcPC(npc);