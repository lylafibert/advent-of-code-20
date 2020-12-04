import validatePassport, {
  validateBirthYear,
  validateHeight,
  validateHairColour,
  validateEyeColour,
  validatePassportId,
} from "./validatePassport";
import { Passport } from "./processPassports";

const validPassports: Passport[] = [
  {
    pid: "087499704",
    hgt: "74in",
    ecl: "grn",
    iyr: "2012",
    eyr: "2030",
    byr: "1980",
    hcl: "#623a2f",
  },
  {
    eyr: "2029",
    ecl: "blu",
    cid: "129",
    byr: "1989",
    iyr: "2014",
    pid: "896056539",
    hcl: "#a97842",
    hgt: "165cm",
  },
  {
    hcl: "#888785",
    hgt: "164cm",
    byr: "2001",
    iyr: "2015",
    cid: "88",
    pid: "545766238",
    ecl: "hzl",
    eyr: "2022",
  },
  {
    iyr: "2010",
    hgt: "158cm",
    hcl: "#b6652a",
    ecl: "blu",
    byr: "1944",
    eyr: "2021",
    pid: "093154719",
  },
];

const invalidPassports: Passport[] = [
  {
    eyr: "1972",
    cid: "100",
    hcl: "#18171d",
    ecl: "amb",
    hgt: "170",
    pid: "186cm",
    iyr: "2018",
    byr: "1926",
  },
  {
    iyr: "2019",
    hcl: "#602927",
    eyr: "1967",
    hgt: "170cm",
    ecl: "grn",
    pid: "012533040",
    byr: "1946",
  },
  {
    hcl: "dab227",
    iyr: "2012",
    ecl: "brn",
    hgt: "182cm",
    pid: "021572410",
    eyr: "2020",
    byr: "1992",
    cid: "277",
  },
  {
    hgt: "59cm",
    ecl: "zzz",
    eyr: "2038",
    hcl: "74454a",
    iyr: "2023",
    pid: "3556412378",
    byr: "2007",
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

describe("validateBirthYear", () => {
  it("returns false if year is invalid", () => {
    expect(validateBirthYear("2003")).toEqual(false);
    expect(validateBirthYear("1919")).toEqual(false);
  });
  it("returns true if  year is valid", () => {
    expect(validateBirthYear("2002")).toEqual(true);
    expect(validateBirthYear("1920")).toEqual(true);
  });
});

describe("validateHeight", () => {
  it("returns false if height is invalid", () => {
    expect(validateHeight("190in")).toEqual(false);
    expect(validateHeight("190")).toEqual(false);
  });
  it("returns true if height is valid", () => {
    expect(validateHeight("190cm")).toEqual(true);
    expect(validateHeight("60in")).toEqual(true);
  });
});

describe("validateHairColour", () => {
  it("returns false if hair colour is invalid", () => {
    expect(validateHairColour("#123abz")).toEqual(false);
    expect(validateHairColour("123abc")).toEqual(false);
  });
  it("returns true if hair colour is valid", () => {
    expect(validateHairColour("#123abc")).toEqual(true);
  });
});

describe("validateEyeColour", () => {
  it("returns false if eye colour is invalid", () => {
    expect(validateEyeColour("wat")).toEqual(false);
    expect(validateEyeColour("fo1")).toEqual(false);
  });
  it("returns true if eye colour is valid", () => {
    expect(validateEyeColour("brn")).toEqual(true);
    expect(validateEyeColour("grn")).toEqual(true);
  });
});

describe("validatePassportId", () => {
  it("returns false if id is invalid", () => {
    expect(validatePassportId("0123456789")).toEqual(false);
    expect(validatePassportId("01234y6789")).toEqual(false);
  });
  it("returns true if id is valid", () => {
    expect(validatePassportId("000000001")).toEqual(true);
  });
});
