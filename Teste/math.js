A = [1,2,3,4,5,6]

function squareSUMarray(array)
sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += Math.Pow(array[i])
        
    }
return sum
}

console.log(squareSUMarray(A))