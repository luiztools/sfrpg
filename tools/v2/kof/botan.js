function Botan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Paranormal", 7);

    const personagem = {
        Nome: "Botan",
        Estilo: "Soul Power",
        Escola: "Aqueles do Passado",
        Jogador: "NPC",
        Assinatura: "Sorri enquanto puxa os fios invisíveis",
        Conceito: "Manipuladora d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 2,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 2,
        Labia: 4,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Ducking Fierce, Double Hit Kick, Scissor Kick, Psychokinetic Channeling, Mind Reading, Telepathy, Mind Control, Psychic Vise, Psychic Rage, Telekinesis",
        Combos: "Bloqueio para Scissor Kick para Ducking Fierce (Dizzy); Jab para Psychic Vise; Double Hit Kick para Telekinesis",
        Gloria: 4,
        Honra: 1,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 15,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Botan();

npc = calcPC(npc);
