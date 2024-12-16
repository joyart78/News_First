import { useEffect, useRef } from "react";

export default function useClickOutside(elRef, cb) {
  const blocked = useRef(true);

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    window.requestAnimationFrame(() => {
      blocked.current = false;
    });

    function clickHandler(e) {
      if (elRef.current && !blocked.current) {
        if (!elRef.current.contains(e.target)) {
          cb(e);
        }
      }
    }

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, [elRef, cb]);

  return null;
}
