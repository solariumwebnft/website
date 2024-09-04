"use client";
import React from "react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="flex w-full items-center justify-between bg-background p-4">
      <h1 className="text-lg font-bold text-white">Document Title</h1>
      <input
        type="text"
        placeholder="Search documents..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded border border-gray-300 p-2"
      />
    </header>
  );
};

export default Header;
