export { tools, type Tools } from './tools';
export { validateShieldCookie } from './validateShieldCookie';
export { cn } from './cn';
export { toast } from './toast';
export { setMeta } from './setMeta';
export { db } from './db';
export { createResponse } from './createResponse';
export { createErrorResponse } from './createErrorResponse';
export { browserClient, serverClient } from './supabase';
export { genPassCode } from './genPassCode';
export { createLogger, logger } from './logger';

// 안전한 사용자 정보 추출 및 조회 함수
export async function createSafeUser(request: Request) {
  try {
    const { serverClient: getServerClient, } = await import('./supabase');
    const { client, } = getServerClient(request);
    const { data: { user, }, error, } = await client.auth.getUser();

    // 사용자가 없거나 에러가 있으면 false 리턴
    if (!user || error) {
      return false;
    }

    // authors 테이블에서 사용자 정보 조회 (otp_string 제외)
    const { data: author, error: authorError, } = await client
      .from('authors')
      .select('author_id, username, image, short_bio, bio, role, created_at, updated_at')
      .eq('author_id', user.id)
      .single();

    if (authorError || !author) {
      return false;
    }

    // supabase user 객체와 authors 테이블 정보를 합쳐서 안전한 객체 생성
    return {
      id: author.author_id,
      email: user.email, // supabase에서 가져온 최신 이메일
      email_confirmed_at: user.email_confirmed_at,
      last_sign_in_at: user.last_sign_in_at,
      username: author.username,
      image: author.image,
      short_bio: author.short_bio,
      bio: author.bio,
      role: author.role,
      created_at: author.created_at,
      updated_at: author.updated_at,
    };
  }
  catch (error) {
    console.error('createSafeUser error:', error);
    return false;
  }
}
