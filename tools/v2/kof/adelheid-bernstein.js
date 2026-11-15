function AdelheidBernstein() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Staff", 3);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Adelheid Bernstein",
        Estilo: "Forças Especiais",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Cruza os braços e saúda o oponente",
        Conceito: "Herdeiro relutante",
        Cronica: "The King of Fighters",
        Equipe: "Família Bernstein",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Slide Kick, Fireball, Flying Tackle, Face Slam, Double Hit Kick, Flash Kick, Somersault Kick, Double Hit Punch, Energy Reflection, Missile Reflection, Sonic Scythe",
        Combos: "Flying Tackle para Face Slam (Dizzy); Fireball para Fireball; Slide Kick para Flash Kick; Strong para Double Hit Kick para Jumping Roundhouse (Dizzy)",
        Gloria: 8,
        Honra: 7,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = AdelheidBernstein();

npc = calcPC(npc);
