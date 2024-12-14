import TodoList from "@/components/TodoList";
import "./globals.css";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-gray-800 to-gray-500 min-h-screen p-4">
      <TodoList />
    </main>
  );
}
