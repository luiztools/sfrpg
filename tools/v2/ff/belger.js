function Belger() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const tecnicas = [newCaracteristica("Besta", 5)];

    const npc = {
        Nome: "Belger",
        Estilo: "Nenhum",
        Jogador: "NPC",
        Assinatura: "Cadeirante",
        Conceito: "Chefão do Crime",
        Cronica: "Final Fight 1",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 3,
        Destreza: 3,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 1,
        Perspicacia: 5,
        Manha: 5,
        Labia: 5,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 1,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 0,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: [],
        ManobrasEspeciais: "Brain Cracker",
        Combos: "",
        Gloria: 1,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return npc;
}

const npc = calcPC(Belger());