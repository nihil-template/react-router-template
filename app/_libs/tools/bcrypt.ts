import { compare, hash } from 'bcryptjs';

/**
 * 데이터를 해시합니다.
 * @param {string} data 해시할 데이터
 * @returns {string} 해시된 데이터
 */
export const hashData = async (data: string): Promise<string> => {
  return hash(data, 10);
};

/**
 * 데이터를 비교합니다.
 * @param {string} data 비교할 데이터
 * @param {string} hashedData 비교할 해시된 데이터
 * @returns {boolean} 비교 결과
 */
export const compareData = async (data: string, hashedData: string): Promise<boolean> => {
  return compare(data, hashedData);
};
