export default function Footer() {
  const year = new Date().getFullYear(); // used to get the current year
  return (
    <footer className='bg-black space-y-4 py-4 text-amber-50 hover:text-blue-600 font-bold text-center '>
      <p>Created with Power ⚡ by Uzo ^_^</p>
      <p>&copy; {year}</p>
    </footer>
  )
}
