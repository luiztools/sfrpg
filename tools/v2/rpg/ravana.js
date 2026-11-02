
function Ravana() {
    const personagem = {
        Nome: "Ravana",
        Estilo: "Kabaddi",
        Assinatura: "Uivo alucinante!",
        Conceito: "Rakshasa",
        Forca: 6,
        Destreza: 6,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        NovosTalentos: [],
        LutaCega: 5,
        Furtividade: 5,
        Sobrevivencia: 4,
        NovasPericias: [],
        Arena: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 5,
        NovosConhecimentos: [],
        Antecedentes: [],
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: [newCaracteristica("Faca", 5), newCaracteristica("Espada", 5)],
        ManobrasEspeciais: "Triple Strike, Fireball, Flying Knee Thrust, Yoga Flame, Slide Kick, Yoga Teleport, San He, Ghost Form, Cannon Drill, Regeneration, Missile Reflection, Stunning Shout, Spinning Foot Sweep, Energy Reflection, Extendible Limbs",
        Chi: 3,
        ForcaVontade: 7,
        Saude: 20
    };
    return personagem;
}

let npc = Ravana();

npc = calcPC(npc);