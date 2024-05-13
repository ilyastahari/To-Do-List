import { TodoItem } from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="inner-div bg-[#121212] text-[#ADB7BE] p-8 rounded shadow-lg" style={{ fontSize: '1.25rem', width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header className="mb-8" style={{ width: '100%', textAlign: 'center' }}>
          <h1 className="text-4xl">Ilyas To Do List</h1>
        </header>
        <ul style={{ margin: '0', padding: '0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        <div className="text-center mt-8" style={{ width: '100%' }}>
          <Link 
            className="px-4 py-2 rounded text-white hover:text-white focus-within:text-white"
            href="/new"
            style={{
              background: 'linear-gradient(45deg, #6EE7B7, #3B82F6)',
              border: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              fontSize: '1.5rem',
              display: 'inline-block'
            }}
          >
            New Task
          </Link>
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
      </div>
    </div>
  )
}