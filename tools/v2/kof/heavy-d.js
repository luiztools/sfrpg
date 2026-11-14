function HeavyD() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const talentos = [];

    const personagem = {
        Nome: "Heavy D",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Socos rápidos",
        Conceito: "Ex-campeão",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "American Sports",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 0,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 2,
        Foco: 3,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Boxing Punches, Jump, Stomach Pump, Double Hit Punch, Hyper Fist, Ducking Blow, Ducking Fierce, Dashing Punch, Fist Sweep, Power Uppercut, Shockwave, Criminal Upper, Flicker Jab, Turn Punch",
        Combos: "Strong para Fierce para Dashing Punch (Dizzy); Fierce para Fist Sweep (Dizzy); Strong para Fierce para Criminal Upper (Dizzy); Power Uppercut para Hyper Fist para Power Uppercut (Dizzy); Dashing Punch para Dashing Punch (Dizzy); Criminal Upper para Criminal Upper (Dizzy)",
        Gloria: 8,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = HeavyD();

npc = calcPC(npc);
