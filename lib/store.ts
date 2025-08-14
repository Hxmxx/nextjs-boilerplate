import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 사용자 타입
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// 앱 설정 타입
interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  language: 'ko' | 'en';
  notifications: boolean;
}

// 인증 상태 타입
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// UI 상태 타입
interface UIState {
  isLoading: boolean;
  sidebarOpen: boolean;
  modalOpen: boolean;
}

// 전체 앱 상태
interface AppState extends AuthState, UIState {
  settings: AppSettings;
}

// 액션들
interface AppActions {
  // 인증 관련
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  
  // UI 관련
  setLoading: (loading: boolean) => void;
  toggleSidebar: () => void;
  setModalOpen: (open: boolean) => void;
  
  // 설정 관련
  updateSettings: (settings: Partial<AppSettings>) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  toggleNotifications: () => void;
}

// 초기 상태
const initialState: AppState = {
  // 인증 상태
  user: null,
  token: null,
  isAuthenticated: false,
  
  // UI 상태
  isLoading: false,
  sidebarOpen: false,
  modalOpen: false,
  
  // 설정
  settings: {
    theme: 'system',
    language: 'ko',
    notifications: true,
  },
};

// Zustand 스토어 생성
export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      // 인증 액션
      login: (user: User, token: string) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      updateUser: (userData: Partial<User>) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),

      // UI 액션
      setLoading: (loading: boolean) =>
        set({ isLoading: loading }),

      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      setModalOpen: (open: boolean) =>
        set({ modalOpen: open }),

      // 설정 액션
      updateSettings: (newSettings: Partial<AppSettings>) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      toggleTheme: () =>
        set((state) => ({
          settings: {
            ...state.settings,
            theme: state.settings.theme === 'light' ? 'dark' : 'light',
          },
        })),

      toggleLanguage: () =>
        set((state) => ({
          settings: {
            ...state.settings,
            language: state.settings.language === 'ko' ? 'en' : 'ko',
          },
        })),

      toggleNotifications: () =>
        set((state) => ({
          settings: {
            ...state.settings,
            notifications: !state.settings.notifications,
          },
        })),
    }),
    {
      name: 'app-storage', // 로컬 스토리지 키
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        settings: state.settings,
      }), // 저장할 상태만 선택
    }
  )
);

// 선택자 함수들 (성능 최적화)
export const useUser = () => useAppStore((state) => state.user);
export const useIsAuthenticated = () => useAppStore((state) => state.isAuthenticated);
export const useTheme = () => useAppStore((state) => state.settings.theme);
export const useLanguage = () => useAppStore((state) => state.settings.language);
export const useNotifications = () => useAppStore((state) => state.settings.notifications);
export const useIsLoading = () => useAppStore((state) => state.isLoading);
export const useSidebarOpen = () => useAppStore((state) => state.sidebarOpen);
export const useModalOpen = () => useAppStore((state) => state.modalOpen);
