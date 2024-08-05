import SectionTitle from "./SectionTitle"
import SectionHeaderTitle from "./SectionHeaderTitle"

export default function SectionHeader({sectionHeader, sectionTitle, children}) {

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle sectionTitle={sectionTitle}/>
      <SectionHeaderTitle sectionHeader={sectionHeader}>
        {children}
      </SectionHeaderTitle>
    </div>
  )

}