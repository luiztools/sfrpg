function LarsTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    return {
        Nome: "Lars Alexandersson",
        Estilo: "Forças Especiais",
        Escola: "Tekken Force",
        Equipe: "Tekken Force",
        Time: "Tekken Force",
        Jogador: "NPC",
        Assinatura: "Avança num piscar de olhos, para em posição de combate e diz: \"Hora de acabar com isso!\"",
        Conceito: "Líder rebelde da Tekken Force",
        Cronica: "Tekken 6",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Light Feet, Empty Step, Esquives, Double Hit Punch, Elbow Smash, Lunging Punch, Power Uppercut, Dashing Punch, Hyper Tackle, Rekka Ken, Flying Knee Thrust, Forward Flip Knee, Cartwheel Kick, Backflip Kick, Double Hit Kick, Foot Sweep, Slide Kick",
        Combos: "Double Hit Punch para Elbow Smash para Hyper Tackle (Dizzy), Lunging Punch para Dashing Punch, Flying Knee Thrust para Power Uppercut (Dizzy), Esquives para Cartwheel Kick, Double Hit Kick para Backflip Kick",
        Gloria: 6,
        Honra: 8,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function LarsTk8() {
    const personagem = LarsTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Esportes = 6;
    personagem.Gloria = 7;
    personagem.Honra = 9;
    personagem.Chi = 7;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = LarsTk8();
else npc = LarsTk4();
npc = calcPC(npc);
