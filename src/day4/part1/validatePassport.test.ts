import validatePassport from "./validatePassport";
import { Passport } from "./processPassports";

const validPassports: Passport[] = [
  {
    ecl: "gry",
    pid: "860033327",
    eyr: "2020",
    hcl: "#fffffd",
    byr: "1937",
    iyr: "2017",
    cid: "147",
    hgt: "183cm",
  },
  {
    hcl: "#ae17e1",
    iyr: "2013",
    eyr: "2024",
    ecl: "brn",
    pid: "760753108",
    byr: "1931",
    hgt: "179cm",
  },
];

const invalidPassports: Passport[] = [
  {
    iyr: "2013",
    ecl: "amb",
    cid: "350",
    eyr: "2023",
    pid: "028048884",
    hcl: "#cfa07d",
    byr: "1929",
  },
  {
    hcl: "#cfa07d",
    eyr: "2025",
    pid: "166559648",
    iyr: "2011",
    ecl: "brn",
    hgt: "59in",
  },
];

describe("validatePassport", () => {
  it("returns false if Passport is invalid", () => {
    invalidPassports.forEach((passport) =>
      expect(validatePassport(passport)).toEqual(false)
    );
  });
  it("returns true if Passport is valid", () => {
    validPassports.forEach((passport) =>
      expect(validatePassport(passport)).toEqual(true)
    );
  });
});
