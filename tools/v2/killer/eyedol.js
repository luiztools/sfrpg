function EyedolKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 6);

    const armas = [];
    armas[0] = "Clava";

    const eyedol = {
        Nome: "Eyedol",
        Estilo: "Bojutsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Duas cabeças",
        Conceito: "Lorde da Guerra",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 7,
        Destreza: 5,
        Vigor: 7,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 7,
        Perspicacia: 4,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 6,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 7,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Flying Heel Stomp, Fireball, Missile Reflection, Energy Reflection, Regeneration",
        Combos: "Flying Heel Stomp para Bastão Strong para Bastão Fierce (Dizzy); Fireball para Flying Heel Stomp para Bastão Fierce (Dizzy); Bastão Jab para Bastão Strong para Bastão Fierce (Dizzy)",
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return eyedol;
}

const npc = calcPC(EyedolKI());