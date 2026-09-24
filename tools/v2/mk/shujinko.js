function Shujinko() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);

    const talentos = [];
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);
    tecnicas[1] = newCaracteristica("Espada", 5);

    const armas = ["Arpão", "Espada"];

    const personagem = {
        Nome: "Shujinko",
        Estilo: "Kung Fu",
        Escola: "Sun Do",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Monge",
        Time: "Damashi",
        Cronica: "MK Deception",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 2,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        NovosTalentos: talentos,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Fireball, Ice Blast, Flaming Fist, Flying Head Butt, Ax Kick, Handstand Kick, Chi Push, Bicycle Kick, Absorb Soul",
        Combos: "nenhum",
        Gloria: 7,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc = calcPC(Shujinko());