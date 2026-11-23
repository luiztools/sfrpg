function ShaheenTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 3);

    const armas = [];
    armas[0] = "Cimitarra";

    return {
        Nome: "Shaheen",
        Estilo: "Baraqah",
        Escola: "Companhia Militar Privada",
        Jogador: "NPC",
        Assinatura: "Ajeita o shemagh no pescoço e encara o adversário em silêncio, pronto para avançar",
        Conceito: "Soldado em busca de vingança",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 1,
        NovosConhecimentos: conhecimentos,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Light Feet, Drunken Monkey Roll, Slide Kick, Foot Sweep, Spinning Foot Sweep, Wounded Knee, Double Hit Kick, Stepping Front Kick, Knee Basher, Elbow Smash, Lunging Punch, Spinning Back Fist, Deflecting Punch, Displacement, Back Roll Throw, Dislocate Limb",
        Combos: "Drunken Monkey Roll para Slide Kick, Drunken Monkey Roll para Spinning Foot Sweep, Double Hit Kick para Stepping Front Kick (Dizzy), Displacement para Elbow Smash, Lunging Punch para Knee Basher",
        Gloria: 3,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 7
    };
}

function ShaheenTk8() {
    const personagem = ShaheenTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Antecedentes[0] = newCaracteristica("Aliados", 3);
    personagem.Chute = 6;
    personagem.ManobrasEspeciais += ", Spinning Knuckle, Dashing Punch";
    personagem.Combos += ", Spinning Foot Sweep para Dashing Punch";
    personagem.Gloria = 4;
    personagem.Honra = 7;
    personagem.Chi = 5;
    personagem.ForcaVontade = 9;
    personagem.Saude = 19;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = ShaheenTk8();
else npc = ShaheenTk4();
npc = calcPC(npc);
