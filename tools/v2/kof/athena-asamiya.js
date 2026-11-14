function AthenaAsamiya() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Sensei", 3);
    antecedentes[4] = newCaracteristica("Paranormal", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Dança", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Canto", 4);

    const personagem = {
        Nome: "Athena Asamiya",
        Estilo: "Kung Fu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Roupas exóticas",
        Conceito: "Estudante",
        Cronica: "The King of Fighters",
        Time: "Psycho Soldiers",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 0,
        Esportes: 4,
        Foco: 6,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Breakfall, Kippup, Fireball, Missile Reflection, Energy Reflection, Telepathy, Mind Reading, Flying Body Spear, Flying Fireball, Handstand Kick, Foot Sweep, Dragon Punch, Elemental Explosion, Yoga Teleport, Final Wave",
        Combos: "Elemental Explosion para Dragon Punch (Dizzy); Flying Body Spear para Handstand Kick (Dizzy); Dragon Punch para Flying Body Spear (Dizzy)",
        Gloria: 6,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = AthenaAsamiya();

npc = calcPC(npc);
