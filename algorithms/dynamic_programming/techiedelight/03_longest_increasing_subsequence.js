// REF: https://www.techiedelight.com/longest-increasing-subsequence-using-dynamic-programming/

export function lisLength(array) {
  const maxLength =  array.length;
  const lis = new Array(maxLength).fill(-9999);

  lis[0] = 1;

  for (let i = 1; i < maxLength; i++) {
    for (let j = 0; j < i; j++) {

      if (array[j] < array[i] && lis[j] > lis[i]) {
        lis[i] = lis[j];
      }
    }

    lis[i] += 1;
  }

  console.log(lis);

  return Math.max(...lis);
}
