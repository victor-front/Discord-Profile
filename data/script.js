const users = {
	nomes: ['zanetick', 'kevin'],
	nicks: ['Zanetick', 'Kevin'],
	bol: ['naoperturbar', 'online'],
	colorsb: ['#363377', '#006211'],
	pfps: ['data/img/zanetick.png', 'data/img/kevin.png'],
	descs: ['Olá, eu sou o Zanes, prazer.', 'Oie, eu sou o Kevin, eu gosto de aventuras!'], 
	datas: ['jan. 02, 2018', 'fev. 22, 2021']
}

const bolinhaOnline = () => `
	<span class="user-bolinha-online"></span>
`

const bolinhaNaoPerturbar = () => `
	<span class="user-bolinha-nao-perturbar"><span class="traco"></span></span>
`

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

function load(){
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
		}
	}
}load();