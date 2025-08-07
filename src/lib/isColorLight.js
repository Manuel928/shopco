export default function isColorLight(hex) {
  const rgb = hex.replace("#", "").match(/.{2}/g).map(x => parseInt(x, 16));
  const [r, g, b] = rgb;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 186; // higher means lighter
}
