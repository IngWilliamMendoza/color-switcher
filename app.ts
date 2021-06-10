const coloresHexageximales: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const boton = document.getElementById("btn")!;
const color = document.querySelector(".color")!;

function getRandonNumber(lista: Array<string>) {
  return Math.floor(Math.random() * lista.length);
}

function generateColor(update: (color: string) => void) {
  let hexag: string = "#";
  for (let i = 0; i < 6; i++) {
    hexag += coloresHexageximales[getRandonNumber(coloresHexageximales)];
  }
  update(hexag);
}

boton.addEventListener("click", () => {
  generateColor((x) => {
    color.textContent = x;
    document.body.style.backgroundColor = x;
  });
});
