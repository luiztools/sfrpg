
function Shade() {
    const personagem = {
        Nome: "Shade",
        Estilo: "Kabaddi",
        Escola: "Monastério Zen",
        Assinatura: "Ri sarcasticamente",
        Conceito: "Diletante",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Intimidacao: 4,
        Perspicacia: 3,
        Labia: 5,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 4,
        NovasPericias: [],
        Arena: 3,
        Computador: 2,
        Misterios: 2,
        Estilos: 4,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Arena", 3), newCaracteristica("Recursos", 5), newCaracteristica("Staff", 5)],
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        NovasTecnicas: [newCaracteristica("Lanca", 5)],
        ManobrasEspeciais: "Head Butt, Ghost Form, Triple Strike, Regeneration, Slide Kick, Double Hit Kick, San He, Energy Reflection, Missile Reflection, Jump, Kippup",
        Combos: "Jab para Triple Strike para Stunning Shout (Dizzy); Stunning Shout para Lanca Fierce; Lanca Fierce para Slide Kick (Dizzy); Double Hit Kick para Lanca Strong",
        Gloria: 9,
        Honra: 3,
        Chi: 7,
        ForcaVontade: 5,
        Saude: 14,
        Divisao: "Duelistas"
    };
    return personagem;
}

let npc = Shade();

npc = calcPC(npc);