		var nomes = []
		var insertnome
		var pesquisa

		function vetorpush(){
			insertnome = document.getElementById('insertnome').value
			nomes.push(insertnome)

			alert(nomes)
		}

		function vetorunshift(){
			insertnome = document.getElementById('insertnome').value
			nomes.unshift(insertnome)

			alert(nomes)
		}

		function vetorpop(){
			nomes.pop()

			alert(nomes)
		}

		function vetorshift(){
			nomes.shift()

			alert(nomes)
		}

		function exibirSegundo(){

			alert(nomes[1])
		}

		function exibirTodos(){

			alert(nomes)
		}

		function pesquisarPosicao(){
			pesquisa = document.getElementById('pesquisa').value

			alert(nomes[pesquisa])
		}

		function listarDados(){
			let lista = document.getElementById('lista');
			lista.innerHTML = '';
			for(let c = 0; c < nomes.length; c++){
				lista.innerHTML += "<h4>"+c+"- "+nomes[c]+"</h4>";
			}
		}