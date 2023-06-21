import { useEffect, useRef, useState } from 'react';

const useDebounce = (func: Function, timeout = 250, maxClicks = 3, notificationDuration = 12000) => {
  const timerRef = useRef<NodeJS.Timeout | undefined>();
  const clickCountRef = useRef<number>(0);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const debounceFunc = (...args: any[]) => {
    if (clickCountRef.current >= maxClicks) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    clickCountRef.current++;

    if (clickCountRef.current >= maxClicks) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, notificationDuration);
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = undefined;
      func(...args);
      clickCountRef.current = 0; // Reset click count after debounce timeout
    }, timeout);
  };

  return {
    showNotification,
    debounceFunc,
  };
};

export default useDebounce;
