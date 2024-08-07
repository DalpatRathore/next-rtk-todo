import React from "react";
import { Skeleton } from "./ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full flex items-start justify-center space-x-4">
      <Skeleton className="h-5 w-6 rounded" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-6 w-[350px]" />
        <Skeleton className="h-3 w-[250px]" />
      </div>
      <Skeleton className="h-8 w-10 rounded" />
      <Skeleton className="h-8 w-10 rounded" />
    </div>
  );
};

export default Loading;
