import { Passport } from "./processPassports";

const validatePassport = (passport: Passport): boolean => {
  const keys = Object.keys(passport);
  return keys.length === 8 || (keys.length === 7 && !keys.includes("cid"))
    ? true
    : false;
};

export default validatePassport;
