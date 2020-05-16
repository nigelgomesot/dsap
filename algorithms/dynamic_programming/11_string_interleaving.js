export default class StingInterleaving {
  constructor(str1, str2, str3) {
    this.str1 = str1;
    this.str2 = str2;
    this.str3 = str3;
  }

  isTrue() {
    const truthMatrix = new Array(this.str1.length + 1).fill(null).map(() => new Array(this.str2.length + 1));

    truthMatrix[0][0] = 1;

    for (let row = 1; row <= this.str1.length; row++) {
      if (this.str1[row - 1] != this.str3[row - 1]) {
        truthMatrix[row][0] = 0;
      } else {
        truthMatrix[row][0] = truthMatrix[row - 1][0];
      }
    }

    for (let col = 1; col <= this.str2.length; col++) {
      if (this.str2[col - 1] != this.str3[col - 1]) {
        truthMatrix[0][col] = 0;
      } else {
        truthMatrix[0][col] = truthMatrix[0][col - 1];
      }
    }

    for (let row = 1; row <= this.str1.length; row++) {
      for (let col = 1; col <= this.str2.length; col++) {
        if (this.str1[row - 1] === this.str3[row + col - 1] && this.str2[col - 1] != this.str3[row + col - 1]) {
          truthMatrix[row][col] = truthMatrix[row - 1][col];

        } else if (this.str1[row - 1] != this.str3[row + col - 1] && this.str2[col - 1] === this.str3[row + col - 1]) {
          truthMatrix[row][col] = truthMatrix[row][col - 1];

        } else if (this.str1[row - 1] === this.str3[row + col - 1] && this.str2[col - 1] === this.str3[row + col - 1]) {
          truthMatrix[row][col] = (truthMatrix[row - 1][col] || truthMatrix[row][col - 1]);
        } else {
          truthMatrix[row][col] = 0;
        }
      }
    }

    console.log(truthMatrix);
    return truthMatrix[this.str1.length][this.str2.length];
  }
}
