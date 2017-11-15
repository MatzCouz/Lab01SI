angular.module("webMusicas", []);
angular.module("webMusicas").controller("webMusicasController", function($scope){
	$scope.app = "Web Musicas";

	$scope.artistas = [];
	$scope.artistasFavoritos = [];
	$scope.albums = [];
	$scope.playLists = [];

	$scope.novoArtista = {};
	$scope.novaMusica = {};

	$scope.nomeArtista = "";

	$scope.albumsAchados = false;
	$scope.inforsArtista = false;
	$scope.inArtista = {};

	$scope.adicionarPlaylist = function(nomePlayslist){
		if(nomePlayslist == undefined){
			alert('Nome da playlist vazio');
		}else{
			var playlistExiste = false;
			angular.forEach($scope.playLists, function(playList){
				if(playList.nome == nomePlayslist){
					alert('Nome da playlist ja existe');
					playlistExiste = true;
				}
			})
			if(!playlistExiste){
				playLists.push(nomePlayslist);
			}
		}
	}


	$scope.adicionarMusica = function(musica){
		if(musica.nome == undefined || musica.artista == undefined || musica.anoLancamento 
			== undefined || musica.duracao == undefined || musica.album == undefined){
			alert('Todos os campos sao obrigatorios');
			return;
		}	

		var albumExiste = false;
		var musicaExiste = false;

		angular.forEach($scope.albums, function(album){
			if(album.nome == musica.album){
				angular.forEach(album.musicas, function(musicaAlbum){
					if(musicaAlbum.nome == musica.nome){
						musicaExiste = true;
					}
				});
				
				if(musicaExiste){
					alert('Musica ja existente');
				}else{
					album.musicas.push(musica);
				}
				
				albumExiste = true;
				alert('Album existe');	
			}
		});

		if(albumExiste == false){
			var novoAlbum = {
				nome: musica.album,
				artista: musica.artista,
				musicas: [musica]
			}

			angular.forEach($scope.artistas, function(artista){
				if(artista.nome == musica.artista){
					artista.albums.push(novoAlbum);
					return;
				}
			});

			$scope.albums.push(novoAlbum);
		}

		$scope.novaMusica = {}
	}
	
	$scope.adicionarArtista = function(nomeArtista){
		if(nomeArtista == undefined){
			alert('Campo vazio');
			return;
		}
		var novo = true;
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == nomeArtista){
				novo = false;
				alert('Artista ja cadastrado');
				return;
			}
		});
		if(novo){
			var novoArtista = {
				nome: nomeArtista,
				albums: []
			};
			$scope.artistas.push(novoArtista);
			alert("Artista " + $scope.novoArtista.nome + " cadastrado com sucesso!");
		}
			$scope.novoArtista = {};
	}

	$scope.pesquisarArtista = function(pesquisaArtista){
		var existe = false;
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == pesquisaArtista){
				existe = true;
			}
		})
		if(existe){
			angular.forEach($scope.albums, function(album){
				if(album.artista == pesquisaArtista){
					$scope.listaAlbumsAchados.push(album);		
				}
			})

			$scope.albumsAchados = true;
		}else{
			$scope.albumsAchados = true;
			alert('Artista nao encontrado');	
		}
	}

	$scope.pesquisarMusica = function(pesquisaMusica){
		var existe = false;
		angular.forEach($scope.albums, function(album){
			angular.forEach(album.musicas, function(musica){
				if(musica == pesquisaMusica){

				}
			})
		})

	}

	$scope.abrirInforsArtista = function(nome){
		$scope.inforsArtista = true;
		angular.forEach($scope.artistas, function(artista){
			if(nome == artista.nome){
				$scope.inArtista = artista.albums;
			}
		})
	}

	$scope.adicionarArtistaFavorito = function(artista){
		alert('ta pegando');
		var artistaExiste = false;
		angular.forEach($scope.artistasFavoritos, function(artistaFavorito){
			if(artistaFavorito == artista){
				alert("Artista ja adicionado como favorito");
				artistaExiste = true;
				return;
			}
		})

		if(!artistaExiste){
			$scope.artistasFavoritos.push(artista);
			alert('Artista adicionado como favorito');
		}
	}
});