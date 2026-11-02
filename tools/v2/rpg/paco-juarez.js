function PacoJuarez() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    antecedentes[2] = newCaracteristica("Empresário", 1);

    const Paco = {
        Nome: "Paco Juarez",
        Estilo: "Kickboxe",
        Escola: "Ruas de Chicago",
        Jogador: "NPC",
        Assinatura: "Sorri e ameaça Vespecchi",
        Conceito: "Ciborgue",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 4,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Seguranca: 3,
        Furtividade: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Fist Sweep, Extendible Limbs, Brain Cracker, Spinning Knuckle, Jump, Flying Knee Thrust, Slide Kick, Double Dread Kick, Double-Hit Kick, Forward Flip Knee, Ice Blast, Thunderclap",
        Combos: "Thunderclap para Double Dread Kick para Brain Cracker (Dizzy); Bloqueio para Ice Blast para Flying Knee Thrust (Dizzy)",
        Gloria: 5,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return Paco;
}

let npc = PacoJuarez();

npc = calcPC(npc);