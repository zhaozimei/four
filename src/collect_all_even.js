
function collect_same_elements(collection_a, object_b) {
  var arr = [];
	var k = 0;
	for(var i=0; i<collection_a.length; i++){
	    k = collection_a[i].key
	   	for(var j=0; j<object_b.value.length; j++){
			     if(object_b.value[j] == k){
				    arr.push(k)
			      }
		   }
	}	
return arr;

}

module.exports = collect_same_elements;
