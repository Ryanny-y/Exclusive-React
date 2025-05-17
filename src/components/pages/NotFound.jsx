import { Link } from "react-router-dom"
import SmallHeader from "../ui/SmallHeader"

export default function NotFound() {

  const headers = ['Home', '404 Error']

  return (
    <main className="not-found pt-48 pb-20 sm:py-20 lg:py-16">
      <div className="container mx-auto flex flex-col gap-28">
        <SmallHeader headers={headers}/>

        <div className="flex flex-col items-center gap-10 first-line:self-center text-center">
          <h1 className="font-semibold text-8xl">404 Not Found</h1>
          <p>You visited page not found. You may go home page.</p>
          <Link className="py-4 px-12 rounded-md h-bg-red text-white bg-primaryRed mt-5">Back to home page</Link>
        </div>
        
      </div>
    </main>
  )

};