export default function SectionHeaderTitle({sectionHeader, children}) {

  return (
    <div className="flex w-full flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
      <h1 className="text-4xl font-bold">{sectionHeader}</h1>
      {children}
    </div>
  )
}