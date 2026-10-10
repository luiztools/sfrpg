function PoisonSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 4);
    tecnicas[1] = newCaracteristica("Arremesso", 3);

    var talentos = [];
    talentos[0] = newCaracteristica("Administrar", 3);
    talentos[1] = newCaracteristica("Apostar", 4);

    var pericias = [];

    var conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 2);

    var armas = [];
    armas[0] = "Pingalim";
    armas[1] = "Molotov";

    var poison =
    {
        Nome: "Poison Kiss",
        Estilo: "Kickboxe",
        Cronica: "Final Fight",
        Escola: "Ruas de Metro City",
        Conceito: "Empresária",
        Assinatura: "Roupas Curtas",
        Cronica: "Street Fighter 4",
        Time: "Ela e Hugo",
        Equipe: "Huge Wrestling Army",
        Jogador: "NPC",
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Misterios: 1,
        Medicina: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Apresamento: 4,
        Bloqueio: 4,
        Esportes: 5,
        Foco: 1,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Slide Kick, Foot Sweep, Handstand Kick, Brain Cracker, Thigh Press, Backflip, Backflip Kick, Wheel Kick, Spinning Weapon",
        Combos: "Backflip para Backflip Kick, Chicote Apresamento para Spinning Weapon (dizzy), Handstand Kick para Wheel Kick",
        Gloria: 5,
        Honra: 4,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 6,
        Divisao: "Duelistas"
    };
    return poison;
}

function PoisonFF() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 4);
    tecnicas[1] = newCaracteristica("Arremesso", 3);

    const armas = [];
    armas[0] = "Pingalim";
    armas[1] = "Molotov";

    const personagem = {
        "Nome": "Poison/Roxy",
        "Conceito": "Piriguetes",
        "Time": "Mad Gear",
        "Equipe": "Mad Gear",
        "Jogador": "NPC",
        "Crônica": "Final Fight",
        "Assinatura": "Cabelos coloridos",
        "Escola": "Ruas de Metro City",
        "Estilo": "Briga",
        "Forca": 4,
        "Destreza": 5,
        "Vigor": 5,
        "Carisma": 2,
        "Manipulacao": 5,
        "Aparencia": 5,
        "Percepcao": 3,
        "Inteligencia": 2,
        "Raciocinio": 3,
        "Prontidao": 2,
        "Interrogatorio": 0,
        "Intimidacao": 2,
        "Perspicacia": 1,
        "Manha": 0,
        "Labia": 1,
        "NovosTalentos": [],
        "LutaCega": 1,
        "Conducao": 0,
        "Lideranca": 0,
        "Seguranca": 3,
        "Furtividade": 2,
        "Sobrevivencia": 0,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 0,
        "Misterios": 1,
        "Estilos": 2,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 5,
        "Chute": 5,
        "Bloqueio": 4,
        "Apresamento": 4,
        "Esportes": 5,
        "Foco": 1,
        "NovasTecnicas": tecnicas,
        Armas: armas,
        "Gloria": 0,
        "Honra": 0,
        "Posto": 3,
        "Chi": 1,
        "ForcaVontade": 6,
        "Saude": 12,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Slide Kick, Handstand Kick, Jump",
        "Combos": ""
    };
    return personagem;
}

var npc;
if (getParameterByName('age') === 'ff')
    npc = PoisonFF();
else
    npc = PoisonSF4();
npc = calcPC(npc);