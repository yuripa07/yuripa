"use client";

import { useState, useEffect } from "react";

export function Clock() {
  const [timeString, setTimeString] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setTimeString(formatted);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="text-8xl text-paragraph-secondary">
      {timeString !== null ? (
        timeString
      ) : (
        <span className="opacity-0">00:00</span>
      )}
    </span>
  );
}
