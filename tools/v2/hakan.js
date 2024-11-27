function HakanSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 5);

    var hakan =
    {
        Nome: "Hakan",
        Estilo: "Yagli Gures",
        Escola: "Nenhuma",
        Conceito: "Papai Oleoso",
        Assinatura: "Cabelo Turquesa",
        Cronica: "Street Fighter 4",
        Time: "Nenhum",
        Equipe: "Hakan's Oil",
        Jogador: "NPC",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 1,
        Labia: 2,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Apresamento: 6,
        Bloqueio: 5,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Air Smash, Air Throw, Bear Hug, Flying Tackle, Foot Sweep, Ground Fighting, Guard Position, Jump, Oild Dive, Oil Rocket, Oil Slide, Throw, Power Up",
        Combos: "Strong para Oil Slide para Air Smash; Bloqueio para Oil Rocket; Jump + Fierce para Strong para Jab (Dizzy)",
        Gloria: 8,
        Honra: 8,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 9,
        Divisao: "Tradicional"
    };
    return calcPC(hakan);
}
const npc = HakanSF4();