import isPasswordValid from "./isPasswordValid2";

const getValidPasswordNumber = (input: string[]): number => {
  return input.reduce((validNumber, password) => {
    return isPasswordValid(password) ? validNumber + 1 : validNumber;
  }, 0);
};

export default getValidPasswordNumber;
