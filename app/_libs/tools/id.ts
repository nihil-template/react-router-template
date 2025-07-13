import { createId as createCuid } from '@paralleldrive/cuid2';
import { v4 as uuidv4 } from 'uuid';

/**
 * CUID를 생성합니다.
 * @returns {string} CUID
 */
export const cuid = (): string => createCuid();

/**
 * UUID를 생성합니다.
 * @param {string} key 키
 * @returns {string} UUID
 */
export const uuid = (key?: string): string => {
  if (key) {
    return `${key}-${uuidv4()}`;
  }

  return uuidv4();
};
