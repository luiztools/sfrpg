function HisakoKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Espectro", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Lança", 5);

    const armas = [];
    armas[0] = "Naginata";

    const ficha = {
        Nome: "Hisako",
        Estilo: "Jeet Kune Dô",
        Escola: "Treinada pelo pai, na era Sengoku",
        Jogador: "NPC",
        Assinatura: "Rasteja de cabeça baixa e solta um grito agudo",
        Conceito: "Espírito vingativo (onryō)",
        Cronica: "Killer Instinct",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Yoga Teleport, Weapon Uppercut, Spinning Weapon, Deflecting Weapon, Cross Counter, Slide Kick, Ghost Form, Deaths Visage, Neck Choke, Levitation",
        Combos: "Deflecting Weapon para Weapon Uppercut (Dizzy); Slide Kick para Neck Choke; Yoga Teleport para Lança Fierce para Spinning Weapon (Dizzy)",
        Gloria: 3,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

function ShinHisakoKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Espectro", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Katana";

    const ficha = {
        Nome: "Shin Hisako",
        Estilo: "Jeet Kune Dô",
        Escola: "Treinada pelo pai, renascida como ser celestial",
        Jogador: "NPC",
        Assinatura: "Ergue a katana astral envolta em luz",
        Conceito: "Ser celestial",
        Cronica: "Killer Instinct",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Yoga Teleport, Weapon Uppercut, Spinning Weapon, Deflecting Weapon, Cross Counter, Slide Kick, Ghost Form, Fireball, Levitation, Flying Body Spear",
        Combos: "Deflecting Weapon para Weapon Uppercut (Dizzy); Fireball para Yoga Teleport para Espada Fierce; Flying Body Spear para Spinning Weapon (Dizzy)",
        Gloria: 5,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

let npc;
if (getParameterByName('age') === 'shin') npc = ShinHisakoKI();
else npc = HisakoKI();
npc = calcPC(npc);
