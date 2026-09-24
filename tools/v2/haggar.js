function HaggarFF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Aliados", 5);
    antecedentes[3] = newCaracteristica("Staff", 5);
    antecedentes[4] = newCaracteristica("Fama", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);
    talentos[1] = newCaracteristica("Instrução", 5);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 4);

    const conhecimentos = [];

    const haggar =
    {
        Nome: "Mike Haggar",
        Estilo: "Luta-Livre",
        Escola: "Associação Slam Masters",
        Conceito: "Ex-Wrestler",
        Assinatura: "Flexiona os músculos!",
        Cronica: "Final Fight 3",
        Time: "Final Fight",
        Equipe: "Prefeitura de Metro City",
        Jogador: "NPC",
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Apresamento: 6,
        Bloqueio: 4,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Throw, Back Breaker, Pile Driver, Suplex, Spinning Pile Driver, Spinning Clothesline, Head Butt, Head Butt Hold, Haymaker, Buffalo Punch",
        Combos: " Jab para Jab para Back Breaker (dizzy); Jab para Suplex; Jump + Short para Spinning Pile Driver; Jab para Jab para Buffalo Punch (dizzy); Movimento para Fierce",
        Gloria: 8,
        Honra: 6,
        Posto: 8,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional"
    };
    return haggar;
}

function Haggar() {
    const haggar = HaggarFF3();
    haggar.Saude = 18;
    haggar.ForcaVontade = 9;
    haggar.Cronica = "Final Fight";
    haggar.Manipulacao = 3;
    haggar.Inteligencia = 3;
    haggar.Posto = 5;
    haggar.Chi = 2;
    haggar.Foco = 0;
    haggar.Manha = 2;
    haggar.Computador = 0;
    haggar.Investigacao = 3;
    haggar.Lideranca = 4;
    haggar.Antecedentes[0].Valor = 3;//Recursos
    haggar.Antecedentes[1].Valor = 4;//Contatos
    haggar.Antecedentes[2].Valor = 4;//Aliados
    haggar.Antecedentes[3].Valor = 4;//Staff
    haggar.Antecedentes[4].Valor = 2;//Fama
    haggar.NovosTalentos[0].Valor = 3;//Administrar
    haggar.NovosTalentos[1].Valor = 0;//Instrução
    haggar.NovasPericias[0].Valor = 3;//Reparos
    return haggar;
}

let npc;
if (getParameterByName('age') === 'ff3')
    npc = HaggarFF3();
else
    npc = Haggar();
npc = calcPC(npc);