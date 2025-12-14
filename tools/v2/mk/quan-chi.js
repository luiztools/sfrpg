function QuanChi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Mascote", 5);
    antecedentes[5] = newCaracteristica("Paranormal", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const armas = ["Bastão Curto Reforçado"];

    const personagem = {
        Nome: "Quan Chi",
        Estilo: "Kabaddi",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Braço de Cobra",
        Conceito: "Feiticeiro das Trevas",
        Time: "Forças do Outworld",
        Cronica: "Mortal Kombat 4",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 6,
        Computador: 0,
        Investigacao: 5,
        Medicina: 5,
        Misterios: 8,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Slide Kick, Power Uppercut, Double-Hit Punch, Suplex, Air Suplex, Wounded Knee, Levitation, Ghost Form, Leech,  Fireball, Improved Fireball, Cobra Charm, Regeneration, Chi Kun Healing, Weapon Sweep, Telekinesis, Flying Heel Stomp, Acid Breath",
        Combos: "Double-Hit Punch - Double-Hit Punch - Improved Fireball (Dizzy); Double-Hit Punch - Double-Hit Punch - Roundhouse (Dizzy); Jumping Short - Foot Sweep - Slide Kick (Dizzy)",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc = QuanChi();
npc = calcPC(npc);