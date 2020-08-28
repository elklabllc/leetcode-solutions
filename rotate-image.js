/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Rotate the matrix layer by layer
    for(let i = 0; i < matrix.length/2; i++){
        // Start where the appropariet layer/loop starts
        for(let j = i; j < matrix.length-i-1; j++){
            // Store current value as to not lose it
            let tempVal = matrix[i][j];

            let it = matrix.length-i-1;
            let jt = matrix.length-j-1;

            matrix[i][j] = matrix[jt][i];
            matrix[jt][i] = matrix[it][jt];
            matrix[it][jt] = matrix[j][it]
            matrix[j][it] = tempVal;

        }
    }
    return matrix;
};