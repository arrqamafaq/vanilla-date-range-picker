export default function Button({ text = "", className = "" }) {
  const button = document.createElement("button");
  button.className = `px-3 py-2  rounded-xl ${className} cursor-pointer hover:opacity-[.9] active:scale-[.99]`;
  button.textContent = text;

  return button;
}
