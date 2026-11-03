function EijiKisaragi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 1);
    antecedentes[1] = newCaracteristica("Herança do Clã", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);

    const armas = [];
    armas[0] = "Katana";

    const personagem = {
        Nome: "Eiji Kisaragi",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Ninja misterioso",
        Cronica: "Art of Fighting 2",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 2,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 2,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Flying Heel Stomp, Multiple Stomp, Fireball, Improved Fireball, Psychokinetic Channeling, Wall Spring, Foot Sweep, Double Hit Kick, Sakki",
        Combos: "Strong - Roundhouse - Fierce (Dizzy); Strong - Fierce - Katana Fierce (Dizzy)",
        Gloria: 3,
        Honra: 1,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 16,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = EijiKisaragi();

npc = calcPC(npc);
