export default function SectionContainer({classname, children}) {
  return (
    <section className={classname} data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex flex-col justify-center gap-10">
          {children}
      </div>
    </section>
  )
}