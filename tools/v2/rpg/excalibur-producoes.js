function SamsonProwse() {
    const personagem = {
        Nome: "Samson Prowse",
        Estilo: "nenhum",
        Escola: "Universidade de Yale",
        Jogador: "",
        Assinatura: "Honra",
        Conceito: "",
        Cronica: "",
        Equipe: "Excalibur Produções",
        Time: "",
        Forca: 2,
        Destreza: 2,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        NovosTalentos: [newCaracteristica("Administrar", 4)],
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [newCaracteristica("Apostar", 5), newCaracteristica("Publicidade", 4)],
        Arena: 4,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 5,
        NovosConhecimentos: [newCaracteristica("Direito", 2)],
        Antecedentes: [newCaracteristica("Recursos", 3), newCaracteristica("Contatos", 4), newCaracteristica("Aliados", 2), newCaracteristica("Fama", 2)],
        Soco: 3,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Spinning Knuckle, Jump",
        Combos: "",
        Gloria: 5,
        Honra: 2,
        Chi: 1,
        ForcaVontade: 2,
        Saude: 8,
        Divisao: "Nenhuma",
        Posto: 1
    };
    return personagem;
}

function Sapphire() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Fogo)", 4);
    antecedentes[1] = newCaracteristica("Staff", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const sapphire = {
        Nome: "Sapphire Fulton",
        Estilo: "Karatê Shotokan",
        Escola: "Casa do tio Bob",
        Jogador: "NPC",
        Assinatura: "Grande determinação",
        Conceito: "Jovem esquentada",
        Equipe: "Excalibur Produções",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 4,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 2,
        Furtividade: 2,
        Arena: 2,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Fire Strike, Flaming Fist, Heat Wave, Sense Element, Flying Knee Thrust, Power Uppercut, Throw, Jump",
        Combos: "Bloqueio para Strong + Flaming Fist para Throw (Dizzy); Heat Wave para Fire Strike para Flying Knee Thrust; Jab para Short para Fierce + Flaming Fist (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 5,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return sapphire;
}

function HarpolJhaliwal() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);

    const Harpol = {
        Nome: "Harpol Jhaliwal",
        Estilo: "Kabaddi",
        Escola: "Nova Dheli",
        Jogador: "NPC",
        Assinatura: "Ajuda o oponente a se levantar",
        Conceito: "Moradora de Rua",
        Equipe: "Excalibur Produções",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 1,
        Foco: 4,
        ManobrasEspeciais: "Head Butt, Slide Kick, Jump, Acid Breath, Ice Blast, Cobra Charm",
        Combos: "Jab para Head Butt para Slide Kick (Dizzy); Cobra Charm para Acid Breath para Ice Blast (Dizzy);",
        Gloria: 1,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 4,
        Saude: 12,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return Harpol;
}

function NickFontana() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 4);
    antecedentes[1] = newCaracteristica("Aliados", 3);

    const nick = {
        Nome: "Nick Fontana",
        Estilo: "Karatê Shotokan",
        Escola: "Academia de Seattle",
        Jogador: "NPC",
        Assinatura: "Toca sua guitarra",
        Conceito: "Moleque de Rua",
        Equipe: "Excalibur Produções",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 4,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 4,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 1,
        Arena: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 2,
        Bloqueio: 1,
        Esportes: 2,
        Foco: 3,
        ManobrasEspeciais: "Power Uppercut, Dragon Punch, Jump, Foot Sweep, Fireball",
        Combos: "Jab para Dragon Punch (Dizzy); Jump + Short para Foot Sweep (Dizzy)",
        Gloria: 2,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return nick;
}

let npc;
if (getParameterByName('age') === 'sapphire')
    npc = Sapphire();
else if (getParameterByName('age') === 'harpol-jhaliwal')
    npc = HarpolJhaliwal();
else if (getParameterByName('age') === 'nick-fontana')
    npc = NickFontana();
else
    npc = SamsonProwse();

npc = calcPC(npc);
