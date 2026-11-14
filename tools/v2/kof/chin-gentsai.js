function ChinGentsai() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Mangual", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    const armas = [];
    armas[0] = "Garrafa";

    const personagem = {
        Nome: "Chin Gentsai",
        Estilo: "Kung Fu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Mestre dos Punhos Bêbados",
        Cronica: "The King of Fighters",
        Time: "Psycho Soldiers",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 2,
        Labia: 3,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Breakfall, Maka Wara, Fireball, Yoga Flame, Drunken Monkey Roll, Ground Fighting, Deflecting Punch, Punch Defense, Double Hit Kick, Rolling Attack, Lunging Punch",
        Combos: "Fierce para Double Hit Kick (Dizzy); Drunken Monkey Roll para Lunging Punch; Jumping Short para Fierce para Yoga Flame (Dizzy)",
        Gloria: 6,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = ChinGentsai();

npc = calcPC(npc);
