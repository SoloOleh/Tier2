/*
 1. Given weight in kg and height in metr.
 2. Return weight / (height * height) round to 2. 
 3. If given invalid arguments throw error with correct message.

 90, 1.9 => 24.93
 1.9, 90 => error 'weight must be first argument'
 90, 190 => error 'height must be in metr'
 -90, -1.9 => error 'weight and height must be more then 0'
 90 => error 'weight and height required'
 => error 'weight and height required'
 '90', '1.9' => 'weight and height must be number'
 */
import calcWeightIndex from "./calcWeightIndex.js";

describe("test calcWeightIndex function", () => {
  test("90, 1.9 => 24.93", () => {
    const result = calcWeightIndex(90, 1.9);
    expect(result).toBe(24.93);
    // const expect = result => {
    //     return {
    //         result,
    //         toBe(value) {
    //             return this.result === value;
    //         }
    //     }
    // }
  });

  test("1.9, 90 => error 'weight must be first argument'", () => {
    expect(() => calcWeightIndex(1.9, 90)).toThrow(
      "weight must be first argument"
    );
  });

  it("90, 190 => error 'height must be in metr'", () => {
    expect(() => calcWeightIndex(90, 190)).toThrow("height must be in metr");
  });

  test(" -90, -1.9 => error 'weight and height must be more then 0'", () => {
    expect(() => calcWeightIndex(-90, -1.9)).toThrow(
      "weight and height must be more then 0"
    );
  });

  test("  90 => error 'weight and height required'", () => {
    expect(() => calcWeightIndex(90)).toThrow("weight and height required");
    expect(() => calcWeightIndex()).toThrow("weight and height required");
  });

    test("'90', '1.9' => 'weight and height must be number'", () => {
    expect(() => calcWeightIndex('1.9', '90')).toThrow(
      'weight and height must be number'
    );
  });
});
