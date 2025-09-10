const expect = (val) => {
  return {
    toBe: (i) => {
      if (val === i) return true;
      throw new Error(`Not Equal`);
    },
    notToBe: (i) => {
      if (val !== i) return true
      throw new Error(`Equal`);
    },
  };
};