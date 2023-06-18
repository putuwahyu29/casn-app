"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <div className="row justify-center">
        <div className="sm:col-10 md:col-8 lg:col-6 text-center">
          <h1 className="mb-4 text-primary ">Terdapat Kesalahan</h1>
          <button className="btn btn-primary mb-10" onClick={() => reset()}>
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
