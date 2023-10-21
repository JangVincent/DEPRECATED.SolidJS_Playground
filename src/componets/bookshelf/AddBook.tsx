import { Setter, createSignal } from "solid-js";
import { emptyBook } from "./constants/emptyBook.const";
import { Book } from "./interfaces/book.interface";

export interface AddBookProps {
  setBooks : Setter<Book[]>
}

export function AddBook(props: AddBookProps) {
  const [newBook, setNewBook] = createSignal(emptyBook);

  const addBook = (e : MouseEvent) => {
    e.preventDefault();
    props.setBooks((books) => [...books, newBook()]);
    setNewBook(emptyBook);
  };

  return (
    <form>
      <div>
        <label for="title">Book Title</label>
        <input id="title" value={newBook().title} onInput={(e) => {
          setNewBook({ ...newBook(), title: e.currentTarget.value });
        }} />
      </div>
      <div>
        <label for="author">Author</label>
        <input id="author" value={newBook().author} onInput={(e) => {
          setNewBook({ ...newBook(), author: e.currentTarget.value });
        }} />
      </div>
      <button type="submit" onClick={addBook}>Add Book</button>
    </form>
  );
}
