export function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return;
  }

  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
  }

  return split.join(" ");
}

console.log(capitalizeFirstLetter("take it from me"));
// Output: "Take It From Me"
