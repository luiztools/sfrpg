function SebastianTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);

    return {
        Nome: "Sebastian",
        Estilo: "Kickboxe",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Leva a mão ao peito e faz uma reverência impecável ao adversário",
        Conceito: "Mordomo devotado",
        Cronica: "Tekken Tag Tournament 2",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 2,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Throw, Light Feet, Esquives, Backflip, Foot Sweep, Double Hit Kick, Handstand Kick, Cartwheel Kick, Backflip Kick, Stepping Front Kick, Ax Kick, Soccer Kick, Flying Kick, Forward Backflip Kick, Somersault Kick, Forward Flip Knee, Spinning Back Fist, Wheel Kick",
        Combos: "Esquives para Handstand Kick, Double Hit Kick para Foot Sweep, Foot Sweep para Flying Kick, Kippup para Double Hit Kick, Handstand Kick para Forward Backflip Kick, Double Hit Kick para Cartwheel Kick (Dizzy)",
        Gloria: 1,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 16,
        Divisao: "Livre",
        Posto: 0
    };
}

let npc = SebastianTk4();
npc = calcPC(npc);
