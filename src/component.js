export default (text = "Hello Webpack") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};