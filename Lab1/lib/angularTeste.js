angular.module("webMusicas", []);
angular.module("webMusicas").controller("webMusicasController", function($scope){
	
	$scope.app = "Web Musicas";
	$scope.artistas = [];
	$scope.musicas = [];
	$scope.albums = [];
	$scope.playlists = [];

	$scope.listaMusicas = [];

	$scope.novaMusica = {};
	$scope.openArtistas = false;
	$scope.openAlbum = "";

	$scope.musicaAddPlaylist = {};
	$scope.exibirPlaylist = false;


	$scope.musicasPlaylist = "";
	$scope.exibirMusica = false;
	
	$scope.adicionarMusica = function(novaMusica){
		var musicaExiste = false;
		var artistaExiste = false;
		angular.forEach($scope.musicas, function(musicaLista){
			if(musicaLista.album == novaMusica.album){
				musicaExiste = true;
			}
		})
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == novaMusica.artista){
				artistaExiste = true;
			}
		})
		if(!artistaExiste){
			alert('Artista nao existente');
		}
		else if(musicaExiste){
			alert('Musica ja existente no album');
		}else{
			var novoAlbum = {
				nome: novaMusica.album,
				artista: novaMusica.artista
			};
			$scope.musicas.push(novaMusica);
			$scope.albums.push(novoAlbum);
		}
			$scope.novaMusica = {};
	}

	$scope.adicionarArtista = function(novoArtista){
		var existe = false;
		angular.forEach($scope.artistas, function(artista){
			if(novoArtista.nome == artista.nome){
				existe = true;
				return;
			}
		})
		if(existe){
			alert('Artista ja existente no sistema');
		}else{
			var pushArtista = {
				nome: novoArtista.nome,
				foto: novoArtista.foto,
				favorito: false
			};
			$scope.artistas.push(pushArtista);
			alert('Artista adicionado');
		}
			$scope.novoArtista = {};
	}
	
	$scope.adicionarArtistaFavorito = function(artistaFavorito){
		angular.forEach($scope.artistas, function(artista){
			if(artistaFavorito == artista.nome){
				artista.favorito = true;
			}
		})
	}

	$scope.adicionarPlaylist = function(novaPlaylist){
		var existe = false;
		angular.forEach($scope.playlists, function(playlist){
			if(novaPlaylist == playlist.nome){
				existe = true;
				return;
			}
		})

		if(existe){
			alert('Playlist ja existe');
		}else{
			var pushPlaylist = {
				nome: novaPlaylist,
				musicas: []
			}
			$scope.playlists.push(pushPlaylist);
		}
			$scope.novaPlaylist.remove();
	}


	$scope.listarAlbums = function(nomeArtista){
		$scope.openArtistas = true;
		$scope.openAlbum = nomeArtista;
	}

	
	$scope.listarMusicas = function(nomeMusica){
		angular.forEach($scope.musicas, function(musica){
			if(musica.nome == nomeMusica){
				$scope.listaMusicas.push(musica);
			}
		})
	}

	$scope.removerArtistaFavorito = function(nomeArtista){
	if(confirm("Deseja mesmo remover?") == true){
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == nomeArtista){
				artista.favorito = false;
			}
		})
	}
	}



	$scope.exibirMusicasPlaylists = function(playlistNome){
		$scope.exibirMusica = true;
		$scope.musicasPlaylist = playlistNome;
	}


	$scope.exibirPlaylists = function(musica){
		$scope.musicaAddPlaylist = musica;
		$scope.exibirPlaylist = true;
	}

	$scope.adicionarNaPlaylist = function(musica, addPlaylist){
		var existe = false;
		angular.forEach($scope.playlists, function(playlist){
			if(playlist == addPlaylist){
				angular.forEach(playlist.musicas, function(musicaPlaylist){
					if(musicaPlaylist == musica){
						existe = true;
					}
				})
					if(!existe){
						playlist.musicas.push(musica);
						alert('Adicionado com sucesso');
						$scope.exibirPlaylist = false;
					}	
			}
		})

		if(existe){
			alert('Musica ja existe na playlist');
		}

	}

	$scope.removerMusicaPlaylist = function(musica, playlist){
		if(confirm("Deseja mesmo remover?") == true){
			playlist.musicas.pop(musica);
			alert('Musica removida');
		}
	}

	$scope.removerPlaylist = function(playlist){
		if(confirm("Deseja mesmo remover?") == true){
			$scope.playlists.pop(playlist);
			alert('Playlist removida');
		}
	}

	$scope.removerMusica = function(musica){
		if(confirm("Deseja mesmo remover?") == true){
			$scope.musicas.pop(musica);
			alert("Musica removida");
		}
	}
	
});