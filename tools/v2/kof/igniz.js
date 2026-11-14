function Igniz() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);
    antecedentes[3] = newCaracteristica("Cibernético", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 4);
    conhecimentos[1] = newCaracteristica("Finanças", 3);

    const armas = [];
    armas[0] = "Chicote";

    const personagem = {
        Nome: "Igniz",
        Estilo: "Jeet Kune Dô",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Poderes pirotécnicos",
        Conceito: "Megalomaníaco",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "Nenhum",
        Forca: 7,
        Destreza: 6,
        Vigor: 7,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 1,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 3,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 7,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Kippup, Fireball, Improved Fireball, Yoga Flame, Energy Ball, Extendible Limbs, Shock Treatment, Foot Sweep, Levitation, Inferno Strike, Repeating Fireball, Sonic Scythe, Hyper Fist, Jet Uppercut, Flying Tackle",
        Combos: "Hyper Fist para Energy Ball (Dizzy); Sonic Scythe para Jet Uppercut; Shock Treatment para Inferno Strike; Flying Tackle para Throw para Extendible Limbs (Dizzy)",
        Gloria: 9,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Igniz();

npc = calcPC(npc);
