

export default function ServiceContainer({icon, service, description}) {
  return (
    <li className="flex flex-col items-center gap-2">
      <span className="
        flex items-center justify-center 
        rounded-full bg-dark text-white 
        text-2xl text-center mb-4 relative
        h-12 w-12
        after:absolute after:w-18 after:h-18 after:top-1/2 after:left-1/2 after:bg-primaryGray
        after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10"
      >
        {icon}
      </span>
      <p className="text-xl font-bold">{service}</p>
      <p>{description}</p>
    </li>
  )
}