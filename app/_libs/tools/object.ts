/**
 * 객체에서 undefined 또는 null 값을 제거합니다.
 * @param {T} data 제거할 객체
 * @returns {T} 제거된 객체
 */
export const removeUndefined = <T extends object>(data: T): T => {
  const copy = { ...data, };
  const keys = Object.keys(copy);

  keys.forEach((key) => {
    if (copy[key as keyof T] === undefined) {
      copy[key as keyof T] = '' as T[keyof T];
    }

    if (copy[key as keyof T] === null) {
      copy[key as keyof T] = '' as T[keyof T];
    }
  });

  return copy;
};
