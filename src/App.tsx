import { HelloWorld } from './HelloWorld';
import { BookShelf } from './componets/bookshelf/BookShelf';

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      {/* <Card /> */}
      <HelloWorld />
      <BookShelf name="Phantola" />
    </div>
  );
};

export default App;
