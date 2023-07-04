function generate(){//Gerar a página dentre outras configs base
	let foo = document.createElement('footer');
	foo.innerHTML = 
		`
		<p>Made by <a href="https://victor-front.github.io/portfolio-victor/" rel="external" target="_blank"><strong>Victor Front</strong></a></p>
		`;
	
	let usersConfig = {//Configurações do usuário
		colors: ['#64AFE5', '#F07E31'],
		pfps: ['img/wabboffet.png', 'img/blaze.jpg'],
		names: ['Dundundont', 'Carriola'],
		status: ['Jogando <strong>Pokemon Ruby</strong>', null],
		tags: ['1985', '2005'],
		desc: ["Hello! I'm Dundundont.<br>He/Him<br>PT-BR", "Olá! Eu sou Carlos, mas pode me chamar de Carriola.<br>He/Him | They/Them<br>PT-PT"],
		aquan: ["Dec 30, 2017", "Oct 20, 2018"]
	}
	
	for(c=0;c<usersConfig.names.length;c++){//Looping para criar tantas contas de acordo com o tanto de nomes que há no vetor de nomes
		let user = document.createElement('div');
		user.setAttribute('id', 'userContainer');
		user.classList.add('userContainer');
		user.innerHTML = `
		<div id="userContainer" class="userContainer">
				<div id="userMainHeader${c}" class="userMainHeader">
					<img src="${usersConfig.pfps[c]}" alt="Profile Picture">
					<div id="icon" class="icon"></div>
				</div>
				<div id="userBodyContainer" class="userBodyContainer">
					<div id="userMainBody" class="userMainBody">
						<div id="userHeader" class="userHeader">
							<div id="nickContainer" class="nickContainer">
								<h1 class="nick">${usersConfig.names[c]}</h1><h1 id="id" class="id">#${usersConfig.tags[c]}</h1>
							</div>
							<p id="status${c}" class="status">${usersConfig.status[c]}</strong></p>
						</div>
						<div id="userDes" class="userDes">
							<h2 class="categories">ABOUT ME</h1>
							<p class="desc">${usersConfig.desc[c]}</p>
							<h2 class="categories">DISCORD MEMBER SINCE</h2>
							<p class="dms">${usersConfig.aquan[c]}</p>
						</div>
						<div id="userBody">
							<h2 class="categories">NOTE</h2>
							<input type="text" id="note" class="note" placeholder="Click to add a note">
							<input type="text" id="message" class="message" placeholder="Message @${usersConfig.names[c]}">
						</div>
					</div>
				</div>
			</div>
		`;
		
		document.body.appendChild(user);
		document.getElementById(`userMainHeader${c}`).style.backgroundColor = `${usersConfig.colors[c]}`;
		if(usersConfig.status[c] == null){//Se os status do usuário não estiver preenchido, será deletado
			document.getElementById(`status${c}`).remove();
		}
	}
	document.body.appendChild(foo);//Apresentar ao front
}