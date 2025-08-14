import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { APP_CONFIG } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{APP_CONFIG.name}</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {APP_CONFIG.description} Next.js, TypeScript, Tailwind CSS를 사용하여 
              현대적이고 효율적인 웹 애플리케이션을 구축하세요.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              빠른 링크
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  문서
                </a>
              </li>
              <li>
                <a href="/examples" className="text-gray-300 hover:text-white transition-colors">
                  예제
                </a>
              </li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              지원
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-300 hover:text-white transition-colors">
                  도움말
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  문의
                </a>
              </li>
              <li>
                <a href="/status" className="text-gray-300 hover:text-white transition-colors">
                  상태
                </a>
              </li>
              <li>
                <a href="/changelog" className="text-gray-300 hover:text-white transition-colors">
                  변경사항
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {APP_CONFIG.name}. MIT License.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
