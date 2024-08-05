export default function SectionHeaderTitle({sectionHeader, children}) {

  return (
    <div className="flex w-full items-start xs:items-center justify-between gap-7 flex-wrap">
      <h1 className="text-4xl font-bold text-nowrap">{sectionHeader}</h1>
      {children}
    </div>
  )
}