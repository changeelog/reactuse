import { useState, useEffect } from "react";

const useMouseScrollDeltaY = (): number => {
  const [deltaY, setDeltaY] = useState<number>(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setDeltaY(event.deltaY);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return deltaY;
};

export default useMouseScrollDeltaY;
