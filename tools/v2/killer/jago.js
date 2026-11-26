function JagoKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 5);
    antecedentes[1] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Katana";

    const jago = {
        Nome: "Jago",
        Estilo: "Kung Fu",
        Escola: "Templo do Tigre",
        Jogador: "NPC",
        Assinatura: "Rugido de Tigre",
        Conceito: "Monge",
        Cronica: "Killer Instinct",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 1,
        Labia: 2,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Power Uppercut, Dragon Punch, Wheel Kick, Double Hit Kick, Stepping Front Kick, Fireball, Battojutsu, Foot Sweep",
        Combos: "Wheel Kick para Stepping Front Kick para Dragon Punch (Dizzy); Wheel Kick para Espada Strong para Espada Fierce (Dizzy); Fireball para Wheel Kick (Dizzy)",
        Gloria: 7,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 10
    };
    return jago;
}

function ShadowJagoKI() {
    const jago = JagoKI();
    jago.Nome = "Shadow Jago";
    jago.Assinatura = "Gargalhada demoníaca, envolto em chamas sombrias";
    jago.Conceito = "Monge possuído";
    jago.Foco = 6;
    jago.Honra = 0;
    jago.ManobrasEspeciais += ", Flying Fireball, Deaths Visage, Yoga Teleport";
    jago.Combos += "; Deaths Visage para Dragon Punch (Dizzy); Yoga Teleport para Wind Kick para Flying Fireball";
    return jago;
}

let npc;
if (getParameterByName('age') === 'shadow') npc = ShadowJagoKI();
else npc = JagoKI();
npc = calcPC(npc);