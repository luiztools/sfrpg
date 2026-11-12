function SethKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const personagem = {
        Nome: "Seth",
        Estilo: "Forças Especiais",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Ajeitar a gravata",
        Conceito: "Profissional",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Agents Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 4,
        Investigacao: 5,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Throw, Kippup, Power Uppercut, Foot Sweep, Fist Sweep, Criminal Upper, Spinning Back Fist, Ground Fighting, Dashing Clothesline, Flying Knee Thrust, Brain Cracker, Toughskin",
        Combos: "Flying Knee Thrust para Criminal Upper; Strong para Spinning Back Fist para Criminal Upper; Throw para Brain Cracker para Throw (Dizzy); Jumping Forward para Dashing Clothesline para Foot Sweep",
        Gloria: 5,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = SethKoF();

npc = calcPC(npc);
