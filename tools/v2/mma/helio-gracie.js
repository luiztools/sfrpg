function Helio() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Arena", 3);
    antecedentes[4] = newCaracteristica("Staff", 2);
    
    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    
    const personagem = {
        Nome: "Helio Gracie",
        Estilo: "Jiu Jitsu",
        Escola: "Jiu-Jitsu da Guanabara",
        Jogador: "NPC",
        Assinatura: "Pura Sabedoria!",
        Conceito: "Grão-mestre BJJ",
        Cronica: "",
        Equipe: "Academia Gracie",
        Time: "Familia Gracie",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 5,
        Manha: 1,
        Labia: 1,
        NovosTalentos: talentos,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 5,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 4,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 6,
        Apresamento: 7,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Kick Defense, Punch Defense, Grappling Defense, Foot Sweep, Fist Sweep, Jump, Throw, Back Roll Throw, Zen no Mind, Pin, Improved Pin, Arm-Wrist Lock, Neck Choke, Breakfall, Ground Fighting, Kippup, Sleeper, Thigh Press",
        Combos: "Throw para Improved Pin para Improved Pin (Dizzy); Bloqueio para Neck Choke para Neck Choke (Dizzy); Improved Pin para Improved Pin para Improved Pin (Dizzy), Neck Choke para Neck Choke para Neck Choke (Dizzy)",
        Gloria: 5,
        Honra: 9,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9
    };
    return calcPC(personagem);
}
const npc = Helio();