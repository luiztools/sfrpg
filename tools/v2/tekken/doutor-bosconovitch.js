function BosconovitchTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 5);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 5);

    return {
        Nome: "Doutor Bosconovitch",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Cai de costas e fica se debatendo no chão, sem conseguir levantar",
        Conceito: "Cientista genial",
        Cronica: "Tekken 3",
        Equipe: "Mishima Zaibatsu",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 1,
        Labia: 1,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 2,
        Sobrevivencia: 2,
        NovasPericias: pericias,
        Arena: 1,
        Computador: 5,
        Investigacao: 2,
        Medicina: 5,
        Misterios: 1,
        Estilos: 1,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Ground Fighting, Esquives, Drunken Monkey Roll, Kick Roll, Tumbling Attack, Rolling Attack, Foot Sweep, Slide Kick, Head Butt, Throw, Back Roll Throw",
        Combos: "Drunken Monkey Roll para Kick Roll, Kick Roll para Tumbling Attack, Foot Sweep para Head Butt",
        Gloria: 2,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 5,
        Saude: 12,
        Divisao: "Livre",
        Posto: 3
    };
}


function BosconovitchTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Cibernético", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 3);
    const armas = [];
    armas[0] = "Granada";

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 5);
    pericias[1] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 5);

    return {
        Nome: "Doutor Bosconovitch",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Cai de costas e fica se debatendo no chão, sem conseguir levantar",
        Conceito: "Cientista genial",
        Cronica: "Tekken Tag Tournament 2",
        Equipe: "Mishima Zaibatsu",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 1,
        Labia: 1,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 2,
        Sobrevivencia: 2,
        NovasPericias: pericias,
        Arena: 1,
        Computador: 5,
        Investigacao: 2,
        Medicina: 5,
        Misterios: 1,
        Estilos: 1,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Ground Fighting, Esquives, Drunken Monkey Roll, Kick Roll, Tumbling Attack, Rolling Attack, Foot Sweep, Slide Kick, Head Butt, Throw, Back Roll Throw, Zen No Mind, Shock Treatment",
        Combos: "Drunken Monkey Roll para Kick Roll, Kick Roll para Tumbling Attack, Foot Sweep para Shock Treatment (Dizzy)",
        Gloria: 3,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Livre",
        Posto: 4
    };
}


let npc;
if (getParameterByName('age') === 'tk3') npc = BosconovitchTk3();
else npc = BosconovitchTk4();
npc = calcPC(npc);
