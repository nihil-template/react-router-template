import { createCookie } from 'react-router';

/**
 * 쿠키를 설정합니다.
 * @param {string} name 쿠키 이름
 * @param {string} value 쿠키 값
 * @param {number} expiresAt 쿠키 만료 시간
 * @returns {string} 쿠키 값
 */
export const setCookie = async (name: string, value: string, expiresAt: number): Promise<string> => {
  const cookie = createCookie(name, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: expiresAt,
  });

  return await cookie.serialize(value);
};

/**
 * 쿠키를 가져옵니다.
 * @param {string} name 쿠키 이름
 * @param {string | null} cookieHeader 쿠키 헤더
 * @returns {T | null} 쿠키 값
 */
export const getCookie = async <T>(name: string, cookieHeader: string | null): Promise<T | null> => {
  if (!cookieHeader) {
    return null;
  }

  const cookie = createCookie(name);
  const value = await cookie.parse(cookieHeader);

  if (!value) {
    return null;
  }

  return value as T;
};

/**
 * 쿠키를 제거합니다.
 * @param {string} name 쿠키 이름
 * @returns {string} 쿠키 값
 */
export const removeCookie = async (name: string): Promise<string> => {
  const cookie = createCookie(name, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0, // 즉시 만료
  });

  return await cookie.serialize('');
};
