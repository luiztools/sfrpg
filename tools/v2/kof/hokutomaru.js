function HokutomaruGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Herança de Clã", 4);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Sensei", 3);
    antecedentes[4] = newCaracteristica("Elemental (Fogo)", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);
    tecnicas[1] = newCaracteristica("Arremesso", 3);

    const armas = [];
    armas[0] = "Bokken";
    armas[1] = "Shuriken";

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);
    talentos[1] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);
    pericias[1] = newCaracteristica("Disfarce", 4);

    const personagem = {
        Nome: "Hokutomaru",
        Estilo: "Ninjitsu",
        Escola: "Dojô Shiranui",
        Jogador: "NPC",
        Assinatura: "Faz uma refeição toda atrapalhada (podem surgir bombas!)",
        Conceito: "Criança Ninja",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Foot Sweep, Wall Spring, Throw, Air Throw, Breakfall, Flying Body Spear, Rolling Attack, Dive Kick, Shrouded Moon, Gekiro, Elemental Explosion",
        Combos: "Shuriken para Shuriken (Dizzy); Shrouded Moon para Espada Fierce; Rolling Attack para Espada Fierce (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 16,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = HokutomaruGarou();

npc = calcPC(npc);
