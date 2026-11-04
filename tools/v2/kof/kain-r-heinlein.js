function KainGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Elemental (Fogo)", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);
    pericias[1] = newCaracteristica("Demolições", 2);
    pericias[2] = newCaracteristica("Disfarce", 3);
    pericias[3] = newCaracteristica("Reparos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Finanças", 3);
    conhecimentos[2] = newCaracteristica("Direito", 2);
    conhecimentos[3] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Kain R. Heinlein",
        Estilo: "Karatê Shotokan",
        Escola: "As ruas e a gangue Don Papas",
        Jogador: "NPC",
        Assinatura: "Olhar assustador",
        Conceito: "Líder de Gangue",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 5,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Power Uppercut, Jumping Hammer Punch, Buffalo Punch, Dive Kick, Throw, Haymaker, Widowmaker, Foot Sweep, Flash Kick, Flying Fireball, Jumping Shoulder Butt, Reverse Frontal Kick, Flaming Fist, Flaming Heel, Fireball",
        Combos: "Jumping Shoulder Butt para Jab para Flaming Fist; Jumping Shoulder Butt para Roundhouse para Flaming Heel; Buffalo Punch para Flying Fireball; Flash Kick para Widowmaker",
        Gloria: 8,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KainGarou();

npc = calcPC(npc);
