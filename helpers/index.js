export function setLabelColor(color) {
  let { hex } = color;
  hex = hex.replace("#", "");
  let red = parseInt(hex.substring(0, 2), 16);
  let green = parseInt(hex.substring(2, 4), 16);
  let blue = parseInt(hex.substring(4, 6), 16);

  if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
    return "#222";
  } else {
    return "#f9f9f9";
  }
}
