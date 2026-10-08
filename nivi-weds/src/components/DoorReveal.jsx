export default function DoorReveal({ active }) {
  if (!active) return null
  return (
    <div className="pointer-events-none absolute inset-0 z-[170]">
      <div className="door-left open absolute inset-y-0 left-0 w-1/2 origin-left bg-gradient-to-r from-[#3a2618] via-[#6d5212] to-[#c4a35a] shadow-2xl">
        <Carving />
      </div>
      <div className="door-right open absolute inset-y-0 right-0 w-1/2 origin-right bg-gradient-to-l from-[#3a2618] via-[#6d5212] to-[#c4a35a] shadow-2xl">
        <Carving />
      </div>
    </div>
  )
}

function Carving() {
  return (
    <div className="absolute inset-6 rounded-3xl border-2 border-[#f4e2b3]/40">
      <div className="absolute inset-4 rounded-2xl border border-[#f4e2b3]/25" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#f4e2b3]/50" />
    </div>
  )
}
