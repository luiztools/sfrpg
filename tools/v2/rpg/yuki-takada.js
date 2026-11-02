function YukiTakada() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Herança de Clã", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const Yuki = {
        Nome: "Yuki Takada",
        Estilo: "Ninjitsu",
        Escola: "Clã Togakure-ryu",
        Jogador: "NPC",
        Assinatura: "cumprimento oriental",
        Conceito: "Ninja Kunoichi Jonin",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 3,
        Investigacao: 5,
        Medicina: 2,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Throw, Deaths Visage, Boshi-ken, Sakki, Shikan Ken, Entrancing Cobra, Shuto, Shrouded Moon, Cartwheel Kick, Wall Spring, Flying Thrust Kick, Foot Sweep, Flying Heel Stomp, Disengage, Hair Throw",
        Combos: "Bloqueio para Foot Sweep para Hair Throw (Dizzy); Wall Spring para Flying Heel Stomp para Cartwhell Kick (Dizzy)",
        Gloria: 1,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 4,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 8
    };
    return Yuki;
}

let npc = YukiTakada();

npc = calcPC(npc);