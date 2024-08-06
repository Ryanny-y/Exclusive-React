export default function AboutService({icon, service, description}) {

  return (
    <li className="h-bg-white-a flex flex-col items-center gap-2 py-7 px-12 border rounded-md border-black -z-20 duration-200 hover:bg-primaryRed hover:text-white hover:border-none">
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
      <p className="text-2xl font-bold">{service}</p>
      <p>{description}</p>
    </li>
  )
}