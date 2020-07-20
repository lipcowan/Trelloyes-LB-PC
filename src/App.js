import React from 'react';
import './App.css';

import List from './List';
import store from './store';

function App() {
  // const lists = [];
  
  // for (let i = 0; i < store.lists.length; i++) {
  //   lists.push(<List 
  //     key={store.lists[i].id}
  //     header={store.lists[i].header}
  //     cards={store.lists[i].cards}
  //   />)
  // }

  const lists = store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds.map(cardId => store.allCards[cardId])} />)
  
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
