function HotaruGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Mascote", 2);
    antecedentes[3] = newCaracteristica("Arena", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);
    talentos[1] = newCaracteristica("Administrar", 2);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);
    pericias[1] = newCaracteristica("Disfarce", 3);
    pericias[2] = newCaracteristica("Reparos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 3);
    conhecimentos[1] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Hotaru Futaba",
        Estilo: "Kung Fu",
        Escola: "Dojô Futaba",
        Jogador: "NPC",
        Assinatura: "Faz uma reverência e brinca com Itokatsu",
        Conceito: "Irmã em busca da família",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Fireball, Flying Body Spear, Spinning Knuckle, Reverse Frontal Kick, Wheel Kick, Flying Knee Thrust, Foot Sweep, Flash Kick, Dive Kick, Pin, Double Hit Punch",
        Combos: "Flash Kick para Dive Kick para Pin para Strong; Spinning Knuckle para Flying Body Spear para Flying Knee Thrust",
        Gloria: 2,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 16,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = HotaruGarou();

npc = calcPC(npc);
