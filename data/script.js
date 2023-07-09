const users = {//Objeto que contem informações dos usuários da página, podem ser modificados.
	nomes: ['zanetick_12', '_kevin', 'glich22', 'sonic_gamer__'],
	nicks: ['Zanetick', 'Kevin', 'Glitch', 'Sonic Gamer'],
	bol: ['naoperturbar', 'online', 'ausente', 'invisivel'],
	colorsb: ['#363377', '#006211', '#111', '#363377'],
	pfps: ['data/img/zanetick.png', 'data/img/kevin.png', 'data/img/glitch.png', 'data/img/sonic.jpg'],
	descs: ['Olá, eu sou o Zanes, prazer.', 'Oie, eu sou o Kevin, eu gosto de aventuras!', 'Olá.', 'Olá, sou Sonic Gamer, amo os jogos do azulão!'], 
	datas: ['jan. 02, 2018', 'fev. 22, 2021', 'ago. 02, 2022', 'mai. 02, 2021']
}

//Abaixo os componentes de bolinhas, as que deixa claro se estás online, ausente, offline, etc.
const bolinhaOnline = () => `
	<span class="user-bolinha-online"></span>
`

const bolinhaNaoPerturbar = () => `
	<span class="user-bolinha-nao-perturbar"><span class="aux"></span></span>
`

const bolinhaAusente = () => `
	<span class="user-bolinha-ausente"><span class="aux"></span></span>
`

const bolinhaInvisivel = () => `
	<span class="user-bolinha-invisivel"><span class="aux"></span></span>
`

//Componente que contém a carcaça do perfil.
const user = (nome, nick, colorb, pfp, desc, data) => `
	<section id="${nome}" class="user">
		<section class="user-header">
			<div class="user-background" style="background-color: ${colorb};"></div>
			<div class="pfp-bolinha">
				<div class="user-pfp" style="background-image: url(${pfp})"></div>
			</div>
		</section>
		<section class="user-body">
			<section class="user-name">
				<h1 class="name-exb">${nick}</h1>
				<h2 class="name-def">${nome}</h2>
			</section>
			<section class="user-sobre">
				<h1>SOBRE MIM</h1>
				<p>${desc}</p>
			</section>
			<section class="user-desde">
				<h1>MEMBRO DE DISCORD DESDE</h1>
				<p>${data}</p>
			</section>
			<section class="user-nota">
				<h1>NOTA</h1>
				<input type="text" class="input-nota" placeholder="Clique aqui para adicionar uma nota">
			</section>
			<section class="user-mensagem">
				<input type="text" class="input-mensagem" placeholder="Enviar mensagem a @${nome}">
			</section>
		</section>
	</section>	
`

function load(){//função que dá load nas micro-funções da página em sí, gera um looping que só para quando gera o ultimo perfil do objeto que contem as informações dos usuários.
	for(c=0;c < users.nomes.length;c++){
		document.querySelector('main').innerHTML += user(
			`${users.nomes[c]}`,
			`${users.nicks[c]}`,
			`${users.colorsb[c]}`,
			`${users.pfps[c]}`,
			`${users.descs[c]}`,
			`${users.datas[c]}`
		)
		if(users.bol[c] == 'online'){
			document.querySelectorAll('.pfp-bolinha')[c].innerHTML += bolinhaOnline();
		}else if(users.bol[c] == 'naoperturbar'){
			document.querySelectorAll('.pfp-bolinha')[c].innerHTML += bolinhaNaoPerturbar();
		}else if(users.bol[c] == 'ausente'){
			document.querySelectorAll('.pfp-bolinha')[c].innerHTML += bolinhaAusente();
		}else if(users.bol[c] == 'invisivel'){
			document.querySelectorAll('.pfp-bolinha')[c].innerHTML += bolinhaInvisivel();
		}
	}
}load();