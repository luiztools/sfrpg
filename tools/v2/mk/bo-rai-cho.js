function BoRaiCho() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Machado", 4);

    const conhecimentos = [];

    const armas = ["Machado Grande"];

    const personagem =
    {
        Nome: "Bo Rai Cho",
        Estilo: "Kung Fu",
        Escola: "Autodidata",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Sifu",
        Assinatura: "Hábitos nojentos",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 6,
        Honra: 4,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Spinning Back Fist, Hundred Hand Slap, Handstand Kick, Wounded Knee, Ax Kick, Suplex, Air Smash, Double-Hit Kick, Jumping Shoulder Butt, Cartwheel Kick, Acid Breath, Fireball, Musical Accompaniment",
        Combos: "Suplex – Air Smash; Jab – Jab – Hundred Hand Slap (dizzy); Jab – Power Uppercut – Double-Hit Kick (dizzy); Spinning Back Fist – Forward – Roundhouse; Forward – Throw"
    };
    return personagem;
}

let npc = calcPC(BoRaiCho());