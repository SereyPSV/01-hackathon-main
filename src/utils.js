export const modulesItem = [
  { tipe: "1", text: "Считать клики (за 3 секунды)" },
  { tipe: "2", text: "Создать фигуру" },
  { tipe: "3", text: "Поменять цвет" },
  { tipe: "4", text: "Вызвать сообщение" },
];

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function creationFigure(height, width, BCGColor, borderRadius) {
  const figure = document.createElement("div");
  figure.className = "figure";
  figure.style.height = `${height}px`;
  figure.style.width = `${width}px`;
  figure.style.backgroundColor = BCGColor;
  figure.style.borderRadius = borderRadius;
  figure.style.position = "fixed";
  figure.style.textAlign = "center";
  figure.style.zIndex = "1000";
  return figure;
}
