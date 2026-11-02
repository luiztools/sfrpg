
function JackMiller() {
    const personagem = {
        Nome: "Jack Miller",
        Estilo: "Karatê Shotokan",
        Escola: "Desconhecida",
        Assinatura: "Levanta o braço",
        Conceito: "Ex-Lutador Pai de Família",
        Equipe: "Bob Reagan",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 3,
        LutaCega: 4,
        Conducao: 3,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 4,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: [newCaracteristica("Recursos", 3), newCaracteristica("Fama", 2), newCaracteristica("Aliados", 2), newCaracteristica("Sensei", 5)],
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Dragon Punch, Throw, Back Roll Throw, Power Uppercut, Foot Sweep, Spinning Foot Sweep, Jump, Punch Defense, Kick Defense, Counter Attack, Kippup, Esquives, Light Feet, Double-Hit Punch, Flaming Dragon Punch",
        Combos: "Counter Attack para Dragon Punch (Dizzy), Bloqueio para Back Roll Throw, Foot Sweep para Flaming Dragon Punch (Dizzy)",
        Gloria: 6,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8,
        Linguistica: 2
    };
    return personagem;
}

let npc = JackMiller();

npc = calcPC(npc);