import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.todo.create({ data: { title, complete: false } })
  redirect("/")
}

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="inner-div bg-[#121212] text-[#ADB7BE] p-8 rounded shadow-lg" style={{ fontSize: '1.25rem', width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header className="mb-8" style={{ width: '100%', textAlign: 'center' }}>
          <h1 className="text-4xl">New</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-col" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            name="title"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            style={{ width: '100%', padding: '12px 20px', fontSize: '1.25rem' }}
          />
          <div className="flex gap-1 justify-center mt-4">
            <Link
              href=".."
              className="px-4 py-2 rounded text-white hover:text-white focus-within:text-white"
              style={{
                background: 'linear-gradient(45deg, #6EE7B7, #3B82F6)',
                border: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                fontSize: '1.5rem'
              }}
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 rounded text-white hover:text-white focus-within:text-white"
              style={{
                background: 'linear-gradient(45deg, #6EE7B7, #3B82F6)',
                border: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                fontSize: '1.5rem'
              }}
            >
              Create
            </button>
            <div 
            style={{ 
              backgroundImage: 'radial-gradient(circle at center, #38b2ac, transparent)', 
              borderRadius: '50%', 
              height: '320px', 
              width: '320px', 
              position: 'absolute', 
              top: '80%', 
              left: '21%', 
              transform: 'translate(-50%, -50%)', 
              zIndex: '0', 
              filter: 'blur(40px)' 
            }}></div>
          </div>
        </form>
      </div>
    </div>
  )
}