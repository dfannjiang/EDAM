function search_iucn(query, api_dfd, results) {
var cleaned=[];

var jqXHR=$.ajax({
	url: "http://apiv3.iucnredlist.org/api/v3/species/+"query+"?token=49a8a2b7e481a521cb4c4c5360044de9a81c5fac89bd5db1db80f733e93126db"


}

	).done(function(data){
    
   
		
		if(data.result.length>0) {
				var info = data.result[0];
		 var taxon = [info.kingdom, info.phylum, info.order, info.family, info.genus];
		results['iucn'] = {'name': query, 'taxonomy': taxon.join(), 'database': 'IUCN'};
		
		}
	
	api_dfd.resolve();
	});

}

function count_iucn(api_dfd, results) {
	var jqXHR=$.ajax({
	url: "http://apiv3.iucnredlist.org/api/v3/species/"+query+"?token=49a8a2b7e481a521cb4c4c5360044de9a81c5fac89bd5db1db80f733e93126db"


}

	).done(function(data){
    
    
		
		if(data.result.length>0) {
				var info = data.result[0];
		 var taxon = [info.kingdom, info.phylum, info.order, info.family, info.genus];
		results['iucn'] = {'count': 1, 'database': 'IUCN'};
		
		}
		else {
			results['iucn'] = {'count': 1, 'database': 'IUCN'};
		}
		api_dfd.resolve();
	});
	
}

function locationsearch_iucn(query, location, api_dfd, results) {
	var jqXHR=$.ajax({
	url: "http://apiv3.iucnredlist.org/api/v3/species/countries/name/"+query+"?token=49a8a2b7e481a521cb4c4c5360044de9a81c5fac89bd5db1db80f733e93126db"


}
).done(function(data){
		if (data.result == 0) {
			results['iucn'] = {'count' : 0, 'location': location, 'database': 'IUCN'};
		}
		else {
			var countries = data.result;
			var has = false;
			$.each(countries, function(i, v) {
				if (v.country === location) {
					results['iucn'] = {'count' : 1, 'location': location, 'database': 'IUCN'};
					has = true;
					break;
				}
			
			});
			if (!has) {
				results['iucn'] = {'count' : 0, 'location': location, 'database': 'IUCN'};
			}
		}
		api_dfd.resolve();
});

}