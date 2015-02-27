debugger;
var everything = function() {
  var mergeArrays = function(arr1, arr2) {
    var merged = [];

    //first merge in the first array
    for (var i=0; i<arr1.length; i++){
      merged.push(arr1[i]);
      merged.push(arr2[i]);
    }

    return merged;
  }


  var a = [1,2,3,4,5,6,7,8];
  var b = [10,20,30];
  var c = mergeArrays(a,b);

  console.log("and here is the answer");
  console.log(c);
}
everything();
