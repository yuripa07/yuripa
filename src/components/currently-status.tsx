"use client";

import { useState, useEffect } from "react";

const getStatusMessage = (): string => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = { timeZone: "America/Sao_Paulo" };

  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      ...options,
      hour: "2-digit",
      hour12: false,
    }).format(now)
  );

  const dayOfWeek = new Date(now.toLocaleString("en-US", options)).getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return "enjoying life ✌️";
  }

  if (hour >= 22 || hour < 6) {
    return "sleeping 💤";
  }
  if (hour >= 6 && hour < 8) {
    return "waking up ☀️";
  }
  if ((hour >= 8 && hour < 12) || (hour >= 13 && hour < 18)) {
    return "working 🧑‍💻";
  }
  if (hour >= 12 && hour < 13) {
    return "on a lunch break 🍔";
  }
  if (hour >= 18 && hour < 22) {
    return "resting 🛋️";
  }

  return "Checking status...";
};

export function CurrentlyStatus() {
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    setStatus(getStatusMessage());

    const intervalId = setInterval(() => {
      setStatus(getStatusMessage());
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="font-semibold flex items-center gap-3 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />

        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
      </span>
      Currently {status}
    </p>
  );
}
