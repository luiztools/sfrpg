//http://www.convertcsv.com/csv-to-json.htm
const manobras = {
	//básicas
	"Jab": { Tecnica: "Soco", ModVel: 2, ModDano: -1, ModMov: 0, Sistema: "Básica" },
	"Strong": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "Básica" },
	"Fierce": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -1, Sistema: "Básica" },
	"Short": { Tecnica: "Chute", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "Básica" },
	"Forward": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Básica" },
	"Roundhouse": { Tecnica: "Chute", ModVel: -2, ModDano: 4, ModMov: -1, Sistema: "Básica" },
	"Apresamento": { Tecnica: "Apresamento", ModVel: 0, ModDano: 0, ModMov: "Um", Vantagens: ["Ignora Bloqueio"], Sistema: "Básica. Ignora Bloqueio" },
	"Bloqueio": { Tecnica: "Bloqueio", ModVel: 4, Vantagens: ["Knockdown"], Sistema: "Básica. Interrupção. +2 Vel próx. turno. Impede KD." },
	"Movimento": { Tecnica: "Esportes", ModVel: 3, ModMov: 3, Sistema: "Básica" },
	"Berserk": { Tecnica: "Arma Branca", ModVel: -2, ModDano: 4, ModMov: -3, FdV: 1, Sistema: "Básica" },
	"Aparar": { Tecnica: "Arma Branca", ModVel: 4, Vantagens: ["Knockdown"], Sistema: "Básica. Interrupção. +2 Vel próx. turno. Impede KD." },
	"Desarmar": { Tecnica: "Arma Branca", ModVel: -1, Sistema: "Básica. Role FOR + Técnica - ABS do alvo para saber quantos hexes caiu a arma" },
	"Bite": { Tecnica: "Híbrido Animal", ModVel: 1, ModDano: 1, ModMov: -1, Sistema: "Básica de Híbrido Animal" },
	"Tail Slash": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "Básica de Híbrido Animal" },
	"Fin Slash": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "Básica de Híbrido Animal" },
	"Quill Sweep": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "Básica de Híbrido Animal" },
	"Tentacle Squeeze": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "Básica de Híbrido Animal" },
	"Claw": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 2, ModMov: 0, Sistema: "Básica de Híbrido Animal" },
	"Horn": { Tecnica: "Híbrido Animal", ModVel: 0, ModDano: 3, ModMov: -1, Sistema: "Básica de Híbrido Animal" },
	"Athletic": { Tecnica: "Tarkatan", ModVel: "Especial", ModDano: "Nenhum", ModMov: "Nenhum", Sistema: "Passiva Tarkatan: -2 de dificuldade para tarefas com Esportes, exceto dano" },

	//soco
	"Buffalo Punch": { Tecnica: "Soco", ModVel: -2, ModDano: 5, ModMov: "Um", Sistema: "" },
	"Bull Head": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: 1, FdV: 1, Vantagens: ["Knockdown", "Esquiva de Projétil"], Sistema: "Esquiva de projétil antes de iniciar o movimento; linha reta, KD; pode ser carregada por até 3 turnos, ganhando +1 VEL e dano a cada turno carregado (mas resultando em Movimento Um) e reduzindo, enquanto carregada, os três modificadores das manobras utilizadas em 1" },
	"Bull Horn": { Tecnica: "Soco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 1, Sistema: "Semelhante a Turn Punch. Ver descrição." },
	"Dashing Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 2, FdV: 1, Sistema: "" },
	"Dashing Uppercut": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 2, FdV: 1, Vantagens: ["Anti-Aérea"], Sistema: "KD vs. Aérea" },
	"Dim Mak": { Tecnica: "Soco", ModVel: 0, ModDano: 0, ModMov: 0, Chi: 1, Sistema: "Pode retardar o dano se desejado; -1 para qualquer atributo físico" },
	"Zan Ei": { Tecnica: "Soco", ModVel: 0, ModDano: 5, ModMov: 0, Chi: 2, Vantagens: ["Dano Agravado", "Move Depois"], Sistema: "Precisa de movimento para atravessar o hex do oponente e parar no mínimo 1 hex atrás dele; funciona como Dim Mak (pode retardar o dano; reduz Atributos Físicos, recuperados como Dano Agravado); manobra assassina, causa dano agravado; custa 1 Honra temporária e 1 permanente se matar" },
	"Dragon Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 6, ModMov: -2, FdV: 1, Vantagens: ["Anti-Aérea", "Esquiva de Projétil", "Knockback"], Desvantagens: ["Esquiva Condicional"], Sistema: "KD vs. Aérea; empurra 1 hex; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Ear Pop": { Tecnica: "Soco", ModVel: -1, ModDano: -4, ModMov: -1, Sistema: "Ignora o Vigor; -1 Honra por uso" },
	"Fist Sweep": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -2, Vantagens: ["Knockdown", "Agachamento"], Sistema: "Agachamento, KD" },
	"Flaming Dragon Punch": { Tecnica: "Soco", ModVel: -1, ModDano: "6/6", ModMov: -2, Chi: 1, FdV: 1, Vantagens: ["Knockdown", "Esquiva de Projétil", "Knockback"], Desvantagens: ["Ataque Condicional", "Esquiva Condicional"], Sistema: "KD e empurra 1 hex; Dois hits se alvo estiver adjacente (vc não se mover); pode esquivar de projétil mas não pode atacar quem lançou" },
	"Head Butt": { Tecnica: "Soco", ModVel: 0, ModDano: 3, ModMov: -2, Sistema: "" },
	"Jumping Hammer Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 1, FdV: 1, Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de Fireball como Jump; KD se causar dano" },
	"Electro Bolt": { Tecnica: "Foco", ModVel: 1, ModDano: 6, ModMov: "Nenhum", Chi: 1, Alcance: 5, Sistema: "Arco de eletricidade com alcance de até 5 hex. Exclusiva dos Robôs de Elite." },
	"Gore": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -4, Vantagens: ["Knockback"], Sistema: "Chifrada; se acertar, o oponente é arremessado 3 hex para trás. Exclusiva do touro Diablo." },
	"Hundred Hand Slap": { Tecnica: "Soco", ModVel: -2, ModDano: "0/0/0", ModMov: "Um", FdV: 1, Sistema: "Três hits" },
	"Hyper Fist": { Tecnica: "Soco", ModVel: 1, ModDano: "0/0/0", ModMov: "Um", FdV: 1, Sistema: "Três hits" },
	"Monkey Grab Punch": { Tecnica: "Soco", ModVel: -2, ModDano: 1, ModMov: 0, Vantagens: ["Ignora Bloqueio"], Sistema: "Ignora Bloqueio" },
	"Power Uppercut": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Anti-Aérea"], Sistema: "KD vs. Aérea" },
	"Shoot Upper": { Tecnica: "Soco", ModVel: 0, ModDano: "2/3", ModMov: -1, FdV: 1, Vantagens: ["Knockback"], Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits; Como Double Dread Kick, com dois testes de dano: o 1º, com +2 DAN, empurra o alvo 1 hex para trás, o atacante usa o resto do movimento para o 2º teste com +3; pode lançar o alvo ao ar com o 1º golpe para acertá-lo com o 2º" },
	"Rekka Ken": { Tecnica: "Soco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, PC: 3, Sistema: "Deve ser jogado com um Soco Básico, adiciona +3 na VEL; pode ser jogado por até 3 turnos consecutivos, somando para atordoar; mas neste caso deve se exibir após senão -3 Glória" },
	"Shockwave": { Tecnica: "Soco", ModVel: 0, ModDano: 0, Chi: 1, Vantagens: ["Knockdown", "Área"], Desvantagens: ["Não afeta Aérea"], Sistema: "Afeta (Força) hex em liha reta; todos os alvos na linha sofrem o dano e sofrem KD automático; não afeta lutadores que estão executando uma Aérea" },
	"Spinning Back Fist": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: 1, Sistema: "" },
	"Spinning Clothesline": { Tecnica: "Soco", ModVel: 0, ModDano: 0, ModMov: -2, FdV: 1, Vantagens: ["Área", "Impacto Dinâmico", "Knockback"], Desvantagens: ["Não afeta Agachamento"], Sistema: "Acerta todos os hex adjacentes, empurrando 1 hex; o lutador pode se mover e rolar o dano novamente, não afeta oponentes em Manobras de Agachamento" },
	"Spinning Knuckle": { Tecnica: "Soco", ModVel: -1, ModDano: "1/1", ModMov: 3, FdV: 1, Vantagens: ["Esquiva de Projétil"], Sistema: "Dois hits; esquiva de projétil" },
	"Triple Strike": { Tecnica: "Soco", ModVel: -2, ModDano: "Especial", Sistema: "Role 3 hits, use somente os dois maiores." },
	"Turbo Spinning Clothesline": { Tecnica: "Soco", ModVel: 1, ModDano: 0, ModMov: -1, FdV: 1, Vantagens: ["Área", "Impacto Dinâmico", "Knockback"], Desvantagens: ["Não afeta Agachamento"], Sistema: "Acerta todos os hex adjacentes, empurrando 1 hex; o lutador pode se mover e rolar o dano novamente, não afeta oponentes em Manobras de Agachamento" },
	"Turn Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: "Dois", FdV: 1, Sistema: "Gaste 1 FV no 1º turno; a carta pode ficar na mesa e ser jogada outras em conjunto (-1 nos três mods. enquanto ela estiver na mesa); turno 2: +1 dano; turno 3: +1 vel, +2 dano; turno 4 ou posterior: +2 vel, +3 dano" },
	"Ducking Fierce": { Tecnica: "Soco", ModVel: -1, ModDano: 4, Vantagens: ["Agachamento"], Sistema: "Agachamento" },
	"Elbow Smash": { Tecnica: "Soco", ModVel: 2, ModDano: 2, ModMov: "Um", Sistema: "" },
	"Boshi Ken": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: 0, Sistema: "Se bem sucedido, o alvo terá -1 MOV no próximo turno" },
	"Haymaker": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -2, Sistema: "" },
	"Shikan Ken": { Tecnica: "Soco", ModVel: 1, ModDano: 1, ModMov: 0, Vantagens: ["Anti-Aérea", "Knockback"], Sistema: "Se bem sucedido, o atacante deve vencer um disputa de FOR para empurrar alvo 1 hex; KD vs. Aérea" },
	"Shuto": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -2, Vantagens: ["Ignora Toughskin"], Sistema: "Ignora Toughskin, armaduras, etc.; contra um oponente sem armadura, causa +4 DAN" },
	"Widowmaker": { Tecnica: "Soco", ModVel: -3, ModDano: 5, ModMov: "Dois", Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil"], Desvantagens: ["Não afeta Aérea"], Sistema: "Se bem sucedido, o alvo sofre KD; não afeta lutadores em Aérea; Aérea; esquiva de projétil" },
	"Heart Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: -2, Desvantagens: ["Dano Dizzy", "Não entra em combo"], Sistema: "Dano somente para atordoar, não perde Saúde; não pode fazer parte de Combo Atordoante" },
	"Knife Hand Strike": { Tecnica: "Soco", ModVel: 1, ModDano: -1, ModMov: -1, Vantagens: ["Ignora Vigor"], Sistema: "Dano aplicado contra ½ do Vigor do alvo caso não esteja bloqueando" },
	"Lunging Punch": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 1, Vantagens: ["Ignora Bloqueio", "Agachamento"], Sistema: "Agachamento; apenas Kick Defense funciona" },
	"Dashing Clothesline": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: 2, FdV: 1, Vantagens: ["Knockdown"], Sistema: "KD" },
	"Houzantou": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: 1, FdV: 1, Vantagens: ["Knockdown", "Esquiva de Projétil"], Sistema: "Esquiva de projétil, KD" },
	"Jet Uppercut": { Tecnica: "Soco", ModVel: 1, ModDano: 5, ModMov: -3, FdV: 1, Vantagens: ["Anti-Aérea", "Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil como o Dragon Punch; KD vs. Aérea" },
	"Machine Gun Blow": { Tecnica: "Soco", ModVel: 0, ModDano: "0/0/0", ModMov: 2, FdV: 1, Sistema: "Três hits" },
	"Ressen Ha": { Tecnica: "Soco", ModVel: 0, ModDano: 5, ModMov: 0, Chi: 1, FdV: 1, Vantagens: ["Anti-Aérea"], Sistema: "KD contra Aérea" },
	"Shoouken": { Tecnica: "Soco", ModVel: -1, ModDano: 1, ModMov: 0, FdV: 2, Vantagens: ["Knockdown", "Knockback"], Sistema: "Linha reta; empurra o oponente para trás e segue acertando enquanto tiver movimento; após o último dano o oponente sofre um KD; só é considerada aérea após o rolamento do último dano" },
	"Senkju Tai": { Tecnica: "Soco", ModVel: 0, ModDano: 4, ModMov: 0, FdV: 1, Vantagens: ["Knockdown"], Sistema: "KD" },
	"Snake Strike": { Tecnica: "Soco", ModVel: 1, ModDano: "1/1/1", ModMov: -1, Vantagens: ["Aérea", "Esquiva de Projétil"], Desvantagens: ["Ataque Condicional"], Sistema: "Aérea, esquiva de projétil; oponente interrompido em uma Aérea sofre Três hits" },
	"Thunderbolt": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: -1, Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil"], Desvantagens: ["Mesmo Hex"], Sistema: "Aérea, esquiva de projétil, causa KD, tem de entrar no mesmo hex" },
	"Cross Counter": { Tecnica: "Soco", ModVel: 2, ModDano: 4, ModMov: "Dois", FdV: 1, Vantagens: ["Knockdown", "Ignora Vigor", "Knockback", "Move Depois"], Sistema: "Se o lutador é mais rápido que o oponente, ele deve esperar o seu ataque para acertá-lo logo em seguida, de modo que ele absorve com apenas metade do seu Vigor, empurrando um hex e causando KD; o lutador pode seguir se movimentando após o soco, mantendo-se próximo do oponente; se derrubado ou Dizzy, o atacante não prossegue com o Cross Counter; conta como Manobra de Bloqueio, com bônus de Bloqueio -2 na ABS; se atingir antes de receber o ataque, não empurra, não causa KD e não tem bônus; não há ganho de +2 VEL no próximo turno" },
	"Double Hit Punch": { Tecnica: "Soco", ModVel: -1, ModDano: "0/0", ModMov: -1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits; Oponentes aéreos ou agachados tomam apenas 1 hit" },
	"Burn Knuckle": { Tecnica: "Soco", ModVel: -1, ModDano: 5, ModMov: 3, Chi: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "Linha reta, causa KD" },
	"Boxing Punches": { Tecnica: "Soco", ModVel: "", ModDano: "", ModMov: "", Sistema: "3 novos socos básicos" },
	"Cross/hook": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: -1, Sistema: "Básica" },
	"Straight": { Tecnica: "Soco", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "Básica" },
	"Uppercut": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -1, Sistema: "Básica" },
	"Flicker Jab": { Tecnica: "Soco", ModVel: 3, ModDano: -1, ModMov: "Um", Alcance: 2, Sistema: "Alcance 2 hex" },
	"Rabbit Punch": { Tecnica: "Soco", ModVel: 1, ModDano: 1, ModMov: -1, Desvantagens: ["Mesmo Hex"], Sistema: "Tem de entrar no hex; ignora metade do ABS total, -1 Honra" },
	"White Fang": { Tecnica: "Soco", ModVel: 0, ModDano: "2/2", ModMov: "Um", FdV: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits. Agachados ou aéreos só levam um hit. Bloqueio só absorve um hit, exceto Punch Defense (sem o bônus)." },
	"Split Punch": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: "Nenhum", Vantagens: ["Ignora Vigor", "Agachamento"], Sistema: "Agachamento. Ignora Vigor se não bloquear. Dizzy se causar 1 dano. Perde Honra." },
	"Palm Press": { Tecnica: "Soco", ModVel: -2, ModDano: 5, ModMov: "Nenhum", Chi: 1, Vantagens: ["Knockdown", "Knockback"], Sistema: "Alcance 2. Se dano superar DES, causa KD e arremessa FOR hexes. Pode bloquear projéteis." },
	"Tameshiwari": { Tecnica: "Soco", ModVel: 1, ModDano: "", ModMov: "Um", Chi: 1, FdV: 1, Vantagens: ["Knockdown", "Knockback"], Sistema: "Tem de carregar por um turno. No seguinte, FOR + SOCO x 2 de dano, causa KD mesmo bloqueando, empurra FOR hexes" },
	"Reaping Palm": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: 1, FdV: 1, Vantagens: ["Knockdown", "Esquiva de Projétil"], Sistema: "anda linha reta, KD, esquiva projétil ao custo de 1 Chi adicional" },
	"Metsu Shoryuken": { Tecnica: "Soco", ModVel: 1, ModDano: 7, ModMov: -1, FdV: 1, Chi: 1, Vantagens: ["Anti-Aérea", "Esquiva de Projétil", "Dano Agravado"], Desvantagens: ["Ataque Condicional", "Esquiva Condicional"], Sistema: "KD vs. Aérea; empourra 1 hex; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva; Dano Agravado, -1 Honra; tem de estar com Satsui ativado mas não acumula os efeitos dele" },
	"Short Swing Blow": { Tecnica: "Soco", ModVel: -2, ModDano: 3, ModMov: "Dois/Um", Sistema: "anda dois hexes para esquivar, anda um para bater" },
	"Alacer Wrist": { Tecnica: "Soco", ModVel: 1, ModDano: 0, ModMov: 2, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Move Depois"], Sistema: "Aérea; esquiva de projétil como Jump; Linha Reta; o atacante pode fazer o ataque a qualquer momento e continuar o movimento" },

	//Chute
	"Air Hurricane Kick": { Tecnica: "Chute", ModVel: -1, ModDano: -1, ModMov: 1, Chi: 1, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Área", "Impacto Dinâmico"], Sistema: "Igual Hurricane Kick; salta sobre projéteis como Jump" },
	"Backflip Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: "Dois", Vantagens: ["Move Depois"], Sistema: "Mov para trás após dano" },
	"Double Dread Kick": { Tecnica: "Chute", ModVel: -2, ModDano: "1/4", ModMov: 1, FdV: 1, Vantagens: ["Knockback"], Desvantagens: ["Mesmo Hex", "Ataque Condicional"], Sistema: "Dois hits; dois testes de dano: o 1º, com +1 DAN, joga o alvo 1 hex para trás; o atacante deve mover-se para o hex do oponente e fazer o 2º ataque com +4; pode usar o 2º ataque se o alvo estiver a alcance" },
	"Sanren Geki": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1/4", ModMov: 1, FdV: 1, Chi: 1, Vantagens: ["Knockdown", "Knockback"], Desvantagens: ["Ataque Condicional"], Sistema: "Três hits; Como Double Dread Kick, mas com três chutes: dano rolado três vezes; cada um dos dois primeiros empurra 1 hex e o lutador acompanha; o último causa KD" },
	"Double Hit Kick": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1", ModMov: -1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits a menos que o alvo esteja em Aérea ou Agachamento" },
	"Double Hit Knee": { Tecnica: "Chute", ModVel: 0, ModDano: "0/0", ModMov: -2, Sistema: "Dois hits" },
	"Dragon Kick": { Tecnica: "Chute", ModVel: -1, ModDano: "6/6", ModMov: -2, Chi: 1, FdV: 1, Vantagens: ["Knockdown", "Esquiva de Projétil", "Área", "Knockback"], Desvantagens: ["Ataque Condicional", "Esquiva Condicional"], Sistema: "Dois hits; KD e joga todos os alvos 1 hex para trás; 2 testes vs. alvo que estiver no hex adjacente no começo do movimento; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Flash Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 7, Chi: 1, FdV: 1, Vantagens: ["Anti-Aérea", "Aérea"], Sistema: "Aérea; KD vs. Aérea" },
	"Flying Knee Thrust": { Tecnica: "Chute", ModVel: 1, ModDano: 2, ModMov: 1, FdV: 1, Vantagens: ["Anti-Aérea", "Aérea"], Sistema: "Aérea; KD vs. Aérea" },
	"Flying Thrust Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 6, ModMov: -2, FdV: 1, Vantagens: ["Anti-Aérea", "Esquiva de Projétil", "Knockback"], Desvantagens: ["Esquiva Condicional"], Sistema: "KD vs. Aérea; joga o alvo 1 hex para trás; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Flying Twin Kick": { Tecnica: "Chute", ModVel: 0, ModDano: "1/1", ModMov: 1, FdV: 1, Vantagens: ["Anti-Aérea", "Aérea", "Esquiva de Projétil"], Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits; KD vs. Aérea se causar dano; contra oponente em Agachamento, só um hit e sem KD; Aérea; esquiva de projétil como Jump" },
	"Two-Sided Jumping Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: -1, Vantagens: ["Anti-Aérea", "Aérea", "Esquiva de Projétil", "Área", "Knockback"], Sistema: "O lutador ocupa o hex central de uma linha reta de 3 hex, com um oponente em cada ponta, e o dano atinge os dois; KD vs. Aérea; oponentes no solo recuam 1 hex se falharem numa disputa de Força; Aérea após se posicionar; esquiva de projétil como Jump" },
	"Foot Sweep": { Tecnica: "Chute", ModVel: -2, ModDano: 3, ModMov: -2, Vantagens: ["Knockdown", "Agachamento"], Sistema: "Agachamento; KD" },
	"Kick Roll": { Tecnica: "Chute", ModVel: 1, ModDano: 2, ModMov: "Um", Vantagens: ["Agachamento"], Sistema: "Agachamento; rolamento para frente atacando com o pé" },
	"Forward Flip Knee": { Tecnica: "Chute", ModVel: -2, ModDano: 4, ModMov: "Dois", Vantagens: ["Aérea", "Anula Ataque"], Sistema: "Aérea; não esquiva de projétil; somente acerta alvos no mesmo e/ou adjacente hex; o atacante move-se para trás do alvo e rola o dano; se o alvo foi interrompido, perde o ataque" },
	"Great Wall Of China": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1/1", FdV: 2, Sistema: "Três hits, afeta 3 hex adjacentes e consecutivos" },
	"Handstand Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: -2, Vantagens: ["Anti-Aérea"], Sistema: "KD vs. Aérea" },
	"Hurricane Kick": { Tecnica: "Chute", ModVel: 0, ModDano: -1, ModMov: -1, Chi: 1, FdV: 1, Vantagens: ["Aérea", "Área", "Impacto Dinâmico", "Knockback"], Sistema: "Linha Reta; acerta todos os hex adjacentes e o mesmo hex, causando dano toda vez que se move; todos os alvos recuam um hex; Aérea" },
	"Lightning Leg": { Tecnica: "Chute", ModVel: -2, ModDano: "1/1/1", FdV: 1, Sistema: "Três hits" },
	"Slide Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 1, Vantagens: ["Knockdown"], Sistema: "KD a menos que o alvo esteja bloqueando, Agachamento" },
	"Spinning Foot Sweep": { Tecnica: "Chute", ModVel: -2, ModDano: 3, FdV: 1, Vantagens: ["Knockdown", "Agachamento"], Sistema: "Agachamento; KD a menos que o alvo esteja bloqueando" },
	"Stepping Front Kick": { Tecnica: "Chute", ModVel: 0, ModDano: "1/1", ModMov: 1, FdV: 1, Vantagens: ["Knockback"], Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits; o atacante se move para o hex do alvo para o 1º dano, forçando-o recuar um hex antes do 2º teste; só pode usar o 2º ataque se estiver a alcance" },
	"Whirlwind Kick": { Tecnica: "Chute", ModVel: -2, ModDano: 0, ModMov: -1, FdV: 2, Vantagens: ["Aérea", "Área", "Impacto Dinâmico", "Knockback"], Sistema: "Linha Reta; acerta todos os hex adjacentes e o mesmo hex, causando dano toda vez que se move; todos os alvos recuam um hex; Aérea" },
	"Wounded Knee": { Tecnica: "Chute", ModVel: -2, ModDano: 3, ModMov: -1, Sistema: "Alvo tem -2 VEL nos chutes -2 MOV em todas as manobras nos próximos 2 turnos se bem sucedido" },
	"Forward Slide Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: 0, Vantagens: ["Knockdown"], Sistema: "KD a menos que o alvo esteja bloqueando" },
	"Scissor Kick": { Tecnica: "Chute", ModVel: 0, ModDano: "3/3", ModMov: 3, FdV: 1, Vantagens: ["Aérea"], Sistema: "Dois hits; Aérea" },
	"Tiger Knee": { Tecnica: "Chute", ModVel: 3, ModDano: 2, ModMov: 0, FdV: 2, Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil"], Sistema: "KD; Aérea; esquiva de projétil" },
	"Ax Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: -2, Vantagens: ["Anti-Aérea", "Aérea", "Esquiva de Projétil", "Acerta Agachamento"], Desvantagens: ["Mesmo Hex"], Sistema: "Precisa entrar no hex do oponente; KD vs. Aérea; Acerta oponentes em Agachamento; Aérea; esquiva de projétil" },
	"Cartwheel Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 1, ModMov: 2, FdV: 1, Vantagens: ["Knockback"], Sistema: "Linha Reta; Dano = Força + Chute + 1 para cada hex que andou; o alvo recua 1 hex" },
	"Heel Stamp": { Tecnica: "Chute", ModVel: 2, ModDano: -4, ModMov: 1, Vantagens: ["Knockback", "Move Depois"], Sistema: "O atacante recua 1 hex após o dano, o alvo recua [(Força + Esportes do atacante) - Força do alvo] hex" },
	"Reverse Frontal Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: -1, Vantagens: ["Ignora Bloqueio"], Sistema: "Ignora bloqueios" },
	"Forward Backflip Kick": { Tecnica: "Chute", ModVel: 2, ModDano: "1/1", ModMov: "Dois", FdV: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits se o atacante interromper um alvo em Aérea" },
	"Bushin Hurricane Kick": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", Chi: 1, FdV: 1, Vantagens: ["Impacto Técnico", "Knockdown", "Área", "Knockback"], Sistema: "Todos ao redor são atingidos e empurrados para trás; oponentes no mesmo hex são puxados pelo golpe, podendo ser acertados até um número de vezes igual à Técnica Esportes do usuário; para cada novo ataque, devem ter sofrido dano no ataque anterior; KD no último acerto" },
	"Dankukyaku": { Tecnica: "Chute", ModVel: -1, ModDano: "0/2/4", ModMov: 2, FdV: 2, Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil", "Knockback"], Desvantagens: ["Ataque Condicional", "Esquiva Condicional"], Sistema: "Três hits; Aérea; esquiva de projétil como Jump (dif. 8); Linha Reta; como Double Dread Kick, cada chute empurra o oponente 1 hex para trás e o lutador acompanha; o último chute causa KD se causar dano" },
	"Dive Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 2, ModMov: -1, Vantagens: ["Aérea", "Esquiva de Projétil", "Acerta Agachamento"], Desvantagens: ["Mesmo Hex"], Sistema: "Aérea; esquiva de projétil; termina o ataque no hex do oponente; acerta oponentes em Agachamento" },
	"Power Kick": { Tecnica: "Chute", ModVel: -3, ModDano: 5, ModMov: "Dois", Vantagens: ["Knockdown", "Knockback"], Sistema: "Empurra 1 Hexágono para trás e causa KD em Manobras Aéreas" },
	"Soccer Kick": { Tecnica: "Chute", ModVel: -2, ModDano: 4, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "Causa KD se causar dano" },
	"Rhino Horn": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 3, FdV: 1, Vantagens: ["Aérea"], Sistema: "Aérea" },
	"Roundabout Kick": { Tecnica: "Chute", ModVel: -2, ModDano: 4, FdV: 1, Vantagens: ["Knockdown", "Aérea"], Sistema: "Acerta oponentes no mesmo hex ou adjacente igual à técnica Chute do lutador; causa KD; Aérea" },
	"Wheel Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 3, ModMov: 1, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea, esquiva de projétil" },
	"Gekiro": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", FdV: 2, Alcance: 0, Vantagens: ["Impacto Técnico", "Knockdown", "Aérea", "Esquiva de Projétil"], Sistema: "Mesmo hex; Hits = Esportes; Causa KD; Aérea; esquiva de projétil como Jump" },
	"Flamingo Stance": { Tecnica: "Chute", ModVel: "Especial", ModDano: "Nenhum", ModMov: "Especial", Sistema: "+1 Vel em chutes; Movimento vira Um ou 1/2 (Aéreas)" },
	"Bushin Sempu Kyaku": { Tecnica: "Chute", ModVel: 1, ModDano: -1, ModMov: "Um", Chi: 1, FdV: 1, Vantagens: ["Impacto Técnico", "Knockdown", "Aérea", "Esquiva de Projétil", "Área"], Desvantagens: ["Mesmo Hex"], Sistema: "Tem de entrar no hex. Acerta todos ao redor. Hits = Esportes. Se não causar dano, acaba. KD. Manobra Aérea; esquiva de projétil como Jump." },
	"Take Down": { Tecnica: "Chute", ModVel: "+0", ModDano: 2, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "Apresamento. KD." },
	"Flying Kick": { Tecnica: "Chute", ModVel: "+0", ModDano: 3, ModMov: 2, FdV: 1, Vantagens: ["Knockdown", "Aérea"], Sistema: "Aérea. KD." },
	"Bicycle Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 0, ModMov: 1, FdV: 1, Vantagens: ["Aérea", "Impacto Dinâmico", "Knockback"], Sistema: "Linha Reta; causando dano toda vez que entra no hex da vítima; o alvo recua um hex; Aérea" },
	"Somersault Kick": { Tecnica: "Chute", ModVel: -1, ModDano: "2/7", ModMov: "Um", Chi: 1, FdV: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits se não andar" },
	"Slash Kick": { Tecnica: "Chute", ModVel: -1, ModDano: 5, ModMov: 3, Chi: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "Linha reta, causa KD" },
	"Shadow Kick": { Tecnica: "Chute", ModVel: 0, ModDano: 4, ModMov: 2, Chi: 1, Vantagens: ["Knockdown"], Desvantagens: ["Não afeta Agachamento"], Sistema: "Causa KD. Não afeta agachamento." },
	"Rising Jaguar": { Tecnica: "Chute", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 2, Sistema: "Manobra fanmade removida. Muito roubada." },
	"Spin Kick": { Tecnica: "Chute", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, PC: 2, Sistema: "Deve ser jogado com um Chute Básico ou Foot Sweep (turno 2 ou 3), adiciona +2 na VEL; pode ser jogado por até 3 turnos consecutivos; se usar Foot Sweep, não pode usar de novo no turno seguinte;" },
	"Sonic Scythe": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: "Nenhum", Alcance: 2, Chi: 1, Sistema: "Alcance 2 hexes" },

	//bloqueio
	"Deflecting Punch": { Tecnica: "Soco", ModVel: 2, ModDano: 0, Sistema: "Bônus de BLOCK apenas para socos; Após a ABS faça um contra-soco (vs. qualquer ataque)" },
	"Energy Reflection": { Tecnica: "Bloqueio", ModVel: 1, Chi: 1, Sistema: "Cada projétil requer 2 sucessos num teste de Raciocínio; 1 Chi por projétil" },
	"Kick Defense": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "ABS+4 vs. Chute; -2 vs. outros" },
	"Maka Wara": { Tecnica: "Bloqueio", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Passiva no bloqueio, causa dano no atacante;" },
	"Missile Reflection": { Tecnica: "Bloqueio", ModVel: 3, ModMov: -1, Sistema: "DES para refletir projétil; armas de arremesso=1 sucesso; flechas=2; armas de fogo=3 e um pedaço de material; balas não podem ser refletidas no atirador" },
	"Punch Defense": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "ABS+4 vs. Soco; -2 vs. outros" },
	"San He": { Tecnica: "Bloqueio", ModVel: 2, Chi: 1, Sistema: "BlOCK x2 na ABS; não sofre KD e não pode ser forçado para fora do hex exceto por Apresamentos; o lutador não ganha +2 na VEL no próximo turno" },
	"Counter Attack": { Tecnica: "Bloqueio", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 1, Sistema: "Lutador deve jogar carta de Bloqueio junto com a carta da Manobra que ele usará após o Counter Attack, dentro de sua lista de manobras possíveis - pode escolher uma para cada 2 pontos em Bloqueio; o lutador terá -2 Absorção; após Bloquear a Manobra do oponente o personagem pode seguir com seu ataque; o personagem não ganha +2 de Velocidade no próximo turno ao usar o Counter Attack e ele não é uma Interrupção; personagem pode jogar Punch Defense usar o Counter Attack com uma Manobra de Soco, Absorvendo como nas regras do Punch Defense; o mesmo vale para Kick Defense com Chutes" },
	"Parry": { Tecnica: "Bloqueio", ModVel: 2, Sistema: "Usuário rola DES + BLOCK contra a Técnica da manobra do adversário; se bem-sucedido, evita todo o dano do ataque, adicionando também +1 Velocidade no próximo turno para cada sucesso a mais que tiver obtido (ao invés do +2 do Bloqueio comum); se falhar, recebe todo o dano do ataque; contra projétil, o Narrador pode pedir primeiro um teste de Raciocínio como no Energy Reflection; manobras mais poderosas - com custo em Força de Vontade – podem pedir mais de um sucesso para o Parry ser bem-sucedido; contra Manobras de Múltiplo Impacto, um teste deve ser feito a cada novo rolamento, a não ser por aquelas em que é preciso causar dano para empurrar e seguir batendo, nas quais o Parry as cancela imediatamente se o atacante for impedido de seguir se movendo; Parry bem-sucedido causa o dano do Maka Wara" },

	//apresamento
	"Air Suplex": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: 0, Vantagens: ["Knockdown", "Aérea"], Desvantagens: ["Ataque Condicional"], Sistema: "Precisa interromper uma Aérea do oponente; KD; Atacante e alvo terminam no hex da interrupção; Aérea" },
	"Air Throw": { Tecnica: "Apresamento", ModVel: 2, ModDano: 5, ModMov: 0, FdV: 1, Vantagens: ["Knockdown", "Aérea", "Knockback", "Move Depois"], Desvantagens: ["Ataque Condicional"], Sistema: "Precisa interromper uma Aérea do oponente; KD; o alvo pode ser arremessado a 3 hex do atacante; atacante termina seu movimento após o ataque; Aérea" },
	"Air Baton Throw": { Tecnica: "Apresamento", ModVel: 2, ModDano: 5, ModMov: 0, FdV: 1, Vantagens: ["Knockdown", "Aérea", "Knockback"], Desvantagens: ["Ataque Condicional"], Sistema: "Precisa interromper uma Aérea do oponente; KD; o alvo pode ser arremessado a 3 hex do atacante; Aérea" },
	"Arm Wrist Lock": { Tecnica: "Apresamento", ModVel: 0, ModDano: 0, ModMov: "Dois", Vantagens: ["Knockdown", "Sustentado"], Desvantagens: ["Ataque Condicional"], Sistema: "Sustentado. KD. Somente pode ser usado no turno após bloquear soco ou chute e interrompendo o oponente." },
	"Back Breaker": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "KD" },
	"Argentine Back Breaker": { Tecnica: "Apresamento", ModVel: 0, ModDano: "2/0", ModMov: "Dois", FdV: 1, Vantagens: ["Knockdown", "Knockback"], Sistema: "Dois hits; Joga o oponente para cima, apara-o no ombro e depois o arremessa no chão a no máximo 3 hex; KD" },
	"Dark Spark": { Tecnica: "Apresamento", ModVel: -2, ModDano: "0/3", ModMov: "Nenhum", Chi: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits; Prende o alvo com o garrote e o eletrifica: dois testes de dano em sequência, o 1º com Força + Apresamento e o 2º com Inteligência + Cibernético +3; se o 1º não causar dano, o 2º não é rolado; aplica os modificadores de VEL e DAN do Garrote (no 1º dano)" },
	"Back Roll Throw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Vantagens: ["Knockdown", "Knockback"], Sistema: "O alvo é arremessado a FOR + CHUT hex; KD" },
	"Baton Throw": { Tecnica: "Apresamento", ModVel: -3, ModDano: 2, ModMov: "Um", Vantagens: ["Knockdown", "Knockback"], Sistema: "O alvo é arremessado a (FOR) hex; KD" },
	"Bear Hug": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Brain Cracker": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Bushin Musou Renge": { Tecnica: "Apresamento", ModVel: -2, ModDano: "4/4/4", ModMov: "Um", Chi: 1, FdV: 1, Sistema: "Três hits baseado em Soco, Chute ou Apresamento; oponente absorve com Honra" },
	"Choke Throw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: 0, Vantagens: ["Knockdown"], Sistema: "Pode interromper oponente em pé ou em Aérea; atacante e alvo terminam no mesmo hex; KD" },
	"Block And Grab": { Tecnica: "Apresamento", ModVel: 3, ModDano: 2, ModMov: "Um", FdV: 1, Vantagens: ["Knockdown"], Sistema: "Bloqueio normal (adiciona Bloqueio na ABS e evita KD); após sofrer o dano, se não ficar Dizzy, agarra o membro do oponente e pode seguir com Throw usando estes modificadores (só então gasta FdV e aplica o dano); só contra Soco e Chute; Esportes e Foco são bloqueados mas não contra-atacados; Apresamento não é bloqueado; não funciona contra manobras agachadas" },
	"Clinch": { Tecnica: "Apresamento", ModVel: 2, ModDano: 0, ModMov: "Um", Vantagens: ["Anula Ataque"], Sistema: "Não causa dano real, apenas anula manobra do oponente se agarrar. +1 Vel em apresamentos no próximo turno." },
	"Daikyou Burning": { Tecnica: "Soco", ModVel: 0, ModDano: -1, ModMov: "Um/-2", FdV: 2, Vantagens: ["Knockdown", "Impacto Dinâmico"], Desvantagens: ["Ataque Condicional"], Sistema: "Só contra vítima em Knockdown ou Atordoada; entra no hex da vítima e a arrasta com o 2º modificador de Movimento; rola o dano a cada hex arrastado; dano calculado com Soco (punhos ou arma); KD no final" },
	"Disengage": { Tecnica: "Apresamento", ModVel: 1, ModMov: -2, Sistema: "Jogado quando estiver preso em Sustentado; o lutador pode fazer um 2º teste para sair do apresamento (Destreza vs. Força do atacante)" },
	"Dislocate Limb": { Tecnica: "Apresamento", ModVel: -1, ModDano: 1, ModMov: 1, Sistema: "O alvo tem -3 VEL para todas as Manobras; Socos do alvo tem também -2 no DAN. Alvo pode recolocar o braço no lugar, perdendo um turno." },
	"Displacement": { Tecnica: "Soco", ModVel: 2, ModDano: -1, ModMov: 1, FdV: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Precisa interromper um ataque; o lutador move-se para um dos lados esquivando do ataque e deve mover-se para o alvo à alcance de seu contra-soco" },
	"Elemental Rage": { Tecnica: "Apresamento", ModVel: 0, ModDano: 3, ModMov: "Um", Chi: 1, Vantagens: ["Knockdown"], Sistema: "Dano igual a Inteligência + Apresamento +3; se causar dano, KD; ignora Grappling Defense" },
	"Eye Rake": { Tecnica: "Apresamento", ModVel: -2, ModDano: -3, ModMov: 0, Sistema: "Se funcionar, alvo deve rolar Percepção + Luta às Cegas, se falhar estará Dizzy no próximo turno; -1 Honra; em torneios -1 Glória também" },
	"Face Slam": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "KD" },
	"Flying Tackle": { Tecnica: "Apresamento", ModVel: -1, ModDano: 0, ModMov: 2, Vantagens: ["Knockdown"], Sistema: "Atacante e alvo sofrem KD se nenhum dano for causado; ambos voam por 2 hex a partir do hex do oponente; +2 VEL na próxima manobra se ela for um Apresamento" },
	"Grappling Defense": { Tecnica: "Apresamento", ModVel: 4, ModMov: -1, Sistema: "Adiciona a técnica APRE ao VIG para absorver Apresamentos" },
	"Hair Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 5, ModMov: "Dois", Vantagens: ["Knockdown", "Knockback", "Move Depois"], Sistema: "Deve entrar no hex do alvo e atravessá-lo; o alvo é jogado (FOR do atacante) hex na linha do movimento; KD" },
	"Head Bite": { Tecnica: "Apresamento", ModVel: 1, ModDano: 3, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Head Butt Grab Attack": { Tecnica: "Soco", ModVel: -1, ModDano: 4, ModMov: "Um", Sistema: "Apresamento; -2 Vel no próx. turno do oponente se causar dano" },
	"Head Butt Hold": { Tecnica: "Soco", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Improved Pin": { Tecnica: "Apresamento", ModVel: 0, ModDano: 2, ModMov: 1, FdV: 1, Alcance: 1, Vantagens: ["Sustentado"], Sistema: "Sustentado; atinge mesmo hex ou adjacente; turnos subsequentes DAN +1 e MOV Dois; o atacante ganha +3 FOR para sustentar mas precisa causar 2 dano ao invés de 1" },
	"Iron Claw": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Jaw Spin": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 5, Chi: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Precisa sofrer um ataque mais lento antes de executar esta manobra" },
	"Knee Basher": { Tecnica: "Chute", ModVel: -1, ModDano: 4, ModMov: "Um", Vantagens: ["Knockdown", "Sustentado", "Knockback"], Sistema: "Sustentado; uma vez que o alvo é arremessado, ele é considerado KD" },
	"Power Bomb": { Tecnica: "Apresamento", ModVel: 0, ModDano: 6, ModMov: "Um", FdV: 1, Vantagens: ["Knockdown"], Sistema: "KD, vítima quica a até 2 hex de distância; o atacante escolhe a direção" },
	"Neck Choke": { Tecnica: "Apresamento", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Pile Driver": { Tecnica: "Apresamento", ModVel: -2, ModDano: 4, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "KD" },
	"Pin": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: 1, FdV: 1, Vantagens: ["Knockdown", "Sustentado"], Desvantagens: ["Ataque Condicional"], Sistema: "Sustentado; o alvo precisa estar KD ou Dizzy; turnos subsequentes DAN +0 e MOV Zero; o atacante ganha +3 FOR para sustentar mas precisa causar 2 dano ao invés de 1" },
	"Push Body": { Tecnica: "Apresamento", ModVel: 1, ModMov: "Um", Vantagens: ["Knockdown", "Knockback"], Sistema: "arremessa FOR + APR hexes e causa KD" },
	"Ripping Bite": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 1, ModMov: "Um", FdV: 1, Sistema: "Alvo tem -1 FOR e DES pelo resto do combate; pode ser usado várias vezes no mesmo alvo" },
	"Sean Tackle": { Tecnica: "Apresamento", ModVel: 1, ModDano: 3, ModMov: 2, FdV: 2, Vantagens: ["Knockdown", "Knockback"], Sistema: "KD e empurra um hex para trás" },
	"Siberian Bear Crusher": { Tecnica: "Apresamento", ModVel: 0, ModDano: 3, ModMov: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "KD; Aérea enquanto estiver sendo executado (após o movimento)" },
	"Siberian Suplex": { Tecnica: "Apresamento", ModVel: 0, ModDano: "2/2", ModMov: "Dois", FdV: 1, Vantagens: ["Knockdown"], Sistema: "KD; considere um Suplex feito imediatamente após outro num mesmo alvo numa mesma direção (Dois hits, mas move 1 hex depois)" },
	"Sleeper": { Tecnica: "Apresamento", ModVel: -1, ModDano: 2, ModMov: "Um", FdV: 1, Vantagens: ["Sustentado"], Sistema: "Sustentado; se o apresamento for mantido por 3 turnos o alvo é Dizzy" },
	"Soul Throw": { Tecnica: "Foco", ModVel: 0, ModDano: 4, ModMov: "Dois", Chi: 1, FdV: 1, Vantagens: ["Knockdown", "Knockback", "Move Depois"], Sistema: "Como Hair Throw: atravessa o hex do oponente e o arremessa; dano contra a Inteligência do alvo, em Força de Vontade em vez de Saúde; KD se houver ao menos 1 sucesso; Dizzy se o alvo perder mais FdV que sua Inteligência" },
	"Spinning Pile Driver": { Tecnica: "Apresamento", ModVel: -2, ModDano: 7, ModMov: "Dois", FdV: 2, Vantagens: ["Knockdown", "Esquiva de Projétil"], Sistema: "KD; o alvo cai a 3 hex após o impacto; Aérea enquanto estiver sendo executado (após o movimento); esquiva de projétil enquanto estiver sendo executado" },
	"Stomach Pump": { Tecnica: "Apresamento", ModVel: 0, ModDano: 4, ModMov: "Um", Vantagens: ["Sustentado"], Sistema: "Sustentado" },
	"Storm Hammer": { Tecnica: "Apresamento", ModVel: -2, ModDano: 7, ModMov: "Um", Vantagens: ["Knockdown", "Esquiva de Projétil"], Sistema: "KD; atacante e alvo terminam a 3 hex do hex do ataque; Aérea enquanto estiver sendo executado (após o movimento inicial); esquiva de projétil enquanto estiver sendo executado" },
	"Suplex": { Tecnica: "Apresamento", ModVel: 0, ModDano: 2, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "KD; o alvo cai no hex adjacente" },
	"Tearing Bite": { Tecnica: "Híbrido Animal", ModVel: 1, ModDano: 4, ModMov: "Um", Chi: 1, Vantagens: ["Knockback"], Sistema: "O dano é causado quando o alvo é arremessado a (FOR -1) hex na direção em que veio o ataque" },
	"Thigh Press": { Tecnica: "Apresamento", ModVel: -1, ModDano: 4, ModMov: "Um", Vantagens: ["Knockdown"], Sistema: "KD; o alvo termina no hex inicial da atacante; se ambos começaram no mesmo hex o atacante escolhe o hex adjacente em que o alvo cai" },
	"Throw": { Tecnica: "Apresamento", ModVel: -2, ModDano: 2, ModMov: "Um", Vantagens: ["Knockdown", "Knockback"], Sistema: "O alvo é arremessado a (FOR) hex; KD" },
	"Tornado Throw": { Tecnica: "Apresamento", ModVel: 0, ModDano: 6, ModMov: "Um", FdV: 1, Vantagens: ["Knockdown", "Knockback"], Sistema: "KD, arremessa em qualquer hex adjacente" },
	"Rising Storm Crow": { Tecnica: "Apresamento", ModVel: -3, ModDano: "Especial", ModMov: 2, FdV: 1, Vantagens: ["Knockdown", "Knockback"], Sistema: "Precisa se mover por pelo menos 2 hex para entrar no hex do alvo; 2 hits, o 1º de FOR -3 e o 2º de 2x FOR; o dano combina para atordoar; o alvo sofre KD e é arremessado na direção do movimento a (FOR do atacante) hex, mesmo se não sofrer dano" },

	//Esportes
	"Air Smash": { Tecnica: "Esportes", ModVel: -1, ModDano: 4, ModMov: -1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil; Linha Reta; o atacante termina o movimento no hex do alvo" },
	"Beast Roll": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: -2, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Move Depois"], Desvantagens: ["Mesmo Hex"], Sistema: "Aérea; esquiva de projétil;Linha Reta; 1º ataque move-se para trás, então reverte a direção para o 2º ataque; o atacante termina 2 hex na frente do 2º alvo; precisa entrar no hex de ambos os alvos; mov +2 para segundo ataque" },
	"Cannon Drill": { Tecnica: "Esportes", ModVel: 2, ModDano: 2, ModMov: 2, FdV: 1, Sistema: "linha reta" },
	"Charge": { Tecnica: "Esportes", ModVel: -2, ModDano: 3, ModMov: 1, Sistema: "Linha reta; o touro corre de cabeça baixa e termina o movimento no hex do alvo. Exclusiva do touro Diablo." },
	"Diving Hawk": { Tecnica: "Esportes", ModVel: 0, ModDano: 5, ModMov: 2, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil" },
	"Drunken Monkey Roll": { Tecnica: "Esportes", ModVel: 3, ModMov: 2, Vantagens: ["Esquiva de Projétil", "Agachamento"], Sistema: "Agachamento; esquiva de projétil" },
	"Flying Body Spear": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 1, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil; Linha Reta" },
	"Flying Head Butt": { Tecnica: "Esportes", ModVel: 0, ModDano: 4, ModMov: 3, FdV: 1, Vantagens: ["Aérea"], Sistema: "Aérea; Linha Reta" },
	"Flying Heel Stomp": { Tecnica: "Esportes", ModVel: 0, ModDano: 1, ModMov: 2, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Move Depois"], Sistema: "Aérea; esquiva de projétil; Linha Reta; o atacante pode fazer o ataque a qualquer momento e continuar o movimento" },
	"Multiple Stomp": { Tecnica: "Esportes", ModVel: -1, ModDano: "0/0/0", ModMov: -1, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Acerta Agachamento"], Sistema: "Três hits; Aérea; Linha Reta; dano rolado três vezes; esquiva de projétil como Jump; oponente em manobra de agachamento ainda é atingido pelo último chute" },
	"Jump": { Tecnica: "Esportes", ModVel: 3, ModMov: 0, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; Esquiva de projétil (Des + Esp vs. Foco); combina com chutes e socos básicos (use a VEL, DAN e MOV da manobra)" },
	"Double Jump": { Tecnica: "Esportes", ModVel: 3, ModMov: "+Foco", Chi: 1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Similar ao Jump: aérea, combina com básicas e esquiva de projétil (dificuldade 7 para o projétil acertar no teste de Foco); nunca é interrupção (abort); esquiva de Flying Fireball com dificuldade normal (6); Movimento = Esportes + Foco; salta 1 metro por ponto de Esportes + Foco" },
	"Ducking Blow": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: -1, Vantagens: ["Esquiva de Projétil"], Sistema: "Jogada com soco básico ou Power Uppercut, mantendo os modificadores dela, com -1 MOV e movimento em linha reta; esquiva de projétil como Jump, mas não é Aérea nem Agachamento" },
	"Jumping Shoulder Butt": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: -1, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil" },
	"Kippup": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Vantagens: ["Knockdown"], Sistema: "Passiva; o lutador sofre apenas -1 VEL após sofrer KD" },
	"Rolling Attack": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 4, FdV: 1, Vantagens: ["Aérea", "Move Depois"], Desvantagens: ["Mesmo Hex"], Sistema: "Aérea; Linha Reta; o atacante termina o movimento 2 hex na frente do alvo; precisa entrar no hex do alvo" },
	"Thunderstrike": { Tecnica: "Esportes", ModVel: 0, ModDano: 5, ModMov: -1, Vantagens: ["Move Depois"], Desvantagens: ["Mesmo Hex"], Sistema: "Precisa entrar no hex do alvo; Complete o movimento após o dano" },
	"Vertical Rolling Attack": { Tecnica: "Esportes", ModVel: 0, ModDano: 3, ModMov: 0, FdV: 1, Vantagens: ["Anti-Aérea", "Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil; KD vs. Aérea" },
	"Wall Spring": { Tecnica: "Esportes", ModVel: 2, ModMov: 0, Vantagens: ["Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil; o lutador pode pular em um obstáculo com +0 MOV, quando quica na direção oposta com +2; pode ser combinado com chutes e socos básicos (use o modificador de MOV do Wall Spring)" },
	"Backflip": { Tecnica: "Esportes", ModVel: 3, ModMov: 2, FdV: 1, Sistema: "Linha Reta; o lutador não pode ser atingido enquanto usa esta manobra, somente antes ou depois" },
	"Flying Punch": { Tecnica: "Esportes", ModVel: -2, ModDano: 2, ModMov: 5, FdV: 1, Vantagens: ["Aérea", "Ignora Vigor"], Desvantagens: ["Mesmo Hex"], Sistema: "Aérea; o atacante precisa mover 2 hex para trás do alvo e voltar para atingi-lo, reduz a metade (arredondado para baixo) o Vigor efetivo do alvo; -1 Honra por uso; não há perda de Honra ou Vigor se o ataque for frontal" },
	"Light Feet": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "+1 MOV passivo para todas manobras; pode gastar 1 FdV opcional para virar +3 MOV neste turno" },
	"Tumbling Attack": { Tecnica: "Esportes", ModVel: -1, ModDano: -1, ModMov: 0, FdV: 1, Vantagens: ["Agachamento", "Impacto Dinâmico", "Knockback", "Move Depois"], Desvantagens: ["Mesmo Hex"], Sistema: "Agachamento; Linha Reta; precisa entrar no hex do alvo; após o dano o alvo recua 1 hex; role o dano para cada hex que entrar e continue se movendo" },
	"Dragons Tail": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 5, ModMov: -2, Vantagens: ["Anti-Aérea", "Knockback"], Sistema: "KD vs. Aérea; oponentes em pé recuam 1 hex" },
	"Esquives": { Tecnica: "Esportes", ModVel: 2, ModMov: "Dois", Sistema: "Manobra de Interrupção, evita o ataque se for mais rápido" },
	"Pounce": { Tecnica: "Híbrido Animal", ModVel: -1, ModDano: 2, ModMov: 4, FdV: 1, Vantagens: ["Knockdown", "Aérea", "Esquiva de Projétil"], Sistema: "Aérea; esquiva de projétil; KD; ambos os lutadores terminam no mesmo hex" },
	"Tail Sweep": { Tecnica: "Esportes", ModVel: -1, ModDano: 1, Vantagens: ["Knockdown", "Agachamento", "Área"], Sistema: "KD; Agachamento; atinge todos os hex adjacentes" },
	"Typhoon Tail": { Tecnica: "Esportes", ModVel: -2, ModDano: 5, ModMov: 1, Chi: 1, FdV: 1, Vantagens: ["Aérea", "Esquiva de Projétil", "Área", "Knockback"], Sistema: "Aérea; não pode ser atingido por projétil enquanto executa esta manobra; o oponente no hex alvo sofre +5 DAN e é jogado 1 hex para trás; todos os lutadores nos hex adjacentes sofrem +2 DAN e são jogados 1 hex para trás" },
	"Upper Tail Strike": { Tecnica: "Esportes", ModVel: 1, ModDano: 2, ModMov: 1, Vantagens: ["Anti-Aérea"], Sistema: "KD vs. Aérea" },
	"Breakfall": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Rola DES + ESP quando sofrer Throw e outras projeções para reduzir dano" },
	"Ground Fighting": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "Após sofrer KD o lutador continua a lutar no chão; não pode usar Manobras Aéreas ou manobras que precisem estar de pé (Narrador decide); sem esta manobra os ataques feitos no chão terão -3 na VEL e DAN; ataques contra quem estiver usando esta manobra terão -2 na VEL e DAN, exceto Manobras de Agachamento e ataques rasteiros" },
	"Web Spin": { Tecnica: "Esportes", ModVel: 1, ModDano: 0, ModMov: 3, Chi: 1, FdV: 1, Sistema: "Absorve com Raciocínio. Causa Dizzy, sem dano real." },
	"Hyper Tackle": { Tecnica: "Esportes", ModVel: -1, ModDano: 4, ModMov: 1, FdV: 1, Vantagens: ["Knockdown"], Desvantagens: ["Mesmo Hex"], Sistema: "Linha reta. Tem de entrar no hex. Acerta todos até o fim do movimento. -1 Mov por cada impacto. KD. Crítico cancela." },
	"Spin": { Tecnica: "Esportes", ModVel: 1, ModDano: "-1/-1/-1", ModMov: "Nenhum", Chi: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "Causa KD; até Três hits;" },
	"Elemental Explosion": { Tecnica: "Esportes", ModVel: 0, ModDano: "-1/-1", ModMov: -2, Chi: 1, Vantagens: ["Knockdown"], Sistema: "Dois hits; Acerta duas vezes: o 1º com o corpo (Força + Esportes - 1) e o 2º com a energia (Inteligência + Foco - 1); KD se o 2º acerto causar dano; pode ser usada sem gastar Chi, mas causa apenas o 1º acerto" },
	"Shishiruirui": { Tecnica: "Esportes", ModVel: -1, ModDano: -1, ModMov: -1, FdV: 1, Vantagens: ["Knockdown", "Aérea", "Knockback"], Desvantagens: ["Ataque Condicional"], Sistema: "Aérea e tem de interromper aérea; Bate e empurra em linha reta; Causa KD no final" },
	"Empty Step": { Tecnica: "Esportes", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Passiva. Lutador pode atravessar hexes ocupados ou parcialmente bloqueados durante seu movimento." },

	//Foco
	"Acid Breath": { Tecnica: "Foco", ModVel: -2, ModDano: 3, ModMov: -1, Chi: 1, Alcance: "Vigor", Sistema: "linha de visão; causa +3 DAN imediatamente; no fim do próximo, caso o ácido não seja removido, role agora com +0, e no fim de 2 turnos de espera com -3" },
	"Acid Puke": { Tecnica: "Foco", ModVel: -2, ModDano: 4, ModMov: "Nenhum", Chi: 2, Alcance: "Um", Sistema: "causa +4 DAN imediatamente; no fim do próximo, caso o ácido não seja removido, role agora com +2, e no fim de 2 turnos de espera com +0" },
	"Chi Kun Healing": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Sistema: "Restaura 1 Saúde/ponto de Chi, até um máximo de (Foco do lutador) por turno; pode ser usado em outros no mesmo hex" },
	"Cobra Charm": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Alcance: "Três", Desvantagens: ["Ataque Condicional"], Sistema: "precisa olhar nos olhos do alvo; atacante precisa vencer uma disputa de Raciocínio + Mistérios para encantar o alvo; o alvo pode quebrar o controle vencendo um teste de Inteligência como em um Sustentado; o encantador só pode usar manobras de movimento sem se afastar mais de 3 hex e pode dar comandos simples para o alvo" },
	"Extendible Limbs": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Combinado com socos e chutes básicos para adicionar 1 hex de Alcance/Foco; Oponentes podem atingir qualquer parte do membro estendido" },
	"Final Wave": { Tecnica: "Foco", ModVel: -2, ModDano: 5, ModMov: "Nenhum", Chi: 2, Alcance: "Três", Vantagens: ["Knockdown", "Área"], Sistema: "Área circular de 3 hex de raio, centrada no próprio lutador ou num hex à frente a até 3 hex; atinge aliados e inimigos, menos o próprio lutador; KD se causar dano; -1 de dano por hex de distância do centro (+5 a +3)" },
	"Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 2, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "Linha de visão. Projétil." },
	"Flying Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 2, ModMov: 0, Chi: 1, FdV: 1, Alcance: "Raciocinio+Foco", Vantagens: ["Anti-Esquiva", "Aérea", "Esquiva de Projétil"], Sistema: "linha de visão; Não pode ser esquivada com Jump; Aérea (houserule), esquiva de projétil como Jump" },
	"Ghost Form": { Tecnica: "Foco", ModVel: 1, ModMov: 0, Chi: 2, Sistema: "2 Chi 1º turno e 1 Chi nos turnos subsequentes; o lutador fica insubstancial" },
	"Ice Blast": { Tecnica: "Foco", ModVel: -2, ModDano: 3, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "linha de visão; se sofrer dano, a vítima é congelada até ser atingida ou conseguir acumular 4 sucessos em um teste prolongado de FOR (teste no final de cada turno)" },
	"Improved Ice Blast": { Tecnica: "Foco", ModVel: -1, ModDano: 5, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "linha de visão; se sofrer dano, a vítima é congelada até ser atingida ou conseguir acumular 6 sucessos em um teste prolongado de FOR (teste no final de cada turno)" },
	"Improved Fireball": { Tecnica: "Foco", ModVel: -1, ModDano: 4, Chi: 1, Alcance: "Raciocinio+Foco", Vantagens: ["Knockdown"], Sistema: "Linha de visão, KD, projétil" },
	"Shinkuu Hadouken": { Tecnica: "Foco", ModVel: -2, ModDano: 5, ModMov: "Nenhum", Chi: 2, Alcance: "Raciocinio+Foco", Vantagens: ["Knockdown", "Área"], Sistema: "Projétil; linha de visão; atinge todos numa linha reta de Raciocínio + Foco hex; KD em quem sofrer dano sem estar bloqueando; para no primeiro alvo que bloquear ou obstáculo; não pode ser refletida com Energy Reflection, só desviada" },
	"Inferno Strike": { Tecnica: "Foco", ModVel: -2, ModDano: 4, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "hex linha de visão; afeta o hex alvo e todos os adjacentes" },
	"Mind Reading": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "usuário declara o alvo de Mind Reading e precisa vencer uma disputa de FV Permanente; se conseguir, o usuário pode ver 2 cartas de combate do alvo, uma deve ser jogada no próximo turno; as cartas devem ser mostradas entre os turnos" },
	"Musical Accompaniment": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Se sua música estiver tocando, ganha +1VEL, DAN ou MOV em cada turno" },
	"Regeneration": { Tecnica: "Foco", ModVel: 0, Chi: 1, Sistema: "Recupera 1 Saúde por Chi, até o máximo de Foco por turno" },
	"Repeating Fireball": { Tecnica: "Foco", ModVel: -2, ModDano: 0, Chi: 2, Alcance: "Raciocinio+Foco", Vantagens: ["Impacto Técnico"], Sistema: "linha de visão; produz uma Fireball por ponto de Foco; pode atingir diferentes inimigos; alvos que tentam esquivar de vários ataques devem testar para cada ataque separado" },
	"Shock Treatment": { Tecnica: "Foco", ModVel: 0, ModDano: 7, Chi: 2, Vantagens: ["Knockdown", "Área"], Sistema: "Afeta todos adjacentes; KD a menos que bloqueiem;" },
	"Sonic Boom": { Tecnica: "Foco", ModVel: -3, ModDano: 4, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "linha de visão" },
	"Sonic Barrage": { Tecnica: "Foco", ModVel: -3, ModDano: 2, ModMov: "Nenhum", Chi: 2, Alcance: "Raciocinio+Foco", Vantagens: ["Impacto Técnico"], Sistema: "Projétil; linha de visão; dispara (Foco - 1) Sonic Booms, que podem mirar oponentes diferentes; quem esquivar testa para cada um" },
	"Stunning Shout": { Tecnica: "Foco", ModVel: 2, ModMov: -2, Chi: 1, Vantagens: ["Anula Ataque"], Sistema: "Afeta um alvo ou, a critério do Narrador, um grupo de pequeno; o atacante deve vencer uma disputa de FV Permanente; se o alvo não agiu neste turno, perderá sua ação; se já agiu, terá um redutor na VEL igual a diferença de que perdeu a disputa" },
	"Telepathy": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 0, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "personagem pode ligar (Foco) pessoas em comunicação telepática, para poderem conversar mentalmente" },
	"Thunderclap": { Tecnica: "Foco", ModVel: 0, ModDano: -3, ModMov: "Nenhum", Chi: 1, Alcance: "Três", Sistema: "Área: atinge todos a até 3 hex do lutador" },
	"Toughskin": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 2, Sistema: "Passiva; +2 ABS neste turno" },
	"Yoga Flame": { Tecnica: "Foco", ModVel: -2, ModDano: 7, ModMov: "Um", Chi: 2, Alcance: "Dois", Vantagens: ["Área"], Sistema: "Afeta todos no hex adjacente e nos 3 posteriores a este; a chama dura até o fim do turno" },
	"Yoga Teleport": { Tecnica: "Foco", ModVel: 3, ModMov: "Especial", Chi: 2, Sistema: "O personagem desaparece, reaparecendo a qualquer momento do turno em qualquer lugar que esteja a (Inteligência + Foco) hex da posição original" },
	"Zen No Mind": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 1, Sistema: "Personagem seleciona 3 cartas, no final do turno escolhe uma delas para jogar" },
	"Blind": { Tecnica: "Foco", ModVel: 0, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "atacante rola Inteligência+Foco VS. Vigor+Mistérios do alvo; Se ganhat, alvo é cegado; todo turno alvo rola Inteligência VS. Inteligência do atacante; Se vencer, escapa" },
	"Mind Control": { Tecnica: "Foco", ModVel: -3, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "alvo não pode ter mais FV; atacante precisa vencer uma disputa de Inteligência contra o alvo; a duração depende do nº de sucessos: 1 = 10 turnos, 2 = 1 hora, 3 = 1 dia, 4 = 1 semana, 5 = 1 mês; alvos controlados ordenados a agir contra seu código moral ou seu instinto de sobrevivência podem resistir ao comando se passarem num teste de Honra Permanente vs. FV do controlador; não afeta alvo com Honra Permanente em 10" },
	"Psycho Crusher": { Tecnica: "Foco", ModVel: -1, ModDano: 5, ModMov: 6, Chi: 2, Vantagens: ["Knockdown", "Knockback", "Move Depois"], Desvantagens: ["Mesmo Hex"], Sistema: "O atacante pode mudar a direção, mantendo o mesmo plano, no meio do movimento, para atingir vários alvos; precisa entrar no hex do alvo; alvos que não estejam bloqueando sofrem +5 DAN, KD e caem em um hex adjacente (alvo escolhe), só podem ser atingidos uma vez; quem estiver bloqueando recua 1 hex (na direção do movimento) e sofre 1 dado de dano (Manobra termina se resultar em falha crítica), alvo pode ser atacado 5 vezes antes do atacante passar para trás dele e continuar seu movimento" },
	"Psychic Rage": { Tecnica: "Foco", ModVel: -2, Chi: 1, Alcance: "Raciocinio+Foco", Sistema: "atacante precisa vencer uma disputa de FV; se bem sucedido, o alvo só poderá usar Fierce, Roundhouse e suas Manobras Especiais que causem maior dano enquanto estiver em fúria; pode atacar amigos e aliados; entre os turnos o alvo pode tentar vencer uma disputa de FV vs. Manipulação do controlador para libertar-se; o alvo perde Honra pelas ações feitas sobre efeito do Psychic Rage" },
	"Awakening Blood": { Tecnica: "Foco", ModVel: 1, ModDano: "Nenhum", ModMov: "Nenhum", Chi: 1, Alcance: "Raciocinio+Foco", Desvantagens: ["Ataque Condicional"], Sistema: "Só pode ser usada em um portador do Sangue de Orochi; usa as regras do Psychic Rage, mas o alvo sofre os efeitos do sangue despertado em vez dos efeitos do Psychic Rage; em pessoas normais, causa os mesmos efeitos do Psychic Rage" },
	"Psychic Vise": { Tecnica: "Foco", ModVel: 0, ModDano: 0, Chi: 1, FdV: 1, Alcance: "Raciocinio+Foco", Sistema: "O alvo absorve com Inteligência ao invés de Vigor, ignorando Bloqueios; o dano é retirado da FV do alvo e este terá um redutor na VEL no próximo turno igual ao dano; se o dano exceder a Inteligência do alvo, ele estará Dizzy;" },
	"Brain Mulch": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", ModMov: "Nenhum", Chi: 1, Sistema: "Canto em área: atinge todos que puderem ouvir. Cada alvo testa Força de Vontade para resistir; quem falhar sofre 3 dados de dano. Custa 1 Chi por turno de canto." },
	"Psycho Shield": { Tecnica: "Foco", ModVel: 2, ModDano: "Nenhum", ModMov: "Nenhum", Chi: 1, Sistema: "Como Bloqueio, mas ABS = VIG + Foco/Psycho Power + 2; vale contra Apresamentos; não é Interrupção; +2 Vel na próxima manobra; dois turnos seguidos: maior velocidade automática, pagando o Chi; proteger outra pessoa adjacente: 1 FdV" },
	"Psychokinetic Channeling": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 2, Sistema: "Passiva com socos e chutes básicos; +2 DANO no turno" },
	"Air Blast": { Tecnica: "Foco", ModVel: -1, ModDano: 3, Chi: 1, Alcance: "Inteligencia+Elemental", Sistema: "linha de visão; alvo precisa passar em um teste de Percepção + Luta às Cegas para perceber e interromper este ataque" },
	"Balance": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "O lutador ganha +1 MOV para Manobra Aérea; automático" },
	"Deaths Visage": { Tecnica: "Foco", ModVel: 1, Chi: 1, Sistema: "Todos no alcance de visão precisam vencer uma disputa de FdV vs. Manipulação + Foco do atacante ou irão para o mais longe possível do atacante; vítimas podem tentar novamente no final de cada turno; dura 3 turnos a menos que seja quebrado" },
	"Drain": { Tecnica: "Foco", ModVel: -1, ModDano: "Especial", ModMov: -1, Chi: 1, Sistema: "Testemunhas precisam passar num teste de Percepção + Mistérios para perceber (e tentar esquivar) do projétil; a vítima perde 1 de Saúde e terá -1 VEL e MOV no próximo turno" },
	"Drench": { Tecnica: "Soco", ModVel: -1, ModDano: 2, ModMov: -2, Chi: 1, Alcance: "Inteligencia+Foco", Sistema: "" },
	"Elemental Skin": { Tecnica: "Foco", ModVel: -2, ModDano: "Especial", ModMov: "Especial", Chi: 1, FdV: 1, Vantagens: ["Knockdown"], Sistema: "Funciona por (Foco) turnos; efeito varia de acordo com o tipo; Fogo = atacantes sofrem dano (Foco), como em Maka Wara, técnicas de Soco, Chute e Apresamento do elemental ganham +1 DAN; Água = qualquer dano sofrido é reduzido de 1; Ar = Aérea causam -2 DAN, dano de projétil é reduzido de 1; Terra = Socos e Chutes contra o elemental causam -2 DAN, não pode ser arremessado e nem afetado por KD" },
	"Elemental Stride": { Tecnica: "Foco", ModVel: 1, ModMov: "Especial", Chi: 1, Sistema: "O lutador pode desaparecer dentro do seu elemento e então reaparecer em outro hex com seu elemento a qualquer momento como Yoga Teleport; fora de combate, custa 1 Chi por hora, o elemental pode mover-se invisível no seu elemento à (Vigor + Foco) em milhas p/ hora" },
	"Entrancing Cobra": { Tecnica: "Foco", ModVel: 2, ModMov: -1, Chi: 1, Sistema: "O atacante precisa vencer uma disputa de Destreza + Foco vs. Raciocínio + Mistérios do alvo; se bem sucedido o alvo será Dizzy no próximo turno" },
	"Envelop": { Tecnica: "Foco", ModVel: -2, ModDano: 1, ModMov: -2, Chi: 1, Alcance: "Foco", Vantagens: ["Sustentado"], Sistema: "linha de visão; Sustentado, usa Foco ao invés de Apresamento para duração máxima; a vítima precisa passar num teste de Vigor todo turno para não ser Dizzy; a vítima pode agir normalmente mas terá -2 MOV enquanto estiver presa; se a linha de visão for obstruída, o apresamento acaba; se 2 lutadores estiverem no mesmo hex, o ataque afetará ambos; +1 DAN no 1º turno e -1 nos demais" },
	"Fire Strike": { Tecnica: "Foco", ModVel: -1, ModDano: 3, Chi: 1, Alcance: "Foco", Vantagens: ["Área"], Sistema: "linha de visão; afeta todos (Foco) hex ao longo da linha; dura até o fim do turno" },
	"Flaming Fist": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 3, Sistema: "Jogado com qualquer Soco Básico; adiciona +3 DAN" },
	"Freeze Strike": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 2, PC: 2, Sistema: "Jogado com qualquer Soco, Chute ou Apresamento Básico; adiciona +2 DAN; se sofrer dano, a vítima é congelada até ser atingida ou conseguir acumular 4 sucessos em um teste prolongado de FOR (teste no final de cada turno)" },
	"Flight": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 1, Desvantagens: ["Concentração"], Sistema: "Requer 1 turno de concentração, no qual o lutador só poderá bloquear; nos turnos seguintes o lutador estará flutuando, todas as manobras terão +1 VEL and MOV = Vigor, só pode ser atingido por Manobras Aérea e ataques de projétil; fora de combate, custa 1 chi/hora de vôo de (Foco + Destreza) x 10 milhas p/ hora" },
	"Heal": { Tecnica: "Foco", ModVel: -1, ModMov: -1, Chi: 1, Sistema: "O usuário pode curar-se ou a alguém no mesmo hex a 1 Chi por Saúde; também pode purificar um elemento por 1 Chi/5 cm³" },
	"Heat Wave": { Tecnica: "Foco", ModVel: 0, ModDano: 2, ModMov: 0, Chi: 1, Alcance: "Raciocínio+Foco", Vantagens: ["Ignora Bloqueio"], Desvantagens: ["Dano Dizzy"], Sistema: "Ignora bloqueio; pode ser esquivado como um projétil; dano conta somente para atordoar" },
	"Leech": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", Chi: 1, Desvantagens: ["Ataque Condicional"], Sistema: "Atacante deve prender o alvo em um Sustentado antes; atacante pode passar 1 Saúde do alvo para si por ponto de Chi gasto, máximo de (Foco) pontos por turno; atacante não pode ter mais Saúde que o máximo" },
	"Lightness": { Tecnica: "Foco", ModVel: 1, ModDano: "Nenhum", ModMov: 1, Alcance: "Raciocínio+Foco", Chi: 1, Sistema: "Pode ser usado no elemental ou outro alvo; o alvo ganha +2 VEL e +3 MOV para todas as manobras acrescidas por Jump; dura (Foco) turnos" },
	"Pit": { Tecnica: "Foco", ModVel: -1, ModDano: 1, ModMov: -1, Chi: 1, Alcance: "Raciocínio+Foco", Desvantagens: ["Ataque Condicional"], Sistema: "Cria no hex alvo um buraco com (5 + Foco) pés de profundidade; lutadores no buraco sofrem o dano pela queda no fim do turno e devem gastar o próximo turno subindo (Movimento com -4 VEL); o atacante precisa estar em contato com a terra; buracos são permanentes após criados; -1 Glória se usado em arena" },
	"Pool": { Tecnica: "Foco", ModVel: 1, ModMov: -2, Sistema: "Adquire imunidade a ataques físicos e a habilidade de escoar por frestas, etc.; alguns ataques de Foco podem afetar o lutador (Narrador decide)" },
	"Push": { Tecnica: "Foco", ModVel: -2, ModDano: 1, Chi: 1, Alcance: "Três", Vantagens: ["Anti-Aérea", "Área", "Knockback"], Sistema: "Afeta 3 hex a frente e (Foco) hex de lado; todos os lutadores na área são atingidos; todos recuam 1 hex por ponto de dano sofrido; KD vs. Aérea" },
	"Sakki": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "Personagem está a par do ataque surpresa e pode agir de acordo com esta informação; pode mover Foco + Esportes para evitar o ataque surpresa" },
	"Shrouded Moon": { Tecnica: "Foco", ModVel: 0, ModMov: -1, Chi: 1, Sistema: "Ninja fica invisível; atacante precisa vencer uma disputa de Percepção + Prontidão vs. Foco + Furtividade do ninja para percebê-lo; se não percebê-lo o ninja terá +1 VEL no próximo turno" },
	"Speed Of The Mongoose": { Tecnica: "Foco", ModVel: 2, ModMov: -2, Chi: 1, Sistema: "Adiciona +4 VEL ou +6 MOV para a Manobra escolhida no próximo turno" },
	"Spontaneous Combustion": { Tecnica: "Foco", ModVel: 0, ModDano: 5, ModMov: -2, Chi: 2, Sistema: "Atacante precisa vencer uma disputa de Foco com o alvo; se vencer o alvo começa a pegar fogo; continua enquanto o elemental manter o efeito ou o alvo gastar um turno rolando no chão para apagar as chamas, neste turno terá -2 VEL; 1 Chi por turno para manter as chamas e dano +2 nos turnos seguintes" },
	"Stone": { Tecnica: "Foco", ModVel: -2, ModDano: "Especial", Chi: 1, Alcance: "Raciocínio+Foco", Sistema: "Ataque de projétil; dano é FOR + Foco" },
	"Vacuum": { Tecnica: "Foco", ModVel: -2, ModDano: 2, ModMov: -2, Chi: 1, Alcance: "Raciocínio+Foco", Vantagens: ["Área"], Sistema: "Afeta todos no hex alvo; vítimas precisam passar em um teste de Vigor ou estarão automaticamente atordoadas no próximo turno; as vítimas podem interromper com uma Manobra mais rápida e saírem do hex; não afeta elementalistas do ar" },
	"Venom": { Tecnica: "Foco", ModVel: 1, ModDano: 2, ModMov: -2, Chi: 1, Sistema: "Efeitos retardados: pelos próximos 2 turnos o alvo perde 1 Saúde automático e tem -1 VEL" },
	"Wall": { Tecnica: "Foco", ModVel: -2, ModDano: 2, Alcance: "Percepcao+Foco", Sistema: "O personagem cria uma barreira em um hex; qualquer um que esteja no hex sofre o dano; a barreira pode ser contornada ou destruída, ela tem Vigor igual ao Antecedente Elemental e Saúde igual Foco do personagem" },
	"Weight": { Tecnica: "Foco", ModVel: -2, ModMov: -1, Chi: 1, Alcance: "Raciocínio+Foco", Sistema: "Ataque de projétil; vítima atingida tem -2 VEL, -2 MOV e não usar Aérea no próximo turno" },
	"Chi Push": { Tecnica: "Foco", ModVel: -3, ModDano: "Especial", Chi: 2, Vantagens: ["Knockback"], Sistema: "+1 DAN por Chi extra, máximo de 2; opcionalmente pontos de dano podem forçar o alvo recuar 1 hex(1 dano/1 hex recuado); pode aumentar o alcance por -2 dano por hex; alvo pode adicionar +1 na ABS por 2 Chi gasto; não afeta quem estiver usando San He" },
	"Levitation": { Tecnica: "Foco", ModVel: 0, ModMov: "Especial", Chi: 1, Sistema: "Lutador pode se mover por Foco hex por turno em qualquer direção" },
	"Power Up": { Tecnica: "Foco", ModVel: 0, ModDano: "", ModMov: "", Chi: 1, Sistema: "+1Vel/Dano ou +1Vel/Abs ou +1Vel/Mov ou +1Dano/Alc ou +1Atri ou +1Habil próx turno" },
	"Accuracy": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Sistema: "dificuldade para esquivar de seus projéteis +1" },
	"Mu No Hadou": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 2, Sistema: "+1Vel/Dano com Foco ou +1Abs/imune dizzy/imune telepatia neste turno" },
	"Banishing Flat": { Tecnica: "Soco", ModVel: -2, ModDano: 4, ModMov: -2, Chi: 1, Sistema: "Raciocínio, 2 sucessos, dissipa projétil" },
	"Ansatsuken": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", FdV: 1, PC: 3, Vantagens: ["Dano Agravado"], Sistema: "+3 Dano Agravado na Manobra Assassina, -1 Honra" },
	"Ashura Senku": { Tecnica: "Foco", ModVel: 3, ModMov: "Foco+2", Chi: 1, Sistema: "Lutador não pode ser atingido enquanto a executa" },
	"Chi Pull": { Tecnica: "Foco", ModVel: -2, ModDano: 8, Chi: 1, Alcance: "Raciocinio+Foco", Desvantagens: ["Dano Dizzy"], Sistema: "Dano só para atordoar; ABS com Vigor, mas se ultrapassar o Vigor da vítima, ela estará atordoada; havendo sucesso vítima é atraída um número de hex igual ao Foco do atacante; vítima pode tentar resistir rolando sua FOR x Foco do adversário" },
	"Chill Touch": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 2, PC: 2, Sistema: "Usado com qualquer Soco, Chute ou Apresamento básicos; adiciona os efeitos do Ice Blast e +2 de dano" },
	"Criminal Upper": { Tecnica: "Foco", ModVel: -1, ModDano: 4, ModMov: "Um", Chi: 1, Vantagens: ["Knockdown", "Ignora Bloqueio"], Sistema: "KD; o oponente não pode Bloquear (só com San He)" },
	"Eletric Channeling": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 2, PC: 3, Vantagens: ["Knockdown", "Área"], Sistema: "Adiciona +3 dano a Socos, Chutes e Apresamento básicos; afeta todos os alvos no hex à frente do lutador, e causa um KD a eles" },
	"Flaming Heel": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 3, Sistema: "Adiciona +3 dano a Chutes básicos" },
	"Instant Hell Murder": { Tecnica: "Foco", ModVel: -3, ModDano: "Especial", ModMov: 2, Chi: 2, Vantagens: ["Impacto Técnico"], Sistema: "Funciona como Apresamento; é rolado um dano padrão de 15 um número de vezes igual ao Foco do atacante; oponente rola Raciocínio + Mistérios (dif. 10, reduzindo se já conhecer o golpe); cada sucesso permite evitar uma rolagem de dano, mas deve-se gastar 1 Chi a cada duas rolagens evitadas; não pode gastar mais Chi que o Foco; o usuário também é atacado, rolando Raciocínio + Mistérios (dif. 6, caindo conforme vá utilizando) e gastando Chi para não sofrer o próprio golpe; dano absorvido com Honra" },
	"Kubiori": { Tecnica: "Foco", ModVel: -1, ModDano: 4, ModMov: -1, Chi: 1, Vantagens: ["Knockdown", "Knockback"], Desvantagens: ["Mesmo Hex"], Sistema: "KD e empurra 1 hex; atacante deve entrar no hex da vítima" },
	"Raida": { Tecnica: "Foco", ModVel: 0, ModDano: 5, ModMov: -1, Chi: 1, Vantagens: ["Knockdown", "Knockback"], Desvantagens: ["Mesmo Hex"], Sistema: "KD e empurra 1 hex; atacante deve entrar no hex da vítima" },
	"Energy Ball": { Tecnica: "Foco", ModVel: 0, ModDano: "2/2", Chi: 1, Alcance: "Um", Sistema: "Dois hits; projétil (pode ser esquivada com Jump)" },
	"Sonic Hurricane": { Tecnica: "Foco", ModVel: -2, ModDano: "2/2/2", Chi: 2, Alcance: "Um", Sistema: "Três hits; projétil (pode ser esquivada com Jump, mas não refletida com Energy Reflection)" },
	"Soul Spiral": { Tecnica: "Foco", ModVel: 0, ModDano: "0/0/0", ModMov: -1, Chi: 1, Vantagens: ["Knockdown"], Sistema: "Três hits; KD" },
	"God Invocation": { Tecnica: "Foco", ModVel: -2, ModDano: 10, Chi: 2, Vantagens: ["Ignora Bloqueio"], Desvantagens: ["Concentração"], Sistema: "Ignora bloqueio; Rola Carisma + Mistérios e compara com tabela; Não pode levar dano no turno de invocação ou perde a manobra" },
	"Dragon Attack": { Tecnica: "Foco", ModVel: -3, Chi: 2, Sistema: "Ver Manobra" },
	"Wolf Animality": { Tecnica: "Foco", ModVel: -3, Chi: 2, Sistema: "Ver Manobra" },
	"Lightning": { Tecnica: "Foco", ModVel: -2, ModDano: 3, Chi: 1, Alcance: "Inteligencia+Foco", Sistema: "Projétil" },
	"Absorb Soul": { Tecnica: "Foco", ModVel: "Especial", Chi: 2, Sistema: "Ver Manobra" },
	"Metamorphose": { Tecnica: "Foco", ModVel: 1, ModMov: -2, Chi: 2, Sistema: "Ver Manobra" },
	"Determination": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, FdV: 1, Sistema: "Permite usar sua manobra no mesmo turno em que ficou Dizzy, mas não no turno seguinte." },
	"Improved Yoga Teleport": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", ModMov: "Especial", Chi: 1, Sistema: "Permite teleportar outras pessoas e a distâncias maiores." },
	"Sense Element": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 0, Sistema: "Percepção + Elemental para perceber seu elemento" },
	"Sense Orochi": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Nenhum", ModMov: "Nenhum", PC: 0, Sistema: "Percepção + Orochi quando um portador do Sangue de Orochi estiver no campo de visão (o Narrador pede o teste sem dizer para quê); 0 sucessos: percebe um Orochi, mas não sabe quem é; 1: identifica o Orochi; 2: identifica Orochi não despertados; 3: identifica Orochi, seus servos e pessoas de má índole; só não percebe nada em falha crítica" },
	"Ice Ground": { Tecnica: "Foco", ModVel: 2, ModDano: "Nenhum", ModMov: "Nenhum", Chi: 1, Alcance: 3, Vantagens: ["Knockdown"], Sistema: "Congela 3 hexes à frente, se pisar leva KD e -3 Vel na próxima manobra. Gelo dura 2 turnos." },
	"Ice Strike": { Tecnica: "Foco", ModVel: 0, ModDano: 5, ModMov: 0, Chi: 1, Sistema: "" },
	"Ice Clone": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", ModMov: "Dois", Chi: 1, Sistema: "Move para trás. Alvo testa Des + Esp contra Foco para não tocar no gelo. Mesmo efeito do Ice Blast mas sem dano. Dura 2 rodadas." },
	"The Hand From Hell": { Tecnica: "Foco", ModVel: -2, ModDano: 10, ModMov: "Nenhum", Chi: 2, Vantagens: ["Sustentado"], Sistema: "rola Carisma + Mistérios e compara com tabela para saber efeito (dano único ou apresamento sustentado). Não pode ser bloqueada. Exclusiva de Shinnok (poder do Amuleto)." },
	"Telekinesis": { Tecnica: "Foco", ModVel: -2, ModDano: "Nenhum", ModMov: "Nenhum", Alcance: "Raciocinio+Foco", Chi: 1, Sistema: "Ver Descrição" },
	"Cryokinesis": { Tecnica: "Foco", ModVel: -2, ModDano: "2/0", ModMov: "Nenhum", Alcance: "Raciocinio+Foco", Chi: 2, Sistema: "Dois hits; Linha de Visão. Similar a Ice Blast, veja descrição." },
	"Portal Attack": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", PC: 1, Alcance: "Raciocinio+Foco", Chi: 1, Sistema: "Manobras Básicas ou de projeção à distância (alcance)" },
	"Soul Illusion": { Tecnica: "Foco", ModVel: 2, ModDano: "Nenhum", ModMov: "Nenhum", Chi: 1, Sistema: "1 Chi por turno. Cria 4 ilusões que somem com um hit cada. Diferenciar o verdadeiro exige Percepção + Mistérios dif 2 + cópias existentes. Se o real sofrer hit, todas somem." },
	"Condensed Energy": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Nenhum", Chi: 1, Sistema: "Jogue em conjunto com projétil. -1 ou -2 Vel e Alcance para diminuir igualmente a dificuldade do teste de dano" },
	"Denjin Hadouken": { Tecnica: "Foco", ModVel: -2, ModDano: 5, Chi: 2, Alcance: "Raciocinio+Foco", Sistema: "Linha de visão, projétil, dificuldade pro dano é 5 (normal) ou 4, se diminuir 1 VEL" },
	"Metsu Hadouken": { Tecnica: "Foco", ModVel: 0, ModDano: 5, FdV: 1, Chi: 1, Alcance: "Raciocinio+Foco", Vantagens: ["Knockdown", "Dano Agravado"], Desvantagens: ["Ataque Condicional"], Sistema: "Projétil, KD, linha de visão, Dano Agravado, tem de estar com Satsui ativado e não acumula com os efeitos dele, -1 Honra" },
	"Tanden Vortex": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", Chi: 1, Alcance: "Raciocinio", Sistema: "Linha de visão, Rola INT + CIBER absorvendo com INT, Dano em FdV do alvo e se passar INT do alvo, Dizzy e suga para hex adjacente." },
	"Tanden Copy": { Tecnica: "Foco", ModVel: 0, ModDano: "Especial", Chi: 1, Alcance: "Percepção", Sistema: "Linha de visão, Rola PER + CIBER dificuldade 5 + 1 por ponto de poder para copiar a manobra assistida" },

	//Outros
	"Spinning Weapon": { Tecnica: "Bastão/Lança/Espada/Machado/Chicote/Faca/Mangual/Garra", ModVel: 0, ModDano: "-1/-1/-1", ModMov: "Um", FdV: 1, Sistema: "Três hits. Armado." },
	"Weapon Sweep": { Tecnica: "Bastão/Lança/Chicote/Mangual", ModVel: -2, ModDano: 2, ModMov: -3, Vantagens: ["Knockdown", "Agachamento"], Sistema: "KD. Agachamento. Armado." },
	"Weapon Channeling": { Tecnica: "Foco", ModVel: "Especial", ModDano: "Especial", ModMov: "Especial", Chi: 1, PC: 2, Sistema: "Jogado com manobras básicas de armas; adiciona +2 no dano." },
	"Weapon Uppercut": { Tecnica: "Bastão/Espada/Faca/Garra/Mangual", ModVel: -1, ModDano: 3, ModMov: "Um", Vantagens: ["Anti-Aérea"], Sistema: "KD vs. Aérea" },
	"Battojutsu": { Tecnica: "Espada", ModVel: 2, ModDano: 1, ModMov: 0, FdV: 1, Sistema: "Revele a carta antes das velocidades; soma +2 Vel e +1 Dano a uma manobra básica ou especial de Espada que não gaste FdV" },
	"Killing Blade": { Tecnica: "Espada/Machado/Faca/Garra", ModVel: -1, ModDano: 4, ModMov: -2, FdV: 1, Vantagens: ["Anti-Aérea", "Esquiva de Projétil", "Knockback"], Desvantagens: ["Esquiva Condicional"], Sistema: "Como Dragon Punch, com arma: KD vs. Aérea; empurra 1 hex; esquiva de projétil; não pode atacar o oponente que lançou o projétil de que se esquiva" },
	"Buffalo Strike": { Tecnica: "Bastão/Lança/Espada/Machado/Mangual", ModVel: -2, ModDano: 5, ModMov: "Um", Sistema: "" },
	"Weapon Defense": { Tecnica: "Bloqueio", ModVel: 4, Sistema: "ABS+4 vs. Arma escolhida; -2 vs. outros" },
	"Deflecting Weapon": { Tecnica: "Bastão/Lança/Espada/Machado/Faca/Mangual", ModVel: 2, ModDano: 0, Sistema: "Bônus de BLOCK apenas para arma escolhida; Após a ABS faça um contra-ataque (vs. qualquer ataque)" },
	"Triple Blow": { Tecnica: "Bastão/Lança/Espada/Machado/Faca/Garra/Mangual", ModVel: -2, ModDano: "Especial", Sistema: "Role 3 hits, use somente os dois maiores." },
	"Double Hit Blow": { Tecnica: "Bastão/Lança/Espada/Machado/Faca/Garra/Mangual", ModVel: -2, ModDano: "1/1", ModMov: -1, Desvantagens: ["Ataque Condicional"], Sistema: "Dois hits a menos que o alvo esteja em Aérea ou Agachamento" },
	"Scuba Slash": { Tecnica: "Faca", ModVel: 2, ModDano: 1, ModMov: 0, Vantagens: ["Knockdown"], Desvantagens: ["Ataque Condicional"], Sistema: "Corte de faca; exige equipamento de mergulho. Dano contra Destreza do alvo em vez do Vigor. Se acertar, teste resistido de DES contra DES: se vencer, KD e o cilindro de propulsão ou outro equipamento de mergulho do alvo fica arruinado." },
	"Blood Bite": { Tecnica: "Apresamento", ModVel: -2, ModDano: -1, ModMov: "Um", Vantagens: ["Ignora Bloqueio"], Sistema: "Mordida; ignora Bloqueio; recupera 1 de Saúde por ponto de dano causado. Exclusiva de Rijndael." },
};

