var Dropbox = function(CLIENT_ID, redirect_uri) {
	this.token;
	
	//CLIENT_ID = 9slwxgfxcbmjxh9
	//redirect_uri = https://localhost
	
	this.href = "https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=" + CLIENT_ID + "&redirect_uri=" + redirect_uri;

	/**
	 * Mejorar auth method
	 */
	this.setUpDropbox = function () {
		var cookies = document.cookie;
		if (cookies != "") {
			console.log('already logged');
			this.token = cookies.slice(cookies.indexOf('=') + 1);
			return true;
		} else if (window.location.toString().search("access_token")!=-1){
			access_token = window.location.toString().split('#')[1].split('&')[0].split('=')[1];
			document.cookie ="dropbox_id="+access_token;
			this.token = access_token;
			console.log("just logged");
			return true;
		} else {
			console.log("no logged");
			return false;
		}
	}

	this.get_personal_info = function (done) {
		var xhr = new XMLHttpRequest();
		var url = "https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer " + this.token;
		xhr.open("POST", url, true);
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		xhr.send();
	}

	this.list_folder = function (path, recursive, include_media_info, include_deleted, done) {
		
		var data = {
			recursive:recursive || false,
			include_media_info:include_media_info || false,
			include_deleted:include_deleted || false,
			path:path || ""
		};

		xhr = new XMLHttpRequest();
		var url = "https://api.dropboxapi.com/2/files/list_folder?authorization=Bearer " + this.token;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

	this.get_shared_link = function (path, done) {

		if (path == null) {
			done("Not file or folder given", null);
		}

		var data = {
			path: path,
		}

		xhr = new XMLHttpRequest();
		var url = "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings?authorization=Bearer " + this.token;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

	this.list_shared_links = function (done) {

		var data = {
			
		}

		xhr = new XMLHttpRequest();
		var url = "https://api.dropboxapi.com/2/sharing/list_shared_links?authorization=Bearer " + this.token;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

	this.get_metadata = function (file, include_media_info, done) {

		var url = "https://api.dropboxapi.com/2/files/get_metadata?authorization=Bearer " + this.token;
		var data = {
			path: file || "",
			include_media_info: include_media_info || false
		};

		xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

	this.download_shared_link = function (url, done) {
	   
		url = "https://content.dropboxapi.com/2/sharing/get_shared_link_file?authorization=Bearer " + this.token;

		var data = {
			url: url,
		};

		xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4) {
		    	if (xhr.status == 200) {
		    		var json = JSON.parse(xhr.responseText);
		        	done(null, json);
		    	} else {
		    		done(xhr.statusText);
		    	}
		    }
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

}
