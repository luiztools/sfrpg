function LiXiangfei() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Li Xiangfei",
        Estilo: "Wu Shu",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Gesto de vitória",
        Conceito: "Garçonete",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 1,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Kippup, Breakfall, Foot Sweep, Power Uppercut, Hyper Tackle, Flying Knee Thrust, Double Hit Kick, Buffalo Punch, Energy Ball, Cross Counter, Air Smash, Condensed Energy",
        Combos: "Jab para Hyper Tackle (Dizzy); Strong para Hyper Tackle; Bloqueio para Power Uppercut",
        Gloria: 4,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

function LiXiangfeiKof() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const personagem = {
        Nome: "Li Xiangfei",
        Estilo: "Wu Shu",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Gesto de vitória",
        Conceito: "Garçonete",
        Cronica: "King of Fighters",
        Equipe: "Nenhum",
        Time: "Women Fighters",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 1,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Kippup, Breakfall, Foot Sweep, Power Uppercut, Hyper Tackle, Flying Knee Thrust, Double Hit Kick, Buffalo Punch, Energy Ball, Cross Counter, Air Smash, Condensed Energy",
        Combos: "Jab para Hyper Tackle (Dizzy); Strong para Hyper Tackle; Bloqueio para Power Uppercut",
        Gloria: 4,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}


let npc;
if (getParameterByName('age') === 'kof')
    npc = LiXiangfeiKof();
else
    npc = LiXiangfei();

npc = calcPC(npc);