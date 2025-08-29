function HakanSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);

    var hakan =
    {
        Nome: "Hakan",
        Estilo: "Yagli Gures",
        Escola: "Desconhecida",
        Conceito: "Wrestler",
        Assinatura: "Cabelos Azuis",
        Cronica: "Street Fighter 4",
        Time: "Nenhum",
        Equipe: "Hakan's Oil",
        Jogador: "NPC",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
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
        Foco: 1,
        ManobrasEspeciais: "Jump, Air Smash, Throw, Air Throw, Foot Sweep, Slide Kick, Flying Tackle, Bear Hug, Grappling Defense",
        Combos: "Bear Hug para Throw; Jump + Fierce para Strong para Jab (Dizzy); Bloqueio para Flying Tackle; Slide Kick para Air Smash",
        Gloria: 8,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 9,
        Divisao: "Tradicional"
    };
    return calcPC(hakan);
}
const npc = HakanSF4();