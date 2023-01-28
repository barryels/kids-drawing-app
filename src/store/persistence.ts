const PERSISTANCE_PREFIX = "KIDS_DRAWING_APP_";

export function persistValue(key: string, value: any) {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(PERSISTANCE_PREFIX + key, stringifiedValue);
}

export function clearValue(key: string) {
  localStorage.removeItem(PERSISTANCE_PREFIX + key);
}

export function retrieveValue(key: string): any {
  try {
    return JSON.parse(localStorage.getItem(PERSISTANCE_PREFIX + key) || "");
  } catch {
    return null;
  }
}
