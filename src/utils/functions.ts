export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const getInitialAvatar = (fullName: string): string => {
  const nameArray = fullName.split(" "); // Split the full name into an array of words
  const firstName = nameArray[0]; // Get the first word
  const lastName = nameArray[1]; // Get the second word

  const avatar = firstName.charAt(0) + lastName.charAt(0); // Get the first character of each word

  return avatar;
}

export const hasNextItem = (array: any[], currentIndex: number) => {
  return array.length > currentIndex + 1;
}