import * as yup from 'yup';

// 이메일 유효성 검사
export const emailSchema = yup
  .string()
  .email('올바른 이메일 형식이 아닙니다')
  .required('이메일을 입력해주세요');

// 비밀번호 유효성 검사
export const passwordSchema = yup
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
  .matches(/[a-z]/, '비밀번호는 소문자를 포함해야 합니다')
  .matches(/[A-Z]/, '비밀번호는 대문자를 포함해야 합니다')
  .matches(/[0-9]/, '비밀번호는 숫자를 포함해야 합니다')
  .matches(/[^a-zA-Z0-9]/, '비밀번호는 특수문자를 포함해야 합니다')
  .required('비밀번호를 입력해주세요');

// 이름 유효성 검사
export const nameSchema = yup
  .string()
  .min(2, '이름은 최소 2자 이상이어야 합니다')
  .max(50, '이름은 최대 50자까지 가능합니다')
  .required('이름을 입력해주세요');

// 전화번호 유효성 검사
export const phoneSchema = yup
  .string()
  .matches(/^[0-9-+\s()]+$/, '올바른 전화번호 형식이 아닙니다')
  .min(10, '전화번호는 최소 10자 이상이어야 합니다')
  .max(15, '전화번호는 최대 15자까지 가능합니다');

// URL 유효성 검사
export const urlSchema = yup
  .string()
  .url('올바른 URL 형식이 아닙니다');

// 숫자 유효성 검사
export const numberSchema = yup
  .number()
  .typeError('숫자를 입력해주세요')
  .positive('양수를 입력해주세요');

// 로그인 폼 스키마
export const loginSchema = yup.object({
  email: emailSchema,
  password: yup.string().required('비밀번호를 입력해주세요'),
});

// 회원가입 폼 스키마
export const registerSchema = yup.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호 확인을 입력해주세요'),
});

// 프로필 수정 스키마
export const profileSchema = yup.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  bio: yup.string().max(500, '자기소개는 최대 500자까지 가능합니다').optional(),
});

// 검색 쿼리 스키마
export const searchSchema = yup.object({
  query: yup.string().min(1, '검색어를 입력해주세요').max(100, '검색어는 최대 100자까지 가능합니다'),
  category: yup.string().optional(),
  sortBy: yup.string().optional(),
  page: yup.number().min(1).optional(),
  limit: yup.number().min(1).max(100).optional(),
});

// 파일 업로드 스키마
export const fileUploadSchema = yup.object({
  file: yup
    .mixed()
    .required('파일을 선택해주세요')
    .test('fileSize', '파일 크기는 5MB 이하여야 합니다', (value) => {
      if (!value) return false;
      return value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test('fileType', '지원하지 않는 파일 형식입니다', (value) => {
      if (!value) return false;
      const supportedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      return supportedTypes.includes(value.type);
    }),
});

// 커스텀 유효성 검사 함수들
export const validateRequired = (value: any, fieldName: string): string | undefined => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName}을(를) 입력해주세요`;
  }
  return undefined;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | undefined => {
  if (value && value.length < minLength) {
    return `${fieldName}은(는) 최소 ${minLength}자 이상이어야 합니다`;
  }
  return undefined;
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): string | undefined => {
  if (value && value.length > maxLength) {
    return `${fieldName}은(는) 최대 ${maxLength}자까지 가능합니다`;
  }
  return undefined;
};

export const validatePattern = (value: string, pattern: RegExp, message: string): string | undefined => {
  if (value && !pattern.test(value)) {
    return message;
  }
  return undefined;
};
