# Next.js Boilerplate

Next.js 프로젝트를 위한 완전한 보일러플레이트입니다. TypeScript, Tailwind CSS, ESLint가 포함되어 있으며, 재사용 가능한 컴포넌트들과 유틸리티 함수들을 제공합니다.

## 🚀 주요 기능

- **Next.js 15** - 최신 App Router 사용
- **TypeScript** - 타입 안전성 보장
- **Tailwind CSS 4** - 모던 CSS 프레임워크
- **ESLint** - 코드 품질 관리
- **Bun** - 빠른 패키지 매니저
- **재사용 컴포넌트** - Button, Input, Card 등
- **레이아웃 컴포넌트** - Header, Footer, Sidebar
- **유틸리티 함수** - 날짜 포맷, 디바운스, 스로틀 등
- **커스텀 훅** - 로컬 스토리지, 디바운스 등
- **타입 정의** - 공통 인터페이스들
- **상태 관리** - Zustand 기반 전역 상태
- **API 클라이언트** - Axios 기반 HTTP 클라이언트
- **폼 관리** - React Hook Form + Zod 검증
- **유효성 검사** - Yup 스키마 검증

## 📁 프로젝트 구조

```
nextjs-boilerplate/
├── app/                    # App Router 디렉토리
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── globals.css        # 전역 스타일
│   └── favicon.ico        # 파비콘
├── components/             # 재사용 컴포넌트
│   ├── ui/                # 기본 UI 컴포넌트
│   │   ├── Button.tsx     # 버튼 컴포넌트
│   │   ├── Input.tsx      # 입력 컴포넌트
│   │   ├── Card.tsx       # 카드 컴포넌트
│   │   └── index.ts       # UI 컴포넌트 export
│   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── Header.tsx     # 헤더 컴포넌트
│   │   ├── Footer.tsx     # 푸터 컴포넌트
│   │   ├── Sidebar.tsx    # 사이드바 컴포넌트
│   │   └── index.ts       # 레이아웃 컴포넌트 export
│   ├── common/            # 공통 컴포넌트
│   │   ├── HeroSection.tsx # 히어로 섹션
│   │   ├── DemoForm.tsx   # 데모 폼
│   │   └── index.ts       # 공통 컴포넌트 export
│   └── index.ts           # 모든 컴포넌트 export
├── lib/                   # 핵심 라이브러리
│   ├── utils.ts           # 기본 유틸리티 (clsx, debounce, throttle 등)
│   ├── api.ts             # Axios 기반 API 클라이언트
│   └── store.ts           # Zustand 상태 관리
├── utils/                 # 추가 유틸리티
│   ├── validation.ts      # Yup 기반 유효성 검사
│   ├── date.ts            # date-fns 기반 날짜 유틸리티
│   └── index.ts           # 유틸리티 export
├── hooks/                 # 커스텀 훅
│   ├── useLocalStorage.ts # 로컬 스토리지 훅
│   ├── useDebounce.ts     # 디바운스 훅
│   └── index.ts           # 훅 export
├── types/                 # 타입 정의
│   └── common.ts          # 공통 인터페이스
├── constants/             # 상수 정의
│   └── index.ts           # 앱 설정, API 엔드포인트 등
├── public/                # 정적 파일들
├── LICENSE                # MIT 라이센스
└── package.json           # 프로젝트 설정
```

## 🛠️ 시작하기

### 1. 의존성 설치

```bash
bun install
```

### 2. 개발 서버 실행

```bash
bun run dev
```

### 3. 빌드

```bash
bun run build
```

### 4. 프로덕션 서버 실행

```bash
bun run start
```

## 🎨 컴포넌트 사용법

### UI 컴포넌트

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui';

// Button 컴포넌트
<Button variant="primary" size="lg" onClick={handleClick}>
  클릭하세요
</Button>

// Input 컴포넌트
<Input 
  label="이메일" 
  type="email" 
  placeholder="이메일을 입력하세요"
  helperText="실제 이메일을 입력해주세요"
/>

