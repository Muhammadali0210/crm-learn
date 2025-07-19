'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { data } from "./data"
import { cn } from "@/lib/utils"
import Pagination2 from "@/components/pagination2"
import { useState } from "react"
import SearchInput from "@/components/SerachInput"

const Page = () => {
  interface Data {
    fullName: string,
    date: string,
    science: string,
    status: string,
  }

  const [search, setSearch] = useState('')

  const handleSearch = (value: string) => {
    console.log("Search: ", value);
  }

  return (
    <>
      <div>Page</div>

      <div>
        <div>
          {/* <div className="relative w-[max-content]">
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="px-[14px] py-[12px] pr-[44px] outline-blue-500 border border-[#CBD5E1] rounded-[8px]" />
            <img src="/icons/search-icon.svg" alt="Search" className="absolute top-[50%] translate-y-[-50%] right-[14px]" />
          </div> */}

          <SearchInput onSearch={handleSearch} />
        </div>


      </div>


      <div className="w-full rounded-[8px]  border border-[#E2E8F0]">
        <Table>
          <TableHeader>
            <TableRow className="border-[#E2E8F0]">
              <TableHead className="p-[18px]">
                <TableHeadBox name={'Id'} />
              </TableHead>
              <TableHead className="p-[18px]">
                <TableHeadBox name={'Date'} />
              </TableHead>
              <TableHead className="p-[18px]">
                <TableHeadBox name={'Science'} />
              </TableHead>
              <TableHead className="p-[18px]">
                <TableHeadBox name={'Status'} />
              </TableHead>
              <TableHead className="p-[18px] w-[72px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              data.map((item) => (
                <TableRow key={item.fullName} className="border-[#E2E8F0] hover:bg-slate-50">
                  <TableCell className="px-[16px] py-[22px]">{item.fullName}</TableCell>
                  <TableCell className="px-[16px] py-[22px]">{item.date}</TableCell>
                  <TableCell className="px-[16px] py-[22px]">{item.science}</TableCell>
                  <TableCell className="px-[16px] py-[22px]">
                    <TableStatus status={item.status} />
                  </TableCell>
                  <TableCell className="p-4">
                    <div className="w-10 h-10  flex items-center justify-center cursor-pointer"> 
                      <img src="/icons/more-icon.svg" alt=":" />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <div className="border-t border-[#E2E8F0] px-[16px] py-[24px] flex items-center justify-between">
          <Pagination2 total={100} limit={10} onPageChange={(page) => console.log(page)} />
        </div>
      </div>
    </>
  )
}


const TableHeadBox = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer w-[max-content]">
      <p className="text-[#1E293B] text-[12px] uppercase font-extrabold leading-[16px]" >{name}</p> <img src="/icons/sort-icon.svg" className="w-[20px] h-[20px]" alt="^" />
    </div>
  )
}

const TableStatus = ({ status }: { status: string }) => {
  let color = '';
  
  switch (status) {
    case 'professor':
      color = 'text-blue-600 bg-blue-100';
      break;
    case 'assistent':
      color = 'text-green-600 bg-green-100';
      break;
    case 'dotsent':
    case 'katta dotsent':
      color = 'text-yellow-600 bg-yellow-100';
      break;
    default:
      color = 'text-red-600 bg-red-100';
  }

  return (
    <div className={cn('px-[10px] py-[4px] rounded-[50px] w-[max-content] text-[14px] leading-[20px] font-semibold', color)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  )
}


export default Page