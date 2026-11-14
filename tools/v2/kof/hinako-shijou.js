function HinakoShijou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Staff", 2);

    const personagem = {
        Nome: "Hinako Shijou",
        Estilo: "Sumô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Sorriso cativante",
        Conceito: "Estudante",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Women Fighters",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 1,
        Labia: 2,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 3,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Throw, Hundred Hand Slap, Double Hit Punch, Tameshiwari, Argentine Back Breaker, Head Butt, Jumping Shoulder Butt, Toughskin, Ear Pop, Buffalo Punch, Foot Sweep",
        Combos: "Strong para Strong para Buffalo Punch (Dizzy); Throw para Jumping Fierce para Head Butt; Hundred Hand Slap para Buffalo Punch (Dizzy); Forward para Double Hit Punch (Dizzy); Jab para Jab para Throw",
        Gloria: 5,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = HinakoShijou();

npc = calcPC(npc);
