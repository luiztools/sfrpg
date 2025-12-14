function Fujin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Elemental", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Besta", 5);

    const armas = ["Besta Pesada"];

    const personagem = {
        Nome: "Fujin",
        Estilo: "Kung Fu",
        Escola: "Elder Gods",
        Jogador: "NPC",
        Assinatura: "Levita no Ar",
        Conceito: "Deus do Vento",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 5,
        Investigacao: 5,
        Medicina: 5,
        Misterios: 5,
        NovosTalentos: talentos,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Flying Knee Thrust, Power Uppercut, Throw, Hair Throw, Dislocate Limb, Air Blast, Elemental Skin, Elemental Stride, Flight, Heal, Lightness, Push, Sense Element, Spin, Levitation, Double-Hit Knee, Dive Kick, Push, Chi Push",
        Combos: "Bloqueio - Air Blast; Strong - Strong - Air Blast (Dizzy); Jab - Air Blast (Dizzy); Jumping Short - Foot Sweep - Push; Double Hit Kick para Besta para Besta (Dizzy)",
        Gloria: 10,
        Honra: 9,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return personagem;
}

let npc = Fujin();
npc = calcPC(npc);