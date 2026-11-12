function Whip() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 6);
    tecnicas[1] = newCaracteristica("Faca", 3);
    tecnicas[2] = newCaracteristica("Armas de Fogo", 4);
    tecnicas[3] = newCaracteristica("Arremesso", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);

    const armas = [];
    armas[0] = "Chicote";
    armas[1] = "Faca";
    armas[2] = "Pistola";
    armas[3] = "Granada";

    const personagem = {
        Nome: "Whip",
        Estilo: "Forças Especiais",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Beija o chicote",
        Conceito: "Mercenária",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Ikari Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 3,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Power Uppercut, Air Throw, Foot Sweep, Haymaker, Double Hit Kick, Handstand Kick, Strangle Throw, Weapon Choke, Double Hit Blow, Spinning Weapon, Weapon Defense, Deflecting Weapon",
        Combos: "Chicote Jab para Chicote Strong para Chicote Fierce; Short para Handstand Kick para Foot Sweep (Dizzy); Deflecting Weapon para Spinning Weapon para Weapon Choke",
        Gloria: 6,
        Honra: 3,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Whip();

npc = calcPC(npc);
