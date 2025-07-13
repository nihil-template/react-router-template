export interface ApiResponse<T> {
  success: true;
  result: T;
  status: number;
  message: string;
}

export interface ApiError {
  success: false;
  result: null;
  status: number;
  message: string;
  errors?: Record<string, string[] | undefined>;
}

type OpenGraphType = 'article' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'profile' | 'website' | 'video.tv_show' | 'video.other' | 'video.movie' | 'video.episode';

export interface SiteMetadata {
  title: string;
  url: string;
  description?: string;
  author?: string;
  keywords?: string;
  type?: OpenGraphType;
  tags?: string;
  section?: string;
  created?: string;
  updated?: string;
  imageLink?: string;
  imageAlt?: string;
  robots?: 'index, follow' | 'noindex, nofollow' | 'index, nofollow' | 'noindex, follow';
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  type: OpenGraphType;
  cover: {
    link: string;
    alt: string;
  };
  logo: string;
  darkLogo: string;
  keywords: string;
  author: {
    name: string;
    url: string;
  };
  version: string;
  googleVerfi: string;
  googleAdSrc: string;
  googleAnalyticsId: string;
  apiRoute: string;
}

export interface Menu {
  name: string;
  path: string;
  icon?: string;
  children?: Menu[];
}

export interface SessionData {
  passcode: string;
  shieldPassed: number;
  redirectTo?: string;
}
