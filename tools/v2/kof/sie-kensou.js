function SieKensou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Paranormal", 4);

    const personagem = {
        Nome: "Sie Kensou",
        Estilo: "Kung Fu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Come seu Niku-man",
        Conceito: "Estudante",
        Cronica: "The King of Fighters",
        Time: "Psycho Soldiers",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Kippup, Double Hit Punch, Telepathy, Fireball, Foot Sweep, Buffalo Punch, Handstand Kick, Flying Thrust Kick, Hundred Hand Slap, Regeneration, Gekiro, Flying Body Spear",
        Combos: "Double Hit Punch para Flying Thrust Kick (Dizzy); Short para Buffalo Punch para Handstand Kick (Dizzy); Fierce para Hundred Hand Slap (Dizzy); Hundred Hand Slap para Hundred Hand Slap (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = SieKensou();

npc = calcPC(npc);
