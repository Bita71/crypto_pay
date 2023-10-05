import { useCallback, useEffect, RefObject } from 'react';

interface UseClickOutsideProps<T> {
  callback: (e: MouseEvent) => void;
  elRef: RefObject<T>
}

export const useClickOutside = function useClickOutsideHook<
T extends HTMLElement>({
  callback,
  elRef,
}: UseClickOutsideProps<T>) {
  const handler = useCallback((e: MouseEvent) => {
    if (!elRef.current) {
      return;
    }

    if (elRef.current === e.target
      || elRef.current.contains(e.target as Node)) {
      return;
    }

    callback(e);
  }, [callback, elRef]);

  useEffect(() => {
    window.addEventListener('click', handler, true);

    return () => {
      window.removeEventListener('click', handler, true);
    };
  }, [handler]);
};
