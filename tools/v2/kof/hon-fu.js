function HonFuFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Mangual", 5);

    const armas = [];
    armas[0] = "Nunchaku";

    const personagem = {
        Nome: "Hon Fu",
        Estilo: "Kung Fu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Demonstração com nunchaku",
        Conceito: "Detetive",
        Cronica: "Fatal Fury 3",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 1,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Punch Defense, Deflecting Punch, Power Uppercut, Dragon Punch, Breakfall, Wall Spring, Spinning Weapon",
        Combos: "Jumping Forward para Nunchaku Jab para Dragon Punch; Foot Sweep para Dragon Punch (Dizzy); Wall Spring para Spinning Weapon para Dragon Punch (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = HonFuFF();

npc = calcPC(npc);
