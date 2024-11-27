function PoisonSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 6);

    var talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);

    var pericias = [];
    pericias[0] = newCaracteristica("Publicidade", 3);
    pericias[1] = newCaracteristica("Empresário", 2);

    var conhecimentos = [];

    var armas = [];
    armas[0] = "Chicote";

    var poison =
    {
        Nome: "Poison Kiss",
        Estilo: "Luta-Livre",
        Escola: "Ruas de Metro City",
        Conceito: "Empresária",
        Assinatura: "Chicote",
        Cronica: "Street Fighter 4",
        Time: "Nenhum",
        Equipe: "Huge Wrestling Army",
        Jogador: "NPC",
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 6,
        Apresamento: 4,
        Bloqueio: 5,
        Esportes: 5,
        Foco: 4,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Bitch Slap, Axe Kick, Backflip, Brain Cracker, Condensed Energy, Dirty Fighting, Double Hit Kick, Fireball, Foot Sweep, Jump, Power Uppercut, Rekka Buki, Thigh Press, Flying Thrust Kick",
        Combos: "Axe Kick para Thigh Press (Dizzy); Forward para Strong Rekka Buki para Strong Rekka Buki (Dizzy); Jump + Chicote Fierce para Double Hit Kick para Dirty Roundhouse (Dizzy)",
        Gloria: 8,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 9,
        Divisao: "Duelistas"
    };
    return poison;
}

function PoisonFF1() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Contatos", 4);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    var armas = [];
    armas[0] = "Chicote";

    var poison =
    {
        Nome: "Poison Kiss",
        Estilo: "Luta-Livre",
        Escola: "Ruas de Metro City",
        Conceito: "Piriguete",
        Assinatura: "Chicote",
        Cronica: "Final Fight 1",
        Time: "Mad Gear",
        Equipe: "Mad Gear",
        Jogador: "NPC",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Misterios: 1,
        Estilos: 1,
        NovasPericias: [],
        NovosConhecimentos: [],
        NovosTalentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 5,
        Apresamento: 3,
        Bloqueio: 4,
        Esportes: 4,
        Foco: 3,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Bitch Slap, Axe Kick, Backflip, Brain Cracker, Dirty Fighting, Double Hit Kick, Foot Sweep, Jump, Power Uppercut, Rekka Buki, Thigh Press, Flying Thrust Kick",
        Combos: "Axe Kick para Thigh Press (Dizzy); Forward para Strong Rekka Buki para Strong Rekka Buki (Dizzy); Jump + Chicote Fierce para Double Hit Kick para Dirty Roundhouse (Dizzy)",
        Gloria: 4,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 5,
        Saude: 17,
        Posto: 5,
        Divisao: "Duelistas"
    };
    return poison;
}

var npc;
if (getParameterByName('age') === 'ff1')
    npc = PoisonFF1();
else
    npc = PoisonSF4();
npc = calcPC(npc);