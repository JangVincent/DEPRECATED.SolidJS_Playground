import { Book } from './interfaces/book.interface';

type ResultItem = {
  title: string;
  author_name: string[];
};

export async function searchBooks(query: string): Promise<Book[]> {
  if (query.trim() === '') return [];

  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURI(query)}`);

  const results = await response.json();

  const documents = results.docs as ResultItem[];

  console.log(documents);

  return documents.slice(0, 10).map((document) => ({
    title: document.title,
    author: document.author_name?.join(', '),
  }));
}
