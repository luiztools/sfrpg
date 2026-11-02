function Menat() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Paranormal", 4);

    const personagem = {
        Nome: "Menat",
        Estilo: "Soul Power",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Bola de Cristal",
        Conceito: "Vidente",
        Cronica: "Street Fighter 5",
        Time: "Rose",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Handstand Kick, Flying Body Spear, Air Throw, Missile Reflection, Energy Reflection, Double Hit Kick, Slide Kick, Fireball, Repeating Fireball, Psychokinetic Channeling, Extendible Limbs, Flying Heel Stomp, Accuracy, Flying Fireball, Telekinesis",
        Combos: "Jab para Psycokinetic + Fierce (dizzy), Strong para Fierce (dizzy), Double-Hit Kick para Slide Kick",
        Gloria: 5,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return personagem;
}

let npc = Menat();

npc = calcPC(npc);