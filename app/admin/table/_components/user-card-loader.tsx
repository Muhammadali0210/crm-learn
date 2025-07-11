import { Skeleton } from '@/components/ui/skeleton'

const UserCardLoader = () => {
  return (
    <div className="w-full flex flex-col border border-border bg-white shadow-sm p-6 rounded-2xl space-y-4">
      {/* Name + Username */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>

      <div className="border-t border-muted" />

      {/* Email, Phone, Website */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>

      <div className="border-t border-muted" />

      {/* Company info */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  )
}

export default UserCardLoader