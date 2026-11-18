function JuliaChangTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Sensei", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);

    return {
        Nome: "Julia Chang",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Família Chang",
        Jogador: "NPC",
        Assinatura: "Joga as tranças para trás, ajeita a faixa da cabeça e chama o oponente com a mão.",
        Conceito: "Estudante de ciências",
        Cronica: "Tekken 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Power Uppercut, Elbow Smash, Hyper Tackle, Spinning Back Fist, Knee Basher, Foot Sweep, Double Hit Kick, Backflip Kick, Throw, Suplex, Back Roll Throw, Jump, Kippup",
        Combos: "Jab para Power Uppercut (Dizzy), Elbow Smash para Hyper Tackle, Double Hit Kick para Spinning Back Fist (Dizzy), Short para Foot Sweep",
        Gloria: 3,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 6,
        Saude: 16,
        Divisao: "Livre",
        Posto: 4
    };
}

function JuliaChangTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Sensei", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 4);

    return {
        Nome: "Julia Chang",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Família Chang",
        Jogador: "NPC",
        Assinatura: "Ajeita os óculos, ergue a guarda baixa do Baji Quan e diz que luta pelas florestas.",
        Conceito: "Pesquisadora de reflorestamento",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 4,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Power Uppercut, Elbow Smash, Hyper Tackle, Spinning Back Fist, Knee Basher, Foot Sweep, Double Hit Kick, Backflip Kick, Throw, Suplex, Back Roll Throw, Dislocate Limb, Deflecting Punch, Jump, Kippup",
        Combos: "Jab para Power Uppercut (Dizzy), Elbow Smash para Hyper Tackle (Dizzy), Double Hit Kick para Spinning Back Fist (Dizzy), Short para Foot Sweep, Deflecting Punch para Dislocate Limb",
        Gloria: 4,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 5
    };
}

let npc;
if (getParameterByName('age') === 'tk3') npc = JuliaChangTk3();
else npc = JuliaChangTk4();
npc = calcPC(npc);
