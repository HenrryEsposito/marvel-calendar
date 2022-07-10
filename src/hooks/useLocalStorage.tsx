export default function useLocalStorage() {
  function getItem(key: string, initialValue: any) {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  }

  function setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    getItem,
    setItem,
  };
}
