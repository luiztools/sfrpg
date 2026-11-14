function YashiroNanakase() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Elemental (Terra)", 5);
    antecedentes[3] = newCaracteristica("Sangue de Orochi", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Yashiro Nanakase",
        Estilo: "Wrestling",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Grito de Vitória!",
        Conceito: "Líder de Banda",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Orochi Team",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 5,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 5,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Ducking Fierce, Foot Sweep, Double Hit Punch, Wounded Knee, Kippup, Spinning Foot Sweep, Pin, Improved Pin, Backflip, Grappling Defense, Argentine Back Breaker, Sense Orochi, Awakening Blood, Elemental Skin, Stone, Wall",
        Combos: "Backflip para Wounded Knee; Throw para Improved Pin; Argentine Back Breaker para Improved Pin; Double Hit Punch para Ducking Fierce (Dizzy)",
        Gloria: 6,
        Honra: 3,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = YashiroNanakase();

npc = calcPC(npc);
