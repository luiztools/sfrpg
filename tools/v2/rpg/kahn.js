function Kahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const kahn = {
        Nome: "Kahn",
        Estilo: "Boxe",
        Escola: "Ruas da Filadélfia",
        Jogador: "NPC",
        Assinatura: "Ergue o braço em vitória!",
        Conceito: "Brutamontes",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Bloqueio: 3,
        Esportes: 3,
        ManobrasEspeciais: "Fist Sweep, Dashing Punch, Punch Defense",
        Combos: "Bloqueio para Dashing Punch",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 1
    };
    return kahn;
}

let npc = Kahn();

npc = calcPC(npc);