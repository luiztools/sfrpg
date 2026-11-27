function Jack1() {
    const personagem = JackTk1();
    personagem.Nome = "Jack";
    personagem.Cronica = "Tekken";
    personagem.Assinatura = "Encara o oponente em silêncio, à espera da ordem de ataque";
    personagem.Conceito = "Robô militar";
    personagem.Antecedentes = [
        newCaracteristica("Apoio", 4),
        newCaracteristica("Cibernético", 5)
    ];
    personagem.ManobrasEspeciais = "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Ducking Fierce, Fist Sweep, Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Jump";
    personagem.Combos = "Machine Gun Blow para Power Uppercut, Ducking Fierce para Fist Sweep, Bloqueio para Turn Punch";
    personagem.Gloria = 4;
    personagem.Saude = 12;
    return personagem;
}

function PJack() {
    const personagem = JackTk1();
    personagem.Nome = "P. Jack";
    personagem.Escola = "Mishima Zaibatsu";
    personagem.Assinatura = "Os propulsores das costas cospem fogo antes do ataque";
    personagem.Conceito = "Protótipo assassino";
    personagem.Antecedentes = [
        newCaracteristica("Apoio", 3),
        newCaracteristica("Cibernético", 5)
    ];
    personagem.ManobrasEspeciais = "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Ducking Fierce, Fist Sweep, Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Jump, Flight, Shockwave";
    personagem.Combos = "Machine Gun Blow para Power Uppercut, Bloqueio para Turn Punch, Jump para Air Smash";
    personagem.Honra = 2;
    personagem.Saude = 12;
    return personagem;
}

function JackTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Jack-2",
        Estilo: "Forças Especiais",
        Escola: "Exército Russo",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Bate no peito e encara o oponente",
        Conceito: "Robô protetor",
        Cronica: "Tekken 2",
        Forca: 7,
        Destreza: 2,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        ManobrasEspeciais: "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Ducking Fierce, Fist Sweep, Spinning Clothesline, Air Smash, Buffalo Punch, Head Butt, Throw, Bear Hug, Grappling Defense, Back Breaker, Jump",
        Combos: "Machine Gun Blow para Power Uppercut, Ducking Fierce para Fist Sweep, Bloqueio para Turn Punch, Ducking Fierce para Fist Sweep para Buffalo Punch (Dizzy)",
        Gloria: 5,
        Honra: 4,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 13,
        Divisao: "Duelistas",
        Posto: 7
    };
}

function GunJackTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Gun Jack",
        Estilo: "Forças Especiais",
        Escola: "Laboratório de Jane",
        Jogador: "NPC",
        Assinatura: "Cruza os braços diante de Jane",
        Conceito: "Robô protetor",
        Cronica: "Tekken 3",
        Forca: 7,
        Destreza: 2,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        ManobrasEspeciais: "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Buffalo Punch, Ducking Fierce, Fist Sweep, Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Grappling Defense, Jump, Flight, Toughskin",
        Combos: "Machine Gun Blow para Power Uppercut, Ducking Fierce para Fist Sweep para Buffalo Punch (Dizzy), Bloqueio para Turn Punch, Jump para Air Smash",
        Gloria: 5,
        Honra: 4,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 14,
        Divisao: "Duelistas",
        Posto: 8
    };
}

function Jack4() {
    const personagem = GunJackTk3();
    personagem.Nome = "Jack-4";
    personagem.Escola = "G Corporation";
    personagem.Equipe = "G Corporation";
    personagem.Time = "G Corporation";
    personagem.Assinatura = "Avança em formação com os outros Jack-4, sem emitir som";
    personagem.Conceito = "Robô de produção em massa";
    personagem.Cronica = "Tekken 5";
    personagem.Antecedentes = [
        newCaracteristica("Apoio", 1),
        newCaracteristica("Cibernético", 4)
    ];
    personagem.Forca = 6;
    personagem.Destreza = 1;
    personagem.Vigor = 6;
    personagem.Carisma = 0;
    personagem.Aparencia = 0;
    personagem.Percepcao = 2;
    personagem.Inteligencia = 1;
    personagem.Raciocinio = 1;
    personagem.Prontidao = 3;
    personagem.Interrogacao = 1;
    personagem.Intimidacao = 4;
    personagem.Perspicacia = 0;
    personagem.LutaCega = 2;
    personagem.Conducao = 0;
    personagem.Seguranca = 2;
    personagem.Sobrevivencia = 3;
    personagem.Arena = 1;
    personagem.Computador = 2;
    personagem.Investigacao = 0;
    personagem.Estilos = 2;
    personagem.Soco = 4;
    personagem.Chute = 1;
    personagem.Bloqueio = 4;
    personagem.Apresamento = 3;
    personagem.Esportes = 2;
    personagem.ManobrasEspeciais = "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Ducking Fierce, Fist Sweep, Head Butt, Throw, Bear Hug, Jump";
    personagem.Combos = "Machine Gun Blow para Power Uppercut";
    personagem.Gloria = 0;
    personagem.Honra = 1;
    personagem.Chi = 1;
    personagem.ForcaVontade = 3;
    personagem.Saude = 10;
    personagem.Posto = 3;
    return personagem;
}

