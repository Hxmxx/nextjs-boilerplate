import { format, formatDistance, formatRelative, isToday, isYesterday, isThisWeek, isThisYear } from 'date-fns';
import { ko } from 'date-fns/locale';

// 한국어 로케일 설정
const locale = ko;

// 기본 날짜 포맷
export const formatDate = (date: Date | string, formatStr: string = 'yyyy년 MM월 dd일'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatStr, { locale });
};

// 상대적 시간 표시 (예: 3일 전, 2시간 전)
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistance(dateObj, new Date(), { addSuffix: true, locale });
};

// 상대적 날짜 표시 (예: 오늘, 어제, 이번 주)
export const formatRelativeDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isToday(dateObj)) return '오늘';
  if (isYesterday(dateObj)) return '어제';
  if (isThisWeek(dateObj)) return format(dateObj, 'EEEE', { locale }); // 요일
  if (isThisYear(dateObj)) return format(dateObj, 'M월 d일', { locale });
  
  return format(dateObj, 'yyyy년 M월 d일', { locale });
};

// 시간 포맷 (예: 오후 2:30)
export const formatTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'a h:mm', { locale });
};

// 날짜와 시간 포맷 (예: 2024년 8월 14일 오후 2:30)
export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'yyyy년 M월 d일 a h:mm', { locale });
};

// 간단한 날짜 포맷 (예: 8/14)
export const formatShortDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'M/d', { locale });
};

// 요일 포맷 (예: 월요일)
export const formatWeekday = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'EEEE', { locale });
};

// 월 포맷 (예: 8월)
export const formatMonth = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'M월', { locale });
};

// 연도 포맷 (예: 2024년)
export const formatYear = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'yyyy년', { locale });
};

// ISO 문자열로 변환
export const toISOString = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
};

// Unix 타임스탬프로 변환
export const toUnixTimestamp = (date: Date | string): number => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return Math.floor(dateObj.getTime() / 1000);
};

// Unix 타임스탬프에서 Date 객체로 변환
export const fromUnixTimestamp = (timestamp: number): Date => {
  return new Date(timestamp * 1000);
};

// 날짜 범위 생성 (시작일부터 종료일까지)
export const createDateRange = (startDate: Date, endDate: Date): Date[] => {
  const dates: Date[] = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

// 날짜가 유효한지 확인
export const isValidDate = (date: any): boolean => {
  if (!date) return false;
  
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
};

// 두 날짜 간의 차이 계산 (일)
export const getDaysDifference = (date1: Date | string, date2: Date | string): number => {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// 나이 계산
export const calculateAge = (birthDate: Date | string): number => {
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// 주차 계산
export const getWeekOfYear = (date: Date | string): number => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const start = new Date(dateObj.getFullYear(), 0, 1);
  const days = Math.floor((dateObj.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + start.getDay() + 1) / 7);
};
