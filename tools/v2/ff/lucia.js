function Lucia() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Apoio", 4);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Elemental", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const conhecimentos = [];

    const lucia = {
        Nome: "Lucia Morgan",
        Estilo: "Forças Especiais",
        Escola: "Unidade Especial de Crimes",
        Jogador: "NPC",
        Assinatura: "Roupas curtas",
        Conceito: "Agente especial",
        Cronica: "Final Fight 3",
        Equipe: "MCPD",
        Time: "Final Fight",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        NovasPericias: [],
        Arena: 1,
        Computador: 3,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 1,
        Estilos: 2,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Double Hit Kick, Jump, Lightning Leg, Gekiro, Throw, Knee Basher, Suplex, Roundabout Kick, Flaming Heel, Elbow Smash, Kippup",
        Combos: "Movimento para Elbow Smash; Gekiro para Roundhouse (Flaming); Jab para Strong para Throw (Dizzy);",
        Gloria: 4,
        Honra: 4,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return calcPC(lucia);
}

function LuciaSF5() {
    const lucia = Lucia();
    lucia.Cronica = "Street Fighter V";
    lucia.Vigor = 4;
    lucia.Saude = 20;
    lucia.ForcaVontade = 9;
    lucia.Chi = 8;
    lucia.Combos += "Bloqueio para Lightning Leg (Dizzy);"
    lucia.Bloqueio = 4;
    return lucia;
}

let npc;
if (getParameterByName('age') === 'ff3')
    npc = Lucia();
else
    npc = LuciaSF5();
npc = calcPC(npc);