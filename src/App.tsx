import './App.css'
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItems } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { RegularList } from './components/lists/Regular'
import { NumberedList } from './components/lists/numbered';
import { authors } from './data/authors';

import { books } from './data/books';
function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem} />

      <NumberedList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem} />

      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem} />

      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItems} />
    </>
  )
}

export default App
