function Gill() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Elemental (Fogo e Gelo)", 7);
    antecedentes[4] = newCaracteristica("Recursos", 5);

    const talentos = [];

    const personagem = {
        Nome: "Gill",
        Estilo: "Pankration",
        Escola: "Illuminati",
        Jogador: "NPC",
        Assinatura: "Chamas e Gelo",
        Conceito: "Divindade",
        Cronica: "Street Fighter 5",
        Equipe: "Illuminati",
        Time: "Illuminati",
        Forca: 6,
        Destreza: 5,
        Vigor: 7,
        Carisma: 4,
        Manipulacao: 6,
        Aparencia: 5,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 3,
        Labia: 5,
        NovosTalentos: talentos,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 6,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 2,
        Investigacao: 4,
        Medicina: 4,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 6,
        Esportes: 5,
        Foco: 8,
        ManobrasEspeciais: "Jump, Air Smash, Air Throw, Throw, Power Uppercut, Wheel Kick, Neck Choke, Pile Driver, Fireball, Ice Blast, Foot Sweep, Accuracy, Heal, Elbow Smash, Flaming Fist, Freeze Strike, Fire Strike, Regeneration, Hyper Tackle",
        Combos: "Elbow Smash para Forward para Wheel Kick (dizzy), Fire Strike para Ice Blast (dizzy), Air Smash para Strong para Power Uppercut (dizzy), Jab para Jab para Jab (dizzy)",
        Gloria: 9,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return calcPC(personagem);
}
const npc = Gill();