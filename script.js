//your JS code here. If required.
function secondHighest(arr) {
  // If the array has fewer than 2 elements, return -Infinity
  if (arr.length < 2) return -Infinity;

  // Create a Set to remove duplicates
  let unique = [...new Set(arr)];

  // If all elements are the same, return -Infinity
  if (unique.length < 2) return -Infinity;

  // Sort in descending order
  unique.sort((a, b) => b - a);

  // Return the second element
  return unique[1];
}
