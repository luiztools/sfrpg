function Temjin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Temjin",
        Estilo: "Wrestling",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gritos e gestos na vitória",
        Conceito: "Trabalhador Remunerado",
        Cronica: "Art of Fighting 2",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 1,
        Manha: 3,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Throw, Pile Driver, Spinning Pile Driver, Energy Ball, Dashing Elbow, Grappling Defense, Wall Spring, Flying Body Spear",
        Combos: "Strong - Roundhouse - Fierce (Dizzy)",
        Gloria: 4,
        Honra: 2,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 17,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Temjin();

npc = calcPC(npc);
