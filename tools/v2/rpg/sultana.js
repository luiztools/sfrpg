function Sultana() {
    const antecedentes = [5];
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Paranormal", 5);

    const tecnicas = [];

    const personagem =
    {
        Nome: "Sultana",
        Estilo: "Soul Power",
        Escola: "Desconhecida",
        Conceito: "Feiticeira",
        Assinatura: "Aparência Fantasmagórica",
        Cronica: "",
        Jogador: "NPC",
        Equipe: "Tríade do Dragão",
        Forca: 3,
        Destreza: 4,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Interrogacao: 4,
        Perspicacia: 4,
        Manha: 4,
        Labia: 5,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 3,
        Furtividade: 4,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 6,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 3,
        Foco: 6,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Telekinesis, Jump, Soul Throw, Throw, Air Throw, Hair Throw, Soul Spiral, Slide Kick, Psychokinetic Channeling, Fireball, Missile Reflection, Energy Reflection, Power Uppercut, Telepathy, Soul Illusion, Ghost Form",
        Combos: "Energy Reflection para Fireball (dizzy), Slide Kick para Soul Spiral (dizzy), Short para Soul Throw, Short para Short (dizzy); Bloqueio para Fireball",
        Chi: 10,
        ForcaVontade: 6,
        Saude: 18,
        Posto: 7,
        Divisao: "Estilo Livre",
        Gloria: 10,
        Honra: 4
    };
    return personagem;
}

var npc = Sultana();

npc = calcPC(npc);