// Card 컴포넌트
<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드 내용</p>
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>
```

### 레이아웃 컴포넌트

```tsx
import { Header, Footer, Sidebar } from '@/components/layout';

// 메인 레이아웃
<div className="min-h-screen">
  <Header />
  <div className="flex">
    <Sidebar />
    <main className="flex-1">
      {/* 페이지 내용 */}
    </main>
  </div>
  <Footer />
</div>
```

## 🔧 유틸리티 함수

### 기본 유틸리티

```tsx
import { cn, debounce, throttle, formatDate, formatDateTime } from '@/lib/utils';

// 클래스명 결합
const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);

// 디바운스/스로틀
const debouncedSearch = debounce((query: string) => {
  // 검색 로직
}, 300);

const throttledScroll = throttle(() => {
  // 스크롤 로직
}, 100);

// 날짜 포맷
formatDate(new Date());      // "2024년 8월 14일"
formatDateTime(new Date());  // "2024년 8월 14일 오후 11시 37분"
```

### 유효성 검사

```tsx
import { emailSchema, passwordSchema, loginSchema } from '@/utils/validation';

// 개별 스키마
const isValidEmail = emailSchema.validateSync('user@example.com');

// 폼 스키마
const formData = { email: 'user@example.com', password: 'password123' };
const result = loginSchema.validateSync(formData);
```

### 날짜 유틸리티

```tsx
import { formatRelativeTime, formatRelativeDate, calculateAge } from '@/utils/date';

formatRelativeTime(new Date());     // "방금 전"
formatRelativeDate(new Date());     // "오늘"
calculateAge(new Date('1990-01-01')); // 34
```

## 🎯 커스텀 훅

```tsx
import { useLocalStorage, useDebounce } from '@/hooks';

// 로컬 스토리지 훅
const [theme, setTheme] = useLocalStorage('theme', 'light');

// 디바운스 훅
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

## 📡 API 클라이언트

```tsx
import { api } from '@/lib/api';

// GET 요청
const users = await api.get<User[]>('/users');

// POST 요청
const newUser = await api.post<User>('/users', userData);

// PUT 요청
const updatedUser = await api.put<User>(`/users/${id}`, updateData);

// DELETE 요청
await api.delete(`/users/${id}`);
```

## 🔄 상태 관리

```tsx
import { useAppStore, useUser, useTheme } from '@/lib/store';

// 전체 스토어 사용
const { user, login, logout } = useAppStore();

// 선택적 상태 사용 (성능 최적화)
const user = useUser();
const theme = useTheme();

// 액션 사용
const { login, toggleTheme, updateSettings } = useAppStore();
```

## 🌟 추가 기능

- **다크 모드 지원** - Tailwind CSS 다크 모드 클래스 사용
- **반응형 디자인** - 모바일부터 데스크톱까지 최적화
- **접근성** - ARIA 라벨과 키보드 네비게이션 지원
- **성능 최적화** - Next.js 15의 최신 기능 활용
- **타입 안전성** - TypeScript로 완벽한 타입 체크
- **폼 검증** - React Hook Form + Zod로 강력한 폼 관리
- **상태 지속성** - Zustand persist로 페이지 새로고침 시에도 상태 유지

## 📦 주요 의존성

### 핵심 라이브러리
- **Next.js 15** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript 5** - 타입 시스템

### 스타일링
- **Tailwind CSS 4** - CSS 프레임워크
- **clsx** - 클래스명 결합
- **tailwind-merge** - Tailwind 클래스 병합

### 상태 관리 & 데이터
- **Zustand** - 상태 관리
- **Axios** - HTTP 클라이언트
- **React Hook Form** - 폼 관리

### 유효성 검사
- **Zod** - 스키마 검증
- **Yup** - 폼 검증

### 유틸리티
- **date-fns** - 날짜 처리
- **lucide-react** - 아이콘

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해주세요.

---

**Next.js Boilerplate** - 현대적이고 효율적인 웹 개발을 위한 완벽한 시작점 🚀
