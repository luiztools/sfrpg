function JohnnyCageMk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 1);
    pericias[1] = newCaracteristica("Publicidade", 2);

    const personagem = {
        Nome: "Johnny Cage",
        Estilo: "Jeet Kune Dô",
        Escola: "Mestre Bill Boyd",
        Jogador: "NPC",
        Assinatura: "Grito de Vitória",
        Conceito: "Ator",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 4,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Fireball, Shadow Kick, Elbow Smash, Split Punch, Dragon Punch, Sonic Boom, Knife Hand Strike, Double-Hit Kick",
        Combos: "Strong para Strong para Foot Sweep; Knife Hand Strike para Dragon Punch (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Jab (dizzy); Jab para Jab para Jab (dizzy)",
        Gloria: 7,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc = JohnnyCageMk3();
npc = calcPC(npc);