function Kenshi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Paranormal", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = ["Katana"];

    const personagem = {
        Nome: "Kenshi Takahashi",
        Estilo: "Kenjutsu",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Embainha sua lâmina",
        Conceito: "Espadachim Cego",
        Time: "Netherrealm",
        Equipe: "Netherrealm",
        Cronica: "Mortal Kombat X",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 1,
        Labia: 3,
        LutaCega: 7,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Spinning Back Fist, Power Uppercut, Foot Sweep, Brain Cracker, Triple Strike, Double-Hit Kick, Missile Reflection, Energy Reflection, Chi Kun Healing, Chi Push, Telekinesis, Weapon Channeling, Soul Illusion",
        Combos: "Jab – Strong – Power Uppercut (dizzy); Jab – Strong – Katana Fierce (dizzy); Jab – Forward – Triple Strike (dizzy); Chi Push – Chi Push – Chi Push",
        Gloria: 6,
        Honra: 8,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return personagem;
}

let npc= calcPC(Kenshi());