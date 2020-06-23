export default function maxSubArraySum(array) {
  let maxSum = 0;
  let currentSum = 0;

  array.forEach(number => {
    currentSum = currentSum + number;

    if (currentSum < 0) currentSum = 0;

    if (maxSum < currentSum) maxSum = currentSum;
  })

  return maxSum;
}
