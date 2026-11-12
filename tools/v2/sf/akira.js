function Akira() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    
    const personagem = {
        Nome: "Akira",
        Estilo: "Kung Fu",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Marca de Caveira",
        Conceito: "Motociclista",
        Cronica: "Street Fighter 5",
        Equipe: "",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Air Throw, Handstand Kick, Flash Kick, Punch Defense, Kick Defense, Deflecting Punch, Ax Kick, Energy Ball, Elbow Smash, San He",
        Combos: "Flash Kick para Jumping Strong para Jumping Forward (dizzy), Kick Defense para Throw, Ax Kick para Roundhouse, Forward para Foot Sweep para Roundhouse (dizzy), Forward para Fierce para Energy Ball (dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 5
    };
    return calcPC(personagem);
}
const npc = Akira();