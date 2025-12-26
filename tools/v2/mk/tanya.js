function Tanya() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = ["Bumerangue"];

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 1);

    const personagem =
    {
        Nome: "Tanya",
        Estilo: "Wu Shu",
        Escola: "Treinamento de Edenia",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Princesa de Edênia",
        Assinatura: "Grito",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 4",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 5,
        Manha: 1,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 6,
        Honra: 4,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Throw, Back Roll Throw, Foot Sweep, Power Uppercut, Double Hit Punch, Backflip Kick, Double Hit Kick, Fireball, Thigh Press, Flying Fireball, Handstand Kick, Cannon Drill",
        Combos: "Double-Hit Punch - Double-Hit Punch - Fireball (Dizzy); Movimento - Double-Hit Punch - Power Uppercut (Dizzy); Jumping Short - Foot Sweep - Power Uppercut"
    };
    return personagem;
}

function TanyaMKX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);
    tecnicas[1] = newCaracteristica("Faca", 5);
    tecnicas[2] = newCaracteristica("Lança", 4);

    const armas = ["Faca", "Faca Arremessada", "Naginata"];

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 1);

    const personagem =
    {
        Nome: "Tanya",
        Estilo: "Wu Shu",
        Escola: "Treinamento de Edenia",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Princesa de Edênia",
        Assinatura: "Grito",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 5,
        Manha: 1,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 6,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Throw, Back Roll Throw, Foot Sweep, Power Uppercut, Double Hit Punch, Backflip Kick, Double Hit Kick, Fireball, Thigh Press, Flying Fireball, Handstand Kick, Cannon Drill",
        Combos: "Double-Hit Punch - Double-Hit Punch - Fireball (Dizzy); Movimento - Double-Hit Punch - Power Uppercut (Dizzy); Jumping Short - Foot Sweep - Power Uppercut; Jab – Strong – Fierce (dizzy); Jab – Handstand Kick; Double-Hit Kick – Roundhouse (dizzy); Handstand Kick – Cannon Drill (dizzy); Faca Jab – Faca Strong – Faca Fierce"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mkx')
    npc = calcPC(TanyaMKX());
else
    npc = calcPC(Tanya());