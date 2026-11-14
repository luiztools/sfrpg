function Rugal() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 5);
    antecedentes[3] = newCaracteristica("Staff", 4);
    antecedentes[4] = newCaracteristica("Cibernético", 1);
    antecedentes[5] = newCaracteristica("Sangue de Orochi", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 4);

    const personagem = {
        Nome: "Rugal Bernstein",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Rei do Crime",
        Cronica: "The King of Fighters",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 6,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 6,
        Manha: 5,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 4,
        Computador: 3,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Foot Sweep, Kippup, Fireball, Throw, Grappling Defense, Flash Kick, Wheel Kick, Suplex, Somersault Kick, Air Suplex, Flying Tackle, Knife Hand Strike, Sense Orochi, Face Slam, Iron Claw, Missile Reflection, Energy Reflection, Maka Wara, Improved Fireball, Buffalo Punch",
        Combos: "Strong para Forward para Fireball; Flying Tackle para Face Slam (Dizzy); Forward para Buffalo Punch (Dizzy); Somersault Kick para Wheel Kick (Dizzy)",
        Gloria: 9,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 10
    };
    return personagem;
}

let npc = Rugal();

npc = calcPC(npc);
