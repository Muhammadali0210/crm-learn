"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"

type PaginationProps = {
    total: number
    limit: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const Pagination = ({ total, limit, currentPage = 1, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(total / limit)

    //   const paginationRange = useMemo(() => {
    //     const range: (number | "...")[] = []
    //     const delta = 2 // current atrofida nechta raqam ko'rsatiladi

    //     if (totalPages <= 7) {
    //       for (let i = 1; i <= totalPages; i++) range.push(i)
    //     } else {
    //       const left = Math.max(2, currentPage - delta)
    //       const right = Math.min(totalPages - 1, currentPage + delta)

    //       range.push(1)
    //       if (left > 2) range.push("...")

    //       for (let i = left; i <= right; i++) range.push(i)

    //       if (right < totalPages - 1) range.push("...")
    //       range.push(totalPages)
    //     }

    //     return range
    //   }, [totalPages, currentPage])
    const paginationRange = useMemo(() => {
        const range: (number | "...")[] = []
        const delta = 1 // current atrofida faqat 1 ta raqam ko'rsatish

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) range.push(i)
        } else {
            const left = Math.max(2, currentPage - delta)
            const right = Math.min(totalPages - 1, currentPage + delta)

            range.push(1)

            if (left > 2) range.push("...")

            for (let i = left; i <= right; i++) {
                range.push(i)
            }

            if (right < totalPages - 1) range.push("...")

            range.push(totalPages)
        }

        return range
    }, [totalPages, currentPage])
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return
        onPageChange(page)
    }

    return (
        <div className="flex items-center justify-center space-x-1 flex-wrap">
            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
            >
                <ChevronsLeft className="w-4 h-4" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {paginationRange.map((item, index) =>
                typeof item === "number" ? (
                    <Button
                        key={index}
                        variant={item === currentPage ? "default" : "outline"}
                        size="icon"
                        onClick={() => goToPage(item)}
                    >
                        {item}
                    </Button>
                ) : (
                    <span key={index} className="px-2 text-sm text-muted-foreground">
                        ...
                    </span>
                )
            )}

            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRight className="w-4 h-4" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
            >
                <ChevronsRight className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default Pagination
