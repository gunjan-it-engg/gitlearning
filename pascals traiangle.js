function getPascalsTriangle(a) {
    n=10
    var arr = {};
    for(var row = 0; row < n; row++) {
        arr[row] = [];
        for(var col = 0; col < row+1; col++) {
            if(col === 0 || col === row) {
                arr[row][col] = 1;
            } else {
                arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
            }         
        }       
    }   

    for(let pt in arr){
        if(arr[pt].join(',').includes(a.join(','))){
            const val = arr[pt][a.length]
            return val
        }
        
    }
    return arr;
}
console.log(getPascalsTriangle([1,3]));