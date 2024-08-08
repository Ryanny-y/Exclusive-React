import SmallHeader from '../ui/SmallHeader'

export default function Checkout() {
  const headers = ['Home', 'Checkout']

  return (
    <main className="checkout pt-20 pb-28">
      <div className="container mx-auto flex flex-col gap-28">
        <SmallHeader headers={headers}/>

        <section className="biliing-section">
          <div className="billing">

          </div>

          <div>
            
          </div>
        </section>
      </div>
    </main>
  )
}