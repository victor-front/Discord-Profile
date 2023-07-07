const user = (nome, nick, colorb, pfp, desc, data) => `
	<section id="${nome}" class="user">
		<section class="user-header">
			<div class="user-background" style="background-color: ${colorb};"></div>
			<div class="pfp-bolinha">
				<div class="user-pfp" style="background-image: url(${pfp})"></div>
				<span class="user-bolinha"></span>
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
				<input type="text" class="input-mensagem" placeholder="Enviar mensagem a @teste001">
			</section>
		</section>
	</section>	
`

document.body.innerHTML += user(
	'zanes99',
	'Zanetick',
	'#333388',
	'data/zanetick.png',
	'Oi, eu sou o Zanetick e gosto de dominar o mundo, sabe? O dia a dia',
	'dic. 09, 2021'
)