export interface PasswordDetails {
  letter: string;
  min: number;
  max: number;
  password: string;
}
export const formatInput = (input: string): PasswordDetails => {
  let i: number;

  let minString: string = input.charAt(0);

  if (input.charAt(1) !== "-") {
    minString += input.charAt(1);
    i = 3;
  } else {
    i = 2;
  }
  const min: number = parseInt(minString);
  let maxString: string = input.charAt(i);

  if (input.charAt(i + 1) !== " ") {
    maxString += input.charAt(i + 1);
    i += 3;
  } else {
    i += 2;
  }

  const max: number = parseInt(maxString);
  const letter = input.charAt(i);
  const password = input.slice(i + 3);

  return { letter, min, max, password };
};
