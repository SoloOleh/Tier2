const calcWeightIndex = (weight, height) => {
    if(weight === undefined || height === undefined) {
        throw new Error("weight and height required")
    }

    if(typeof weight !== "number" || typeof height !== "number") {
        throw new Error('weight and height must be number')
    }

    if(weight <= 0 || height <= 0) {
        throw new Error('weight and height must be more then 0')
    }

  if (weight > 3 && height > 3) {
    throw new Error("height must be in metr");
  }

  if (height > weight) {
    throw new Error("weight must be first argument");
  }

  const result = weight / height ** 2;
  return Number(result.toFixed(2));
};

export default calcWeightIndex;
