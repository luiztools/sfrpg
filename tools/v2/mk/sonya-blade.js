function SonyaMk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Contatos", 2);
    antecedentes[4] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Sonya Blade",
        Estilo: "Forças Especiais",
        Escola: "US Special Forces",
        Jogador: "NPC",
        Assinatura: "Obsessão por vingança",
        Conceito: "Agente Especial",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 1,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Sonic Boom, Fireball, Elbow Smash, Thigh Press, Bicycle Kick",
        Combos: "Short para Thigh Press (Dizzy); Jab para Jab para Jab (Dizzy); Forward para Forward para Jab (Dizzy);",
        Gloria: 3,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

let npc = SonyaMk3();
npc = calcPC(npc);