import { Show, createSignal } from "solid-js";
import { AddBook } from "./AddBook";
import { BookList } from "./BookList";
import { initialBooks } from "./constants/initialBooks.const";

interface BookshelfProps {
  name : string;
}

export function BookShelf(props : BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks)
  const [showForm, setShowForm] = createSignal(false)

  const toggleForm = () => setShowForm(!showForm())
  
  return (
    <div>
      <h1>{props.name} Book Shelf</h1>
      <BookList books={books()} />

      <Show when={showForm()}
      fallback={<button onClick={toggleForm}>Add Book</button>} 
      >
        <AddBook setBooks={setBooks}/>
        <button onClick={toggleForm}>Hide Form</button>
      </Show>
    </div>
  )
}