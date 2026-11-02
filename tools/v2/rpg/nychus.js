
function Nychus() {
    const personagem = {
        Nome: "Nychus",
        Estilo: "Forças Especiais",
        Escola: "Marinha dos EUA",
        Assinatura: "Faz Caretas",
        Conceito: "Rainha do Gelo",
        Equipe: "Roger McRee",
        Time: "Rolling Thunder",
        Forca: 3,
        Destreza: 3,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 2,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        NovasPericias: [],
        Computador: 3,
        Medicina: 1,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Cibernetico", 4), newCaracteristica("Empresario", 3), newCaracteristica("Recursos", 3)],
        Soco: 3,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 3,
        Foco: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "Thigh Press, Suplex, Flying Body Spear, Flying Heel Stomp, Eye Rake, Kippup, Hurricane Kick, Spinning Foot Sweep, Double Hit Kick, Double Dread Kick, Forward Flip Knee",
        Gloria: 4,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return personagem;
}

let npc = Nychus();

npc = calcPC(npc);