import { Separator } from "@/components/ui/separator"
import UserList from "./_components/user-list"

const Page = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">Foydalanuvchilar</h2>
      <Separator className="mt-4" />
      <UserList />
    </div>
  )
}

export default Page