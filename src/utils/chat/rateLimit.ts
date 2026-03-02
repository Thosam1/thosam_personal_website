const STORAGE_KEY = 'chat_rate_limit';
const DAILY_LIMIT = 20;

interface RateLimitData {
  count: number;
  date: string;
}

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function getData(): RateLimitData {
  if (typeof window === 'undefined') return { count: 0, date: getTodayKey() };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, date: getTodayKey() };

    const data: RateLimitData = JSON.parse(raw);
    // Reset if it's a new day
    if (data.date !== getTodayKey()) {
      return { count: 0, date: getTodayKey() };
    }
    return data;
  } catch {
    return { count: 0, date: getTodayKey() };
  }
}

function saveData(data: RateLimitData): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function canSendMessage(): boolean {
  return getData().count < DAILY_LIMIT;
}

export function getRemainingMessages(): number {
  return Math.max(0, DAILY_LIMIT - getData().count);
}

export function recordMessage(): void {
  const data = getData();
  data.count += 1;
  saveData(data);
}
