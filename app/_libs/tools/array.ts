/**
 * 배열을 잘라서 2차원 배열로 반환합니다.
 * @param {T[]} array 잘라낼 배열
 * @param {number} number 잘라낼 개수
 * @returns {T[][]} 2차원 배열
 */
export const sliceArray = <T>(array: T[], number: number): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += number) {
    result.push(array.slice(i, i + number));
  }

  return result;
};

/**
 * 1부터 시작하는, 지정한 수만큼의 수 배열을 반환합니다.
 * @param {number} number 숫자
 * @returns {number[]} 수 배열
 */
export const nArray = (number: number): number[] => {
  return Array.from(
    { length: number, },
    (_, i) => i + 1
  );
};

/**
 * 숫자 1 에서 숫자 2 까지의 숫자 배열을 반환합니다.
 * @param {number} number1
 * @param {number} number2
 * @returns {number[]}
 */
export const range = (number1: number, number2: number): number[] => {
  return Array.from(
    { length: number2 - number1 + 1, },
    (_, i) => number1 + i
  );
};
