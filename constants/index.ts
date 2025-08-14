export const APP_CONFIG = {
  name: 'Next.js Boilerplate',
  version: '1.0.0',
  description: 'Next.js 프로젝트를 위한 보일러플레이트',
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
  },
  users: '/api/users',
  posts: '/api/posts',
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const THEMES = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const;

export const STORAGE_KEYS = {
  theme: 'theme',
  user: 'user',
  token: 'token',
  settings: 'settings',
} as const;
