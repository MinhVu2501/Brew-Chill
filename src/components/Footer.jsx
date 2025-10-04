function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Brew & Chill. All rights reserved.</p>
        <p>
          123 Coffee St, Your City • Mon–Sun 7:00–19:00 • (123) 456-7890
        </p>
      </div>
    </footer>
  )
}

export default Footer


