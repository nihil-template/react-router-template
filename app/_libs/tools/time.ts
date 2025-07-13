import { DateTime, type DurationLike, type DurationUnit } from 'luxon';

// --- 타입 정의 ---
type DateInput = Date | string | number | DateTime;
type FormatString
  = | 'yyyy-MM-ddTHH:mm:ss.SSSZ'
    | 'yyyy-MM-dd'
    | 'yyyy-MM-dd HH:mm:ss'
    | 'yyyyMMdd'
    | 'yyyy.MM.dd'
    | 'yyyy년 MM월 dd일'
    | 'HH:mm:ss'
    | 'HH:mm';

// --- 내부 헬퍼 함수 ---
const toDateTime = (date: DateInput): DateTime => {
  const config = {
    zone: 'Asia/Seoul',
    locale: 'ko_KR',
  };
  if (DateTime.isDateTime(date)) {
    return date.setZone(config.zone).setLocale(config.locale);
  }
  if (date instanceof Date) {
    return DateTime.fromJSDate(date, config);
  }
  if (typeof date === 'string') {
    return DateTime.fromISO(date, config);
  }
  if (typeof date === 'number') {
    return DateTime.fromMillis(date, config);
  }
  return DateTime.now().setZone(config.zone).setLocale(config.locale);
};

// --- 공개 API ---

/**
 * 현재 시간을 서울 시간대 기준으로 DateTime 객체로 반환합니다.
 * @returns {DateTime} 현재 시간을 나타내는 DateTime 객체
 */
export const now = (): DateTime => {
  return toDateTime(new Date());
};

/**
 * 주어진 날짜를 지정된 형식의 문자열로 변환합니다.
 * @param {DateInput} date 변환할 날짜 (Date, ISO string, timestamp, DateTime)
 * @param {FormatString} formatString 변환할 형식
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const format = (date: DateInput, formatString: FormatString): string => {
  return toDateTime(date).toFormat(formatString);
};

/**
 * 주어진 날짜에 기간을 더합니다.
 * @param {DateInput} date 기준 날짜
 * @param {DurationLike} duration 더할 기간 (예: { days: 7, hours: 2 })
 * @returns {DateTime} 계산된 DateTime 객체
 */
export const add = (date: DateInput, duration: DurationLike): DateTime => {
  return toDateTime(date).plus(duration);
};

/**
 * 주어진 날짜에서 기간을 뺍니다.
 * @param {DateInput} date 기준 날짜
 * @param {DurationLike} duration 뺄 기간 (예: { days: 7, hours: 2 })
 * @returns {DateTime} 계산된 DateTime 객체
 */
export const subtract = (date: DateInput, duration: DurationLike): DateTime => {
  return toDateTime(date).minus(duration);
};

/**
 * 두 날짜의 차이를 지정된 단위로 계산합니다.
 * @param {DateInput} date1 첫 번째 날짜
 * @param {DateInput} date2 두 번째 날짜
 * @param {DurationUnit} [unit='milliseconds'] 차이를 계산할 단위 (예: 'days', 'hours')
 * @returns {number} 차이 값
 */
export const diff = (date1: DateInput, date2: DateInput, unit: DurationUnit = 'milliseconds'): number => {
  const d1 = toDateTime(date1);
  const d2 = toDateTime(date2);
  const duration = d1.diff(d2, unit);

  // unit을 단수형으로 변환 (예: 'days' -> 'day')
  const singularUnit = unit.endsWith('s')
    ? unit.slice(0, -1)
    : unit;

  // 단수형 unit으로 값을 가져오고, 존재하지 않으면 0을 반환
  return duration.as(singularUnit as DurationUnit) || 0;
};

/**
 * 주어진 날짜가 다른 날짜보다 이전인지 확인합니다.
 * @param {DateInput} date1 확인할 날짜
 * @param {DateInput} date2 비교할 날짜
 * @returns {boolean} 이전이면 true, 아니면 false
 */
export const isBefore = (date1: DateInput, date2: DateInput): boolean => {
  return toDateTime(date1) < toDateTime(date2);
};

/**
 * 주어진 날짜가 다른 날짜보다 이후인지 확인합니다.
 * @param {DateInput} date1 확인할 날짜
 * @param {DateInput} date2 비교할 날짜
 * @returns {boolean} 이후이면 true, 아니면 false
 */
export const isAfter = (date1: DateInput, date2: DateInput): boolean => {
  return toDateTime(date1) > toDateTime(date2);
};

/**
 * 주어진 날짜를 기준으로 상대적인 시간 문자열을 반환합니다. (예: "3일 전")
 * @param {DateInput} date 기준 날짜
 * @returns {string | null} 상대 시간 문자열
 */
export const toRelative = (date: DateInput): string | null => {
  return toDateTime(date).toRelative();
};

/**
 * 주어진 날짜를 ISO 8601 형식 문자열로 변환합니다.
 * @param {DateInput} date 변환할 날짜
 * @returns {string} ISO 형식 문자열
 */
export const toISO = (date: DateInput): string => {
  return toDateTime(date).toISO() ?? '';
};
