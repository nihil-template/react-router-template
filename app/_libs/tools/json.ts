/**
 * 데이터를 JSON 문자열로 변환합니다.
 * @param {T} data 변환할 데이터
 * @returns {string} JSON 문자열
 */
export const stringify = <T>(data: T): string => {
  return JSON.stringify(data);
};

/**
 * JSON 문자열을 객체로 변환합니다.
 * @param {string} stringData JSON 문자열
 * @returns {T} 객체
 */
export const parse = <T>(stringData: string): T => {
  return JSON.parse(stringData);
};
