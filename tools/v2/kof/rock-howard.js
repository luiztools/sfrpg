function RockGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Arena", 2);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 2);
    talentos[1] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 1);
    pericias[1] = newCaracteristica("Demolições", 3);
    pericias[2] = newCaracteristica("Disfarce", 1);
    pericias[3] = newCaracteristica("Reparos", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Música", 4);

    const personagem = {
        Nome: "Rock Howard",
        Estilo: "Jeet Kune Dô",
        Escola: "Terry Bogard",
        Jogador: "NPC",
        Assinatura: "Tira a luva com a boca e sacode a mão",
        Conceito: "Órfão e músico",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Fatal Fury Team",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Energy Ball, Fireball, Jump, Punch Defense, Deflecting Punch, Improved Fireball, Gekiro, Burn Knuckle, Empty Step, Light Feet, Throw, Kippup, Hyper Tackle, Foot Sweep, Wheel Kick, Shock Treatment, Triple Strike",
        Combos: "Hyper Tackle para Burn Knuckle (Dizzy); Bloqueio para Wheel Kick (Dizzy); Burn Knuckle para Gekiro para Jumping Fierce (Dizzy); Triple Strike para Energy Ball",
        Gloria: 4,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = RockGarou();

npc = calcPC(npc);
