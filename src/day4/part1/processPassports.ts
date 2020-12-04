import validatePassport from "./validatePassport";

export interface Passport {
  ecl?: string;
  pid?: string;
  eyr?: string;
  hcl?: string;
  byr?: string;
  iyr?: string;
  cid?: string;
  hgt?: string;
}

const processPassports = (passports: Passport[]): number => {
  return passports.reduce((validPassports, passport) => {
    if (validatePassport(passport)) validPassports++;
    return validPassports;
  }, 0);
};

export default processPassports;
