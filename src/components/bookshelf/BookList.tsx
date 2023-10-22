import { For } from 'solid-js';
import { Book } from './interfaces/book.interface';

interface BookListProps {
  books: Book[];
}

export function BookList(props: BookListProps) {
  const totalBooks = () => props.books.length;

  const authorStyle = {
    'font-style': 'italic',
  };

  return (
    <>
      <h2>Total Book Counts : {totalBooks()}</h2>
      <ul>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title}
                <span style={authorStyle}>({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
