import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, SetScrollPosisition] = useState();

  useEffect(() => {
    const updatePosition = () => {
      SetScrollPosisition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
export default useScrollPosition;
