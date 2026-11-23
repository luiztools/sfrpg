function AlisaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Cibernético", 5);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Contatos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 3);
    const armas = [];
    armas[0] = "Espada";

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Linguística", 3);

    return {
        Nome: "Alisa Bosconovitch",
        Estilo: "Jeet Kune Dô",
        Escola: "Doutor Bosconovitch",
        Jogador: "NPC",
        Assinatura: "Inclina a cabeça, sorri com doçura e diz: \"Iniciando modo de combate.\"",
        Conceito: "Androide em busca de humanidade",
        Cronica: "Tekken 6",
        Equipe: "Mishima Zaibatsu",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 4,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Flight, Cannon Drill, Extendible Limbs, Fireball, Weapon Channeling, Spinning Weapon, Weapon Uppercut, Double Hit Kick, Cartwheel Kick, Handstand Kick, Backflip Kick, Stepping Front Kick, Foot Sweep, Dive Kick",
        Combos: "Cannon Drill para Spinning Weapon, Double Hit Kick para Cartwheel Kick (Dizzy), Foot Sweep para Dive Kick, Espada Jab para Weapon Uppercut, Backflip Kick para Fireball",
        Gloria: 2,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 4
    };
}

function AlisaTk8() {
    const personagem = AlisaTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Soco = 4;
    personagem.Gloria = 3;
    personagem.Chi = 4;
    personagem.ForcaVontade = 7;
    personagem.Saude = 20;
    personagem.Posto = 5;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = AlisaTk8();
else npc = AlisaTk4();
npc = calcPC(npc);
