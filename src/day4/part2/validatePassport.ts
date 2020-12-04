import { Passport } from "./processPassports";

const validatePassport = (passport: Passport): boolean => {
  const keys = Object.keys(passport);
  if (keys.length < 7 || (keys.length === 7 && keys.includes("cid")))
    return false;

  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
  return (
    validateBirthYear(byr) &&
    validateIssueYear(iyr) &&
    validateExpirationYear(eyr) &&
    validateHeight(hgt) &&
    validateHairColour(hcl) &&
    validateEyeColour(ecl) &&
    validatePassportId(pid)
  );
};

export const validateBirthYear = (yearString: string): boolean => {
  return validateYear(1920, 2002, yearString);
};
const validateIssueYear = (yearString: string): boolean => {
  return validateYear(2010, 2020, yearString);
};
const validateExpirationYear = (yearString: string): boolean => {
  return validateYear(2020, 2030, yearString);
};

export const validateHeight = (heightString: string): boolean => {
  const length = heightString.length;
  const metric = heightString.slice(length - 2);
  const height: number = +heightString.slice(0, length - 2);

  if (metric === "cm") {
    return 150 <= height && height <= 193;
  } else if (metric === "in") {
    return 59 <= height && height <= 76;
  }
  return false;
};

export const validateHairColour = (hairColour: string): boolean => {
  if (hairColour[0] !== "#" || hairColour.length !== 7) return false;
  const regex = new RegExp("^[a-fA-F0-9]*$");
  return regex.test(hairColour.slice(1));
};

export const validateEyeColour = (eyeColour: string): boolean => {
  const validColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return validColours.includes(eyeColour);
};

export const validatePassportId = (id: string): boolean => {
  return id.length === 9 && !isNaN(+id);
};

export const validateYear = (
  min: number,
  max: number,
  yearString: string
): boolean => {
  const year: number = +yearString;
  return min <= year && year <= max;
};

export default validatePassport;