function Jack5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Jack-5",
        Estilo: "Forças Especiais",
        Escola: "G Corporation",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "Ergue os braços e solta vapor pelas juntas",
        Conceito: "Arma humanoide",
        Cronica: "Tekken 5",
        Forca: 7,
        Destreza: 2,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        ManobrasEspeciais: "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Buffalo Punch, Ducking Fierce, Fist Sweep, Turbo Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Grappling Defense, Jump, Shockwave, Toughskin",
        Combos: "Machine Gun Blow para Power Uppercut, Ducking Fierce para Fist Sweep para Buffalo Punch (Dizzy), Bloqueio para Turn Punch, Jump para Air Smash para Bear Hug, Haymaker para Shockwave",
        Gloria: 6,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 15,
        Divisao: "Duelistas",
        Posto: 8
    };
}

function Jack6() {
    const personagem = Jack5();
    personagem.Nome = "Jack-6";
    personagem.Assinatura = "Bate os punhos de metal, e as placas hexagonais dos braços se ajustam";
    personagem.Conceito = "Robô investigador";
    personagem.Cronica = "Tekken 6";
    personagem.Forca = 8;
    personagem.Saude = 16;
    personagem.ManobrasEspeciais = "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Buffalo Punch, Ducking Fierce, Fist Sweep, Turbo Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Grappling Defense, Jump, Extendible Limbs, Shockwave, Toughskin";
    return personagem;
}

function Jack7() {
    const personagem = Jack6();
    personagem.Nome = "Jack-7";
    personagem.Assinatura = "Os olhos brilham em vermelho enquanto ele cerra os punhos";
    personagem.Conceito = "Arma humanoide";
    personagem.Cronica = "Tekken 7";
    personagem.Prontidao = 5;
    personagem.Soco = 6;
    personagem.Saude = 17;
    personagem.Combos += ", Extendible Limbs para Turbo Spinning Clothesline";
    return personagem;
}

function JackTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Jack-8",
        Estilo: "Forças Especiais",
        Escola: "G Corporation",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "O visor acende e o canhão-broca surge ao seu lado",
        Conceito: "Arma humanoide de última geração",
        Cronica: "Tekken 8",
        Forca: 8,
        Destreza: 2,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 4,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 2,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Turn Punch, Tameshiwari, Power Uppercut, Machine Gun Blow, Haymaker, Buffalo Punch, Ducking Fierce, Fist Sweep, Turbo Spinning Clothesline, Air Smash, Head Butt, Throw, Bear Hug, Back Breaker, Grappling Defense, Jump, Flight, Extendible Limbs, Shockwave, Toughskin, Fireball, Shock Treatment",
        Combos: "Machine Gun Blow para Power Uppercut, Ducking Fierce para Fist Sweep para Buffalo Punch (Dizzy), Bloqueio para Turn Punch, Jump para Air Smash para Bear Hug, Haymaker para Shockwave, Extendible Limbs para Fireball",
        Gloria: 7,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc;
const age = getParameterByName('age');
if (age === 'jack') npc = Jack1();
else if (age === 'pjack') npc = PJack();
else if (age === 'tk1' || age === 'jack2') npc = JackTk1();
else if (age === 'tk3' || age === 'gunjack') npc = GunJackTk3();
else if (age === 'jack4') npc = Jack4();
else if (age === 'jack5') npc = Jack5();
else if (age === 'jack6') npc = Jack6();
else if (age === 'tk8' || age === 'jack8') npc = JackTk8();
else npc = Jack7();
npc = calcPC(npc);
