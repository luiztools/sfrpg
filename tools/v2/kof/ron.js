function Ron() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const personagem = {
        Nome: "Ron",
        Estilo: "Kung Fu",
        Escola: "Flying Brigands",
        Jogador: "NPC",
        Assinatura: "Postura sinistra",
        Conceito: "Necromante",
        Cronica: "The King of Fighters",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 6,
        Sobrevivencia: 0,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 6,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Wall Spring, Snake Strike, Dim Mak, Cobra Charm, Entrancing Cobra, Drain, Absorb Soul, Deaths Visage, Ghost Form",
        Combos: "Snake Strike para Dim Mak (Dizzy); Cobra Charm para Drain; Entrancing Cobra para Absorb Soul (Dizzy)",
        Gloria: 8,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Ron();

npc = calcPC(npc);
