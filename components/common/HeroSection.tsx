'use client';

import Button from '@/components/ui/Button';
import { APP_CONFIG, ROUTES } from '@/constants';

export default function HeroSection() {
  const handleDashboardClick = () => {
    window.location.href = ROUTES.dashboard;
  };

  const handleGitHubClick = () => {
    window.open('https://github.com', '_blank');
  };

  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {APP_CONFIG.name}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {APP_CONFIG.description}
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg" onClick={handleDashboardClick}>
          대시보드 시작하기
        </Button>
        <Button variant="outline" size="lg" onClick={handleGitHubClick}>
          GitHub 보기
        </Button>
      </div>
    </div>
  );
}
