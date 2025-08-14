'use client';

import { useState } from 'react';
import { Home, FileText, Settings, Users, BarChart3, HelpCircle, X } from 'lucide-react';
import { useSidebarOpen } from '@/lib/store';
import Button from '@/components/ui/Button';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  { name: '대시보드', href: '/dashboard', icon: Home },
  { name: '문서', href: '/docs', icon: FileText },
  { name: '사용자', href: '/users', icon: Users },
  { name: '통계', href: '/analytics', icon: BarChart3 },
  { name: '설정', href: '/settings', icon: Settings },
  { name: '도움말', href: '/help', icon: HelpCircle },
];

export default function Sidebar() {
  const isOpen = useSidebarOpen();

  if (!isOpen) return null;

  return (
    <>
      {/* 모바일 오버레이 */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 md:hidden" />
      
      {/* 사이드바 */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0">
        <div className="flex flex-col h-full">
          {/* 헤더 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              메뉴
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {/* 사이드바 닫기 로직 */}}
              className="md:hidden p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* 네비게이션 */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* 하단 정보 */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/default-avatar.png"
                  alt="사용자 아바타"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  사용자 이름
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  user@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
