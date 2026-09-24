function Onaga() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Híbrido Animal", 5);

    const armas = [];
    const talentos = [];
    const pericias = [];
    const conhecimentos = [];
    const tecnicas = [];

    const personagem =
    {
        Nome: "Onaga",
        Estilo: "Briga",
        Escola: "Desconhecida",
        Equipe: "Nenhuma",
        Time: "Outworld",
        Conceito: "Imperador do Outworld",
        Assinatura: "Abre as asas",
        Jogador: "NPC",
        Cronica: "Mortal Kombat Deception",
        Forca: 10,
        Destreza: 5,
        Vigor: 9,
        Carisma: 2,
        Manipulacao: 6,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 7,
        Raciocinio: 7,
        Prontidao: 6,
        Perspicacia: 7,
        Manha: 1,
        Interrogacao: 3,
        Intimidacao: 8,
        Labia: 5,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 6,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 5,
        Arena: 6,
        Computador: 0,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 8,
        Estilos: 5,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 3,
        Bloqueio: 7,
        Apresamento: 3,
        Esportes: 5,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 9,
        Gloria: 9,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Tail Sweep, Bite, Head Bite, Jump, Kippup, San He, Fireball, Improved Fireball, Tearing Bite, Yoga Flame, Fire Strike, Flying Fireball, Flight, Levitation, Regeneration, Chi Kun Healing, Mind Control, Telepathy, Mind Reading, Shockwave, Air Smash, Slide Kick, Pile Driver, Spinning Pile Driver, Missile Reflection, Energy Reflection, Maka Wara",
        Combos: "nenhum"
    };
    return personagem;
}

let npc = calcPC(Onaga());