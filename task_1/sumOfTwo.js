
function sumOfTwo(array1, array2, x) {

   var flag = false
   var longerArr = array1.length>=array2.length ? array1.length : array2.length
    
    var arr = []
    var arr1 = []
   
    if (longerArr == array1.length) {

        arr = array1
        arr1 = array2
        } else {
            arr = array2
            arr1 = array1
            }
    for (i=0; i<longerArr; i++) {
        var num = x - arr[i]
        if (num<0){

            } else {

                res = arr1.indexOf(num)
                if (res !=-1) {
                    flag = true
                    }
                    }
        }

            return flag
  
}
