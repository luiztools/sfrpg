function GoukenSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Sensei", 7);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    
    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    
    const gouken = {
        Nome: "Gouken",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô de Goutetsu",
        Jogador: "NPC",
        Assinatura: "Pura Sabedoria!",
        Conceito: "Sensei sábio",
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
        Prontidao: 4,
        Intimidacao: 4,
        Perspicacia: 7,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 7,
        Lideranca: 6,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 5,
        Investigacao: 2,
        Medicina: 6,
        Misterios: 5,
        Estilos: 7,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 7,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        Foco: 7,
        ManobrasEspeciais: "Accuracy, Hurricane Kick, Air Hurricane Kick, Chi Kun Healing, Condensed Energy, Deflecting Punch, Dive Kick, Dragon Punch, Foot Sweep, Fireball, Jump, Air Throw, Power Uppercut, Reaping Palm, Throw, Zen No Mind, Mu No Hadou, Flaming Dragon Punch, Counter Attack, Ashura Senku, Bushin Sempu Kyaku, Denjin Hadouken",
        Combos: "Throw para Dragon Punch; Throw para Bushin Sempu Kyaku (Dizzy); Fireball para Fireball para Fireball (Dizzy), Reaping Palm para Reaping Palm",
        Gloria: 6,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return calcPC(gouken);
}
const npc = GoukenSF4();