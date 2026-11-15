function Magaki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sangue de Orochi", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);

    const personagem = {
        Nome: "Magaki",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Abre portais dimensionais com desdém",
        Conceito: "Emissário d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 3,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Yoga Teleport, Ghost Form, Elbow Smash, Fireball, Improved Fireball, Elemental Explosion, Extendible Limbs, Zen No Mind, San He, Maka Wara, Haymaker, Widowmaker, Buffalo Punch, Repeating Fireball, Final Wave",
        Combos: "",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Magaki();

npc = calcPC(npc);
