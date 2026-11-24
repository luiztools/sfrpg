function CriaturaDeVisoes() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 0);
    tecnicas[1] = newCaracteristica("Lança", 0);

    const armas = [];
    armas[0] = "Sabre";
    armas[1] = "Lança";

    const personagem = {
        Nome: "Criatura de Visões",
        Estilo: "",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "",
        Conceito: "Criatura de Visões",
        Cronica: "",
        Forca: 5,
        Destreza: 3,
        Vigor: 3,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 1,
        Inteligencia: 1,
        Raciocinio: 1,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 1,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 1
    };

    return personagem;
}

let npc = CriaturaDeVisoes();

npc = calcPC(npc);