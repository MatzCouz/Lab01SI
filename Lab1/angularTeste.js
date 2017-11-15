angular.module("webMusicas", []);
angular.module("webMusicas").controller("webMusicasController", function($scope){
	
	$scope.app = "Web Musicas";
	$scope.artistas = [];
	$scope.musicas = [];
	$scope.albums = [];
	$scope.playlists = [];


	$scope.listaAlbums = [];
	$scope.listaMusicas = [];
	/*
	$scope.adicionarMusica = function(novaMusica){
		var musicaExiste = false;
		angular.forEach($scope.musicas, function(musica){
			if(musica.album == novaMusica.album){
				musicaExiste = true;
			}
		})
		if(musicaExiste){
			alert('Musica ja existe');
		}else{
			var novoAlbum = {
				nome: musica.album,
				artista: musica.artista
			};
			$scope.musicas.push(novaMusica);
			$scope.albums.push(novoAlbum);
		}
	}

	*/
	$scope.adicionarArtista = function(novoArtista){
		alert('waokokwa');
		var existe = false;
		angular.forEach($scope.artistas, function(artista){
			if(novoArtista == artista.nome){
				existe = true;
				return;
			}
		})
		if(existe){
			alert('Artista ja existe');
		}else{
			var pushArtista = {
				nome: novoArtista,
				favorito: false
			};
			$scope.artistas.push(pushArtista);
			alert('artista adc');
		}
	}
	/*
	$scope.adicionarArtistaFavorito = function(artistaFavorito){
		angular.forEach($scope.artistas, function(artista){
			if(artistaFavorito == artista){
				artista.favorito = true;
			}
		})
	}

	$scope.adicionarPlaylist = function(novaPlaylist){
		var existe = false;
		angular.forEach($scope.playlists), function(playlist){
			if(novaPlaylist == playlist.nome){
				existe = true;
				return;
			}
		}

		if(existe){
			alert('Playlist ja existe');
		}else{
			var pushPlaylist = {
				nome: novaPlaylist,
				musicas: []
			}
			$scope.playlists.push(pushPlaylist);
		}
	}


	$scope.listarAlbums = function(nomeArtista){
		angular.forEach($scope.playlists, function(album){
			if(nomeArtista == album.artista){
				$scope.listaAlbums.push(album);
			}
		})
	}
	
	$scope.listarMusicas = function(nomeMusica){
		angular.forEach($scope.musicas, function(musica){
			if(musica.nome == nomeMusica){
				$scope.listaMusicas.push(musica);
			}
		})
	}*/
});