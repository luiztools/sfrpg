function Fang() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Staff", 5);
    antecedentes[4] = newCaracteristica("Aliados", 3);
    antecedentes[5] = newCaracteristica("Apoio", 5);

    const npc = {
        Nome: "F.A.N.G",
        Estilo: "Kempo",
        Escola: "Nguuhao",
        Jogador: "NPC",
        Assinatura: "Dança histérica",
        Conceito: "Cientista assassino",
        Cronica: "Street Fighter 5",
        Equipe: "Shadaloo",
        Time: "Generais de Bison",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 2,
        Labia: 5,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 5,
        Investigacao: 1,
        Medicina: 5,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Back Roll Throw, Drunken Monkey Roll, Acid Breath, Power Up, Punch Defense, Esquives, Ducking Fierce, Buffalo Punch, Dim Mak, Air Smash, Chi Kun Healing, Shishiruirui",
        Combos: "Short para Foot Sweep; Acid Breath para Acid Breath; Air Smash para Air Smash (dizzy); Punch Defense para B. Roll Throw",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return calcPC(npc);
}

const npc = Fang();
