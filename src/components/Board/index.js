import React, { useState } from 'react';
import { Container } from './styles';
import { loadLists } from '../../services/api';
import BoardContext from './context';

import List from '../List';

const data = loadLists();

export default function Board() {

  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to)
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {
          lists.map(list => <List key={list.title} data={list} />)
        }
      </Container>
    </BoardContext.Provider>
  );
}
