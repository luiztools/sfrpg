function ChoiBounge() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 4);

    const armas = [];
    armas[0] = "Garra";

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const personagem = {
        Nome: "Choi Bounge",
        Estilo: "Tae Kwon Dô",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Ex-assassino Profissional",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Korea Justice",
        Forca: 3,
        Destreza: 7,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 5,
        Labia: 5,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Kippup, Air Throw, Light Feet, Spinning Clothesline, Rolling Attack, Foot Sweep, Flying Body Spear, Wall Spring",
        Combos: "Rolling Attack para Jumping Fierce; Garra Strong para Garra Strong para Garra Fierce (Dizzy); Spinning Clothesline para Spinning Clothesline (Dizzy)",
        Gloria: 7,
        Honra: 1,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = ChoiBounge();

npc = calcPC(npc);
