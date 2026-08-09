import { useState, useEffect } from "react";

export function useTorontoClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const exactTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(exactTime);
  }, []);

  return time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
