"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const notFound = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <div className="text-3xl">not-found</div>
      <button
        className="border p-2 rounded flex w-auto m-auto hover:bg-white hover:text-black"
        onClick={handleBtn}
      >
        Home page
      </button>
    </>
  );
};

export default notFound;
