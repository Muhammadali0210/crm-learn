'use client'

import { getUserByFilter } from "@/services/user.service"
import { useEffect, useState } from "react"
import type { IUser } from "@/types"
import NoData from "@/components/no-data"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ArchiveRestoreIcon, EditIcon, MoreHorizontal, Trash2 } from "lucide-react"
import Pagination from "@/components/pagination"
import { LimitSelect } from "@/components/limit-select"
import TableLoader from "./table-loader"

const UserList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [usersList, setUsersList] = useState<IUser[]>([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res: any = await getUserByFilter({ page, limit });
            setUsersList(res)
        } catch (error) {
            console.error("Foydalanuvchilarni olishda xatolik:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [page, limit]);

    if(isLoading && usersList.length === 0) {
        return (
            <div className="w-full mt-3">
                <TableLoader limit={limit} />
            </div>
        )
    }
    return (
        <>
            <div className="w-full mt-3">
                {usersList.length > 0 &&
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
                                {usersList.map((item) => (
                                    <TableRow key={item.id} className="px-5">
                                        <TableCell className="px-5">{item.id}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{item.company.name}</TableCell>
                                        <TableCell className="text-blue-600 hover:underline cursor-pointer">{item.website}</TableCell>
                                        <TableCell className="text-right pr-5">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <EditIcon className="mr-2 h-4 w-4 text-blue-500" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <ArchiveRestoreIcon className="mr-2 h-4 w-4 text-gray-800" />
                                                        Archive
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="flex justify-between items-center w-full border-t border-border bg-gray-100 dark:bg-sidebar px-4 py-2">
                            <LimitSelect limit={limit} onLimitChange={(limit) => {setLimit(limit); setPage(1)}} />

                            <Pagination
                                total={10}
                                limit={limit}
                                currentPage={page}
                                onPageChange={(p) => setPage(p)}
                            />
                        </div>
                    </div>
                }
                {usersList.length === 0 && !isLoading && page === 1 && (
                    <div className="col-span-12">
                        <NoData message="Foydalanuvchi mavjud emas" />
                    </div>
                )}
            </div>
        </>
    )
}

export default UserList