import { Separator } from '@/components/ui/separator'
import { IUser } from '@/types'
import React from 'react'

const UserCard = ({user} : {user: IUser}) => {
  return (
    <div className="w-full flex flex-col border border-border bg-white dark:bg-sidebar shadow-sm p-6 rounded-2xl space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-green-700">{user.name}</h2>
        <p className="text-sm text-muted-foreground">@{user.username}</p>
      </div>

      <Separator />

      <div className="space-y-1 text-sm">
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Telefon:</span> {user.phone}</p>
        <p><span className="font-medium">Vebsayt:</span> <a href={`https://${user.website}`} target="_blank" className="text-blue-600 underline">{user.website}</a></p>
      </div>

      <Separator />

      <div className="space-y-1 text-sm">
        <p className="font-semibold text-green-800">🏢 Kompaniya</p>
        <p><span className="font-medium">Nomi:</span> {user.company?.name}</p>
        <p className="italic text-muted-foreground">{user.company?.catchPhrase} </p>
      </div>
    </div>
  )
}

export default UserCard