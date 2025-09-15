function GoukenSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Sensei", 7);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    
    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    
    const gouken =
    {
        NovosTalentos: talentos,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Gloria: 6,
        Honra: 10,
        Posto: 10,
        Divisao: "Estilo Livre",
        Nome: "Gouken",
        Escola: "Dojô de Goutetsu",
        Conceito: "Sensei sábio",
        Assinatura: "Pura Sabedoria!",
        Estilo: "Karatê Shotokan",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 7,
        Destreza: 7,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 7,
        Inteligencia: 6,
        Raciocinio: 6,
        Foco: 7,
        Bloqueio: 5,
        Soco: 7,
        Chute: 7,
        Apresamento: 5,
        Esportes: 4,
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Accuracy, Tatsumaki Sempu Kyaku, Air Hurricane Kick, Chi Kun Healing, Condensed Energy, Deflecting Punch, Dive Kick, Shoryuken, Foot Sweep, Hadouken, Jump, Lightning Drop, Power Uppercut, Reaping Palm, Throw, Zen no Mind, Mu no Hadou, Shin Shoryuken, Counter Attack, Ashura Senkuu, Bushin Sempu Kyaku, Denjin Hadouken",
        Combos: "Throw para Shoryuken; Throw para Bushin Sempu Kyaku (Dizzy); Hadouken para Hadouken para Hadouken (Dizzy), Reaping Palm para Reaping Palm",
        Prontidao: 4,
        Intimidacao: 4,
        Perspicacia: 7,
        Labia: 3,
        LutaCega: 7,
        Lideranca: 6,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 5,
        Investigacao: 2,
        Medicina: 6,
        Misterios: 5,
        Estilos: 7
    };
    return calcPC(gouken);
}
const npc = GoukenSF4();