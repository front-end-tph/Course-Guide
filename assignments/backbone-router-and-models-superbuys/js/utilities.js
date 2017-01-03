   String.prototype.capitalizeFirstLetter = function() {
       return this.charAt(0).toUpperCase() + this.slice(1);
   }


var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}
