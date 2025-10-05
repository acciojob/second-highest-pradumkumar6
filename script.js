function secondHighest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return -Infinity;

  // Find the highest and second highest manually
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  // If no valid second-highest found (all same)
  return second === -Infinity ? -Infinity : second;
}
