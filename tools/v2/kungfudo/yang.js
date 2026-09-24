function YangKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Staff", 2);

    const yang =
    {
        Nome: "Yang",
        Estilo: "Kickboxing",
        Escola: "",
        Conceito: "",
        Assinatura: "Pose de Luta",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 1,
        Destreza: 5,
        Vigor: 1,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 0,
        Labia: 3,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 2,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 0,
        Foco: 5,
        Gloria: 2,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 5,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Jump, Fireball, Repeating Fireball",
        Combos: "",
    };

    return yang;
}

const npc = calcPC(YangKungFuDoFighting());