function Shermie() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 5);
    antecedentes[3] = newCaracteristica("Elemental (Eletricidade)", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Música", 3);
    pericias[1] = newCaracteristica("Publicidade", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 1);

    const personagem = {
        Nome: "Shermie",
        Estilo: "Kickboxe",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Pose de vitória",
        Conceito: "Membro de Banda",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Orochi Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 5,
        Labia: 4,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 3,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 5,
        Foco: 4,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Throw, Foot Sweep, Spinning Foot Sweep, Flying Body Spear, Shock Treatment, Elemental Rage, Suplex, Thigh Press, Sense Orochi, Lightning Bolt, Air Smash",
        Combos: "Throw para Flying Body Spear (Dizzy); Jump para Thigh Press; Bloqueio para Elemental Rage (Dizzy); Forward para Short para Foot Sweep (Dizzy)",
        Gloria: 7,
        Honra: 2,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Shermie();

npc = calcPC(npc);
