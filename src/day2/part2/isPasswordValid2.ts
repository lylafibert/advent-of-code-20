import { PasswordDetails, formatInput } from "../formatInput";
const isPasswordValid = (passwordString: string): boolean => {
  const { min, max, letter, password }: PasswordDetails = formatInput(
    passwordString
  );
  const index1 = min - 1;
  const index2 = max - 1;

  const firstNumIsLetter = password.charAt(index1) === letter;
  const secondNumIsLetter = password.charAt(index2) === letter;

  return (
    (firstNumIsLetter || secondNumIsLetter) &&
    !(firstNumIsLetter && secondNumIsLetter)
  );
};

export default isPasswordValid;
