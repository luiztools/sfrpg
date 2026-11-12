function Geki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Herança de Clã", 5);
    antecedentes[2] = newCaracteristica("Staff", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 4);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = [];
    armas[0] = "Garra";
    armas[1] = "Shuriken";

    const npc = {
        Nome: "Geki",
        Estilo: "Ninjitsu",
        Escola: "Dojô do clã",
        Jogador: "NPC",
        Assinatura: "Desaparece misteriosamente",
        Conceito: "Ninja",
        Cronica: "Street Fighter 1",
        Equipe: "Clã Ninja",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 4,
        Labia: 5,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 4,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Heel Stamp, Shikan Ken, Jump, Spinning Back Fist, Shuto, Boshi Ken, Deaths Visage, Sakki, Shrouded Moon, Reverse Frontal Kick",
        Combos: "Shuto para Jab para Shikan-Ken (Dizzy); Shrouded Moon para Boshi-Ken; Jump + Forward para Reverse Frontal Kick (Dizzy)",
        Gloria: 5,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return calcPC(npc);
}
const npc = Geki();