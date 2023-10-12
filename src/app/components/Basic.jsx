import { useBookToggle } from "../store/bookToggle"

export default function Basic() {
  const toggle = useBookToggle(s=>s.toggle)
  return (
    <>
      <section className={`${toggle ? 'opacity-1':'opacity-0'} fixed z-20 w-full`}>
        <h2>基本</h2>
      </section>
    </>

  )
}
