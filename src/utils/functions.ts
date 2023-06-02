export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
