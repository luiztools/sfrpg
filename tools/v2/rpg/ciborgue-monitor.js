function CiborgueMonitor() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    const ciborgue = {
        Nome: "Ciborgue Monitor",
        Estilo: "nenhum",
        Conceito: "Robô Espião",
        Equipe: "Shadaloo",
        Forca: 3,
        Destreza: 2,
        Vigor: 4,
        Carisma: 0,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 5,
        Perspicacia: 5,
        Furtividade: 2,
        Computador: 2,
        Investigacao: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Esportes: 1,
        ManobrasEspeciais: "",
        Combos: "nenhum",
        Chi: 1,
        ForcaVontade: 2,
        Saude: 10,
        Posto: 1
    };
    return ciborgue;
}

let npc = CiborgueMonitor();

npc = calcPC(npc);