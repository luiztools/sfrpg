function Falke() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Psycho Power", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 6);
    
    const armas = ["Bastão Longo"];

    const personagem = {
        Nome: "Falke",
        Estilo: "Ler Drit (Bojutsu)",
        Escola: "Shadaloo",
        Jogador: "NPC",
        Assinatura: "Quepe Militar",
        Conceito: "Soldado",
        Cronica: "Street Fighter 5",
        Equipe: "Shadaloo",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 2,
        Labia: 4,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Baton Throw, Weapon Channeling, Foot Sweep, Spinning Foot Sweep, Flying Heel Stomp, Backflip Kick, Forward Backflip Kick, Fireball, Flying Fireball, Air Baton Throw, Spinning Weapon, Double Hit Blow, Weapon Uppercut, Accuracy",
        Combos: "Apresamento para Throw; Apresamento para Bastão Fierce; Bloqueio para Bastão Berserk; Jump + Forward para Backflip Kick (Dizzy); Forward Backflip Kick para Jump + Bastão Fierce (Dizzy);",
        Gloria: 6,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
    return calcPC(personagem);
}
const npc = Falke();