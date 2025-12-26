function ErronBlack() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 6);
    tecnicas[1] = newCaracteristica("Espada", 4);
    tecnicas[2] = newCaracteristica("Arremesso", 3);

    const talentos = [];
    const conhecimentos = [];

    const armas = ["Pistola", "Fuzil", "Rapier", "Granada"];

    const personagem = {
        Nome: "Erron Black",
        Estilo: "Briga",
        Escola: "Desconhecia",
        Jogador: "NPC",
        Assinatura: "Atira pra cima",
        Conceito: "Pistoleiro",
        Time: "Outworld",
        Cronica: "Mortal Kombat X",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        Labia: 3,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 3,
        Estilos: 1,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Slide Kick, Foot Sweep, Power Uppercut, Flying Tackle",
        Combos: "Jab – Strong – Pistola; Jab – Strong – Forward (dizzy); Slide Kick – Pistola – Pistola; Flying Tackle – Pistola (dizzy); Granada – Pistola – Pistola",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return personagem;
}

let npc = calcPC(ErronBlack());