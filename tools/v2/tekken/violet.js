function VioletTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 4);

    return {
        Nome: "Violet (Lee Chaolan)",
        Estilo: "Kickboxe",
        Escola: "Particular",
        Equipe: "Violet Systems",
        Jogador: "NPC",
        Assinatura: "Chuta o ar",
        Conceito: "Executivo",
        Cronica: "Tekken 4",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 4,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Slide Kick, Double Hit Kick, Flying Knee Thrust, Throw, Back Roll Throw, Suplex, Knee Basher, Double Hit Punch",
        Combos: "Double Hit Kick para Double Hit Kick para Knee Basher, Double Hit Kick para Double Hit Kick para Roundhouse, Double Hit Punch para Double Hit Punch para Fierce",
        Gloria: 6,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = VioletTk4();
npc = calcPC(npc);
