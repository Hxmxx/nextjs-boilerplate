import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { APP_CONFIG } from '@/constants';
import HeroSection from '@/components/common/HeroSection';
import DemoForm from '@/components/common/DemoForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>🚀 빠른 개발</CardTitle>
              <CardDescription>
                TypeScript와 Tailwind CSS로 빠르고 효율적인 개발
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                미리 구성된 컴포넌트와 유틸리티로 즉시 개발을 시작하세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 모던 UI</CardTitle>
              <CardDescription>
                아름답고 반응형인 사용자 인터페이스
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Tailwind CSS로 일관된 디자인 시스템을 구축하세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚡ 최적화</CardTitle>
              <CardDescription>
                Next.js 15의 최신 기능들
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                App Router, 서버 컴포넌트 등 최신 기능을 활용하세요.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Form */}
        <DemoForm />

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p>© 2024 {APP_CONFIG.name}. MIT License.</p>
        </footer>
      </div>
    </div>
  );
}
