function ZafinaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Paranormal", 2);
    antecedentes[4] = newCaracteristica("Devil Gene", 3);

    return {
        Nome: "Zafina",
        Estilo: "Baraqah",
        Escola: "Guardiões da Tumba",
        Jogador: "NPC",
        Assinatura: "Abre os braços como um espantalho e encara o oponente em silêncio, como quem já leu o destino dele nas estrelas.",
        Conceito: "Assassina guardiã",
        Cronica: "Tekken 6",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Ground Fighting, Throw, Back Roll Throw, Sleeper, Dislocate Limb, Deflecting Punch, Esquives, Flamingo Stance, Spinning Back Fist, Spinning Knuckle, Alacer Wrist, Ducking Fierce, Drunken Monkey Roll, Foot Sweep, Spinning Foot Sweep, Wounded Knee, Kick Roll, Handstand Kick, Cartwheel Kick, Mind Reading, Psychokinetic Channeling",
        Combos: "Jab para Jab para Spinning Knuckle (Dizzy), Drunken Monkey Roll para Ducking Fierce, Spinning Foot Sweep para Kick Roll, Kick Roll para Handstand Kick, Deflecting Punch para Dislocate Limb",
        Gloria: 3,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function ZafinaTk8() {
    const personagem = ZafinaTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Antecedentes = personagem.Antecedentes.filter(a => a.Nome !== "Devil Gene");
    personagem.Esportes = 7;
    personagem.Gloria = 4;
    personagem.Honra = 8;
    personagem.Chi = 8;
    personagem.ForcaVontade = 8;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = ZafinaTk8();
else npc = ZafinaTk4();
npc = calcPC(npc);
