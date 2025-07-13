import type { SiteConfig } from '@/_entities/common';

// 아래 항목들을 프로젝트에 맞게 채워주세요.
// 각 항목별 예시와 설명은 주석으로 안내합니다.

export const siteConfig: SiteConfig = {
  // 사이트 제목 (예: 'My Blog')
  title: '',

  // 사이트 설명 (예: '개발자들의 지식과 경험을 공유하는 블로그 플랫폼입니다.')
  description: '',

  // 주요 키워드 (쉼표로 구분, 예: '블로그,개발,React')
  keywords: '',

  // 작성자 정보
  author: {
    // 작성자 이름 (예: '홍길동')
    name: '',
    // 작성자 또는 팀의 URL (예: 'https://github.com/username')
    url: '',
  },

  // 사이트 타입 (OpenGraphType: 'website', 'article', 'book', ...)
  // 기본값은 'website'로 두고, 필요시 변경하세요.
  type: 'website',

  // 배포/개발 환경에 따라 URL을 지정하세요.
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '', // 운영 URL을 입력하세요.

  // 대표 커버 이미지 정보
  cover: {
    link: '', // 예: '/opengraph-image.png'
    alt: '', // 예: '사이트 대표 이미지 설명'
  },

  // 로고 이미지 경로
  logo: '',
  darkLogo: '',

  // 버전 정보 (예: 'v1.0.0')
  version: '',

  // 구글 인증/광고/애널리틱스 등 필요시 입력
  googleVerfi: '',
  googleAdSrc: '',
  googleAnalyticsId: '',

  // API 라우트 자동 생성 (url 값 기반)
  get apiRoute() {
    return `${this.url}/api`;
  },
};
