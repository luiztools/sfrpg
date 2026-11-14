function TizocGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Empresário", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Fama", 3);
    antecedentes[5] = newCaracteristica("Arena", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);
    talentos[1] = newCaracteristica("Administrar", 5);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);
    pericias[1] = newCaracteristica("Publicidade", 4);
    pericias[2] = newCaracteristica("Demolições", 5);
    pericias[3] = newCaracteristica("Disfarce", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Finanças", 3);
    conhecimentos[2] = newCaracteristica("Direito", 3);
    conhecimentos[3] = newCaracteristica("Linguística", 3);

    const personagem = {
        Nome: "Tizoc",
        Estilo: "Wrestling",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Põe uma das mãos no coração e depois aponta para o céu",
        Conceito: "Campeão de Luta Livre",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Fatal Fury Team",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 2,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 4,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 2,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Head Butt, Knife Hand Strike, Air Suplex, Air Smash, Spinning Clothesline, Suplex, Bear Hug, Toughskin, Flying Tackle, Kippup, Grappling Defense, Wounded Knee, Spinning Pile Driver, Pile Driver, Elbow Smash",
        Combos: "Jump para Elbow Smash; Fierce para Fierce para Fierce; Flying Tackle para Air Smash",
        Gloria: 8,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = TizocGarou();

npc = calcPC(npc);
