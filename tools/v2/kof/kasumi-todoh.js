function KasumiTodoh() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 3);
    tecnicas[1] = newCaracteristica("Arco", 3);

    const armas = [];
    armas[0] = "Bokken";
    armas[1] = "Yumi";

    const personagem = {
        Nome: "Kasumi Todoh",
        Estilo: "Karatê Rindoukan (Kenjutsu)",
        Escola: "Dojô Todoh",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Lutadora Profissional",
        Cronica: "Art of Fighting 3",
        Equipe: "Clã Todoh",
        Time: "Women Fighters",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 1,
        Labia: 1,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Power Uppercut, Foot Sweep, Fireball, Double Hit Kick, Reaping Palm, Elbow Smash, Final Wave, Cross Counter, Triple Strike",
        Combos: "Fireball para Final Wave (Dizzy); Bloqueio para Final Wave; Jab para Power Uppercut para Fireball (Dizzy)",
        Gloria: 1,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

function KasumiKoF() {
    const personagem = KasumiTodoh();
    personagem.Cronica = "The King of Fighters";
    personagem.Combos += "; Bloqueio para Elbow Smash; Bloqueio para Power Uppercut; Bloqueio para Fireball";
    personagem.Gloria = Math.min(personagem.Gloria + 1, 9);
    personagem.Honra = Math.min(personagem.Honra + 1, 9);
    personagem.Chi = Math.min(personagem.Chi + 1, 10);
    personagem.ForcaVontade = Math.min(personagem.ForcaVontade + 1, 10);
    personagem.Saude = Math.min(personagem.Saude + 2, 20);
    personagem.Posto = Math.min(personagem.Posto + 1, 9);
    return personagem;
}

let npc;
if (getParameterByName('age') === 'kof')
    npc = KasumiKoF();
else
    npc = KasumiTodoh();

npc = calcPC(npc);
