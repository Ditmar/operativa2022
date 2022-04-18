class Floyd {
    constructor(matrix) {
        this.matrix = [];
        this.copyMatrix(matrix);
        this.path = [];
    }
    copyMatrix = (matrix) => {
        for(let i = 0; i < matrix.length; i++) {
            let vector = matrix[i];
            this.matrix.push([...vector]);
        }
        console.log(this.matrix);
    }
    solve = () => {
        for(let i = 0; i < this.matrix.length; i++) {
            let pathData = [];
            for(let j = 0; j < this.matrix.length; j++) {
                pathData.push(j);
            }
            this.path.push(pathData);
        }
        for (let k = 0; k < this.matrix.length; k++) {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix.length; j++) {
                    if (this.matrix[i][k] + this.matrix[k][j] < this.matrix[i][j]) {
                        this.matrix[i][j] = this.matrix[i][k] + this.matrix[k][j];
                        this.path[i][j] = k;
                    }
                }
            }
        }
        console.log(this.matrix);
        console.log(this.path);
        return {matrix: this.matrix, path: this.path};
    }

}
export default Floyd;