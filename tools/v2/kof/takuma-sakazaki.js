function TakumaSakazaki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Fama", 3);

    const personagem = {
        Nome: "Takuma Sakazaki",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Jogador: "NPC",
        Assinatura: "Mostra os músculos",
        Conceito: "Sensei",
        Cronica: "Art of Fighting",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Hyper Fist, Power Uppercut, Fireball, Improved Fireball, Knee Basher, Regeneration, Foot Sweep, Throw, Hurricane Kick, Triple Strike",
        Combos: "Jab para Fierce; Jab para Fierce para Power Uppercut (Dizzy); Movimento para Hyper Fist para Improved Fireball (Dizzy)",
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

function TakumaKoF() {
    const personagem = TakumaSakazaki();
    personagem.Cronica = "The King of Fighters";
    personagem.Combos += "; Bloqueio para Improved Fireball; Bloqueio para Knee Basher; Bloqueio para Hyper Fist";
    personagem.Gloria = Math.min(personagem.Gloria + 1, 9);
    personagem.Honra = Math.min(personagem.Honra + 1, 9);
    personagem.Chi = Math.min(personagem.Chi + 1, 10);
    personagem.ForcaVontade = Math.min(personagem.ForcaVontade + 1, 10);
    personagem.Saude = 20;
    personagem.Posto = Math.min(personagem.Posto + 1, 9);
    return personagem;
}

let npc;
if (getParameterByName('age') === 'kof')
    npc = TakumaKoF();
else
    npc = TakumaSakazaki();

npc = calcPC(npc);
