'use client'
import { Skeleton } from "@/components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const TableLoader = ({limit}: {limit: number}) => {
    return (
        <div>
            <div className="border border-border  rounded-2xl overflow-hidden">
                <Table className="rounded-t-2xl overflow-hidden" >
                    <TableHeader className="bg-sidebar">
                        <TableRow>
                            <TableHead className="w-[70px] px-5 py-4">Id</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Website</TableHead>
                            <TableHead className="text-right  pr-5">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: limit }).map((_, index) => (
                            <TableRow key={index} className="px-5">
                                <TableCell className="px-5"><Skeleton className="w-[20px] h-[30px]" /></TableCell>
                                <TableCell><Skeleton className="w-[130px] h-[30px]" /></TableCell>
                                <TableCell><Skeleton className="w-[120px] h-[30px]" /></TableCell>
                                <TableCell className="text-blue-600 hover:underline cursor-pointer"><Skeleton className="w-[100px] h-[30px]" /></TableCell>
                                <TableCell className="text-right pr-5">
                                    <MoreHorizontal className="ml-auto" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-between items-center w-full border-t border-border bg-gray-100 dark:bg-sidebar px-4 py-2">
                    <Skeleton className="w-[100px] h-8" />

                    <Skeleton className="w-[150px] h-8" />
                </div>
            </div>
        </div>
    )
}

export default TableLoader