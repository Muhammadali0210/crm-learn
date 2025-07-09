import { ChartSection } from "./_components/chart-section"
import { DataTable } from "./_components/data-table"
import { SectionCards } from "./_components/section-card"
import data from "./data.json"

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionCards />

      <ChartSection />

      <DataTable data={data} />
    </div>
  )
}

export default Page