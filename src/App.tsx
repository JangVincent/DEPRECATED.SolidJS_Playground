import { createSignal } from 'solid-js';
import { AddBook } from './AddBook';
import { BookList } from './BookList';
import { HelloWorld } from './HelloWorld';

// const App: Component = () => {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//       <HelloWorld />
//     </div>
//   );
// };

export interface Book {
  title: string;
  author: string;
}

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

interface BookshelfProps {
  name : string;
}

function BookShelf(props : BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks)
  
  return (
    <div>
      <h1>{props.name} Book Shelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks}/>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <HelloWorld />
      <BookShelf name="Phantola" />
    </div>
  )
}

export default App
