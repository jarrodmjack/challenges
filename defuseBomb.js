var decrypt = function(code, k) {

    let i = 0
    
    const output = []
    const length = code.length
    let loops = Math.abs(k)

    while (output.length < code.length) {

        if (k > 0) {
            let sum = 0
            for(let j = 1; j <= loops; j++) {
                sum += code[(i+j) % length]
            }
            output[i] = sum
        } else if (k < 0) {
            let sum = 0
            for(let j = 1; j <= loops; j++) {
                sum += code[(i - j + length) % length]
            }
            output[i] = sum
        } else {
            output[i] = 0
        }

        i++

    }

    return output
    
};
