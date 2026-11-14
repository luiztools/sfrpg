function KingKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Apoio", 1);

    const personagem = {
        Nome: "King",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Elegância",
        Conceito: "Estudante",
        Cronica: "Art of Fighting",
        Time: "Women Fighters",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Flash Kick, Scissor Kick, Slide Kick, Throw, Jump, Fireball, Flying Fireball, Double Hit Kick, Repeating Fireball, Multiple Stomp, Flying Heel Stomp",
        Combos: "Flash Kick - Double Hit Kick (Dizzy); Flash Kick - Multiple Stomp; Fireball - Fireball",
        Gloria: 4,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KingKoF();

npc = calcPC(npc);
