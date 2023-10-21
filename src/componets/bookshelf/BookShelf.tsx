import { createSignal } from "solid-js";
import { AddBook } from "./AddBook";
import { BookList } from "./BookList";
import { initialBooks } from "./constants/initialBooks.const";

interface BookshelfProps {
  name : string;
}

export function BookShelf(props : BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks)
  
  return (
    <div>
      <h1>{props.name} Book Shelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks}/>
    </div>
  )
}