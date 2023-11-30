"use client";
import { AiOutlineSearch } from "react-icons/ai";

export interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ handleSearch, setCity }: any) {
  return (
    <div>
      <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
        <input
          type="text"
          placeholder="Search for a City"
          className="w-fit bg-transparent border-b-2 placeholder-white outline-none text-white"
          onKeyDown={handleSearch}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="ml-[-25px] text-white cursor-pointer">
          <AiOutlineSearch />
        </div>
      </form>
    </div>
  );
}
