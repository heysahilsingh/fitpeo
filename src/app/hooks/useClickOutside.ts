import { useEffect, RefObject } from 'react';

const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      )
    ) {
      callback();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
};

export default useClickOutside;
