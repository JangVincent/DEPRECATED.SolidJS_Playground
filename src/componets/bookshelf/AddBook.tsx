import { For, Setter, Show, createResource, createSignal } from "solid-js";
import { Book } from "./interfaces/book.interface";
import { searchBooks } from "./searchBooks";

export interface AddBookProps {
  setBooks : Setter<Book[]>
}

export function AddBook(props: AddBookProps) {

  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  const [data] = createResource<Book[], string>(query, searchBooks);

  return (
    <>
      <form>
        <div>
          <label for="title">Search Book</label>
          <input
            id="title"
            type="text"
            value={input()}
            onInput={(e) => setInput(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setQuery(input());
          }}>Search</button>
      </form>
      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={data()}>
          {(book) => (
              <li>
                {book.title} by {book.author}{" "}
                <button
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(e) => {
                    e.preventDefault();
                    props.setBooks((books) => [...books, book]);
                  }}
                >
                  Add
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
    
  );
}
