"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="w-full max-w-7xl px-5 mx-auto my-12 h-96">
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()} size={"lg"} variant={"outline"}>
          Try again
        </Button>
      </div>
    </main>
  );
}
