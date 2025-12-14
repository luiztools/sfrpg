function KungLao() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental (Ar)", 5);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const talentos = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 6);

    const armas = ["Chapéu-Lâmina", "Chapéu Arremessado"];

    const personagem = {
        Nome: "Kung Lao",
        Estilo: "Kung Fu",
        Escola: "Templo da Luz",
        Jogador: "NPC",
        Assinatura: "Pose de Vitória",
        Conceito: "Monge",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat 2",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Intimidacao: 1,
        Perspicacia: 4,
        Interrogacao: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 3,
        NovosTalentos: talentos,
        Estilos: 4,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Spin, Dive Kick, Throw, Hair Throw, Elemental Stride, Sense Element",
        Combos: "Jab - Power Uppercut (dizzy); Dive Kick - Chapéu de borda afiada (dizzy); Forward - Forward - Roundhouse (dizzy); Jab - Jab - Forward (dizzy)",
        Gloria: 4,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KungLao();
npc = calcPC(npc);