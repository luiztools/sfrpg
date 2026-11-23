function RavenTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Herança de Clã", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    return {
        Nome: "Raven",
        Estilo: "Ninjitsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Some num borrão de sombras e reaparece às costas do oponente.",
        Conceito: "Agente secreto ninja",
        Cronica: "Tekken 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 3,
        Investigacao: 5,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Back Roll Throw, Deflecting Punch, Shuto, Spinning Back Fist, Backflip Kick, Cartwheel Kick, Handstand Kick, Slide Kick, Spin Kick, Double Hit Kick, Foot Sweep, Backflip, Double Jump, Empty Step, Wall Spring, Sakki, Shrouded Moon, Soul Illusion, Speed Of The Mongoose",
        Combos: "Shuto para Spin Kick (Dizzy), Soul Illusion para Slide Kick, Deflecting Punch para Backflip Kick, Backflip para Cartwheel Kick, Jab para Jab para Spinning Back Fist (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function RavenTk8() {
    const personagem = RavenTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Foco = 5;
    personagem.NovasTecnicas = [newCaracteristica("Faca", 4)];
    personagem.Armas = ["Wakizashi"];
    personagem.Divisao = "Duelistas";
    personagem.Gloria = 5;
    personagem.Honra = 7;
    personagem.Chi = 8;
    personagem.ForcaVontade = 9;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = RavenTk8();
else npc = RavenTk4();
npc = calcPC(npc);
