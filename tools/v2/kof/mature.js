function Mature() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Elemental (Luz)", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 3);

    const personagem = {
        Nome: "Mature",
        Estilo: "Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Olhar frio (e tapa-olho)",
        Conceito: "Espiã",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Yagami Team",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 5,
        Labia: 4,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Throw, Rekka Ken, Foot Sweep, Knife Hand Strike, Dashing Punch, Sonic Boom, Double Hit Punch, Face Slam, Awakening Blood, Flying Tackle",
        Combos: "Jump para Knife Hand Strike (Dizzy); Double Hit Punch para Rekka Ken; Flying Tackle para Face Slam (Dizzy)",
        Gloria: 3,
        Honra: 4,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Mature();

npc = calcPC(npc);