const armas = {
	"Arco Curto": { Tecnica: "Arco", ModVel: 2, ModDano: 1, ModMov: 0, Alcance: "Força+Arco", Sistema: "Alc Máx 9" },
	"Arco Longo": { Tecnica: "Arco", ModVel: 1, ModDano: 2, ModMov: 0, Alcance: "Força+Arco", Sistema: "Alc Máx 12" },
	"Yumi": { Tecnica: "Arco", ModVel: 0, ModDano: 4, ModMov: "Nenhum", Alcance: "Força+Arco", Sistema: "Alc Máx 15" },
	"Besta Leve": { Tecnica: "Besta", ModVel: 2, ModDano: 1, ModMov: "Nenhum", Alcance: 9, Sistema: "" },
	"Besta Pesada": { Tecnica: "Besta", ModVel: 0, ModDano: 2, ModMov: "Nenhum", Alcance: 12, Sistema: "" },
	"Arpão": { Tecnica: "Arremesso", ModVel: -1, ModDano: 2, ModMov: "Nenhum", Alcance: 5, Sistema: "Se causar 3 de dano, atordoa e puxa o oponente." },
	"Arpão de Mergulho": { Tecnica: "Arremesso", ModVel: -1, ModDano: 3, ModMov: "Nenhum", Alcance: "Força+Arremesso", Sistema: "Funciona como uma lança, mas só pode ser disparado pela arma dos Homens-Rã." },
	"Adaga Psíquica": { Tecnica: "Faca", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "Exclusiva de Decapre." },
	"Bagh Nakh": { Tecnica: "Faca", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "" },
	"Balisong": { Tecnica: "Faca", ModVel: 2, ModDano: 1, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Bastão Longo": { Tecnica: "Bastão", ModVel: 0, ModDano: 2, ModMov: 1, Sistema: "Duas Mãos" },
	"Bastão Improvisado": { Tecnica: "Bastão", ModVel: -1, ModDano: 1, ModMov: -1, Sistema: "" },
	"Clava": { Tecnica: "Bastão", ModVel: 0, ModDano: 2, ModMov: 0, Sistema: "" },
	"Bastão": { Tecnica: "Bastão", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "" },
	"Bastão Curto": { Tecnica: "Bastão", ModVel: 1, ModDano: 0, ModMov: 1, Sistema: "" },
	"Bastão Curto Reforçado": { Tecnica: "Bastão", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "" },
	"Bazuca": { Tecnica: "Armas de Fogo", ModVel: -4, ModDano: 12, ModMov: "-", Sistema: "A explosão do míssil atinge todos dentro de uma área de 5 hex de raio. Recarregar uma bazuca requer um turno inteiro." },
	"Bo": { Tecnica: "Bastão", ModVel: 0, ModDano: 2, ModMov: 1, Sistema: "Duas Mãos" },
	"Bokken": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Bumerangue": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: 0, Alcance: "Força+Arremesso", Sistema: "Volta ao dono, exceto em falha crítica" },
	"Cassetete": { Tecnica: "Bastão", ModVel: 1, ModDano: 0, ModMov: 1, Sistema: "" },
	"Canivete": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Chakram": { Tecnica: "Arremesso", ModVel: 1, ModDano: 1, ModMov: -3, Alcance: "Força+Arremesso" },
	"Chapéu-Lâmina": { Tecnica: "Chapéu", ModVel: 0, ModDano: 2, ModMov: 1 },
	"Chapéu Arremessado": { Tecnica: "Arremesso", ModVel: 0, ModDano: 2, ModMov: "Nenhum", Alcance: "Força+Arremesso" },
	"Cestus": { Tecnica: "Soco", ModVel: 0, ModDano: 2, ModMov: 0, Sistema: "Deve ser usado com manobras de Soco. +1 ABS em Bloqueios." },
	"Chicote": { Tecnica: "Chicote", ModVel: -1, ModDano: 2, ModMov: "Nenhum", Alcance: 6 },
	"Pingalim": { Tecnica: "Chicote", ModVel: 0, ModDano: 2, ModMov: 0 },
	"Chicote de Aço": { Tecnica: "Chicote", ModVel: -1, ModDano: 3, ModMov: "Nenhum", Alcance: 3 },
	"Cimitarra": { Tecnica: "Espada", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "Empunhadura: Variável" },
	"Corrente": { Tecnica: "Chicote", ModVel: 0, ModDano: 2, ModMov: -2, Alcance: 2 },
	"Escopeta": { Tecnica: "Armas de Fogo", ModVel: 1, ModDano: 2, ModMov: "-", Sistema: "2 Hits" },
	"Espada": { Tecnica: "Espada", ModVel: -1, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Variável" },
	"Espada Gancho": { Tecnica: "Espada", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "ver descrição" },
	"Espada Improvisada": { Tecnica: "Espada", ModVel: -2, ModDano: 3, ModMov: -1, Sistema: "" },
	"Espada Larga": { Tecnica: "Espada", ModVel: -2, ModDano: 5, ModMov: -1, Sistema: "Empunhadura: Duas Mãos." },
	"Faca": { Tecnica: "Faca", ModVel: 2, ModDano: 1, ModMov: 0, Sistema: "" },
	"Faca Arremessada": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: 0, Alcance: "Força+Arremesso" },
	"Faca de Combate": { Tecnica: "Faca", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Faca Improvisada": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "" },
	"Faca Borboleta": { Tecnica: "Espada", ModVel: 0, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Ferramenta Grande": { Tecnica: "Bastão", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Foice": { Tecnica: "Faca", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Funda": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: "Nenhum", Alcance: 5, Sistema: "Lança pedras." },
	"Kama": { Tecnica: "Faca", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Fuzil": { Tecnica: "Armas de Fogo", ModVel: 0, ModDano: 5, ModMov: "-", Sistema: "" },
	"Fuzil de Assalto": { Tecnica: "Armas de Fogo", ModVel: 1, ModDano: 6, ModMov: "-", Sistema: "" },
	"Garra": { Tecnica: "Garra", ModVel: 1, ModDano: 1, ModMov: 0, Sistema: "" },
	"Katana": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "Empunhadura: Variável" },
	"Katar": { Tecnica: "Faca", ModVel: 2, ModDano: 3, ModMov: 0, Sistema: "+1 ABS contra armas com lâmina ao bloquear." },
	"Kris": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "" },
	"Kunai Arremessada": { Tecnica: "Arremesso", ModVel: 1, ModDano: -1, ModMov: -1, Alcance: "Força+Arremesso", Sistema: "1 Hit para cada 2 pontos em Arremesso." },
	"Kunai": { Tecnica: "Faca", ModVel: 1, ModDano: -1, ModMov: -1 },
	"Kusari": { Tecnica: "Chicote", ModVel: 0, ModDano: 2, ModMov: -1, Alcance: 2, Sistema: "Alcance: 2 hex" },
	"Kusarigama": { Tecnica: "Chicote", ModVel: 0, ModDano: 3, ModMov: -2, Alcance: 2, Sistema: "Alcance: 2 hex" },
	"Lança": { Tecnica: "Lança", ModVel: 0, ModDano: 3, ModMov: 1, Sistema: "Empunhadura: Variável" },
	"Lança Arremessada": { Tecnica: "Arremesso", ModVel: -1, ModDano: 3, ModMov: "Nenhum", Alcance: "Força+Arremesso" },
	"Leque": { Tecnica: "Leque", ModVel: 0, ModDano: 2, ModMov: 1 },
	"Leque Arremessado": { Tecnica: "Arremesso", ModVel: 0, ModDano: 2, ModMov: "Nenhum", Alcance: "Força+Arremesso" },
	"Machadinha": { Tecnica: "Faca", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "" },
	"Machadinha Arremessada": { Tecnica: "Arremesso", ModVel: 1, ModDano: 2, ModMov: 0, Alcance: "Força+Arremesso" },
	"Machado Curto": { Tecnica: "Machado", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "" },
	"Machado Grande": { Tecnica: "Machado", ModVel: -1, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Duas Mãos" },
	"Maça-Estrela": { Tecnica: "Chicote", ModVel: -1, ModDano: 2, ModMov: "Nenhum", Alcance: 2, Sistema: "A corrente estrangula como um Garrote no mesmo hex, usando também a outra mão. Única manobra especial permitida: Foot Sweep." },
	"Martelo de Guerra": { Tecnica: "Martelo", ModVel: -1, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Duas Mãos" },
	"Martelo Arremessado": { Tecnica: "Arremesso", ModVel: -1, ModDano: 4, ModMov: "Nenhum", Alcance: "Força" },
	"Naginata": { Tecnica: "Lança", ModVel: 0, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Duas Mãos" },
	"Naginata Arremessada": { Tecnica: "Arremesso", ModVel: 0, ModDano: 4, ModMov: "Nenhum", Alcance: "Força+Arremesso" },
	"Glaive": { Tecnica: "Lança", ModVel: 0, ModDano: 4, ModMov: 0, Sistema: "Empunhadura: Duas Mãos" },
	"Navalha": { Tecnica: "Faca", ModVel: 2, ModDano: 2, ModMov: 0, Sistema: "" },
	"Ninjato": { Tecnica: "Espada", ModVel: 1, ModDano: 2, ModMov: 1, Sistema: "Empunhadura: Uma Mão." },
	"Nunchaku": { Tecnica: "Mangual", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão" },
	"Pata": { Tecnica: "Espada", ModVel: -2, ModDano: 3, ModMov: 0, Sistema: "ver descrição" },
	"Molotov": { Tecnica: "Arremesso", ModVel: 0, ModDano: 6, ModMov: "Nenhum", Alcance: "Força+Arremesso", Sistema: "Raio de 3 hexes." },
	"Granada": { Tecnica: "Arremesso", ModVel: 0, ModDano: 6, ModMov: "Nenhum", Alcance: "Força+Arremesso", Sistema: "Raio de 3 hexes." },
	"Granada de Gelo": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: "Nenhum", Alcance: "Força+Arremesso", Sistema: "Raio de 3 hexes. Igual Ice Blast." },
	"Pistola": { Tecnica: "Armas de Fogo", ModVel: 2, ModDano: 3, ModMov: "-", Sistema: "" },
	"Pistola de Choque": { Tecnica: "Armas de Fogo", ModVel: 1, ModDano: "Especial", ModMov: "-", Alcance: 5, Sistema: "5 cargas. Dano 10 fixo. Sustentado Força 5. Ignora Bloqueio." },
	"Pistola Pesada": { Tecnica: "Armas de Fogo", ModVel: 2, ModDano: 4, ModMov: "-", Sistema: "" },
	"Rapier": { Tecnica: "Espada", ModVel: 2, ModDano: 1, ModMov: 1, Sistema: "Empunhadura: Uma Mão." },
	"Sabre": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Sabre de Esgrima": { Tecnica: "Espada", ModVel: 1, ModDano: 1, ModMov: 1, Sistema: "+1 ABS em Bloqueios." },
	"Sai": { Tecnica: "Faca", ModVel: 1, ModDano: 0, ModMov: 0, Sistema: "+1 ABS para Aparar e +2 para desarmar" },
	"Sai Arremessada": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: 0, Alcance: "Força+Arremesso" },
	"Shinai": { Tecnica: "Espada", ModVel: 1, ModDano: 3, ModMov: 0, Sistema: "" },
	"Shikomi-Zue": { Tecnica: "Bastão", ModVel: 0, ModDano: 1, ModMov: 2, Sistema: "Bengala com lâmina escondida; esta é a arma usada como bastão." },
	"Shikomi-Zue (Lâmina)": { Tecnica: "Lança", ModVel: 1, ModDano: 2, ModMov: 1, Sistema: "Bengala com a lâmina exposta." },
	"Shuriken": { Tecnica: "Arremesso", ModVel: 2, ModDano: -2, ModMov: 0, Alcance: "Força+Arremesso", Sistema: "1 hit por ponto em Arremesso" },
	"Shuko": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "Deve ser usado com manobras de Soco." },
	"Soco Inglês": { Tecnica: "Soco", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "Deve ser usado com manobras de Soco." },
	"Submetralhadora": { Tecnica: "Armas de Fogo", ModVel: 2, ModDano: "1/1", ModMov: "-", Sistema: "2 Hits" },
	"Tonfa": { Tecnica: "Bastão", ModVel: 0, ModDano: 1, ModMov: 0, Sistema: "+1 ABS ao bloquear." },
	"Tonfa de Ferro": { Tecnica: "Bastão", ModVel: 0, ModDano: 3, ModMov: 0, Sistema: "" },
	"Wakizashi": { Tecnica: "Faca", ModVel: 1, ModDano: 2, ModMov: 0, Sistema: "Empunhadura: Uma Mão." },
	"Garrote": { Tecnica: "Apresamento", ModVel: -3, ModDano: 4, ModMov: "Nenhum", Sistema: "Se o alvo do ataque é tomado de surpresa ou tomar mais de 5 dano no ataque inicial, ele é considerado em choque e não ABS nos ataques subsequentes ao Apresamento Sustentado!" },
	"Rede": { Tecnica: "Arremesso", ModVel: 0, ModDano: 0, ModMov: "Nenhum", Alcance: "Força+Arremesso", Sistema: "Projétil, ignora Bloqueio, requer linha de visão. Não causa dano real, mas se tirar ao menos um sucesso no teste de dano, o oponente está Dizzy até que consiga um número de sucessos em teste de FOR igual ao dano causado, testando ao final de cada turno." },
	"Wind Blade": { Tecnica: "Faca", ModVel: 0, ModDano: 2, ModMov: 0 },
};

const ARMAS_ARRAY = Object.keys(armas).map((arma) => {
	return {
		Nome: arma,
		...armas[arma]
	}
});

const valorFixoRegex = new RegExp("^(Um|Dois|Três|Quatro)$");

//"", "-" e "Nenhum" significam que não há modificador (a tabela mostra "-"); 0 é um modificador válido (+0)
function semModificador(valor) {
	return typeof valor === "string" && ["", "-", "nenhum"].includes(valor.trim().toLowerCase());
}

function estilizaSistema(sistema) {
	if (!sistema) return "";
	if (sistema.indexOf("Força") !== -1 || sistema.indexOf(" FOR ") !== -1) sistema = sistema.replace(/Força| FOR /, " <a href='/post/forca' target='_blank'>FOR</a> ");
	if (sistema.indexOf("Destreza") !== -1 || sistema.indexOf(" DES ") !== -1) sistema = sistema.replace(/Destreza| DES /, " <a href='/post/destreza' target='_blank'>DES</a> ");
	if (sistema.indexOf("Vigor") !== -1 || sistema.indexOf(" VIG ") !== -1) sistema = sistema.replace(/Vigor| VIG /, " <a href='/post/vigor' target='_blank'>VIG</a> ");
	if (sistema.indexOf("Carisma") !== -1 || sistema.indexOf(" CAR ") !== -1) sistema = sistema.replace(/Carisma| CAR /, " <a href='/post/carisma' target='_blank'>CAR</a> ");
	if (sistema.indexOf("Manipulação") !== -1 || sistema.indexOf(" MAN ") !== -1) sistema = sistema.replace(/Manipulação| MAN /, " <a href='/post/manipulacao' target='_blank'>MAN</a> ");
	if (sistema.indexOf("Percepção") !== -1 || sistema.indexOf(" PER ") !== -1) sistema = sistema.replace(/Percepção| PER /, " <a href='/post/percepcao' target='_blank'>PER</a> ");
	if (sistema.indexOf("Inteligência") !== -1 || sistema.indexOf(" INT ") !== -1) sistema = sistema.replace(/Inteligência| INT /, " <a href='/post/inteligencia' target='_blank'>INT</a> ");
	if (sistema.indexOf("Raciocínio") !== -1 || sistema.indexOf(" RAC ") !== -1) sistema = sistema.replace(/Raciocínio| RAC /, " <a href='/post/raciocinio' target='_blank'>RAC</a> ");
	if (sistema.indexOf("Soco") !== -1 || sistema.indexOf(" SOCO ") !== -1) sistema = sistema.replace(/Soco| SOCO /, " <a href='/post/soco' target='_blank'>SOCO</a> ");
	if (sistema.indexOf("Chute") !== -1 || sistema.indexOf(" CHUTE ") !== -1) sistema = sistema.replace(/Chute| CHUTE /, " <a href='/post/chute' target='_blank'>CHUTE</a> ");
	if (sistema.indexOf("Bloqueio") !== -1 || sistema.indexOf(" BLOCK ") !== -1) sistema = sistema.replace(/Bloqueio| BLOCK /, " <a href='/post/bloqueio' target='_blank'>BLOCK</a> ");
	if (sistema.indexOf("Apresamento") !== -1 || sistema.indexOf(" APRE ") !== -1) sistema = sistema.replace(/Apresamento| APRE /, " <a href='/post/apresamento' target='_blank'>APRE</a> ");
	if (sistema.indexOf("Esportes") !== -1 || sistema.indexOf(" ESP ") !== -1) sistema = sistema.replace(/Esportes| ESP /, " <a href='/post/esportes' target='_blank'>ESP</a> ");
	if (sistema.indexOf("Foco") !== -1 || sistema.indexOf(" FOCO ") !== -1) sistema = sistema.replace(/Foco| FOCO /, " <a href='/post/foco' target='_blank'>FOCO</a> ");

	if (sistema.indexOf("KD") !== -1) sistema = sistema.replace("KD", "<a href='/post/knockdown' target='_blank'>KD</a>");
	if (/aérea/i.test(sistema)) sistema = sistema.replace(/aérea/i, "<a href='/post/manobra-aerea' target='_blank'>Aérea</a>");
	if (/agachamento/i.test(sistema)) sistema = sistema.replace(/agachamento/i, "<a href='/post/manobra-de-agachamento' target='_blank'>Agachamento</a>");
	if (sistema.indexOf("Sustentado") !== -1) sistema = sistema.replace("Sustentado", "<a href='/post/apresamento-sustentado' target='_blank'>Sustentado</a>");
	if (sistema.indexOf("Básica de Híbrido Animal") !== -1) sistema = sistema.replace("Básica de Híbrido Animal", "<a href='/post/hibrido-animal' target='_blank'>Básica de Híbrido Animal</a>");
	else if (sistema.indexOf("Básica") !== -1) sistema = sistema.replace("Básica", "<a href='/post/manobras-basicas' target='_blank'>Básica</a>");
	if (sistema.indexOf("ABS") !== -1) sistema = sistema.replace("ABS", "<a href='/post/absorcao' target='_blank'>ABS</a>");
	if (sistema.indexOf("Dizzy") !== -1) sistema = sistema.replace("Dizzy", "<a href='/post/dizzy' target='_blank'>Dizzy</a>");
	if (/projétil/i.test(sistema)) sistema = sistema.replace(/projétil/i, "<a href='/post/manobra-de-projetil' target='_blank'>Projétil</a>");
	if (/dano agravado/i.test(sistema)) sistema = sistema.replace(/dano agravado/i, "<a href='/post/dano-agravado' target='_blank'>Dano Agravado</a>");
	if (/jump/i.test(sistema)) sistema = sistema.replace(/jump/i, "<a href='/post/jump' target='_blank'>Jump</a>");
	if (/chi/i.test(sistema)) sistema = sistema.replace(/chi/i, "<a href='/post/chi' target='_blank'>Chi</a>");
	if (/linha de visão/i.test(sistema)) sistema = sistema.replace(/linha de visão/i, "<a href='/post/linha-de-visao' target='_blank'>Linha de Visão</a>");
	return sistema;
}

//valor de uma característica usada no alcance; para Cibernéticos, Foco é substituído pelo antecedente Cibernético
function valorAlcance(npc, nome) {
	nome = nome.trim();
	if (nome === "Foco" && npc["Cibernético"] > 0) return npc["Cibernético"];
	return parseInt(npc[nome]) || 0;
}

function calculaAlcance(npc, manobra) {
	if (manobra.Alcance === null || manobra.Alcance === undefined) return "";
	if (valorFixoRegex.test(manobra.Alcance)) return manobra.Alcance;
	if (typeof manobra.Alcance === "number") return manobra.Alcance;
	if (manobra.Alcance.indexOf("+") !== -1) {
		const split = manobra.Alcance.split("+");
		return valorAlcance(npc, split[0]) + valorAlcance(npc, split[1]);
	}
	return valorAlcance(npc, manobra.Alcance);
}

function calculaAlcanceArremesso(npc, arma) {
	if (arma.Alcance === null || arma.Alcance === undefined) return "";
	if (valorFixoRegex.test(arma.Alcance)) return arma.Alcance;
	if (typeof arma.Alcance === "number") return arma.Alcance;
	if (arma.Alcance.indexOf("+") !== -1) {
		const split = arma.Alcance.split("+");
		return parseInt(npc[split[0].trim()]) + parseInt(npc[split[1].trim()]);
	}
	return parseInt(npc[arma.Alcance]);
}

//valor da técnica usada por uma arma: técnica própria da ficha ou técnica básica (ex.: Soco); sem a técnica, vale 0
function tecnicaDaArma(npc, arma) {
	const nome = arma.Tecnica || arma.Nome;
	return getCaracteristica(npc.NovasTecnicas || [], nome) || npc[nome] || 0;
}

//Dark Spark aplica os modificadores do Garrote, se o lutador o portar
function modGarrote(npc, campo) {
	return npc.Armas && npc.Armas.indexOf("Garrote") !== -1 ? parseInt(armas["Garrote"][campo]) : 0;
}

function calculaVelocidade(npc, manobra) {
	if (semModificador(manobra.ModVel)) return "-";
	if (manobra.Nome === "Dark Spark") return npc.Destreza + parseInt(manobra.ModVel) + modGarrote(npc, "ModVel");
	if (manobra.ModVel === null || manobra.ModVel === undefined || manobra.ModVel === "Especial" || manobra.ModVel === "Esp.") return "Esp.";

	let modAtributo = 0;
	if (manobra.Tecnica === "Foco") {
		if (npc["Cibernético"] > 0)
			modAtributo = npc.Destreza > npc.Raciocinio ? npc.Destreza : npc.Raciocinio;
		else
			modAtributo = npc.Raciocinio;
	}
	else modAtributo = npc.Destreza;

	const modVel = parseInt(manobra.ModVel);
	return modAtributo + modVel;
}

function calculaVelocidadeArmaFogo(npc, arma) {
	return npc.Raciocinio + parseInt(arma.ModVel);
}

function calculaDanoArmaFogo(npc, arma) {
	if (arma.ModDano === "Especial") return "Esp.";
	const modTecnica = tecnicaDaArma(npc, arma);

	//metralhadoras e outras armas de vários hits
	if (typeof arma.ModDano === "string" && arma.ModDano.indexOf("/") !== -1) {
		const modDanos = arma.ModDano.split("/");
		return modDanos.map(d => modTecnica + parseInt(d)).reduce((a, b) => a + "/" + b);
	}

	return modTecnica + parseInt(arma.ModDano);
}

function calculaVelocidadeArma(npc, arma, manobra) {
	return npc.Destreza + parseInt(manobra.ModVel) + parseInt(arma.ModVel);
}

function calculaVelocidadeArmaDistancia(npc, arma) {
	return npc.Destreza + parseInt(arma.ModVel);
}

function calculaAlcanceArma(arma) {
	return parseInt(arma.Alcance || 1);
}

function calculaDanoArma(npc, arma, manobra) {
	if (!arma || !manobra) return "-";
	const modTecnica = tecnicaDaArma(npc, arma);

	if (manobra.Nome === "Aparar") {
		return "ABS" + (npc["Vigor"] + npc["Bloqueio"] + tecnicaDaArma(npc, arma));
	}

	if (manobra.ModDano === undefined || arma.ModDano === undefined || semModificador(manobra.ModDano) || semModificador(arma.ModDano)) return "-";

	//dano de manobras que dão vários hits
	if (typeof manobra.ModDano === "string" && manobra.ModDano.indexOf("/") !== -1) {
		const modDanos = manobra.ModDano.split("/");
		return modDanos.map(d => npc.Forca + modTecnica + arma.ModDano + parseInt(d)).reduce((a, b) => a + "/" + b);
	}

	return npc.Forca + modTecnica + arma.ModDano + parseInt(manobra.ModDano);
}

function calculaDanoArmaDistancia(npc, arma) {
	const modTecnica = tecnicaDaArma(npc, arma);
	return npc.Forca + modTecnica + arma.ModDano;
}

function calculaDanoTripleBlow(npc, manobra) {
	const arma = buscarArma(manobra.Tecnica, npc);
	if (!arma) return "-";
	const danoArma = npc["Força"] + tecnicaDaArma(npc, arma) + arma.ModDano;
	return danoArma + "/" + danoArma + "/" + (npc["Força"] + npc["Chute"] + 1);
}

function buscarArma(str, npc) {
	if (npc.Armas === undefined || npc.Armas === null || npc.Armas.length === 0) return undefined;

	const tecnicas = str.split("/");
	let maiorTecnica = 0;
	let nomeTecnica = "";
	tecnicas.forEach(t => {
		if (t && npc[t] > maiorTecnica) {
			maiorTecnica = npc[t];
			nomeTecnica = t;
		}
	});

	const armasPossiveis = ARMAS_ARRAY.filter(a => a.Tecnica === nomeTecnica || a.Nome === nomeTecnica);
	for (let i = 0; i < armasPossiveis.length; i++) {
		if (npc.Armas.find(a => a === armasPossiveis[i].Nome)) {
			return armasPossiveis[i];
		}
	}
}

function calculaDano(npc, manobra) {

	if (manobra.Nome === "Bushin Musou Renge") {
		let maiorTecnica = npc["Soco"];
		if (npc["Chute"] > maiorTecnica) maiorTecnica = npc["Chute"];
		if (npc["Apresamento"] > maiorTecnica) maiorTecnica = npc["Apresamento"];
		const total = npc["Força"] + maiorTecnica + 4;
		return `${total}/${total}/${total}`;
	}

	if (manobra.Nome === "Baton Throw") {
		const arma = armas[npc.Armas[0]];
		return (npc["Força"] + npc["Apresamento"]) + 2 + arma.ModDano;
	}

	if (manobra.Nome === "Air Baton Throw") {
		const arma = armas[npc.Armas[0]];
		return (npc["Força"] + npc["Apresamento"]) + 5 + arma.ModDano;
	}

	if (manobra.Nome === "Triple Strike")
		return (npc["Força"] + npc["Soco"]) + "/" + (npc["Força"] + npc["Soco"]) + "/" + (npc["Força"] + npc["Chute"] + 1);

	if (manobra.Nome === "Elemental Explosion")
		return (npc.Forca + npc.Esportes - 1) + "/" + (npc.Inteligencia + npc.Foco - 1);

	if (manobra.Nome === "Dark Spark")
		return (npc.Forca + npc.Apresamento + modGarrote(npc, "ModDano")) + "/" + (npc.Inteligencia + (npc["Cibernético"] || 0) + 3);

	if (manobra.Nome === "Elemental Rage")
		return npc.Inteligencia + npc.Apresamento + 3;

	if (manobra.Nome === "Tameshiwari")
		return (npc["Força"] + npc["Soco"]) * 2;

	if (manobra.Nome === "Triple Blow") return calculaDanoTripleBlow(npc, manobra);

	if (manobra.Nome === "Maka Wara")
		return npc["Vigor"] + npc["Bloqueio"] - 3;

	if (manobra.Nome === "Bloqueio")
		return "ABS" + (npc["Vigor"] + npc["Bloqueio"]);

	if (manobra.Nome === "San He")
		return "ABS" + (npc["Vigor"] + (npc["Bloqueio"] * 2));

	if (manobra.Nome === "Kick Defense" || manobra.Nome === "Punch Defense")
		return "ABS" + (npc["Vigor"] + npc["Bloqueio"] + 4) + " ou " + (npc["Vigor"] + npc["Bloqueio"] - 2);

	if (manobra.Nome === "Weapon Defense")
		return "ABS arma + " + (npc["Vigor"] + npc["Bloqueio"] + 4) + " ou arma + " + (npc["Vigor"] + npc["Bloqueio"] - 2);

	if (manobra.Nome === "Stone")
		return npc["Força"] + npc["Foco"];

	if (manobra.Nome === "Chi Push")
		return npc["Raciocínio"] + npc["Foco"] + 3;

	if (manobra.ModDano === null || manobra.ModDano === undefined || semModificador(manobra.ModDano)) return "-";
	if (manobra.ModDano === "Especial") return "Esp.";

	let modAtributo = 0;
	let modTecnica = undefined;
	if (manobra.Tecnica === "Foco" || manobra.Tecnica === "Cibernético" || manobra.Tecnica === "Cibernetico") {
		modAtributo = npc.Inteligencia;
		modTecnica = npc["Cibernético"] ? npc["Cibernético"] : npc.Foco;
	}
	else modAtributo = npc.Forca;

	if (modTecnica === undefined)
		modTecnica = npc[manobra.Tecnica];

	//calculando dano de manobras com armas
	if (modTecnica === undefined) {
		if (manobra.Tecnica.indexOf("/") !== -1) {
			const arma = buscarArma(manobra.Tecnica, npc);
			return calculaDanoArma(npc, arma, manobra);
		}

		const arma = ARMAS_ARRAY.find(a => a.Tecnica === manobra.Tecnica || a.Nome === manobra.Tecnica);
		if (!arma) return "-";

		if (manobra.Nome === "Aparar")
			return "ABS" + (npc["Vigor"] + npc["Bloqueio"] + tecnicaDaArma(npc, arma));

		return calculaDanoArma(npc, arma, manobra);
	}

	//calculando dano de manobras de múltiplo impacto
	if (typeof manobra.ModDano === "string" && manobra.ModDano.indexOf("/") !== -1) {
		const modDanos = manobra.ModDano.split("/");
		return modDanos.map(d => modAtributo + modTecnica + parseInt(d)).reduce((a, b) => a + "/" + b);
	}

	const modDano = parseInt(manobra.ModDano);
	return modAtributo + modTecnica + modDano;
}

function calculaMovimentoArma(npc, arma, manobra) {
	if (manobra.ModMov === null || manobra.ModMov === undefined || semModificador(manobra.ModMov) || arma.ModMov === null || arma.ModMov === undefined || semModificador(arma.ModMov)) return "-";
	if (valorFixoRegex.test(manobra.ModMov) || valorFixoRegex.test(arma.ModMov)) return manobra.ModMov;

	const modMov = parseInt(manobra.ModMov);
	const movFinal = npc.Esportes + modMov + parseInt(arma.ModMov);
	return movFinal > 0 ? movFinal : 0;
}

function calculaMovimentoArmaDistancia(npc, arma) {
	if (arma.ModMov === null || arma.ModMov === undefined || semModificador(arma.ModMov)) return "-";
	const movFinal = npc.Esportes + parseInt(arma.ModMov);
	return movFinal > 0 ? movFinal : 0;
}

//ModMov "<Técnica>+N" ou "<Técnica>-N" (ex.: "Foco+2"): o movimento parte da técnica no lugar de Esportes
const baseMovRegex = /^(\p{L}+)\s*([+-]\s*\d+)$/u;

function calculaMovimento(npc, manobra) {
	if (manobra.ModMov === null || manobra.ModMov === undefined || semModificador(manobra.ModMov)) return "-";
	if (manobra.ModMov === "Especial") return "Esp.";
	if (valorFixoRegex.test(manobra.ModMov)) return manobra.ModMov;
	if (typeof manobra.ModMov === "string" && manobra.ModMov.indexOf("/") !== -1)//ex.: "Um/-2"
		return manobra.ModMov.split("/").map(mod => calculaMovimento(npc, { ModMov: valorFixoRegex.test(mod) ? mod : parseInt(mod) })).join("/");

	const tecnica = /^\+(\p{L}+)$/u.exec(manobra.ModMov);//ex.: "+Foco" (Esportes + Foco)
	if (tecnica && typeof npc[tecnica[1]] === "number")
		return npc.Esportes + npc[tecnica[1]];

	const base = baseMovRegex.exec(manobra.ModMov);//ex.: "Foco+2" (Foco no lugar de Esportes, + 2)
	if (base && typeof npc[base[1]] === "number") {
		const movBase = npc[base[1]] + (parseInt(base[2].replace(/\s/g, "")) || 0);
		return movBase > 0 ? movBase : 0;
	}

	const modMov = parseInt(manobra.ModMov);
	const movFinal = npc.Esportes + modMov;
	return movFinal > 0 ? movFinal : 0;
}

function normalizarNomeManobra(nome) {
	return nome
		.trim()
		.replace(/-/g, " ")
		.toLowerCase()
		.replace(/(^|\s)(\S)/g, (match, espaco, letra) => espaco + letra.toUpperCase());
}

function prepareNpc(npc) {
	//injetando atributos novos no objeto principal
	if (npc.NovasTecnicas) npc.NovasTecnicas.forEach((v, i, a) => npc[v.Nome] = v.Valor);
	if (npc.NovosTalentos) npc.NovosTalentos.forEach((v, i, a) => npc[v.Nome] = v.Valor);
	if (npc.NovasPericias) npc.NovasPericias.forEach((v, i, a) => npc[v.Nome] = v.Valor);
	if (npc.NovosConhecimentos) npc.NovosConhecimentos.forEach((v, i, a) => npc[v.Nome] = v.Valor);

	//adicionando duplicatas para campos com acentos
	npc["Força"] = npc.Forca;
	npc["Manipulação"] = npc.Manipulacao;
	npc["Aparência"] = npc.Aparecia;
	npc["Percepção"] = npc.Percepcao;
	npc["Raciocínio"] = npc.Raciocinio;

	//técnicas básicas omitidas na ficha valem 0
	["Soco", "Chute", "Bloqueio", "Apresamento", "Esportes", "Foco"].forEach(t => { if (npc[t] === undefined) npc[t] = 0; });

	//injetando antecedentes únicos
	const antecedentesUnicos = ["Híbrido Animal", "Elemental", "Irmão das Sombras", "Espectro", "Herança de Clã", "Cibernético", "Tarkatan", "Shokan", "Centaurian", "Psycho Power", "Paranormal", "Satsui no Hadou", "Despertar", "Sangue de Orochi", "Sub-Elemental"];
	antecedentesUnicos.forEach((v, i, a) => {
		//aceita detalhe entre parênteses, ex.: "Elemental (Fogo)"
		const antecedente = npc.Antecedentes.find(a => a.Nome === v || a.Nome.startsWith(v + " ("));
		if (antecedente) npc[v] = antecedente.Valor
	});

	//corrigindo nomes
	if (npc["Irmãos das Sombras"] > npc["Irmão das Sombras"]) npc["Irmão das Sombras"] = npc["Irmãos das Sombras"];
	if (npc["Herança do Clã"] > npc["Herança de Clã"]) npc["Herança de Clã"] = npc["Herança do Clã"];
	if (npc["Centaurean"] > npc["Centaurian"]) npc["Centaurian"] = npc["Centaurean"];
	if (npc["Sub-Elemental"] > npc["Elemental"]) npc["Elemental"] = npc["Sub-Elemental"];

	//compensando antecedentes equivalentes
	if (npc["Tarkatan"]) npc["Híbrido Animal"] = npc["Tarkatan"];
	if (npc["Irmão das Sombras"]) npc["Herança de Clã"] = npc["Irmão das Sombras"];
	if (npc["Centaurian"]) npc["Híbrido Animal"] = npc["Centaurian"];
	if (npc["Shokan"]) npc["Híbrido Animal"] = npc["Shokan"];

	if (npc["Paranormal"] > npc["Psycho Power"]) npc["Psycho Power"] = npc["Paranormal"];
	else npc["Paranormal"] = npc["Psycho Power"];

	if (npc["Sub-Elemental"]) npc["Elemental"] = npc["Sub-Elemental"];
	return npc;
}

// Mensagem de erro exibida na coluna Especial da tabela, sem interromper a montagem.
function erroTabela(msg) {
	return `<span style="color:red;font-weight:bold;">${msg}</span>`;
}

function carregarTabela(npc) {

	npc = prepareNpc(npc);

	//preenchendo manobras básicas
	const manobrasBasicas = ["Jab", "Strong", "Fierce", "Short", "Forward", "Roundhouse", "Apresamento", "Bloqueio", "Movimento"];

	let html = "";
	manobrasBasicas.forEach((v) => {
		const manobra = manobras[v.trim()];
		if (!manobra) {
			html += `<tr><td>${v.trim()}</td><td></td><td></td><td></td><td></td><td></td><td>${erroTabela("Manobra " + v.trim() + " não encontrada!")}</td></tr>`;
			return;
		}
		manobra.Nome = v.trim();

		html += `<tr><td>${v.trim()}</td>
			<td>${calculaVelocidade(npc, manobra)}</td>
			<td>${calculaDano(npc, manobra)}</td>
			<td>${calculaMovimento(npc, manobra)}</td>
			<td></td>
			<td></td>
			<td>${estilizaSistema(manobra.Sistema)}</td></tr>`;
	})

	if (npc.Armas != null && npc.Armas != undefined) {
		npc.Armas.forEach((v) => {
			const arma = armas[v.trim()];
			if (!arma) {
				html += `<tr><td>${v.trim()}</td><td></td><td></td><td></td><td></td><td></td><td>${erroTabela("Arma " + v.trim() + " não encontrada!")}</td></tr>`;
				return;
			}

			const armasDeFogo = ["Armas de Fogo", "Pistola", "Metralhadora", "Fuzil", "Rifle", "Armas Pesadas"];
			if (armasDeFogo.includes(arma.Tecnica)) {
				html += `<tr><td><a href='/post/armas-de-fogo'>${v.trim()}</a></td>
					<td>${calculaVelocidadeArmaFogo(npc, arma)}</td>
					<td>${calculaDanoArmaFogo(npc, arma)}</td>
					<td>-</td>
					<td>-</td>
					<td></td>
					<td>${estilizaSistema(arma.Sistema)}</td></tr>`;
			}
			else if (arma.Tecnica === "Arco" || arma.Tecnica === "Arquearia") {
				html += `<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>${v.trim()}</a></td>
					<td>${calculaVelocidadeArma(npc, arma, { ModVel: 0 })}</td>
					<td>${npc.Destreza + npc["Arco"] + arma.ModDano}</td>
					<td>${calculaMovimentoArmaDistancia(npc, arma)}</td>
					<td>${calculaAlcanceArremesso(npc, arma)}</td>
					<td></td>
					<td>${estilizaSistema(arma.Sistema)}</td></tr>`;
			}
			else if (arma.Tecnica === "Besta") {
				html += `<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>${v.trim()}</a></td>
					<td>${calculaVelocidadeArmaFogo(npc, arma)}</td>
					<td>${npc.Destreza + npc["Besta"] + arma.ModDano}</td>
					<td>-</td>
					<td>${arma.Alcance}</td>
					<td></td>
					<td>${estilizaSistema(arma.Sistema)}</td></tr>`;
			}
			else if (arma.Tecnica === "Arremesso") {
				html += `<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>${v.trim()}</a></td>
					<td>${calculaVelocidadeArmaDistancia(npc, arma)}</td>
					<td>${calculaDanoArmaDistancia(npc, arma)}</td>
					<td>${calculaMovimentoArmaDistancia(npc, arma)}</td>
					<td>${calculaAlcanceArremesso(npc, arma)}</td>
					<td></td>
					<td>${estilizaSistema(arma.Sistema)}</td></tr>`;
			}
			else if (arma.Tecnica === "Apresamento") {
				html += `<tr><td><a href='/post/armas-brancas'>${v.trim()}</a></td>
					<td>${calculaVelocidadeArma(npc, arma, { ModVel: 0 })}</td>
					<td>${calculaDanoArma(npc, arma, { ModDano: 0 })}</td>
					<td>${calculaMovimentoArma(npc, arma, { ModMov: 0 })}</td>
					<td>${calculaAlcanceArma(arma)}</td>
					<td></td>
					<td>${estilizaSistema(arma.Sistema)}</td></tr>`;
			}
			else {
				const manobrasComArmas = ["Jab", "Strong", "Fierce", "Berserk", "Aparar", "Desarmar"];
				manobrasComArmas.forEach((v2) => {
					const manobra = manobras[v2];
					manobra.Nome = v2;

					html += `<tr><td>${v.trim()} ${v2.trim()}</td>
						<td>${calculaVelocidadeArma(npc, arma, manobra)}</td>
						<td>${calculaDanoArma(npc, arma, manobra)}</td>
						<td>${calculaMovimentoArma(npc, arma, manobra)}</td>
						<td>${calculaAlcanceArma(arma)}</td>
						<td>${manobra.FdV ? manobra.FdV + " FdV" : ""}</td>
						<td>${estilizaSistema(manobra.Sistema + (arma.Sistema ? ". " + arma.Sistema : ""))}</td></tr>`;
				})
			}
		})
	}

	if (npc.ManobrasEspeciais) {
		if (npc.ManobrasEspeciais.indexOf("Boxing Punches") !== -1)
			npc.ManobrasEspeciais += "Straight, Cross/hook, Uppercut";

		let manobrasNormalizadas = "";
		npc.ManobrasEspeciais.split(/[,;]/).sort().forEach((v) => {
			const nome = normalizarNomeManobra(v);
			manobrasNormalizadas += nome + ";";
			const manobra = manobras[nome];

			html += `<tr><td>${GeraHtmlLink(v.trim())}</td>`;
			if (manobra == null || manobra == undefined) {
				html += `<td></td><td></td><td></td><td></td><td></td><td>${erroTabela("Manobra " + nome + " não encontrada!")}</td></tr>\r\n`;
			}
			else {
				manobra.Nome = nome;
				html += `<td>${calculaVelocidade(npc, manobra)}</td>
					<td>${calculaDano(npc, manobra)}</td>
					<td>${calculaMovimento(npc, manobra)}</td>
					<td>${calculaAlcance(npc, manobra)}</td>`;

				if (manobra.Chi || manobra.FdV) {
					html += `<td>`;
					if (manobra.Chi > 0) html += " " + manobra.Chi + " Chi<br />";
					if (manobra.FdV > 0) html += " " + manobra.FdV + " FdV ";
					html += `</td>`;
				} else {
					html += `<td></td>`;
				}
				html += `<td>${estilizaSistema(manobra.Sistema)}</td></tr>\r\n`;
			}
		})
		npc.ManobrasEspeciais = manobrasNormalizadas;
	}

	if (npc.Combos) {
		html += `<tr><td><b>Combos:</b></td></tr>
			<tr><td colspan='7'>${npc.Combos.replaceAll(/[;,]/g, ";<br />")}</td></tr>`;
	}

	return '<table id="tbCalculada" border=1><thead><tr style="font-weight:bold;background-color:Black;color:white;"><td width="30%">Manobra</td><td>Vel.</td><td>Dano</td><td>Mov.</td><td>Alc.</td><td>Custo</td><td>Especial</td></tr></thead><tbody>' + html + '</tbody></table>';
}

function montaCarta(npc, nomeManobra) {
	const manobra = manobras[nomeManobra.trim()];
	if (!manobra) return alert("Manobra " + nomeManobra.trim() + " não encontrada!");
	manobra.Nome = nomeManobra.trim();

	const x =
	`<table style="border:1px solid black;">
		<tr><td colspan="2" class="ArialBlackBlack" style="font-size:14px">${manobra.Nome}</td></tr>
		<tr><td class="ArialBlackBlack">Vel.:</td><td class="ArialPadrao">${calculaVelocidade(npc, manobra)}</td></tr>
		<tr><td class="ArialBlackBlack">Dano:</td><td class="ArialPadrao">${calculaDano(npc, manobra)}</td></tr>
		<tr><td class="ArialBlackBlack">Mov.:</td><td class="ArialPadrao">${calculaMovimento(npc, manobra)}</td></tr>
		<tr><td class="ArialBlackBlack">Chi/FdV:</td><td class="ArialPadrao">${manobra.Chi || ""}/${manobra.FdV | ""}</td></tr>
		<tr><td class="ArialBlackBlack">Espec.:</td><td class="ArialPadrao">${manobra.Sistema}</td></tr>
	</table>`;
	return x;
}

function carregarCartas(npc) {

	npc = prepareNpc(npc);

	//preenchendo manobras básicas
	const manobrasBasicas = ["Jab", "Strong", "Fierce", "Short", "Forward", "Roundhouse", "Apresamento", "Bloqueio", "Movimento"];

	let html = "";
	manobrasBasicas.forEach((v) => html += montaCarta(npc, v));

	// if (npc.Armas != null && npc.Armas != undefined) {
	// 	npc.Armas.forEach((v) => {
	// 		const arma = armas[v.trim()];
	// 		if (!arma) return alert("Arma " + v.trim() + " não encontrada!");

	// 		const armasDeFogo = ["Armas de Fogo", "Pistola", "Metralhadora", "Fuzil", "Rifle", "Armas Pesadas"];
	// 		if (armasDeFogo.includes(arma.Tecnica)) {
	// 			html += "<tr><td><a href='/post/armas-de-fogo'>" + v.trim() + "</a></td>";
	// 			html += "<td>" + calculaVelocidadeArmaFogo(npc, arma) + "</td>";
	// 			html += "<td>" + calculaDanoArmaFogo(npc, arma) + "</td>";
	// 			html += "<td>-</td>";
	// 			html += "<td>-</td>";
	// 			html += "<td></td>";
	// 			html += "<td>" + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
	// 		}
	// 		else if (arma.Tecnica === "Arco" || arma.Tecnica === "Arquearia") {
	// 			html += "<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>" + v.trim() + "</a></td>";
	// 			html += "<td>" + calculaVelocidadeArma(npc, arma, { ModVel: 0 }) + "</td>";
	// 			html += "<td>" + (npc.Destreza + npc["Arco"] + arma.ModDano) + "</td>";
	// 			html += "<td>-</td>";
	// 			html += "<td>" + calculaAlcanceArremesso(npc, arma) + "</td>";
	// 			html += "<td></td>";
	// 			html += "<td>" + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
	// 		}
	// 		else if (arma.Tecnica === "Besta") {
	// 			html += "<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>" + v.trim() + "</a></td>";
	// 			html += "<td>" + calculaVelocidadeArmaFogo(npc, arma) + "</td>";
	// 			html += "<td>" + (npc.Destreza + npc["Besta"] + arma.ModDano) + "</td>";
	// 			html += "<td>-</td>";
	// 			html += "<td>" + arma.Alcance + "</td>";
	// 			html += "<td></td>";
	// 			html += "<td>" + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
	// 		}
	// 		else if (arma.Tecnica === "Arremesso") {
	// 			html += "<tr><td><a href='/post/armas-brancas-de-combate-a-distancia'>" + v.trim() + "</a></td>";
	// 			html += "<td>" + calculaVelocidadeArmaDistancia(npc, arma) + "</td>";
	// 			html += "<td>" + calculaDanoArmaDistancia(npc, arma) + "</td>";
	// 			html += "<td>" + calculaMovimentoArmaDistancia(npc, arma) + "</td>";
	// 			html += "<td>" + calculaAlcanceArremesso(npc, arma) + "</td>";
	// 			html += "<td></td>";
	// 			html += "<td>" + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
	// 		}
	// 		else if (arma.Tecnica === "Apresamento") {
	// 			html += "<tr><td><a href='/post/armas-brancas'>" + v.trim() + "</a></td>";
	// 			html += "<td>" + calculaVelocidadeArma(npc, arma, { ModVel: 0 }) + "</td>";
	// 			html += "<td>" + calculaDanoArma(npc, arma, { ModDano: 0 }) + "</td>";
	// 			html += "<td>" + calculaMovimentoArma(npc, arma, { ModMov: 0 }) + "</td>";
	// 			html += "<td>" + calculaAlcanceArma(arma) + "</td>";
	// 			html += "<td></td>";
	// 			html += "<td>" + estilizaSistema(arma.Sistema) + "</td></tr>\r\n";
	// 		}
	// 		else {
	// 			const manobrasComArmas = ["Jab", "Strong", "Fierce", "Berserk", "Aparar", "Desarmar"];
	// 			manobrasComArmas.forEach((v2) => {
	// 				const manobra = manobras[v2];
	// 				manobra.Nome = v2;

	// 				html += "<tr><td>" + v.trim() + " " + v2.trim() + "</td>";
	// 				html += "<td>" + calculaVelocidadeArma(npc, arma, manobra) + "</td>";
	// 				html += "<td>" + calculaDanoArma(npc, arma, manobra) + "</td>";
	// 				html += "<td>" + calculaMovimentoArma(npc, arma, manobra) + "</td>";
	// 				html += "<td>" + calculaAlcanceArma(arma) + "</td>";
	// 				html += "<td></td>";
	// 				html += "<td>" + estilizaSistema(manobra.Sistema + (arma.Sistema ? ". " + arma.Sistema : "")) + "</td></tr>\r\n";
	// 			})
	// 		}
	// 	})
	// }

	// if (npc.ManobrasEspeciais) {
	// 	if (npc.ManobrasEspeciais.indexOf("Boxing Punches") !== -1)
	// 		npc.ManobrasEspeciais += "Straight, Cross/hook, Uppercut";

	// 	let manobrasNormalizadas = "";
	// 	npc.ManobrasEspeciais.split(/[,;]/).sort().forEach((v) => {
	// 		const nome = normalizarNomeManobra(v);
	// 		manobrasNormalizadas += nome + ";";
	// 		if (!manobras[nome]) {
	// 			alert("Manobra " + nome + " não encontrada!");
	// 			throw new Error("Manobra " + nome + " não encontrada!");
	// 		}
	// 		const manobra = manobras[nome];
	// 		manobra.Nome = nome;

	// 		html += "<tr><td>" + GeraHtmlLink(v.trim()) + "</td>";
	// 		if (manobra == null || manobra == undefined) {
	// 			html += "<td></td><td></td><td></td><td></td><td></td><td>Manobra não encontrada</td>";
	// 		}
	// 		else {
	// 			html += "<td>" + calculaVelocidade(npc, manobra) + "</td>";
	// 			html += "<td>" + calculaDano(npc, manobra) + "</td>";
	// 			html += "<td>" + calculaMovimento(npc, manobra) + "</td>";
	// 			html += "<td>" + calculaAlcance(npc, manobra) + "</td>";

	// 			if (manobra.Chi || manobra.FdV) {
	// 				html += "<td>";
	// 				if (manobra.Chi > 0) html += " " + manobra.Chi + " Chi<br />";
	// 				if (manobra.FdV > 0) html += " " + manobra.FdV + " FdV ";
	// 				html += "</td>";
	// 			} else {
	// 				html += "<td></td>";
	// 			}
	// 			html += "<td>" + estilizaSistema(manobra.Sistema) + "</td></tr>\r\n";
	// 		}
	// 	})
	// 	npc.ManobrasEspeciais = manobrasNormalizadas;
	// }
	return html;
	// return `<table id="tbCartas" border=1>
	// 			<thead>
	// 				<tr style="font-weight:bold;background-color:Black;color:white;">
	// 					<td width="30%">Manobra</td><td>Vel.</td>
	// 					<td>Dano</td><td>Mov.</td>
	// 					<td>Alc.</td>
	// 					<td>Custo</td>
	// 					<td>Especial</td>
	// 				</tr>
	// 			</thead>
	// 			<tbody>${html}</tbody>
	// 		</table>`;
}

function numeroPorExtenso(valor) {
	const extenso = { "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5, "seis": 6 };
	const texto = (valor + "").toLowerCase();
	return extenso[texto] || parseInt(texto);
}

//PC (Pontos de Combate) mede a eficiência de uma manobra em combate (não é custo).
//Valores das Vantagens e Desvantagens: cada uma vale +1/-1, exceto "Área" (acertar vários alvos só ajuda
//contra capangas fracos) e "Agachamento" (não apanha de Aérea, mas também não acerta Aérea), que valem 0, e "Ignora Vigor" e "Anula Ataque", que valem 2.
//Dano: manobra que causa dano (ModDano numérico) soma +1 (BONUS_DANO) por hit, para golpes não ficarem abaixo de manobras sem dano;
//sem dano (ModDano omitido, "", "-" ou "Nenhum") vale -1 (como um ModDano -2); "Especial" vale 0.
//Multi-hit: todos os hits contam (soma dos modificadores, com +1 em cada); hit limitado (ex.: só se o alvo estiver a alcance) leva "Ataque Condicional" e a quantidade de hits soma um bônus (vale o maior):
//hits fixos (ModDano "x/y") +1 por hit extra; Impacto Técnico (hits = técnica) +3;
//Impacto Dinâmico (hits = movimento) movimento + 3; Apresamento Sustentado (hits possíveis = Apresamento) +2.
const BONUS_DANO = 1;
const BONUS_HITS = { "Impacto Técnico": 3, "Impacto Dinâmico": 3, "Sustentado": 2 };//no Impacto Dinâmico, soma ao movimento

function valorModificador(valor) {//"Especial", "", "Nenhum" e "-" valem 0
	const numero = parseInt(valor);
	return isNaN(numero) ? 0 : numero;
}

function valorVantagem(vantagem) {
	if (vantagem === "Agachamento" || vantagem === "Área") return 0;
	if (vantagem === "Ignora Vigor" || vantagem === "Anula Ataque") return 2;
	return 1;
}

//Movimento: sem movimento (Nenhum, "", "-" ou omitido) = -1; Um = 0; Dois = +1; Três = +2; números valem eles mesmos
function pcMovimento(modMov, npc) {
	if (modMov === undefined || modMov === null) return -1;
	const texto = (modMov + "").trim();
	const minusculo = texto.toLowerCase();
	if (["", "-", "nenhum"].includes(minusculo)) return -1;
	if (minusculo === "especial") return 0;
	const fixos = { "um": 0, "dois": 1, "três": 2 };
	if (fixos[minusculo] !== undefined) return fixos[minusculo];
	if (texto.indexOf("/") !== -1) return pcMovimento(texto.split("/")[0], npc);//ex.: "Dois/Um" usa o 1º movimento
	if (/^\+(\p{L}+)$/u.test(texto)) return 2;//ex.: "+Foco" vale +2 fixo, como um Alcance de uma técnica (o PC da manobra não usa a ficha)
	const base = baseMovRegex.exec(texto);//ex.: "Foco+2" vale só o modificador (+2)
	if (base) return parseInt(base[2].replace(/\s/g, "")) || 0;
	return valorModificador(texto);
}

//Alcance: mesmo hex (0, padrão do Apresamento) = -1; adjacente (1, padrão) = 0; fixo (2, 3...) = +1;
//um atributo ou técnica = +2; atributo + técnica = +3
function pcAlcance(manobra) {
	//o Alcance só conta quando a manobra causa dano (ModDano numérico, positivo ou negativo); senão é desconsiderado
	const temDano = !isNaN(parseInt(manobra.ModDano));
	const alcance = temDano ? manobra.Alcance : undefined;
	if (alcance === undefined || alcance === null || alcance === "")
		return /apresamento/i.test(manobra.Tecnica) ? -1 : 0;
	const numero = numeroPorExtenso(alcance);
	if (!isNaN(numero)) return numero <= 0 ? -1 : numero === 1 ? 0 : 1;
	return (alcance + "").split("+").length >= 2 ? 3 : 2;
}

//Quando a manobra não tem os campos Vantagens/Desvantagens, eles são deduzidos do texto do Sistema (mesmas regras usadas na migração)
function inferirVantagens(sistema) {
	const s = (sistema || "").toLowerCase();
	const clausulas = s.replace(/vs\./g, "vs").split(/[;.]/).map(c => c.trim()).filter(Boolean);
	const v = [], d = [];
	if (/\b(kd|knockdown)\b/.test(s) && !/não sofre kd/.test(s)) {
		const soAereo = /\bkd (vs\.?|contra) a[ée]rea/.test(s) && !/(^|[;.,]\s*|causa |e )kd(?! (vs\.?|contra))/.test(s.replace(/kd (vs\.?|contra) a[ée]rea/g, ""));
		v.push(soAereo ? "Anti-Aérea" : "Knockdown");
	}
	if (clausulas.some(c => /^(manobra )?a[ée]rea\b(?! enquanto)/.test(c)) || /\b(é|são) (considerada )?(uma )?(manobra )?a[ée]rea\b/.test(s.replace(/não é a[ée]rea/g, "")) || /manobra a[ée]rea\.?$/.test(s)) v.push("Aérea");
	if (/esquivar? (de )?proj[ée]t|esquiva proj|não pode ser atingid[oa] por proj|esquiva de fireball/.test(s)) v.push("Esquiva de Projétil");
	if (/não pode ser esquivad[ao]/.test(s)) v.push("Anti-Esquiva");
	if (/apenas kick defense funciona|única forma de se defender/.test(s)) v.push("Ignora Bloqueio");
	if (clausulas.some(c => /^(manobra de )?agachamento\b/.test(c))) v.push("Agachamento");
	if (/acerta (oponentes|lutadores|alvos)? ?em agachamento|mas os afeta|ainda é atingido pelo último|afeta personagens em agachamento/.test(s)) v.push("Acerta Agachamento");
	if (/não é afetad[ao] por agachamento/.test(s)) v.push("Imune a Agachamento");
	if (/ignora (o )?bloqueio|não pode (ser )?bloque|não pode bloquear/.test(s)) v.push("Ignora Bloqueio");
	if (/ignora vigor|absorve com apenas metade|metade .*vigor|½ do vigor|contra ½/.test(s)) v.push("Ignora Vigor");
	if (/ignora toughskin|armaduras/.test(s)) v.push("Ignora Toughskin");
	if (/(\d+|um|dois|três) (hex|hexes|hexágonos?) de raio|raio de (\d+|um|dois|três) (hex|hexes|hexágonos?)|\bárea\b|todos os hex adjacentes|todos ao redor|todos os alvos|afeta todos|todos os lutadores/.test(s)) v.push("Área");
	if (/sustentado/.test(s) && !/preso em sustentado|em um sustentado antes|como em um sustentado|apresamento sustentado!/.test(s)) v.push("Sustentado");
	if (/hits ?= ?(soco|chute|esportes|foco|apresamento)|número de vezes igual|(hits?|ataques?|golpes?|fireballs?|projéte?is?|projétil) por ponto de (soco|chute|esportes|foco|apresamento)/.test(s)) v.push("Impacto Técnico");
	if (/toda vez que se move|toda vez que entra|rolar o dano novamente|rolando novos danos|role o dano para cada hex|rola o dano a cada hex/.test(s)) v.push("Impacto Dinâmico");
	if (/dano agravado/.test(s)) v.push("Dano Agravado");
	if (/(?<!para )empurr|(?<!não pode ser )arremess(ad[oa]|a)|jogad[oa][^;.]*hex|joga[^;.]*hex(es)? para trás|(alvos?|oponentes?|todos)[^;.]*recua|forçando-o recuar/.test(s)) v.push("Knockback");
	if (/após o dano|para trás após|atravess[^;.]*hex do (alvo|oponente)|atravessa o hex|termina seu movimento após|seguir se movimentando após|fazer o ataque a qualquer momento e continuar|continuar seu movimento|continue se movendo|termina(r)? o movimento \d+ hex na frente|termina \d+ hex na frente/.test(s)) v.push("Move Depois");
	if (/se o alvo foi interrompido, perde o ataque|anula manobra do oponente|perderá sua ação/.test(s)) v.push("Anula Ataque");
	if (/não (afeta|atinge)[^;.]*agach/.test(s)) d.push("Não afeta Agachamento");
	if (/não (afeta|atinge)[^;.]*a[ée]re/.test(s)) d.push("Não afeta Aérea");
	if (/(precisa|tem de|deve) interromper (uma )?a[ée]rea|interromper um alvo em a[ée]rea|tem de interromper a[ée]rea/.test(s)) d.push("Ataque Condicional");
	else if (/precisa interromper|interrompendo o oponente/.test(s)) d.push("Ataque Condicional");
	if (/(precisa|tem de|deve) (de movimento para )?(entrar|atravessar|mover)[^;.]*hex|precisa entrar|tem de entrar|deve entrar/.test(s)) d.push("Mesmo Hex");
	if (/não pode atacar (o oponente )?(que|quem) lançou/.test(s)) d.push("Esquiva Condicional");
	if (/requer \d+ turno de concentração|requer 1 turno/.test(s)) d.push("Concentração");
	if (/(o alvo precisa estar|só contra vítima em) (kd|knockdown)/.test(s)) d.push("Ataque Condicional");
	if (/somente pode ser usado no turno após bloquear/.test(s)) d.push("Ataque Condicional");
	if (/precisa sofrer um ataque/.test(s)) d.push("Ataque Condicional");
	if (/(dano|dano conta) (somente|só) para atordoar|dano só para atordoar/.test(s)) d.push("Dano Dizzy");
	if (/não pode fazer parte de combo/.test(s)) d.push("Não entra em combo");
	if (/só pode usar o 2º ataque|pode usar o 2º ataque se/.test(s)) d.push("Ataque Condicional");
	if (/(precisa|tem de|deve) estar com satsui/.test(s)) d.push("Ataque Condicional");
	if (/só pode ser usada em um portador/.test(s)) d.push("Ataque Condicional");
	if (/precisa olhar nos olhos/.test(s)) d.push("Ataque Condicional");
	if (/não pode levar dano no turno/.test(s)) d.push("Concentração");
	if (/exige equipamento/.test(s)) d.push("Ataque Condicional");
	if (/precisa estar em contato com a terra/.test(s)) d.push("Ataque Condicional");
	if (/(deve|precisa) prender o alvo em um sustentado antes/.test(s)) d.push("Ataque Condicional");
	return { Vantagens: [...new Set(v)], Desvantagens: [...new Set(d)] };
}

//Hits citados só no texto ("dois testes", "três hits"...), para manobras sem os campos novos e com ModDano de um valor só
function inferirHits(sistema) {
	const s = (sistema || "").toLowerCase();
	if (/\b(3|três) (testes|vezes|hits)\b/.test(s)) return 3;
	if (/\b(2|dois) (testes|hits)\b|duas vezes/.test(s)) return 2;
	return 1;
}

function getPCManobra(nome, npc) {
	const manobra = manobras[nome];
	if (!manobra) return 1;//no mínimo cada manobra vale 1 PC
	return calculaPCManobra(manobra, npc);
}

function calculaPCManobra(manobra, npc) {
	const temCampos = manobra.Vantagens !== undefined || manobra.Desvantagens !== undefined;
	const inferido = temCampos ? null : inferirVantagens(manobra.Sistema);
	//nomes repetidos contam uma vez só (ex.: duas restrições de "Ataque Condicional" valem -1)
	const vantagens = [...new Set(temCampos ? (manobra.Vantagens || []) : inferido.Vantagens)];
	const desvantagens = [...new Set(temCampos ? (manobra.Desvantagens || []) : inferido.Desvantagens)];
	const especial = (manobra.ModVel + "" + manobra.ModDano + manobra.ModMov).toLowerCase() === "especialespecialespecial";
	if (manobra.PC === 0) return 0;//manobra que não é usada em combate (ex.: Telepathy) não vale nada
	if (especial && manobra.PC === undefined) return 1;//manobra "Especial" sem PC definido vale 1

	let base;
	if (manobra.PC !== undefined)
		base = manobra.PC;//valor definido à mão, no lugar dos modificadores (ex.: Rekka Ken +3 VEL = 3)
	else {
		const danos = (manobra.ModDano + "").split("/").map(valorModificador);
		let hits = danos.length;
		if (!temCampos && hits === 1 && manobra.ModDano !== undefined && !semModificador(manobra.ModDano))
			hits = inferirHits(manobra.Sistema);
		const movimento = pcMovimento(manobra.ModMov, npc);
		//no Impacto Dinâmico o bônus é o movimento + 3 (quanto mais anda, mais hits)
		const bonusHits = Math.max(hits - 1, ...vantagens.map(v => v === "Impacto Dinâmico" ? movimento + BONUS_HITS[v] : BONUS_HITS[v] || 0));
		//dano: soma dos modificadores de todos os hits + 1 por hit (-1 vale 0, +0 vale +1, "1/4" vale 2 + 5); sem dano -1; "Especial" 0
		//(hits citados só no texto repetem o modificador do ModDano)
		let dano;
		if (!isNaN(parseInt(manobra.ModDano)))
			dano = (danos.length === hits ? danos.reduce((a, d) => a + d, 0) : danos[0] * hits) + BONUS_DANO * hits;
		else if (manobra.ModDano === undefined || manobra.ModDano === null || semModificador(manobra.ModDano)) dano = -1;
		else dano = 0;
		base = valorModificador(manobra.ModVel) + dano + bonusHits + movimento;
	}

	let total = base;
	total += vantagens.filter(v => BONUS_HITS[v] === undefined).reduce((a, v) => a + valorVantagem(v), 0);
	total -= desvantagens.length;
	//apresamentos ignoram bloqueio e bloqueios dão bônus de ABS
	if (/bloqueio|apresamento/i.test(manobra.Tecnica) && !vantagens.includes("Ignora Bloqueio"))
		total += 1;
	total += pcAlcance(manobra);
	//gastos em Chi e FdV reduzem a eficiência
	total -= parseInt(manobra.Chi || 0) + parseInt(manobra.FdV || 0);

	return total >= 1 ? total : 1;//no mínimo cada manobra vale 1 PC
}

//Manobras básicas com a melhor arma do personagem, como aparecem na tabela (ex.: "Katana Fierce"), para o cálculo de PC.
//Como o lutador usa uma arma por vez, só entra a arma cujas manobras somam mais PC.
function getManobrasComArmas(npc) {
	if (!npc || !npc.Armas) return [];
	const semManobrasBasicas = ["Armas de Fogo", "Pistola", "Metralhadora", "Fuzil", "Rifle", "Armas Pesadas", "Arco", "Arquearia", "Besta", "Arremesso", "Apresamento"];
	let melhor = [], melhorPC = 0;
	npc.Armas.forEach(nomeArma => {
		const arma = armas[(nomeArma + "").trim()];
		if (!arma) return;
		let lista;
		if (semManobrasBasicas.includes(arma.Tecnica))
			lista = [{ Tecnica: arma.Tecnica, ModVel: arma.ModVel, ModDano: arma.ModDano, ModMov: arma.ModMov, Alcance: arma.Alcance }];
		else
			lista = ["Jab", "Strong", "Fierce", "Berserk", "Aparar", "Desarmar"].map(nomeBasica => {
				const basica = manobras[nomeBasica];
				const semMov = basica.ModMov === undefined || semModificador(basica.ModMov) || semModificador(arma.ModMov);
				return {
					Tecnica: arma.Tecnica,
					ModVel: valorModificador(basica.ModVel) + valorModificador(arma.ModVel),
					ModDano: basica.ModDano === undefined ? undefined : valorModificador(basica.ModDano) + valorModificador(arma.ModDano),
					ModMov: semMov ? undefined : valorModificador(basica.ModMov) + valorModificador(arma.ModMov),
					Alcance: arma.Alcance,
					FdV: basica.FdV,
					Vantagens: [], Desvantagens: []
				};
			});
		lista.forEach(m => { if (m.Vantagens === undefined) { m.Vantagens = []; m.Desvantagens = []; } });
		const pc = lista.reduce((total, m) => total + calculaPCManobra(m, npc), 0);
		if (pc > melhorPC) { melhor = lista; melhorPC = pc; }
	});
	return melhor;
}