export default function SectionTitle({sectionTitle}) {

  return (
    <div className="flex items-center gap-4">
      <span className="red-box bg-primaryRed h-10 w-5"></span>
      <h1 className="text-primaryRed text-base py-2 font-bold">
        {sectionTitle}
      </h1>
    </div>
    
  )
}