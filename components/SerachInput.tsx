'use client'
import { useEffect, useState } from 'react';

interface Props {
    onSearch: (value: string) => void;
    delay?: number;
    placeholder?: string;
}
const SearchInput = ({ onSearch, delay = 2000, placeholder = "Search" }: Props) => {
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [inputValue, delay, onSearch]);

  return (
    <div className="relative w-[max-content]">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="px-[14px] py-[12px] pr-[44px] outline-blue-500 border border-[#CBD5E1] rounded-[8px]"
      />
      <img 
        src="/icons/search-icon.svg" 
        alt="Search" 
        className="absolute top-[50%] translate-y-[-50%] right-[14px]" 
      />
    </div>
  );
};

export default SearchInput;