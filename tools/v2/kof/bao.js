function Bao() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Paranormal", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Empatia", 3);

    const personagem = {
        Nome: "Bao",
        Estilo: "Kung Fu",
        Escola: "Psycho Soldiers",
        Jogador: "NPC",
        Assinatura: "Reverência",
        Conceito: "Criança Precoce",
        Cronica: "The King of Fighters",
        Time: "Psycho Soldiers",
        Forca: 2,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Kippup, Fireball, Missile Reflection, Energy Reflection, Flying Fireball, Head Butt, Foot Sweep, Rolling Attack, Shock Treatment, Improved Fireball, Yoga Teleport",
        Combos: "Throw para Flying Fireball (Dizzy); Rolling Attack para Head Butt (Dizzy); Fireball para Improved Fireball (Dizzy); Short para Strong para Fierce",
        Gloria: 3,
        Honra: 8,
        Chi: 8,
        ForcaVontade: 5,
        Saude: 16,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Bao();

npc = calcPC(npc);
