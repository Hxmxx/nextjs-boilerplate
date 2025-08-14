# Next.js Boilerplate

Next.js 프로젝트를 위한 완전한 보일러플레이트입니다. TypeScript, Tailwind CSS, ESLint가 포함되어 있으며, 재사용 가능한 컴포넌트들과 유틸리티 함수들을 제공합니다.

## 🚀 주요 기능

- **Next.js 15** - 최신 App Router 사용
- **TypeScript** - 타입 안전성 보장
- **Tailwind CSS 4** - 모던 CSS 프레임워크
- **ESLint** - 코드 품질 관리
- **Bun** - 빠른 패키지 매니저
- **재사용 컴포넌트** - Button, Input, Card 등
- **유틸리티 함수** - 날짜 포맷, 디바운스, 스로틀 등
- **커스텀 훅** - 로컬 스토리지, 디바운스 등
- **타입 정의** - 공통 인터페이스들

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
│   │   └── Card.tsx       # 카드 컴포넌트
│   ├── layout/            # 레이아웃 컴포넌트
│   └── common/            # 공통 컴포넌트
├── lib/                   # 유틸리티 함수
│   └── utils.ts           # 클래스명 결합, 날짜 포맷 등
├── hooks/                 # 커스텀 훅
│   ├── useLocalStorage.ts # 로컬 스토리지 훅
│   └── useDebounce.ts     # 디바운스 훅
├── types/                 # 타입 정의
│   └── common.ts          # 공통 인터페이스
├── constants/             # 상수 정의
│   └── index.ts           # 앱 설정, API 엔드포인트 등
├── public/                # 정적 파일들
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

### Button 컴포넌트

```tsx
import Button from '@/components/ui/Button';

// 기본 사용법
<Button>클릭하세요</Button>

// 변형과 크기
<Button variant="outline" size="lg">큰 아웃라인 버튼</Button>

// 로딩 상태
<Button isLoading>제출 중...</Button>
```

### Input 컴포넌트

```tsx
import Input from '@/components/ui/Input';

// 기본 사용법
<Input placeholder="이름을 입력하세요" />

// 라벨과 도움말
<Input 
  label="이메일" 
  type="email" 
  helperText="실제 이메일을 입력해주세요"
/>

// 에러 상태
<Input 
  label="비밀번호" 
  type="password" 
  error="비밀번호는 8자 이상이어야 합니다"
/>
```

### Card 컴포넌트

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

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

## 🔧 유틸리티 함수

### 클래스명 결합

```tsx
import { cn } from '@/lib/utils';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

### 날짜 포맷

```tsx
import { formatDate, formatDateTime } from '@/lib/utils';

const date = new Date();
formatDate(date);      // "2024년 8월 14일"
formatDateTime(date);  // "2024년 8월 14일 오후 11시 37분"
```

### 디바운스/스로틀

```tsx
import { debounce, throttle } from '@/lib/utils';

const debouncedSearch = debounce((query: string) => {
  // 검색 로직
}, 300);

const throttledScroll = throttle(() => {
  // 스크롤 로직
}, 100);
```

## 🎯 커스텀 훅

### 로컬 스토리지 훅

```tsx
import { useLocalStorage } from '@/hooks/useLocalStorage';

const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### 디바운스 훅

```tsx
import { useDebounce } from '@/hooks/useDebounce';

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

## 🌟 추가 기능

- **다크 모드 지원** - Tailwind CSS 다크 모드 클래스 사용
- **반응형 디자인** - 모바일부터 데스크톱까지 최적화
- **접근성** - ARIA 라벨과 키보드 네비게이션 지원
- **성능 최적화** - Next.js 15의 최신 기능 활용

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해주세요.
