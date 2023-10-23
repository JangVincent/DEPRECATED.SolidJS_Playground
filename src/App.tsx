import { HelloWorld } from './components/HelloWorld';
import { BookShelf } from './components/bookshelf/BookShelf';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <HelloWorld />
      <BookShelf name="Phantola" />
    </div>
  );
};

export default App;
