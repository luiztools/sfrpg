function Foxy() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const armas = [];
    armas[0] = "Rapier";
    armas[1] = "Kunai";

    const personagem = {
        Nome: "Foxy",
        Estilo: "Kenjutsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Óculos escuros",
        Conceito: "Agente secreta",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "NESTS Team",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 3,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Empty Step, Weapon Uppercut, Slide Kick, Sonic Boom, Double Hit Blow, Spinning Weapon, Weapon Defense, Cross Counter",
        Combos: "Double Hit Blow para Weapon Uppercut (Dizzy); Jumping Forward para Spinning Weapon; Slide Kick para Rapier Fierce (Dizzy);",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Foxy();

npc = calcPC(npc);
