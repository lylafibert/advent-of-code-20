import { PasswordDetails, formatInput } from "../formatInput";
const isPasswordValid = (passwordString: string): boolean => {
  const { min, max, letter, password }: PasswordDetails = formatInput(
    passwordString
  );
  const letterInPassword: number = password.split(letter).length - 1;
  return min <= letterInPassword && letterInPassword <= max;
};

export default isPasswordValid;
