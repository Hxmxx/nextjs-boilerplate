'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon, Bell, User, Settings } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTheme, useNotifications, useUser, useIsAuthenticated } from '@/lib/store';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const notifications = useNotifications();
  const user = useUser();
  const isAuthenticated = useIsAuthenticated();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Next.js Boilerplate
              </h1>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              홈
            </a>
            <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              소개
            </a>
            <a href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
              문서
            </a>
          </nav>

          {/* 우측 액션들 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 테마 토글 */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {/* 테마 토글 로직 */}}
              className="p-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* 알림 */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {/* 알림 토글 로직 */}}
              className="p-2 relative"
            >
              <Bell className="h-5 w-5" />
              {notifications && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              )}
            </Button>

            {/* 사용자 메뉴 */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img
                  src={user?.avatar || '/default-avatar.png'}
                  alt="사용자 아바타"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user?.name}
                </span>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
                <Button size="sm">
                  회원가입
                </Button>
              </div>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                홈
              </a>
              <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                소개
              </a>
              <a href="/docs" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                문서
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
