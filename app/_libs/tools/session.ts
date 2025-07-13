import { createCookieSessionStorage } from 'react-router';
import type { SessionStorage, Session as SessionType } from 'react-router';

/**
 * 세션 스토리지를 생성합니다.
 * @param {string} name 세션 이름
 * @param {number} maxAge 세션 만료 시간
 * @returns {SessionStorage<T, F>} 세션 스토리지
 */
export const createSessionStorage = <T = any, F = any>(name: string, maxAge: number): SessionStorage<T, F> => {
  return createCookieSessionStorage<T, F>({
    cookie: {
      name,
      httpOnly: true,
      maxAge,
      path: '/',
      sameSite: 'strict',
      secrets: [ process.env.SESSION_SECRET || 'DEFAULT_SESSION_SECRET', ],
      secure: process.env.NODE_ENV === 'production',
    },
  });
};

/**
 * 세션을 가져옵니다.
 * @param {SessionStorage<T, F>} sessionStorage 세션 스토리지
 * @param {Request} request 요청
 * @returns {Promise<Session<T, F> | null>} 세션
 */
export const getSession = <T = any, F = any>(sessionStorage: SessionStorage<T, F>, request: Request): Promise<SessionType<T, F> | null> => {
  return sessionStorage.getSession(request.headers.get('Cookie'));
};

/**
 * 세션을 커밋합니다.
 * @param {SessionStorage<T, F>} sessionStorage 세션 스토리지
 * @param {SessionType<T, F>} session 세션
 * @returns {Promise<string>} 세션 쿠키
 */
export const commitSession = <T = any, F = any>(sessionStorage: SessionStorage<T, F>, session: SessionType<T, F>): Promise<string> => {
  return sessionStorage.commitSession(session);
};

/**
 * 세션을 제거합니다.
 * @param {SessionStorage<T, F>} sessionStorage 세션 스토리지
 * @param {SessionType<T, F>} session 세션
 * @returns {Promise<string>} 세션 제거
 */
export const destroySession = <T = any, F = any>(sessionStorage: SessionStorage<T, F>, session: SessionType<T, F>): Promise<string> => {
  return sessionStorage.destroySession(session);
};
