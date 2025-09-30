//http://www.convertcsv.com/csv-to-json.htm
const manobras = {
	//básicas
	"Jab": { Tecnica: "Soco", ModVel: 2, ModDano: -1, ModMov: 0, Sistema: "Básica" },
	"Strong": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "Básica" },
	"Fierce": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -1, Sistema: "Básica" },
	"Short": { Tecnica: "Chute", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "Básica" },
	"Forward": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Básica" },
	"Roundhouse": { Tecnica: "Chute", ModVel: -2, ModDano: 4, ModMov: -1, Sistema: "Básica" },
	"Apresamento": { Tecnica: "Apresamento", ModVel: 0, ModDano: 0, ModMov: "Um", Sistema: "Básica. Ignora Bloqueio" },
	"Bloqueio": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "Básica. Interrupção. +2 Vel próx. turno. Impede KD." },
	"Movimento": { Tecnica: "Esportes", ModVel: 3, ModMov: 3, Sistema: "Básica" },
	//soco
	"Buffalo Punch": { Tecnica: "Soco", ModVel: -2, ModDano: 5, ModMov: "Um", Sistema: "" },
	"Dashing Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 2, FdV: 1, Sistema: "" },
	"Dashing Uppercut": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 2, FdV: 1, Sistema: "KD vs. Aérea" },
	"Dim Mak": { Tecnica: "Soco", ModVel: 0, ModDano: 0, ModMov: 0, Chi: 1, Sistema: "Pode retardar o dano se desejado; -1 para qualquer atributo físico" },
	"Dragon Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 6, ModMov: -2, FdV: 1, Sistema: "KD vs. Aérea; força o oponente 1 hex para trás; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Ear Pop": { Tecnica: "Soco", ModVel: -1, ModDano: -4, ModMov: -1, Sistema: "Ignora o Vigor; -1 Honra por uso" },
	"Fist Sweep": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -2, Sistema: "Agachamento, KD" },
	"Flaming Dragon Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 6, ModMov: -2, Chi: 1, FdV: 1, Sistema: "KD e força todos os alvos 1 hex para trás; 2 testes vs. o oponente que esteja no hex adjacente no começo do movimento; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Head Butt": { Tecnica: "Soco", ModVel: 0, ModDano: 3, ModMov: -2, Sistema: "" },
	"Hundred Hand Slap": { Tecnica: "Soco", ModVel: -2, ModDano: "0/0/0", ModMov: "Um", FdV: 1, Sistema: "3 hits" },
	"Hyper Fist": { Tecnica: "Soco", ModVel: 1, ModDano: "0/0/0", ModMov: "Um", FdV: 1, Sistema: "3 hits" },
	"Monkey Grab Punch": { Tecnica: "Soco", ModVel: -2, ModDano: 1, ModMov: 0, Sistema: "Ignora Bloqueio" },
	"Power Uppercut": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "KD vs. Aérea" },
	"Rekka Ken": { Tecnica: "Soco", ModVel: "", ModDano: "", ModMov: "", FdV: 1, Sistema: "Deve ser jogado com um Soco Básico, adiciona +3 na VEL; pode ser jogado por 3 turnos consecutivos, somando para atordoar; deve se exibir após usado por 3 turnos consecutivos, senão -3 Glória" },
	"Shockwave": { Tecnica: "Soco", ModVel: 0, ModDano: 0, Chi: 1, Sistema: "Afeta (Força) hex em liha reta; todos os alvos na linha sofrem o dano e sofrem KD automático; não afeta lutadores que estão executando uma Aérea" },
	"Spinning Back Fist": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: 1, Sistema: "" },
	"Spinning Clothesline": { Tecnica: "Soco", ModVel: 0, ModDano: 0, ModMov: -2, FdV: 1, Sistema: "Acerta todos os hex adjacentes, forçando o recuo de 1 hex; o lutador pode se mover e rolar o dano novamente, não afeta oponentes em Manobras de Agachamento" },
	"Spinning Knuckle": { Tecnica: "Soco", ModVel: -1, ModDano: "1/1", ModMov: 3, FdV: 1, Sistema: "2 hits; esquiva de projétil" },
	"Triple Strike": { Tecnica: "Soco", ModVel: -2, ModDano: "Especial", Sistema: "2 testes de Soco com +0 e 1 de teste Chute com +1, use somente os 2 maiores resultados" },
	"Turbo Spinning Clothesline": { Tecnica: "Soco", ModVel: 1, ModDano: 0, ModMov: -1, FdV: 1, Sistema: "Acerta todos os hex adjacentes, forçando o recuo de 1 hex; o lutador pode se mover e rolar o dano novamente, não afeta oponentes em Manobras de Agachamento" },
	"Turn Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: "Dois", FdV: 1, Sistema: "Gaste 1 FV no 1º turno; a carta pode ficar na mesa e ser jogada outras em conjunto (-1 nos três mods. enquanto ela estiver na mesa); turno 2: +1 dano; turno 3: +1 vel, +2 dano; turno 4 ou posterior: +2 vel, +3 dano" },
	"Ducking Fierce": { Tecnica: "Soco", ModVel: -1, ModDano: 4, Sistema: "Agachamento" },
	"Elbow Smash": { Tecnica: "Soco", ModVel: 2, ModDano: 2, ModMov: "Um", Sistema: "" },
	"Boshi Ken": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: 0, Sistema: "Se bem sucedido, o alvo terá -1 MOV no próximo turno" },
	"Haymaker": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -2, Sistema: "" },
	"Shikan Ken": { Tecnica: "Soco", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "Se bem sucedido, o atacante deve vencer um disputa de Força para forçar o alvo 1 hex para trás; KD vs. Aérea" },
	"Shuto": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -2, Sistema: "Ignora Toughskin, armaduras, etc.; contra um oponente sem armadura, causa +4 DAN" },
	"Widowmaker": { Tecnica: "Soco", ModVel: -3, ModDano: 5, ModMov: "Dois", Sistema: "Se bem sucedido, o alvo sofre KD; não afeta lutadores em Aérea; Aérea; esquiva de projétil" },
	"Heart Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: -2, Sistema: "Dano somente para atordoar, não perde Saúde; não pode fazer parte de Combo Atordoante" },
	"Knife Hand Strike": { Tecnica: "Soco", ModVel: 1, ModDano: -1, ModMov: -1, Sistema: "Dano aplicado contra ½ do Vigor do alvo caso não esteja bloqueando" },
	"Lunging Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 1, Sistema: "Agachamento; apenas Kick Defense funciona" },
	"Dashing Clothesline": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: 2, FdV: 1, Sistema: "KD" },
	"Dragon Smash": { Tecnica: "Soco", ModVel: -1, ModDano: 6, ModMov: 0, FdV: 2, Sistema: "Similar ao Dragon Punch, mas após acertar a Manobra (e empurrar o oponente para trás), pode acertar o oponente mais uma vez (se ainda tiver Movimento para isso); o segundo impacto tem dano +4 e causa KD" },
	"Houzantou": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: 1, FdV: 1, Sistema: "Esquiva de projétil, KD" },
	"Jet Uppercut": { Tecnica: "Soco", ModVel: -1, ModDano: 6, ModMov: -1, FdV: 1, Sistema: "Similar ao Dragon Punch" },
	"Kobokushi": { Tecnica: "Soco", ModVel: -2, ModDano: 5, ModMov: "Um", Chi: 1, Sistema: "Ao interromper um projétil, fazer um teste de Raciocínio (2 Sucessos) para dissipá-lo por 1 Força de Vontade. Causa KD." },
	"Machine Gun Blow": { Tecnica: "Soco", ModVel: 0, ModDano: "0/0/0", ModMov: 2, FdV: 1, Sistema: "Três Hits" },
	"Punch Sweep": { Tecnica: "Soco", ModVel: -2, ModDano: 3, ModMov: -2, Sistema: "Agachamento; KD; a única forma de se defender é com Kick Defense; defensor pode rolar Percepção + Perspicácia contra Destreza + Soco do atacante; se vencer, pode se defender com um bloqueio comum" },
	"Ressen Ha": { Tecnica: "Soco", ModVel: 0, ModDano: 5, ModMov: 0, Chi: 1, FdV: 1, Sistema: "KD contra Aérea" },
	"Running Dragon Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 1, ModMov: 0, FdV: 2, Sistema: "Linha reta; empurra o oponente para trás e segue acertando enquanto tiver movimento; após o último dano o oponente sofre um KD; só é considerada aérea após o rolamento do último dano" },
	"Senkju Tai": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 0, FdV: 1, Sistema: "KD" },
	"Snake Strike": { Tecnica: "Soco", ModVel: 1, ModDano: 1, ModMov: -1, Sistema: "Aérea, esquiva de projétil; oponente interrompido em uma Aérea sofre três hits" },
	"Tornado Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: -2, FdV: 1, Sistema: "Acerta e empurra oponentes de todos os hex adjacentes, seguindo em linha reta e rolando novos danos; o último acerto precisa ser direcionado a apenas um oponente, causando KD e tendo um modificador de +2; não atinge oponentes em agachamentos" },
	"Thunderbolt": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: -1, Sistema: "Aérea, causa KD" },
	"Cross Counter": { Tecnica: "Soco", ModVel: 2, ModDano: 4, ModMov: "Dois", FdV: 1, Sistema: "Se o lutador é mais rápido que o oponente, ele deve esperar o seu ataque para acertá-lo no exato momento do golpe, de modo que ele absorve com apenas metade do seu Vigor, empurrando um hex e causando KD; o lutador pode seguir se movimentando após o soco, mantendo-se próximo do oponente; se derrubado ou Dizzy, o atacante não prossegue com o Cross Counter; se atingir antes de receber o ataque, não empurra ou causa KD; não há ganho de +2 VEL no próximo turno" },
	"Tornado Punch": { Tecnica: "Soco", ModVel: 0, ModDano: "1/2", ModMov: -2, FdV: 1, Sistema: "Bate enquanto move; último ataque usa segundo modificador e causa KD; Esquiva projétil;" },
	"Double Hit Punch": { Tecnica: "Soco", ModVel: -1, ModDano: "0/0", ModMov: -1, Sistema: "Dois hits; Oponentes aéreos ou agachados tomam apenas 1 hit" },
	"Burn Knuckle": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: 3, Chi: 1, FdV: 1, Sistema: "Linha reta, causa KD" },
	"Boxing Punches": { Tecnica: "Soco", ModVel: "", ModDano: "", ModMov: "", Sistema: "3 novos socos básicos" },
	"Cross/Hook": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Básica" },
	"Straight": { Tecnica: "Soco", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "Básica" },
	"Uppercut": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -1, Sistema: "Básica" },
	"Flicker Jab": { Tecnica: "Soco", ModVel: 3, ModDano: -1, ModMov: "Um", Alcance: 2, Sistema: "Alcance 2 hex" },
	"Rabbit Punch": { Tecnica: "Soco", ModVel: 1, ModDano: 1, ModMov: -1, Sistema: "Tem de entrar no hex; ignora metade do ABS total, -1 Honra" },
	"White Fang": { Tecnica: "Soco", ModVel: 0, ModDano: "2/2", ModMov: "Um", FdV: 1, Sistema: "Dois Hits. Agachados ou aéreos só levam um hit. Bloqueio só absorve um hit, exceto Punch Defense (sem o bônus)." },
	//Chute
	"Air Hurricane Kick": { Tecnica: "Chute", ModVel: -1, ModDano: -1, ModMov: 1, Chi: 1, FdV: 1, Sistema: "Igual Hurricane Kick" },
	"Backflip Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: "Dois", Sistema: "Mov para trás após dano" },
	"Double Dread Kick": { Tecnica: "Chute", ModVel: -2, ModDano: "1/4", ModMov: 1, FdV: 1, Sistema: "1º teste com +1 DAN e joga o alvo 1 hex para trás, o atacante deve mover-se para o hex do oponente e fazer o 2º ataque com +4; pode usar o 2º ataque se o alvo estiver a alcance" },
	"Double Hit Kick": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1", ModMov: -1, Sistema: "Dois Hits a menos que o alvo esteja em Aérea ou Agachamento" },
	"Double Hit Knee": { Tecnica: "Chute", ModVel: 0, ModDano: "0/0", ModMov: -2, Sistema: "Dois Hits" },
	"Dragon Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 6, ModMov: -2, Chi: 1, FdV: 1, Sistema: "KD e joga todos os alvos 1 hex para trás; 2 testes vs. alvo que estiver no hex adjacente no começo do movimento; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Flash Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 7, Chi: 1, FdV: 1, Sistema: "Aérea; KD vs. Aérea" },
	"Flying Knee Thrust": { Tecnica: "Chute", ModVel: 1, ModDano: 2, ModMov: 1, FdV: 1, Sistema: "Aérea; KD vs. Aérea" },
	"Flying Thrust Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 6, ModMov: -2, FdV: 1, Sistema: "KD vs. Aérea; joga o alvo 1 hex para trás; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Foot Sweep": { Tecnica: "Chute", ModVel: -2, ModDano: 3, ModMov: -2, Sistema: "Agachamento; KD" },
	"Forward Flip Knee": { Tecnica: "Chute", ModVel: -2, ModDano: 4, ModMov: "Dois", Sistema: "Somente acerta alvos no mesmo e/ou adjacente hex; o atacante move-se para trás do alvo e rola o dano; se o alvo foi interrompido, perde o ataque" },
	"Great Wall of China": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1/1", FdV: 2, Sistema: "3 hits, afeta 3 hex adjacentes e consecutivos" },
	"Handstand Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: -2, Sistema: "KD vs. Aérea" },
	"Hurricane Kick": { Tecnica: "Chute", ModVel: 0, ModDano: -1, ModMov: -1, Chi: 1, FdV: 1, Sistema: "Linha Reta; acerta todos os hex adjacentes e o mesmo hex, causando dano toda vez que se move; todos os alvos recuam um hex; Aérea" },
	"Lightning Leg": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1/1", FdV: 1, Sistema: "3 hits" },
	"Slide Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 1, Sistema: "KD a menos que o alvo esteja bloqueando, Agachamento" },
	"Spinning Foot Sweep": { Tecnica: "Chute", ModVel: -2, ModDano: 3, FdV: 1, Sistema: "Agachamento; KD a menos que o alvo esteja bloqueando" },
	"Stepping Front Kick": { Tecnica: "Chute", ModVel: 0, ModDano: "1/1", ModMov: 1, FdV: 1, Sistema: "2 hits; o atacante se move para o hex do alvo para o 1º dano, forçando-o recuar um hex antes do 2º teste; só pode usar o 2º ataque se estiver a alcance" },
	"Whirlwind Kick": { Tecnica: "Chute", ModVel: -2, ModDano: 0, ModMov: -1, FdV: 2, Sistema: "Linha Reta; acerta todos os hex adjacentes e o mesmo hex, causando dano toda vez que se move; todos os alvos recuam um hex; Aérea" },
	"Wounded Knee": { Tecnica: "Chute", ModVel: -2, ModDano: 3, ModMov: -1, Sistema: "Alvo tem -2 VEL nos chutes -2 MOV em todas as manobras nos próximos 2 turnos se bem sucedido" },
	"Forward Slide Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: 0, Sistema: "KD a menos que o alvo esteja bloqueando" },
	"Scissor Kick": { Tecnica: "Chute", ModVel: 0, ModDano: "3/3", ModMov: 3, FdV: 1, Sistema: "2 hits; Aérea" },
	"Tiger Knee": { Tecnica: "Chute", ModVel: 3, ModDano: 2, ModMov: 0, FdV: 2, Sistema: "KD; Aérea; esquiva de projétil" },
	"Ax Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: -2, Sistema: "Precisa entrar no hex do oponente; KD vs. Aérea; Acerta oponentes em Agachamento; Aérea" },
	"Cartwheel Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 1, ModMov: 2, FdV: 1, Sistema: "Linha Reta; Dano = Força + Chute + 1 para cada hex que andou; o alvo recua 1 hex" },
	"Heel Stamp": { Tecnica: "Chute", ModVel: 2, ModDano: -4, ModMov: 1, Sistema: "O atacante recua 1 hex após o dano, o alvo recua [(Força + Esportes do atacante) - Força do alvo] hex" },
	"Reverse Frontal Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: -1, Sistema: "Ignora bloqueios" },
	"Forward Backflip Kick": { Tecnica: "Chute", ModVel: 2, ModDano: "1/1", ModMov: "Dois", FdV: 1, Sistema: "2 hits se o atacante interromper um alvo em Aérea" },
	"Bushin Hurricane Kick": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", Chi: 1, FdV: 1, Sistema: "Todos ao redor são atingidos e empurrados para trás; oponentes no mesmo hex são puxados pelo golpe, podendo ser acertados até um número de vezes igual à Técnica Esportes do usuário; para cada novo ataque, devem ter sofrido dano no ataque anterior; KD no último acerto" },
	"Dankuukyaku": { Tecnica: "Chute", ModVel: -1, ModDano: 0, ModMov: 4, FdV: 2, Sistema: "Aérea, esquiva de projétil (dif. 8), após o primeiro acerto, empurra o oponente e pode avançar para um segundo com dano +2, empurrando de novo e tentando um terceiro com dano +4, que causa KD" },
	"Dive Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Aérea, afeta personagens em agachamentos" },
	"Hayagake": { Tecnica: "Chute", ModVel: 0, ModDano: 3, ModMov: 3, FdV: 1, Sistema: "Aérea ou agachamento, à escolha do jogador; se aérea, esquiva de projétil; se agachamento, causa KD" },
	"Messiah Kick": { Tecnica: "Chute", ModVel: -1, ModDano: -1, ModMov: -2, FdV: 1, Sistema: "Aérea, esquiva de projétil, tem um segundo chute com dano +2 e efeito KD; se bloqueado, atacante rola Manipulação + Chute contra Percepção + Bloqueio; se vencer, bloqueio não funciona para o segundo chute" },
	"Power Kick": { Tecnica: "Chute", ModVel: -3, ModDano: 5, ModMov: "Dois", Sistema: "Empurra 1 Hexágono para trás e causa KD em Manobras Aéreas" },
	"Rhino Horn": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 3, FdV: 1, Sistema: "Aérea" },
	"Rising Lightning Leg": { Tecnica: "Chute", ModVel: 0, ModDano: "1/1/1", ModMov: "Três", FdV: 2, Sistema: "Aérea após a rolagem de dano, podendo se esquivar de projétil; três hits; KD" },
	"Roundabout Kick": { Tecnica: "Chute", ModVel: -2, ModDano: 4, FdV: 1, Sistema: "Acerta oponentes no mesmo hex ou adjacente igual à técnica Chute do lutador; causa KD; Aérea" },
	"Tsumuji": { Tecnica: "Chute", ModVel: -1, ModDano: -1, ModMov: 3, FdV: 2, Sistema: "Após o primeiro acerto, empurra o oponente e pode avançar para um segundo com dano +1, empurrando de novo e tentando um terceiro com dano +3, que causa KD; pode aplicar um quarto chute no oponente caído com dano +1, porém custará 1 ponto temporário de Honra" },
	"Wheel Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 1, FdV: 1, Sistema: "Aérea, esquiva de projétil" },
	"Gekiro": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", FdV: 2, Sistema: "Mesmo hex; Hits = Esportes; Causa KD; Aérea;" },
	"Flamingo Stance": { Tecnica: "Chute", ModVel: "", ModDano: "", ModMov: "", Sistema: "+1 Vel em chutes; Movimento vira Um ou 1/2 (Aéreas)" },
	"Bushin Sempu Kyaku": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", Chi: 1, FdV: 1, Sistema: "Tem de entrar no hex. Acerta todos ao redor. Hits = Esportes. Se não causar dano, acaba. KD. Manobra Aérea." },
	"Take Down": { Tecnica: "Chute", ModVel: "+0", ModDano: 2, ModMov: "Um", Sistema: "Apresamento. KD." },
	"Flying Kick": { Tecnica: "Chute", ModVel: "+0", ModDano: 3, ModMov: 2, FdV: 1, Sistema: "Aérea. KD." },
	"Bicycle Kick": { Tecnica: "Chute", ModVel: "+0", ModDano: "+0", ModMov: 1, FdV: 1, Sistema: "Linha Reta; causando dano toda vez que entra no hex da vítima; o alvo recua um hex; Aérea" },
	"Somersault Kick": { Tecnica: "Chute", ModVel: -1, ModDano: "2/7", ModMov: "Um", Chi: 1, FdV: 1, Sistema: "Dois Hits se não andar" },
	"Slash Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 5, ModMov: 3, Chi: 1, FdV: 1, Sistema: "Linha reta, causa KD" },

	//bloqueio
	"Deflecting Punch": { Tecnica: "Soco", ModVel: 2, ModDano: 0, Sistema: "Bônus de Bloqueio apenas para socos; Após a ABS faça um contra-soco (vs. qualquer ataque)" },
	"Energy Reflection": { Tecnica: "Bloqueio", ModVel: 1, Chi: 1, Sistema: "Cada projétil requer 2 sucessos num teste de Raciocínio; 1 Chi por projétil" },
	"Kick Defense": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "ABS+4 vs. Chute; -2 vs. outros" },
	"Maka Wara": { Tecnica: "Bloqueio", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Toda vez que fizer um bloqueio bem sucedido role Vigor + Bloqueio -3 para dar dano no atacante; funciona automaticamente " },
	"Missile Reflection": { Tecnica: "Bloqueio", ModVel: 3, ModMov: -1, Sistema: "Role Destreza para refletir projétil em um novo alvo; armas de arremesso requerem 1 sucesso; flechas, setas de besta, etc. requerem 2 sucessos; armas de fogo requerem 3 sucessos e um pedaço de material duro para refletir as balas; balas não podem ser refletidas no atirador" },
	"Punch Defense": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "ABS+4 vs. Soco; -2 vs. outros" },
	"San He": { Tecnica: "Bloqueio", ModVel: 2, Chi: 1, Sistema: "Adiciona o dobro do Bloqueio na ABS; o lutador não sofre KD e não pode ser forçado para fora do hex exceto por Apresamentos; Teste Força + Bloqueio para grandes objetos, o Mestre decide o nº de sucessos; o lutador não ganha +2 na VEL no próximo turno" },
	"Block And Grab": { Tecnica: "Apresamento", ModVel: 4, ModDano: 2, FdV: 1, Alcance: 0, Sistema: "Adiciona o Bloqueio na ABS; evita KD; o lutador aplica Throw após sofrer dano se não ficar Dizzy; Só funciona contra Soco, Chute, Esportes. Não funciona contra Agachamento." },
	"Counter Attack": { Tecnica: "Bloqueio", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, Sistema: "Lutador deve jogar carta de Bloqueio junto com a carta da Manobra que ele usará após o Counter Attack, dentro de sua lista de manobras possíveis - pode escolher uma para cada 2 pontos em Bloqueio; o lutador terá -2 Absorção; após Bloquear a Manobra do oponente o personagem pode seguir com seu ataque; o personagem não ganha +2 de Velocidade no próximo turno ao usar o Counter Attack e ele não é uma Interrupção; personagem pode jogar Punch Defense usar o Counter Attack com uma Manobra de Soco, Absorvendo como nas regras do Punch Defense; o mesmo vale para Kick Defense com Chutes" },
	"Parry": { Tecnica: "Bloqueio", ModVel: 2, Sistema: "Usuário rola Destreza + Bloqueio contra a Técnica da manobra do adversário; se bem-sucedido, evita todo o dano do ataque, adicionando também +1 Velocidade no próximo turno para cada sucesso a mais que tiver obtido (ao invés do +2 do Bloqueio comum); se falhar, recebe todo o dano do ataque; contra projétil, o Narrador pode pedir primeiro um teste de Raciocínio como no Energy Reflection; manobras mais poderosas - com custo em Força de Vontade – podem pedir mais de um sucesso para o Parry ser bem-sucedido; contra Manobras de Múltiplo Impacto, um teste deve ser feito a cada novo rolamento, a não ser por aquelas em que é preciso causar dano para empurrar e seguir batendo, nas quais o Parry as cancela imediatamente se o atacante for impedido de seguir se movendo; Parry bem-sucedido causa o dano do Maka Wara" },

	//apresamento
	"Air Throw": { Tecnica: "Apresamento", ModVel: 2, ModDano: 5, ModMov: 0, FdV: 1, Sistema: "Precisa interromper uma Aérea do oponente; KD; o alvo pode ser arremessado a 3 hex do atacante; atacante termina seu movimento após o ataque; Aérea" },
	"Back Breaker": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "KD" },
	"Back Roll Throw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "O alvo é arremessado a (Força + Chute) hex; KD" },
	"Bear Hug": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "Sustentado" },
	"Brain Cracker": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: "Um", Sistema: "Sustentado" },
	"Grappling Defense": { Tecnica: "Apresamento", ModVel: 4, ModMov: -1, Sistema: "Adiciona a técnica Apresamento ao Vigor para absorver Apresamentos" },
	"Hair Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 5, ModMov: "Dois", Sistema: "Atacante deve se mover para o hex do alvo e atravessá-lo; o alvo é jogado (Força do atacante) hex na linha do movimento; KD" },
	"Head Bite": { Tecnica: "Apresamento", ModVel: 1, ModDano: 3, ModMov: "Um", Sistema: "Sustentado" },
	"Head Butt Hold": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "Sustentado" },
	"Iron Claw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "Sustentado" },
	"Knee Basher": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "Sustentado; uma vez que o alvo é arremessado, ele é considerado KD, dano calculado c/ chute" },
	"Neck Choke": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "Sustentado" },
	"Pile Driver": { Tecnica: "Apresamento", ModVel: -2, ModDano: 4, ModMov: "Um", Sistema: "KD" },
	"Siberian Bear Crusher": { Tecnica: "Apresamento", ModVel: 0, ModDano: 3, ModMov: 1, FdV: 1, Sistema: "KD; Aérea enquanto estiver sendo executado (após o movimento)" },
	"Siberian Suplex": { Tecnica: "Apresamento", ModVel: 0, ModDano: "2/2", ModMov: "Dois", FdV: 1, Sistema: "KD; considere um Suplex feito imediatamente após outro num mesmo alvo numa mesma direção (2 hits, mas move 1 hex depois)" },
	"Spinning Pile Driver": { Tecnica: "Apresamento", ModVel: -2, ModDano: 7, ModMov: "Dois", FdV: 2, Sistema: "KD; o alvo cai a 3 hex após o impacto; Aérea enquanto estiver sendo executado (após o movimento); esquiva de projétil enquanto estiver sendo executado" },
	"Stomach Pump": { Tecnica: "Apresamento", ModVel: 0, ModDano: 4, ModMov: "Um", Sistema: "Sustentado" },
	"Storm Hammer": { Tecnica: "Apresamento", ModVel: -2, ModDano: 7, ModMov: "Um", Sistema: "KD; atacante e alvo terminam a 3 hex do hex do ataque; Aérea enquanto estiver sendo executado (após o movimento inicial); esquiva de projétil enquanto estiver sendo executado" },
	"Suplex": { Tecnica: "Apresamento", ModVel: 0, ModDano: 2, ModMov: "Um", Sistema: "KD; o alvo cai no hex adjacente" },
	"Thigh Press": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "KD; o alvo termina no hex inicial da atacante; se ambos começaram no mesmo hex o atacante escolhe o hex adjacente em que o alvo cai" },
	"Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 2, ModMov: "Um", Sistema: "O alvo é arremessado a (Força) hex; KD" },
	"Air Suplex": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: 0, Sistema: "Precisa interromper uma Aérea do oponente; KD; Atacante e alvo terminam no hex da interrupção; Aérea" },
	"Choke Throw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: 0, Sistema: "Pode interromper oponente em pé ou em Aérea; atacante e alvo terminam no mesmo hex; KD" },
	"Disengage": { Tecnica: "Apresamento", ModVel: 1, ModMov: -2, Sistema: "Jogado quando estiver preso em Sustentado; o lutador pode fazer um 2º teste para sair do apresamento (Destreza vs. Força do atacante)" },
	"Dislocate Limb": { Tecnica: "Apresamento", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "O alvo tem -3 VEL para todas as Manobras; Socos do alvo tem também -2 no DAN. Alvo pode recolocar o braço no lugar, perdendo um turno." },
	"Eye Rake": { Tecnica: "Apresamento", ModVel: -2, ModDano: -3, ModMov: 0, Sistema: "Se funcionar, alvo deve rolar Percepção + Luta às Cegas, se falhar estará Dizzy no próximo turno; -1 Honra; em torneios -1 Glória também" },
	"Jaw Spin": { Tecnica: "Apresamento", ModVel: -1, ModDano: 5, Chi: 1, Sistema: "Precisa sofrer um ataque mais lento antes de executar esta manobra, dano baseado em Híbrido Animal" },
	"Ripping Bite": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: "Um", FdV: 1, Sistema: "Alvo tem -1 na Força e Destreza pelo resto do combate; pode ser usado várias vezes no mesmo alvo, dano baseado em Híbrido Animal" },
	"Sleeper": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: "Um", FdV: 1, Sistema: "Sustentado; se o apresamento for mantido por 3 turnos o alvo é Dizzy" },
	"Tearing Bite": { Tecnica: "Apresamento", ModVel: 1, ModDano: 4, ModMov: "Um", Chi: 1, Sistema: "O dano é causado quando o alvo é arremessado a (Força -1) hex na direção em que veio o ataque, dano baseado em Híbrido Animal" },
	"Displacement": { Tecnica: "Soco", ModVel: 2, ModDano: -1, ModMov: 1, FdV: 1, Sistema: "Precisa interromper um ataque; o lutador move-se para um dos lados esquivando do ataque e deve mover-se para o alvo à alcance de seu contra-soco (dano calculado c/ soco)" },
	"Improved Pin": { Tecnica: "Apresamento", ModVel: 0, ModDano: 2, ModMov: 1, FdV: 1, Sistema: "Sustentado; pode ser executado em alvos no mesmo hex ou no hex adjacente; +2 DAN e +1 MOV no 1º turno, +1/Dois nos turnos subsequentes; o atacante ganha +3 na Força para manter o apresamento; precisa causar 2 pontos de dano para segurar o apresamento" },
	"Pin": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: 1, FdV: 1, Sistema: "Sustentado; o alvo precisa estar KD ou Dizzy; +2 DAN e +1 MOV 1º turno, +0/Zero para todos subsequentes; o atacante ganha +3 na Força para manter o apresamento; precisa causar 2 pontos de dano para segurar o apresamento" },
	"Head Butt Grab Attack": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "Apresamento; -2 Vel no próx. turno do oponente se causar dano" },
	"Face Slam": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Sistema: "KD" },
	"Flying Tackle": { Tecnica: "Apresamento", ModVel: -1, ModDano: 0, ModMov: 2, Sistema: "Atacante e alvo sofrem KD se nenhum dano for causado; ambos voam por 2 hex a partir do hex do oponente; +2 VEL na próxima manobra se ela for um Apresamento" },
	"Rising Storm Crow": { Tecnica: "Apresamento", ModVel: -3, ModDano: "Especial", ModMov: 2, FdV: 1, Sistema: "Precisa se mover por pelo menos 2 hex para entrar no hex do alvo; 2 hits, o 1º de Força -3 e o 2º de 2x Força; o dano combina para atordoar; o alvo sofre KD e é arremessado na direção do movimento a (Força do atacante) hex, mesmo se não sofrer dano" },
	"Bandit Chain": { Tecnica: "Apresamento", ModVel: 1, ModDano: "2/2/2", ModMov: "Um", FdV: 1, Sistema: "Três Hits; no fim, arremessa a até Força hex" },
	"Bushin Musou Renge": { Tecnica: "Apresamento", ModVel: -2, ModDano: "4/4/4", ModMov: "Um", Chi: 1, FdV: 1, Sistema: "Três Hits baseado em Soco, Chute ou Apresamento; oponente absorve com Honra" },
	"Butsumetsu Buster": { Tecnica: "Apresamento", ModVel: -2, ModDano: 5, ModMov: "Um", FdV: 1, Sistema: "Oponente arremessado em hex adjacente; KD" },
	"Daikyou Burning": { Tecnica: "Apresamento", ModVel: 0, ModDano: 5, ModMov: 0, Chi: 1, FdV: 1, Sistema: "KD; pode arrastar oponente pelo chão com movimento restante causando um dado de dano por hex" },
	"Leaping Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 3, ModMov: 3, FdV: 1, Sistema: "Aérea, esquiva de projétil; arremessa a Força hex" }, "Power Bomb": { Tecnica: "Apresamento", ModVel: 0, ModDano: 6, ModMov: "Um", FdV: 1, Sistema: "KD, vítima quica a até 3 hex de distância" },
	"Sean Tackle": { Tecnica: "Apresamento", ModVel: 1, ModDano: 3, ModMov: 2, FdV: 2, Sistema: "KD e empurra um hex para trás" },
	"Soul Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 7, ModMov: "Dois", Chi: 1, Sistema: "Personagem passa pelo hex do oponente, arremessando-o em seguida" },
	"Tornado Throw": { Tecnica: "Apresamento", ModVel: 0, ModDano: 6, ModMov: "Um", FdV: 1, Sistema: "KD, arremessa em qualquer hex adjacente" },
	"Clinch": { Tecnica: "Apresamento", ModVel: 2, ModDano: 0, ModMov: "Um", Sistema: "Não causa dano real, apenas anula manobra do oponente se agarrar. +1 Vel em apresamentos no próximo turno." },
	//Esportes
	"Air Smash": { Tecnica: "Esportes", ModVel: -1, ModDano: 4, ModMov: -1, Sistema: "Aérea; esquiva de projétil; Linha Reta; o atacante termina o movimento no hex do alvo" },
	"Beast Roll": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: -2, FdV: 1, Sistema: "Aérea; esquiva de projétil;Linha Reta; 1º ataque move-se para trás, então reverte a direção para o 2º ataque; o atacante termina 2 hex na frente do 2º alvo; precisa entrar no hex de ambos os alvos; mov +2 para segundo ataque" },
	"Cannon Drill": { Tecnica: "Esportes", ModVel: 2, ModDano: 2, ModMov: 2, FdV: 1, Sistema: "linha reta" },
	"Diving Hawk": { Tecnica: "Esportes", ModVel: 0, ModDano: 5, ModMov: 2, FdV: 1, Sistema: "Aérea; esquiva de projétil" },
	"Drunken Monkey Roll": { Tecnica: "Esportes", ModVel: 3, ModMov: 2, Sistema: "Agachamento; esquiva de projétil" },
	"Flying Body Spear": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 1, FdV: 1, Sistema: "Aérea; esquiva de projétil; Linha Reta" },
	"Flying Head Butt": { Tecnica: "Esportes", ModVel: 0, ModDano: 4, ModMov: 3, FdV: 1, Sistema: "Aérea; Linha Reta" },
	"Flying Heel Stomp": { Tecnica: "Esportes", ModVel: 0, ModDano: 1, ModMov: 2, FdV: 1, Sistema: "Aérea; esquiva de projétil; Linha Reta; o atacante pode fazer o ataque a qualquer momento e continuar o movimento" },
	"Jump": { Tecnica: "Esportes", ModVel: 3, ModMov: 0, Sistema: "Aérea; Esquiva de projétil (Des + Esp vs. Foco); combina com chutes e socos básicos (use a VEL, DAN e MOV da manobra)" },
	"Jumping Shoulder Butt": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: -1, Sistema: "Aérea; esquiva de projétil" },
	"Kippup": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Efeito automático; o lutador sofre apenas -1 VEL(não -2) após sofrer KD" },
	"Rolling Attack": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 4, FdV: 1, Sistema: "Aérea; Linha Reta; o atacante termina o movimento 2 hex na frente do alvo; precisa entrar no hex do alvo" },
	"Thunderstrike": { Tecnica: "Esportes", ModVel: 0, ModDano: 5, ModMov: -1, Sistema: "Precisa entrar no hex do alvo; Complete o movimento após o dano" },
	"Vertical Rolling Attack": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 0, FdV: 1, Sistema: "Aérea; esquiva de projétil; KD vs. Aérea" },
	"Wall Spring": { Tecnica: "Esportes", ModVel: 2, ModMov: 0, Sistema: "Aérea; esquiva de projétil; o lutador pode pular em um obstáculo com +0 MOV, quando quica na direção oposta com +2; pode ser combinado com chutes e socos básicos (use o modificador de MOV do Wall Spring)" },
	"Backflip": { Tecnica: "Esportes", ModVel: 3, ModMov: 2, FdV: 1, Sistema: "Linha Reta; o lutador não pode ser atingido enquanto usa esta manobra, somente antes ou depois" },
	"Flying Punch": { Tecnica: "Esportes", ModVel: -2, ModDano: 2, ModMov: 5, FdV: 1, Sistema: "Aérea; o atacante precisa mover 2 hex para trás do alvo e voltar para atingi-lo, reduz a metade (arredondado para baixo) o Vigor efetivo do alvo; -1 Honra por uso; não há perda de Honra ou Vigor se o ataque for frontal" },
	"Light Feet": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Automaticamente adiciona +1 MOV para todas as manobras; opcionalmente, o lutador pode gastar 1 FV para adicionar +3 MOV a uma Manobra ao invés de +1" },
	"Tumbling Attack": { Tecnica: "Esportes", ModVel: -1, ModDano: -1, ModMov: 0, FdV: 1, Sistema: "Agachamento; Linha Reta; precisa entrar no hex do alvo; após o dano o alvo recua 1 hex; role o dano para cada hex que entrar e continue se movendo" },
	"Dragons Tail": { Tecnica: "Esportes", ModVel: -1, ModDano: 5, ModMov: -2, Sistema: "KD vs. Aérea; oponentes em pé recuam 1 hex, dano calculado com Híbrido Animal" },
	"Esquives": { Tecnica: "Esportes", ModVel: 2, ModMov: "Dois", Sistema: "Manobra de Interrupção, evita o ataque se for mais rápido" },
	"Pounce": { Tecnica: "Esportes", ModVel: -1, ModDano: 2, ModMov: 4, FdV: 1, Sistema: "Aérea; esquiva de projétil; KD; ambos os lutadores terminam no mesmo hex, dano calculado com Híbrido Animal" },
	"Tail Sweep": { Tecnica: "Esportes", ModVel: -1, ModDano: 1, Sistema: "KD; Agachamento; atinge todos os hex adjacentes" },
	"Typhoon Tail": { Tecnica: "Esportes", ModVel: -2, ModDano: 5, ModMov: 1, Chi: 1, FdV: 1, Sistema: "Aérea; não pode ser atingido por projétil enquanto executa esta manobra; o oponente no hex alvo sofre +5 DAN e é jogado 1 hex para trás; todos os lutadores nos hex adjacentes sofrem +2 DAN e são jogados 1 hex para trás" },
	"Upper Tail Strike": { Tecnica: "Esportes", ModVel: 1, ModDano: 2, ModMov: 1, Sistema: "KD vs. Aérea, dano calculado com Híbrido Animal" },
	"Breakfall": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Reduz o dano de Throws e outras manobras de impacto com o solo pelo nº de sucessos no teste de Destreza + Esportes" },
	"Ground Fighting": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, Sistema: "Após sofrer KD o lutador continua a lutar no chão; não pode usar Manobras Aéreas ou manobras que precisem estar de pé (Narrador decide); sem esta manobra os ataques feitos no chão terão -3 na VEL e DAN; ataques contra quem estiver usando esta manobra terão -2 na VEL e DAN, exceto Manobras de Agachamento e ataques rasteiros" },
	"Bull Head": { Tecnica: "Esportes", ModVel: -1, ModDano: 4, ModMov: 1, FdV: 1, Sistema: "Esquiva de projétil antes de iniciar o movimento; linha reta, KD; pode ser carregada por até três turnos, ganhando +1 VEL e dano a cada turno carregado (mas resultando em Movimento Um) e reduzindo, enquanto carregada, os três modificadores das manobras utilizadas em 1" },
	"Rear Crush": { Tecnica: "Esportes", ModVel: 1, ModDano: 2, ModMov: 1, FdV: 1, Sistema: "Não é afetada por agachamentos, mas os afeta; lutador ganha 1 ponto temporário de Glória; caso a vítima seja atordoada ou nocauteada pelo golpe, ela perde 1 ponto temporário de Glória" },
	"Web Spin": { Tecnica: "Esportes", ModVel: 1, ModDano: "+0", ModMov: 3, Chi: 1, FdV: 1, Sistema: "Absorve com Raciocínio. Causa Dizzy, sem dano real." },
	"Hyper Tackle": { Tecnica: "Esportes", ModVel: -1, ModDano: 4, ModMov: "+0", Sistema: "Linha reta. Tem de entrar no hex. Acerta todos até o fim do movimento. -1 Mov por cada impacto." },
	"Shadow Shoulder": { Tecnica: "Esportes", ModVel: -1, ModDano: 3, ModMov: 2, Chi: 1, Sistema: "Causa KD; Agachamento ignora; Deve entrar no hex do oponente;" },
	//Foco
	"Acid Breath": { Tecnica: "Foco", ModVel: -2, ModDano: 3, ModMov: -1, Chi: 1, Alcance: "Vigor", Sistema: "linha de visão; causa +3 DAN imediatamente; no fim do próximo, caso o ácido não seja removido, role agora com +0, e no fim de 2 turnos de espera com -3" },
	"Chi Kun Healing": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Sistema: "Restaura 1 Saúde/ponto de Chi, até um máximo de (Foco do lutador) por turno; pode ser usado em outros no mesmo hex" },
	"Cobra Charm": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Alcance: "Três", Sistema: "precisa olhar nos olhos do alvo; atacante precisa vencer uma disputa de Raciocínio + Mistérios para encantar o alvo; o alvo pode quebrar o controle vencendo um teste de Inteligência como em um Sustentado; o encantador só pode usar manobras de movimento sem se afastar mais de 3 hex e pode dar comandos simples para o alvo" },
	"Extendible Limbs": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Combinado com socos e chutes básicos para adicionar 1 hex de Alcance/Foco; Oponentes podem atingir qualquer parte do membro estendido" },
	"Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 2, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "linha de visão" },
	"Flying Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 2, ModMov: 0, Chi: 1, FdV: 1, Alcance: "Raciocinio+Foco", Sistema: "linha de visão; Não pode ser esquivada com Jump" },
	"Ghost Form": { Tecnica: "Foco", ModVel: 1, ModMov: 0, Chi: 2, Sistema: "2 Chi 1º turno e 1 Chi nos turnos subsequentes; o lutador fica insubstancial" },
	"Ice Blast": { Tecnica: "Foco", ModVel: -2, ModDano: 3, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "linha de visão; se sofrer dano, a vítima é congelada até ser atingida ou conseguir acumular 4 sucessos em um teste prolongado de Força (teste no final de cada turno)" },
	"Improved Fireball": { Tecnica: "Foco", ModVel: -1, ModDano: 4, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "linha de visão, KD" },
	"Inferno Strike": { Tecnica: "Foco", ModVel: -2, ModDano: 4, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "hex linha de visão; afeta o hex alvo e todos os adjacentes" },
	"Mind Reading": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "usuário declara o alvo de Mind Reading e precisa vencer uma disputa de FV Permanente; se conseguir, o usuário pode ver 2 cartas de combate do alvo, uma deve ser jogada no próximo turno; as cartas devem ser mostradas entre os turnos" },
	"Musical Accompaniment": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Se sua música estiver tocando, ganha +1VEL, DAN ou MOV em cada turno" },
	"Regeneration": { Tecnica: "Foco", ModVel: 0, Chi: 1, Sistema: "Recupera 1 Saúde por Chi, até o máximo de Foco por turno" },
	"Repeating Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 0, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "linha de visão; produz uma Fireball por ponto de Foco; pode atingir diferentes inimigos; alvos que tentam esquivar de vários ataques devem testar para cada ataque separado" },
	"Shock Treatment": { Tecnica: "Foco", ModVel: 0, ModDano: 7, Chi: 2, Sistema: "Afeta todos os lutadores no mesmo ou adjacentes hex; KD a menos que estejam bloqueando; quando adquire decide se é Agachamento" },
	"Sonic Boom": { Tecnica: "Foco", ModVel: -3, ModDano: 4, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "linha de visão" },
	"Stunning Shout": { Tecnica: "Foco", ModVel: 2, ModMov: -2, Chi: 1, Sistema: "Afeta um alvo ou, a critério do Narrador, um grupo de pequeno; o atacante deve vencer uma disputa de FV Permanente; se o alvo não agiu neste turno, perderá sua ação; se já agiu, terá um redutor na VEL igual a diferença de que perdeu a disputa" },
	"Telepathy": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "personagem pode ligar (Foco) pessoas em comunicação telepática, para poderem conversar mentalmente" },
	"Thunderclap": { Tecnica: "Foco", ModVel: 0, ModDano: -3, Chi: 1, Alcance: "Três", Sistema: "Atinge todos em 3 hex em linha reta" },
	"Toughskin": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Jogado com qualquer outra carta; lutador ganha +2 na ABS neste turno" },
	"Yoga Flame": { Tecnica: "Foco", ModVel: -2, ModDano: 7, ModMov: "Um", Chi: 2, Alcance: "Dois", Sistema: "Afeta todos no hex adjacente e nos 3 posteriores a este; a chama dura até o fim do turno" },
	"Yoga Teleport": { Tecnica: "Foco", ModVel: 3, ModMov: "Especial", Chi: 2, Sistema: "O personagem desaparece, reaparecendo a qualquer momento do turno em qualquer lugar que esteja a (Inteligência + Foco) hex da posição original" },
	"Zen No Mind": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, Sistema: "Personagem seleciona outras 3 cartas, precisa esperar até o final do turno para escolher uma delas para jogar" },
	"Blind": { Tecnica: "Foco", ModVel: 0, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "atacante rola Inteligência+Foco VS. Vigor+Mistérios do alvo; Se ganhat, alvo é cegado; todo turno alvo rola Inteligência VS. Inteligência do atacante; Se vencer, escapa" },
	"Mind Control": { Tecnica: "Foco", ModVel: -3, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "alvo não pode ter mais FV; atacante precisa vencer uma disputa de Inteligência contra o alvo; a duração depende do nº de sucessos: 1 = 10 turnos, 2 = 1 hora, 3 = 1 dia, 4 = 1 semana, 5 = 1 mês; alvos controlados ordenados a agir contra seu código moral ou seu instinto de sobrevivência podem resistir ao comando se passarem num teste de Honra Permanente vs. FV do controlador; não afeta alvo com Honra Permanente em 10" },
	"Psycho Crusher": { Tecnica: "Foco", ModVel: -1, ModDano: 5, ModMov: 6, Chi: 2, Sistema: "O atacante pode mudar a direção, mantendo o mesmo plano, no meio do movimento, para atingir vários alvos; precisa entrar no hex do alvo; alvos que não estejam bloqueando sofrem +5 DAN, KD e caem em um hex adjacente (alvo escolhe), só podem ser atingidos uma vez; quem estiver bloqueando recua 1 hex (na direção do movimento) e sofre 1 dado de dano (Manobra termina se resultar em falha crítica), alvo pode ser atacado 5 vezes antes do atacante passar para trás dele e continuar seu movimento" },
	"Psychic Rage": { Tecnica: "Foco", ModVel: -2, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "atacante precisa vencer uma disputa de FV; se bem sucedido, o alvo só poderá usar Fierce, Roundhouse e suas Manobras Especiais que causem maior dano enquanto estiver em fúria; pode atacar amigos e aliados; entre os turnos o alvo pode tentar vencer uma disputa de FV vs. Manipulação do controlador para libertar-se; o alvo perde Honra pelas ações feitas sobre efeito do Psychic Rage" },
	"Psychic Vise": { Tecnica: "Foco", ModVel: 0, ModDano: 0, Chi: 1, FdV: 1, Alcance: "Raciocinio+Foco", Sistema: "o alvo absorve com Inteligência ao invés de Vigor, ignorando Bloqueios; o dano é retirado da FV do alvo e este terá um redutor na VEL no próximo turno igual ao dano; se o dano exceder a Inteligência do alvo, ele estará Dizzy; alvos sem FV ainda podem ser Dizzys e ter sua VEL reduzida" },
	"Psychokinetic Channeling": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Jogado com um soco ou chute básico; adiciona +2 no dano" },
	"Air Blast": { Tecnica: "Foco", ModVel: -1, ModDano: 3, Chi: 1, Alcance: "Inteligencia+Elemental", Sistema: "linha de visão; alvo precisa passar em um teste de Percepção + Luta às Cegas para perceber e interromper este ataque" },
	"Balance": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "O lutador ganha +1 MOV para Manobra Aérea; automático" },
	"Deaths Visage": { Tecnica: "Foco", ModVel: 1, Chi: 1, Sistema: "Todos no alcance de visão precisam vencer uma disputa de FdV vs. Manipulação + Foco do atacante ou irão para o mais longe possível do atacante; vítimas podem tentar novamente no final de cada turno; dura 3 turnos a menos que seja quebrado" },
	"Drain": { Tecnica: "Foco", ModVel: -1, ModDano: "Especial", ModMov: -1, Chi: 1, Sistema: "Testemunhas precisam passar num teste de Percepção + Mistérios para perceber (e tentar esquivar) do projétil; a vítima perde 1 de Saúde e terá -1 VEL e MOV no próximo turno" },
	"Drench": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: -2, Chi: 1, Alcance: "Inteligencia+Foco", Sistema: "" },
	"Elemental Skin": { Tecnica: "Foco", ModVel: -2, ModDano: "Especial", ModMov: "Especial", Chi: 1, FdV: 1, Sistema: "Funciona por (Foco) turnos; efeito varia de acordo com o tipo; Fogo = atacantes sofrem dano (Foco), como em Maka Wara, técnicas de Soco, Chute e Apresamento do elemental ganham +1 DAN; Água = qualquer dano sofrido é reduzido de 1; Ar = Aérea causam -2 DAN, dano de projétil é reduzido de 1; Terra = Socos e Chutes contra o elemental causam -2 DAN, não pode ser arremessado e nem afetado por KD" },
	"Elemental Stride": { Tecnica: "Foco", ModVel: 1, ModMov: "Especial", Chi: 1, Sistema: "O lutador pode desaparecer dentro do seu elemento e então reaparecer em outro hex com seu elemento a qualquer momento como Yoga Teleport; fora de combate, custa 1 Chi por hora, o elemental pode mover-se invisível no seu elemento à (Vigor + Foco) em milhas p/ hora" },
	"Entrancing Cobra": { Tecnica: "Foco", ModVel: 2, ModMov: -1, Chi: 1, Sistema: "O atacante precisa vencer uma disputa de Destreza + Foco vs. Raciocínio + Mistérios do alvo; se bem sucedido o alvo será Dizzy no próximo turno" },
	"Envelop": { Tecnica: "Foco", ModVel: -2, ModDano: 1, ModMov: -2, Chi: 1, Alcance: "Foco", Sistema: "linha de visão; Sustentado, usa Foco ao invés de Apresamento para duração máxima; a vítima precisa passar num teste de Vigor todo turno para não ser Dizzy; a vítima pode agir normalmente mas terá -2 MOV enquanto estiver presa; se a linha de visão for obstruída, o apresamento acaba; se 2 lutadores estiverem no mesmo hex, o ataque afetará ambos; +1 DAN no 1º turno e -1 nos demais" },
	"Fire Strike": { Tecnica: "Foco", ModVel: -1, ModDano: 3, Chi: 1, Alcance: "Foco", Sistema: "linha de visão; afeta todos (Foco) hex ao longo da linha; dura até o fim do turno" },
	"Flaming Fist": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Jogado com qualquer Soco Básico; adiciona +3 DAN" },
	"Flight": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Requer 1 turno de concentração, no qual o lutador só poderá bloquear; nos turnos seguintes o lutador estará flutuando, todas as manobras terão +1 VEL and MOV = Vigor, só pode ser atingido por Manobras Aérea e ataques de projétil; fora de combate, custa 1 chi/hora de vôo de (Foco + Destreza) x 10 milhas p/ hora" },
	"Heal": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Sistema: "O usuário pode curar-se ou a alguém no mesmo hex a 1 Chi por Saúde; também pode purificar um elemento por 1 Chi/5 cm³" },
	"Heat Wave": { Tecnica: "Foco", ModVel: 0, ModDano: 2, ModMov: 0, Chi: 1, Sistema: "Ignora bloqueio; pode ser esquivado como um projétil; dano conta somente para atordoar" },
	"Leech": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", Chi: 1, Sistema: "Atacante deve prender o alvo em um Sustentado antes; atacante pode passar 1 Saúde do alvo para si por ponto de Chi gasto, máximo de (Foco) pontos por turno; atacante não pode ter mais Saúde que o máximo" },
	"Lightness": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Pode ser usado no elemental ou outro alvo; o alvo ganha +2 VEL e +3 MOV para todas as manobras acrescidas por Jump; dura (Foco) turnos" },
	"Pit": { Tecnica: "Foco", ModVel: -1, ModDano: 1, ModMov: -1, Chi: 1, Sistema: "Cria no hex alvo um buraco com (5 + Foco) pés de profundidade; lutadores no buraco sofrem o dano pela queda no fim do turno e devem gastar o próximo turno subindo (Movimento com -4 VEL); o atacante precisa estar em contato com a terra; buracos são permanentes após criados; -1 Glória se usado em arena" },
	"Pool": { Tecnica: "Foco", ModVel: 1, ModMov: -2, Sistema: "Adquire imunidade a ataques físicos e a habilidade de escoar por frestas, etc.; alguns ataques de Foco podem afetar o lutador (Narrador decide)" },
	"Push": { Tecnica: "Foco", ModVel: -2, ModDano: 1, Chi: 1, Alcance: "Três", Sistema: "Afeta 3 hex a frente e (Foco) hex de lado; todos os lutadores na área são atingidos; todos recuam 1 hex por ponto de dano sofrido; KD vs. Aérea" },
	"Sakki": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "Personagem está a par do ataque surpresa e pode agir de acordo com esta informação; pode mover Foco + Esportes para evitar o ataque surpresa" },
	"Shrouded Moon": { Tecnica: "Foco", ModVel: 0, ModMov: -1, Chi: 1, Sistema: "Ninja fica invisível; atacante precisa vencer uma disputa de Percepção + Prontidão vs. Foco + Furtividade do ninja para percebê-lo; se não percebê-lo o ninja terá +1 VEL no próximo turno" },
	"Speed of the Mongoose": { Tecnica: "Foco", ModVel: 2, ModMov: -2, Chi: 1, Sistema: "Adiciona +4 VEL ou +6 MOV para a Manobra escolhida no próximo turno" },
	"Spontaneous Combustion": { Tecnica: "Foco", ModVel: 0, ModDano: 5, ModMov: -2, Chi: 2, Sistema: "Atacante precisa vencer uma disputa de Foco com o alvo; se vencer o alvo começa a pegar fogo; continua enquanto o elemental manter o efeito ou o alvo gastar um turno rolando no chão para apagar as chamas, neste turno terá -2 VEL; 1 Chi por turno para manter as chamas e dano +2 nos turnos seguintes" },
	"Stone": { Tecnica: "Foco", ModVel: -2, ModDano: "Especial", Chi: 1, Sistema: "Ataque de projétil; dano é Força + Foco" },
	"Vacuum": { Tecnica: "Foco", ModVel: -2, ModDano: 2, ModMov: -2, Chi: 1, Sistema: "Afeta todos no hex alvo; vítimas precisam passar em um teste de Vigor ou estarão automaticamente atordoadas no próximo turno; as vítimas podem interromper com uma Manobra mais rápida e saírem do hex; não afeta elementalistas do ar" },
	"Venom": { Tecnica: "Foco", ModVel: 1, ModDano: 2, ModMov: -2, Chi: 1, Sistema: "Efeitos retardados: pelos próximos 2 turnos o alvo perde 1 Saúde automático e tem -1 VEL" },
	"Wall": { Tecnica: "Foco", ModVel: -2, ModDano: 2, Alcance: "Percepcao+Foco", Sistema: "O personagem cria uma barreira em um hex; qualquer um que esteja no hex sofre o dano; a barreira pode ser contornada ou destruída, ela tem Vigor igual ao Antecedente Elemental e Saúde igual Foco do personagem" },
	"Weight": { Tecnica: "Foco", ModVel: -2, ModMov: -1, Chi: 1, Sistema: "Ataque de projétil; vítima atingida tem -2 VEL, -2 MOV e não usar Aérea no próximo turno" },
	"Chi Push": { Tecnica: "Foco", ModVel: -3, ModDano: "Especial", Chi: 2, Sistema: "Dano = Raciocínio + Foco +3 +1 por Chi extra, máximo de 2; opcionalmente pontos de dano podem forçar o alvo recuar 1 hex(1 dano/1 hex recuado); pode aumentar o alcance por -2 dano por hex; alvo pode adicionar +1 na ABS por 2 Chi gasto; não afeta quem estiver usando San He" },
	"Levitation": { Tecnica: "Foco", ModVel: 0, ModMov: "Especial", Chi: 1, Sistema: "Lutador pode se mover por Foco hex por turno em qualquer direção" },
	"Power Up": { Tecnica: "Foco", ModVel: 0, ModDano: "", ModMov: "", Chi: 1, Sistema: "+1Vel/Dano ou +1Vel/Abs ou +1Vel/Mov ou +1Dano/Alc ou +1Atri ou +1Habil próx turno" },
	"Accuracy": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Sistema: "dificuldade para esquivar de seus projétil +1" },
	"Mu no Hadou": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "+1Vel/Dano com Foco ou +1Abs/imune dizzy/imune telepatia neste turno" },
	"Banishing Flat": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -2, Chi: 1, Sistema: "Raciocínio, 2 sucessos, dissipa projétil" },
	"Ansatsuken": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, Sistema: "+3 Dano Agravado na Manobra Assassina, -1 Honra" },
	"Ashura Senku": { Tecnica: "Foco", ModVel: 3, ModMov: 2, Chi: 1, Sistema: "Lutador não pode ser atingido enquanto a executa" },
	"Chi Pull": { Tecnica: "Foco", ModVel: -2, ModDano: 8, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "Dano só para atordoar; ABS com Vigor, mas se ultrapassar o Vigor da vítima, ela estará atordoada; havendo sucesso vítima é atraída um número de hex igual ao Foco do atacante; vítima pode tentar resistir rolando sua Força contra o Foco do adversário" },
	"Chill Touch": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 2, Sistema: "Usado com qualquer Soco, Chute ou Apresamento básicos; adiciona os efeitos do Ice Blast e +2 de dano" },
	"Criminal Upper": { Tecnica: "Foco", ModVel: -1, ModDano: 4, ModMov: "Um", Chi: 1, Sistema: "KD; o oponente não pode Bloquear (só com San He)" },
	"Eletric Channeling": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 2, Sistema: "Adiciona +3 dano a Socos, Chutes e Apresamento básicos; afeta todos os alvos no hex à frente do lutador, e causa um KD a eles" },
	"Flaming Heel": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Adiciona +3 dano a Chutes básicos" },
	"Instant Hell Murder": { Tecnica: "Foco", ModVel: -3, ModDano: "Especial", ModMov: 2, Chi: 2, Sistema: "Funciona como Apresamento; é rolado um dano padrão de 15 um número de vezes igual ao Foco do atacante; oponente rola Raciocínio + Mistérios (dif. 10, reduzindo se já conhecer o golpe); cada sucesso permite evitar uma rolagem de dano, mas deve-se gastar 1 Chi a cada duas rolagens evitadas; não pode gastar mais Chi que o Foco; o usuário também é atacado, rolando Raciocínio + Mistérios (dif. 6, caindo conforme vá utilizando) e gastando Chi para não sofrer o próprio golpe; dano absorvido com Honra" },
	"Kubiori": { Tecnica: "Foco", ModVel: -1, ModDano: 4, ModMov: -1, Chi: 1, Sistema: "KD e empurra 1 hex; atacante deve entrar no hex da vítima" },
	"Raida": { Tecnica: "Foco", ModVel: 0, ModDano: 5, ModMov: -1, Chi: 1, Sistema: "KD e empurra 1 hex; atacante deve entrar no hex da vítima" },
	"Energy Ball": { Tecnica: "Foco", ModVel: 0, ModDano: "2/2", Chi: 1, Alcance: "Um", Sistema: "Dois hits" },
	"Soul Spiral": { Tecnica: "Foco", ModVel: 0, ModDano: "0/0/0", ModMov: -1, Chi: 1, Sistema: "Três Hits; KD" },
	"God Invocation": { Tecnica: "Foco", ModVel: -2, ModDano: "10", Chi: 2, Sistema: "Ignora bloqueio; Rola Carisma + Mistérios e compara com tabela; Não pode levar dano no turno de invocação ou perde a manobra" },
	"Dragon Attack": { Tecnica: "Foco", ModVel: -3, Chi: 2, Sistema: "Ver Manobra" },
	"Lightning": { Tecnica: "Foco", ModVel: -2, ModDano: 3, Chi: 1, Alcance: "Inteligencia+Foco", Sistema: "Projétil" },
	"Absorb Soul": { Tecnica: "Foco", ModVel: "Especial", Chi: 2, Sistema: "Ver Manobra" },
	"Metamorphose": { Tecnica: "Foco", ModVel: 1, ModMov: -2, Chi: 2, Sistema: "Ver Manobra" },
	"Determination": { Tecnica: "Foco", ModVel: "", ModDano: "", ModMov: "", FdV: 1, Sistema: "Permite usar sua manobra no mesmo turno em que ficou Dizzy, mas não no turno seguinte." },

	//Outros
	"Spinning Weapon": { Tecnica: "Bastão", ModVel: 0, ModDano: "1/1/1", ModMov: "Um", FdV: 1, Sistema: "Três Hits" },
};

