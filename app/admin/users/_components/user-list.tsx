'use client'

import { getUserByFilter } from "@/services/user.service"
import { useEffect, useRef, useState } from "react"
import UserCard from "./user-card"
import type { IUser } from "@/types"
import UserCardLoader from "./user-card-loader"
import NoData from "@/components/no-data"

const UserList = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [usersList, setUsersList] = useState<IUser[]>([])
    const [allLoaded, setAllLoaded] = useState(false)
    const [page, setPage] = useState(1)
    let scrollDebounce: NodeJS.Timeout

    const fetchData = async () => {
        if (isLoading || allLoaded) return;
        setIsLoading(true)
        try {
            const res: any = await getUserByFilter({ page, limit: 6 });

            if (res.length < 6) {
                setAllLoaded(true)
            }
            if (page === 1) {
                setUsersList(res as IUser[])
            } else {
                setUsersList(prev => [...prev, ...res as IUser[]])
            }
            if (res.length > 0) {
                setPage(prev => prev + 1)
            }
        } catch (error) {
            console.error("Foydalanuvchilarni olishda xatolik:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (!containerRef.current || isLoading || allLoaded) return

        clearTimeout(scrollDebounce)
        scrollDebounce = setTimeout(() => {
            const container = containerRef.current!
            const scrollBottom = container.scrollTop + container.clientHeight
            const threshold = container.scrollHeight - 100

            if (scrollBottom >= threshold) {
                fetchData()
            }
        }, 100)
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        container.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            container.removeEventListener("scroll", handleScroll)
        }
    }, [isLoading, allLoaded])

    return (
        <>
            <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 h-[77vh] min-h-[77vh] overflow-y-scroll no-scrollbar pt-4 pb-10" ref={containerRef}>
                {isLoading && page === 1 && (
                    [...Array(4)].map((_, index) => (
                        <UserCardLoader key={index} />
                    ))
                )}
                {usersList.length > 0 &&
                    usersList.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
                {isLoading && page !== 1 && (
                    [...Array(2)].map((_, index) => (
                        <UserCardLoader key={index} />
                    ))
                )}
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