function Ermac() {
    const antecedentes = [];

    const tecnicas = [];
    const armas = [];

    const personagem = {
        Nome: "Ermac",
        Estilo: "Jeet Kune Dô",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Levanta o Braço",
        Conceito: "Reencarnação de Guerreiroa",
        Cronica: "Mortal Kombat 3",
        Equipe: "Defensores da Terra",
        Time: "Defensores da Terra",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Chi Kun Healing, Chi Push, Fireball, Yoga Teleport, Elbow Smash",
        Combos: "Jab – Elbow Smash – Chi Push (dizzy); Forward – Forward – Roundhouse (dizzy); Forward – Forward – Jab (dizzy); Jab – Jab – Power Uppercut (dizzy)",
        Gloria: 0,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return personagem;
}

function ErmacMKA() {
    const antecedentes = [];

    const tecnicas = [];
    const armas = [];

    const personagem = {
        Nome: "Ermac",
        Estilo: "Jeet Kune Dô",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Levanta o Braço",
        Conceito: "Reencarnação de Guerreiroa",
        Cronica: "MK Armageddon",
        Equipe: "Defensores da Terra",
        Time: "Defensores da Terra",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Chi Kun Healing, Chi Push, Fireball, Yoga Teleport, Elbow Smash, Choke Throw, Air Throw",
        Combos: "Jab – Elbow Smash – Chi Push (dizzy); Forward – Forward – Roundhouse (dizzy); Forward – Forward – Jab (dizzy); Jab – Jab – Power Uppercut (dizzy); Chi Push para Chi Push (dizzy)",
        Gloria: 0,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mkx')
    npc = calcPC(ErmacMKA());
else
    npc = calcPC(Ermac());