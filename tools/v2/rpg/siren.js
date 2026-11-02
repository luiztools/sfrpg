function Siren() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    const siren = {
        Nome: "Siren",
        Estilo: "Capoeira",
        Escola: "Polícia Européia",
        Jogador: "NPC",
        Assinatura: "Grita Eufórica",
        Conceito: "Agente Especial",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 3,
        Conducao: 1,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 1,
        Computador: 1,
        Investigacao: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Chute: 3,
        Bloqueio: 3,
        Esportes: 3,
        ManobrasEspeciais: "Double Hit Kick, Handstand Kick, Backflip Kick, Backflip, Jump",
        Combos: "Double Hit Kick para Backflip Kick para Handstand Kick (Dizzy)",
        Gloria: 1,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return siren;
}

let npc = Siren();

npc = calcPC(npc);