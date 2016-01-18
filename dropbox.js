function get_personal_info(token, done) {
	$.ajax({
		url: "https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer " + token,
		type: 'POST',
		success: function(data) {
			done(null, data)
		},
		error: function(error) {
			done(error, null);
		}
	})
}



function list_folder (token, path, recursive, include_media_info, include_deleted, done) {
   
	final_url = "https://api.dropboxapi.com/2/files/list_folder?authorization=Bearer " + token;

	var data = {
		recursive:recursive || false,
		include_media_info:include_media_info || false,
		include_deleted:include_deleted || false,
		path:path || ""
	};

	$.ajax({
		url: final_url,
		type: 'POST',
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			done(null, data);
		},
		dataType: "json",
		data: JSON.stringify(data),
		error: function(error) {
			done(error, null);
		}
	})
}

function get_shared_link (token, path, done) {

	if (path == null) {
		done("Not file or folder given", null);
	}

	var url = "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings?authorization=Bearer " + token;

	var data = {
		path: "/Comenzar.pdf",
	}

	$.ajax({
		url: url,
		type: 'POST',
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			done(null, data);
		},
		dataType: "json",
		data: JSON.stringify(data),
		error: function(error) {
			console.log(error);
			done(error, null);
		}
	})
}

function list_shared_links(token, done) {

	var url = "https://api.dropboxapi.com/2/sharing/list_shared_links?authorization=Bearer " + token;

	var data = {
		
	}

	$.ajax({
		url: url,
		type: 'POST',
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			done(null, data);
		},
		dataType: "json",
		data: JSON.stringify(data),
		error: function(error) {
			console.log(error);
			done(error, null);
		}
	})
}

function get_metadata (token, file, include_media_info, done) {

	var url = "https://api.dropboxapi.com/2/files/get_metadata?authorization=Bearer " + token;

	var data = {
		path: file || "",
		include_media_info: include_media_info || false
	};

	$.ajax({
		url: url,
		type: 'POST',
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function(data) {
			console.log(data);
			done(null, data);
		},
		error: function(error) {
			console.log(error);
			done(error, null);
		}
	})
}

function download_shared_link(token, url, done) {
   
	final_url = "https://content.dropboxapi.com/2/sharing/get_shared_link_file?authorization=Bearer " + token;

	var data = {
		url: "https://www.dropbox.com/sh/8pesxq81iegb1yi/AAAkFX6Nq7epChDA2IT-4_hra?dl=0",
	};

	$.ajax({
		url: final_url,
		type: 'POST',
		success: function(data) {
			console.log(data);
			done(null, data);
		},
		headers: {
			"Dropbox-API-Arg":JSON.stringify(data)
		},
		error: function(error) {
			console.log(error);
			done(error, null);
		}
	})	
}