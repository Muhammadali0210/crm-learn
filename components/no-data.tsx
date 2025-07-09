import React from 'react'

const NoData = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[400px]">
      <img src="/images/empty-box.png" alt="empty" width="100" height="100" />
      <h3 className="text-center text-lg text-[#667779]">{message || "No data"}</h3>
    </div>
  )
}

export default NoData
