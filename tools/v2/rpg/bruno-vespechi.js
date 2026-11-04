function BrunoVespechi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Herança de Clã", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);
    tecnicas[1] = newCaracteristica("Faca", 5);
    tecnicas[2] = newCaracteristica("Arco", 3);

    const bruno = {
        Nome: "Bruno Vespechi",
        Estilo: "Ninjitsu",
        Escola: "Clã Desconhecido",
        Jogador: "NPC",
        Assinatura: "Mata o oponente!",
        Conceito: "Mercenário",
        Equipe: "Nenhuma",
        Time: "independente",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 5,
        Labia: 3,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 3,
        Investigacao: 3,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Power Uppercut, Elbow Smash, Double Hit Kick, Light Feet, Foot Sweep, Throw, Jump, Ansatsuken, Ear Pop, Wall Spring, Eye Rake",
        Combos: "Double Hit Kick para Elbow Smash; Jump + Roundhouse para Double-Hit Kick (Dizzy); Jump + Roundhouse para Foot Sweep;",
        Gloria: 8,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return bruno;
}

let npc = BrunoVespechi();

npc = calcPC(npc);