function scrabbleScore(string){
    
    
    var letters = {
        A:1, F:4, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2,B:3, C:3, M:3, P:3, H:4, V:4, W:4, Y:4,K:5,J:8, X:8,
        Q:10, Z:10
    }
    if(string == '' || string == null || string == " \t\n"){
        return 0
    
    } else if (string.length >= 1){
        var input = string.toUpperCase().split('')
        var sum=0;
        input.forEach(function(item){
            sum = sum + letters[item]
        })
        return sum
    }
    
}