const armas = {
	"Bazuca": { Tecnica: "Armas de Fogo", ModVel: -4, ModDano: 12, ModMov: "-", Sistema: "A explosão do míssil atinge todos dentro de uma área de 5 hex de raio. Recarregar uma bazuca requer um turno inteiro." },
	"Fuzil de Assalto": { Tecnica: "Armas de Fogo", ModVel: 1, ModDano: 6, ModMov: "-", Sistema: "" },
	"Pistola Pesada": { Tecnica: "Armas de Fogo", ModVel: 2, ModDano: 4, ModMov: "-", Sistema: "" },
	"Escopeta": { Tecnica: "Armas de Fogo", ModVel: 1, ModDano: 2, ModMov: "-", Sistema: "Acerta 2x" },
	"Fuzil": { Tecnica: "Armas de Fogo", ModVel: 0, ModDano: 5, ModMov: "-", Sistema: "" },
	"Pistola": { Tecnica: "Armas de Fogo", ModVel: 2, ModDano: 3, ModMov: "-", Sistema: "" },
	"Katar": { Tecnica: "Faca", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "" },
	"Machadinha": { Tecnica: "Faca", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "" },
	"Katar": { Tecnica: "Faca", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "" },
	"Bastão": { Tecnica: "Bastão", ModVel: 0, ModDano: 2, ModMov: 1, Sistema: "Duas Mãos" },
	"Chicote": { Tecnica: "Chicote", ModVel: -1, ModDano: 2, ModMov: 0, Sistema: "Alcance: 6 hex" },
	"Chicote de Aço": { Tecnica: "Chicote", ModVel: -1, ModDano: 3, Sistema: "Alcance: 3 hex" },
	"Corrente": { Tecnica: "Chicote", ModVel: 0, ModDano: 2, ModMov: -2, Sistema: "Alcance: 2 hex" },
	"Espada": { Tecnica: "Espada", ModVel: -1, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Variável" },
	"Faca": { Tecnica: "Faca", ModVel: 2, ModDano: 1, ModMov: 0, Sistema: "pode ser arremessada; ver descrição" },
	"Lança": { Tecnica: "Lança", ModVel: 0, ModDano: 3, ModMov: 1, Sistema: "Empunhadura: Variável" },
	"Kusari": { Tecnica: "Chicote", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Alcance: 2 hex" },
	"Kusarigama": { Tecnica: "Chicote", ModVel: 0, ModDano: 3, ModMov: -2, Sistema: "Alcance: 2 hex" },
	"Machado Curto": { Tecnica: "Machado", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "pode ser arremessada; ver descrição" },
	"Naginata": { Tecnica: "Lança", ModVel: 0, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Duas Mãos" },
	"Nunchaku": { Tecnica: "Mangual", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão" },
	"Katana": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "Empunhadura: Variável" },
	"Garra": { Tecnica: "Garra", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "" },
	"Tonfa de Ferro": { Tecnica: "Bastão", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Kunai": { Tecnica: "Arremesso", ModVel: 1, ModDano: -1, ModMov: -1, Sistema: "Alcance: Força + Arremesso." },
	"Espada Improvisada": { Tecnica: "Espada", ModVel: -2, ModDano: 3, ModMov: -1, Sistema: "" },
	"Espada Larga": { Tecnica: "Espada", ModVel: -2, ModDano: 5, ModMov: -1, Sistema: "Empunhadura: Duas Mãos." },
	"Bokken": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Shinai": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Espada Gancho": { Tecnica: "Espada", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "ver descrição" },
	"Ninjato": { Tecnica: "Espada", ModVel: 1, ModDano: 2, ModMov: 1, Sistema: "Empunhadura: Uma Mão." },
	"Pata": { Tecnica: "Espada", ModVel: -2, ModDano: 3, ModMov: 0, Sistema: "ver descrição" },
	"Rapier": { Tecnica: "Espada", ModVel: 2, ModDano: 1, ModMov: 1, Sistema: "Empunhadura: Uma Mão." },
	"Sabre": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Wakizashi": { Tecnica: "Faca", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Bastão Improvisado": { Tecnica: "Bastão", ModVel: -1, ModDano: 1, ModMov: -1, Sistema: "" },
	"Bo": { Tecnica: "Bastão", ModVel: 0, ModDano: 2, ModMov: 1, Sistema: "" },
	"Bastão Curto": { Tecnica: "Bastão", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "" },
	"Tonfa": { Tecnica: "Bastão", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "" },
	"Cacetete": { Tecnica: "Bastão", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "" },
	"Bagh Nakh": { Tecnica: "Faca", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "" },
	"Balisong": { Tecnica: "Faca", ModVel: 2, ModDano: 1, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Canivete": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Foice": { Tecnica: "Faca", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Faca de Combate": { Tecnica: "Faca", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Kris": { Tecnica: "Faca", ModVel: 2, ModDano: 3, ModMov: 0, Sistema: "" },
	"Navalha": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "" },
	"Faca Improvisada": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "" },
	"Sai": { Tecnica: "Faca", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "ver descrição" },
	"Shuriken": { Tecnica: "Arremesso", ModVel: 1, ModDano: -1, ModMov: -1, Sistema: "ver descrição" }
};

const valorFixoRegex = new RegExp("^(Um|Dois|Três|Quatro)$");

function estilizaSistema(sistema) {
	if (sistema.indexOf("Força") !== -1) sistema = sistema.replace("Força", "<a href='/post/forca' target='_blank'>Força</a>");
	if (sistema.indexOf("Destreza") !== -1) sistema = sistema.replace("Destreza", "<a href='/post/destreza' target='_blank'>Destreza</a>");
	if (sistema.indexOf("Vigor") !== -1) sistema = sistema.replace("Vigor", "<a href='/post/vigor' target='_blank'>Vigor</a>");
	if (sistema.indexOf("Carisma") !== -1) sistema = sistema.replace("Carisma", "<a href='/post/carisma' target='_blank'>Carisma</a>");
	if (sistema.indexOf("Manipulação") !== -1) sistema = sistema.replace("Manipulação", "<a href='/post/manipulacao' target='_blank'>Manipulação</a>");
	if (sistema.indexOf("Percepção") !== -1) sistema = sistema.replace("Percepção", "<a href='/post/percepcao' target='_blank'>Percepção</a>");
	if (sistema.indexOf("Inteligência") !== -1) sistema = sistema.replace("Inteligência", "<a href='/post/inteligencia' target='_blank'>Inteligência</a>");
	if (sistema.indexOf("Raciocínio") !== -1) sistema = sistema.replace("Raciocínio", "<a href='/post/raciocinio' target='_blank'>Raciocínio</a>");
	if (sistema.indexOf("Soco") !== -1) sistema = sistema.replace("Soco", "<a href='/post/soco' target='_blank'>Soco</a>");
	if (sistema.indexOf("Chute") !== -1) sistema = sistema.replace("Chute", "<a href='/post/chute' target='_blank'>Chute</a>");
	if (sistema.indexOf("Bloqueio") !== -1) sistema = sistema.replace("Bloqueio", "<a href='/post/bloqueio' target='_blank'>Bloqueio</a>");
	if (sistema.indexOf("Apresamento") !== -1) sistema = sistema.replace("Apresamento", "<a href='/post/apresamento' target='_blank'>Apresamento</a>");
	if (sistema.indexOf("Esportes") !== -1) sistema = sistema.replace("Esportes", "<a href='/post/esportes' target='_blank'>Esportes</a>");
	if (sistema.indexOf("Foco") !== -1) sistema = sistema.replace("Foco", "<a href='/post/foco' target='_blank'>Foco</a>");

	if (sistema.indexOf("KD") !== -1) sistema = sistema.replace("KD", "<a href='/post/knockdown' target='_blank'>KD</a>");
	if (/aérea/i.test(sistema)) sistema = sistema.replace(/aérea/i, "<a href='/post/manobra-aerea' target='_blank'>Aérea</a>");
	if (/agachamento/i.test(sistema)) sistema = sistema.replace(/agachamento/i, "<a href='/post/manobra-de-agachamento' target='_blank'>Agachamento</a>");
	if (sistema.indexOf("Sustentado") !== -1) sistema = sistema.replace("Sustentado", "<a href='/post/apresamento-sustentado' target='_blank'>Sustentado</a>");
	if (sistema.indexOf("Básica") !== -1) sistema = sistema.replace("Básica", "<a href='/post/manobras-basicas' target='_blank'>Básica</a>");
	if (sistema.indexOf("ABS") !== -1) sistema = sistema.replace("ABS", "<a href='/post/absorcao' target='_blank'>ABS</a>");
	if (sistema.indexOf("Dizzy") !== -1) sistema = sistema.replace("Dizzy", "<a href='/post/dizzy' target='_blank'>Dizzy</a>");
	if (/projétil/i.test(sistema)) sistema = sistema.replace(/projétil/i, "<a href='/post/manobra-de-projetil' target='_blank'>Projétil</a>");
	if (/dano agravado/i.test(sistema)) sistema = sistema.replace(/dano agravado/i, "<a href='/post/dano-agravado' target='_blank'>Dano Agravado</a>");
	if (/jump/i.test(sistema)) sistema = sistema.replace(/jump/i, "<a href='/post/jump' target='_blank'>Jump</a>");
	if (/chi/i.test(sistema)) sistema = sistema.replace(/chi/i, "<a href='/post/chi' target='_blank'>Chi</a>");
	if (/linha de visão/i.test(sistema)) sistema = sistema.replace(/linha de visão/i, "<a href='/post/linha-de-visao' target='_blank'>Linha de Visão</a>");
	return sistema;
}

function calculaAlcance(npc, manobra) {
	if (manobra.Alcance === null || manobra.Alcance === undefined) return "";
	if (valorFixoRegex.test(manobra.Alcance)) return manobra.Alcance;
	if (typeof manobra.Alcance === "number") return manobra.Alcance;
	if (manobra.Alcance.indexOf("+") !== -1) {
		const split = manobra.Alcance.split("+");
		return parseInt(npc[split[0].trim()]) + parseInt(npc[split[1].trim()]);
	}
	return parseInt(npc[manobra.Alcance]);
}

function calculaVelocidade(npc, manobra) {
	if (manobra.ModVel === null || manobra.ModVel === undefined || manobra.ModVel === "Especial") return "Esp.";
	const modAtributo = manobra.Tecnica === "Foco" ? npc.Raciocinio : npc.Destreza;
	const modVel = parseInt(manobra.ModVel);
	return modAtributo + modVel;
}

function calculaVelocidadeArmaFogo(npc, arma) {
	return npc.Raciocinio + parseInt(arma.ModVel);
}

function calculaDanoArmaFogo(npc, arma) {
	const modTecnica = getCaracteristica(npc.NovasTecnicas, arma.Tecnica);
	return modTecnica + parseInt(arma.ModDano);
}

function calculaVelocidadeArma(npc, arma, manobra) {
	return npc.Destreza + parseInt(manobra.ModVel) + parseInt(arma.ModVel);
}

function calculaAlcanceArma(arma) {
	return parseInt(arma.Alcance || 1);
}

function calculaDanoArma(npc, arma, manobra) {
	const modTecnica = getCaracteristica(npc.NovasTecnicas, arma.Tecnica || arma.Nome);

	if (typeof manobra.ModDano === "string" && manobra.ModDano.indexOf("/") !== -1) {
		const modDanos = manobra.ModDano.split("/");
		return modDanos.map(d => npc.Forca + modTecnica + arma.ModDano + parseInt(d)).reduce((a, b) => a + "/" + b);
	}

	return npc.Forca + modTecnica + arma.ModDano + parseInt(manobra.ModDano);
}

function calculaDano(npc, manobra) {
	if (manobra.ModDano === null || manobra.ModDano === undefined || manobra.ModDano === "Nenhum") return "-";
	if (manobra.ModDano === "Especial") return "Esp.";

	const modAtributo = manobra.Tecnica === "Foco" ? npc.Inteligencia : npc.Forca;
	const modTecnica = npc[manobra.Tecnica];

	if (modTecnica === undefined)
		return calculaDanoArma(npc, armas[manobra.Tecnica], manobra);

	if (typeof manobra.ModDano === "string" && manobra.ModDano.indexOf("/") !== -1) {
		const modDanos = manobra.ModDano.split("/");
		return modDanos.map(d => modAtributo + modTecnica + parseInt(d)).reduce((a, b) => a + "/" + b);
	}

	const modDano = parseInt(manobra.ModDano);
	return modAtributo + modTecnica + modDano;
}

function calculaMovimentoArma(npc, arma, manobra) {
	if (manobra.ModMov === null || manobra.ModMov === undefined || manobra.ModMov === "Nenhum" || arma.ModMov === null || arma.ModMov === undefined || arma.ModMov === "Nenhum") return "-";
	if (valorFixoRegex.test(manobra.ModMov) || valorFixoRegex.test(arma.ModMov)) return manobra.ModMov;

	const modMov = parseInt(manobra.ModMov);
	return npc.Esportes + modMov + parseInt(arma.ModMov);
}

function calculaMovimento(npc, manobra) {
	if (manobra.ModMov === null || manobra.ModMov === undefined || manobra.ModMov === "Nenhum") return "-";
	if (manobra.ModMov === "Especial") return "Esp.";
	if (valorFixoRegex.test(manobra.ModMov)) return manobra.ModMov;

	const modMov = parseInt(manobra.ModMov);
	return npc.Esportes + modMov;
}

function carregarTabela(npc) {

	const manobrasBasicas = ["Jab", "Strong", "Fierce", "Short", "Forward", "Roundhouse", "Apresamento", "Bloqueio", "Movimento"];

	let html = "";
	$.each(manobrasBasicas, function (i, v) {
		var manobra = manobras[v.trim()];
		html += "<tr><td>" + v.trim() + "</td>";
		html += "<td>" + calculaVelocidade(npc, manobra) + "</td>";
		html += "<td>" + calculaDano(npc, manobra) + "</td>";
		html += "<td>" + calculaMovimento(npc, manobra) + "</td>";
		html += "<td></td>";
		html += "<td></td>";
		html += "<td>" + estilizaSistema(manobra.Sistema) + "</td></tr>\r\n";
	});

	if (npc.Armas != null && npc.Armas != undefined) {
		$.each(npc.Armas, function (i, v) {
			const arma = armas[v.trim()];
			if (!arma) return alert("Arma " + v.trim() + " não encontrada!");

			const armasDeFogo = ["Armas de Fogo", "Pistola", "Metralhadora", "Fuzil", "Rifle"];
			if (armasDeFogo.includes(arma.Tecnica)) {
				html += "<tr><td>" + v.trim() + "</td>";
				html += "<td>" + calculaVelocidadeArmaFogo(npc, arma) + "</td>";
				html += "<td>" + calculaDanoArmaFogo(npc, arma) + "</td>";
				html += "<td>-</td>";
				html += "<td>-</td>";
				html += "<td></td>";
				html += "<td>" + arma.Sistema + "</td></tr>\r\n";
			}
			else {
				const manobrasComArmas = ["Jab", "Strong", "Fierce"];
				$.each(manobrasComArmas, function (i2, v2) {
					const manobra = manobras[v2.trim()];
					html += "<tr><td>" + v.trim() + " " + v2.trim() + "</td>";
					html += "<td>" + calculaVelocidadeArma(npc, arma, manobra) + "</td>";
					html += "<td>" + calculaDanoArma(npc, arma, manobra) + "</td>";
					html += "<td>" + calculaMovimentoArma(npc, arma, manobra) + "</td>";
					html += "<td>" + calculaAlcanceArma(npc, arma) + "</td>";
					html += "<td></td>";
					html += "<td>Básica. " + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
				});
			}
		});
	}

	if (npc.ManobrasEspeciais) {
		if (npc.ManobrasEspeciais.indexOf("Boxing Punches") !== -1)
			npc.ManobrasEspeciais += "Straight, Cross/Hook, Uppercut";

		$.each(npc.ManobrasEspeciais.split(',').sort(), function (i, v) {
			var manobra = manobras[v.trim().replace("-", " ")];
			html += "<tr><td>" + GeraHtmlLink(v.trim()) + "</td>";
			if (manobra == null || manobra == undefined) {
				html += "<td></td><td></td><td></td><td></td><td></td><td>Manobra não encontrada</td>";
			}
			else {
				html += "<td>" + calculaVelocidade(npc, manobra) + "</td>";
				html += "<td>" + calculaDano(npc, manobra) + "</td>";
				html += "<td>" + calculaMovimento(npc, manobra) + "</td>";
				html += "<td>" + calculaAlcance(npc, manobra) + "</td>";

				if (manobra.Chi || manobra.FdV) {
					html += "<td>";
					if (manobra.Chi > 0) html += " " + manobra.Chi + " Chi<br />";
					if (manobra.FdV > 0) html += " " + manobra.FdV + " FdV ";
					html += "</td>";
				} else {
					html += "<td></td>";
				}
				html += "<td>" + estilizaSistema(manobra.Sistema) + "</td></tr>\r\n";
			}
		});
	}

	if (npc.Combos) {
		html += "<tr><td><b>Combos:</b></td></tr>";
		html += "<tr><td colspan='7'>" + npc.Combos.replaceAll(";", ";<br />") + "</td></tr>";
	}

	return '<table id="tbCalculada" border=1><thead><tr style="font-weight:bold;background-color:Black;color:white;"><td width="30%">Manobra</td><td>Vel.</td><td>Dano</td><td>Mov.</td><td>Alc.</td><td>Custo</td><td>Especial</td></tr></thead><tbody>' + html + '</tbody></table>';
}

function getPCManobra(nome) {
	const manobra = manobras[nome];
	if (!manobra) return 1;//no mínimo cada manobra vale 1 PC

	const modificadores = manobra.ModVel + manobra.ModDano + manobra.ModMov + "";
	if (modificadores.toLowerCase() === "especialespecialespecial") return 1;

	const ModVel = parseInt(manobra.ModVel) || 0;
	let ModDano = parseInt(manobra.ModDano) || 0;

	if (/((2|dois) testes|duas vezes|toda vez que se move|sustentado)/gi.test(manobra.Sistema)) {//tratando impacto dinâmico e sustentado como 2 hits
		if (ModDano > 0)
			ModDano *= 2;
		else if (ModDano === 0)
			ModDano += 2;
		else
			ModDano += 1;
	}

	if (/(3|três) (testes|vezes)/gi.test(manobra.Sistema) || nome.indexOf("Repeating") !== -1) {
		if (ModDano > 0)
			ModDano *= 3;
		else if (ModDano === 0)
			ModDano += 3;
		else
			ModDano += 2;
	}

	//vantagens adicionam 1 ponto cada
	if (/(knockdown|KD)/gi.test(manobra.Sistema))
		ModDano += 1;
	if (/(área)/gi.test(manobra.Sistema))
		ModDano += 1;
	if (/(ignora)/gi.test(manobra.Sistema) || /bloqueio|apresamento/i.test(manobra.Tecnica))//apresamentos ignoram bloqueio, e bloqueio tem bonus de ABS
		ModDano += 1;
	if (/(aérea)/gi.test(manobra.Sistema)
		|| nome.indexOf("Air") !== -1
		|| /(alcance =|como jump|esquivar de projétil)/gi.test(manobra.Sistema))//manobra de projétil ou esquiva de projétil
		ModDano += 1;
	if (/(agachamento)/gi.test(manobra.Sistema))
		ModDano += 1;

	//gastos em chi e FdV são penalidades para manobra
	ModDano -= parseInt(manobra.Chi || 0) + parseInt(manobra.FdV || 0)

	let ModMov = 0;
	const modificadorMov = (manobra.ModMov + "").toLowerCase();
	if (modificadorMov === "nenhum") ModMov = -2;
	else if (modificadorMov === "um") ModMov = -1;
	else if (modificadorMov === "dois") ModMov = 0;
	else if (modificadorMov === "três") ModMov = 1;
	else ModMov = parseInt(modificadorMov) || 0;

	const total = ModVel + ModDano + ModMov;
	return total >= 1 ? total : 1;//no mínimo cada manobra vale 1 PC
}