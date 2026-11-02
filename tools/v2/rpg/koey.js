function Koey() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 1);
    antecedentes[1] = newCaracteristica("Empresario", 1);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const koey = {
        Nome: "Koey",
        Estilo: "Kabaddi",
        Escola: "Ex-pupilo de Dhalsim",
        Jogador: "NPC",
        Assinatura: "Reverência silenciosa",
        Conceito: "Monge",
        Equipe: "Gordon Produções",
        Time: "Meteora",
        Forca: 2,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Conducao: 2,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 1,
        Computador: 1,
        Investigacao: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 1,
        Bloqueio: 4,
        Esportes: 1,
        Foco: 4,
        ManobrasEspeciais: "Missile Reflection, Energy Reflection, Fireball",
        Gloria: 2,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return koey;
}

let npc = Koey();

npc = calcPC(npc);