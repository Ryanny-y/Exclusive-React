export default function SmallHeader({headers}) {
  return (
    <p className="small-header flex items-center gap-8 text-xs font-medium text-secondaryGray">
      {headers.map(header => (
        <span key={header}>{header}</span>
      ))}
    </p>
  )
}