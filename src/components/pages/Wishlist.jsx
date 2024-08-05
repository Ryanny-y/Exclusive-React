import WishlistContainer from "../layouts/WishlistContainer"

export default function WIshlist() {
  return (
    <main className="wishlist" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto py-20 flex flex-col gap-20">
        <WishlistContainer header='Wishlist'/>

        <WishlistContainer header='Just For You'/>
      </div>
    </main>
  )
}