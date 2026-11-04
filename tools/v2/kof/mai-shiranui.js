function MaiFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Sensei", 1);
    antecedentes[3] = newCaracteristica("Elemental (Fogo)", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = [];
    armas[0] = "Leque Arremessado";

    const personagem = {
        Nome: "Mai Shiranui",
        Estilo: "Ninjitsu",
        Escola: "Hanzo Shiranui / Jubei Yamada",
        Jogador: "NPC",
        Assinatura: "Aponta para o oponente com o leque e pisca",
        Conceito: "Menina Mimada",
        Cronica: "Fatal Fury 2",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 6,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 0,
        Labia: 4,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 3,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Wall Spring, Throw, Elemental Explosion, Flaming Fist, Cartwheel Kick, Air Throw, Breakfall, Flying Body Spear, Hyper Tackle",
        Combos: "Cartwheel Kick para Hyper Tackle; Fierce para Elemental Explosion; Wall Spring para Flying Body Spear para Flying Body Spear (Dizzy); Leque Arremessado para Leque Arremessado (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 9,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = MaiFF();

npc = calcPC(npc);
