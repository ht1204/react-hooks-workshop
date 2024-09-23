import React from 'react';

const { useState } = React;

export const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [obj, setObj] = useState({
    email: "email@email.com",
    key: 'value', 
  });

  

  const handleClick = () => setCount(prevCount => prevCount + 1);

  const handleList = () => {
    setList([...list, 'item']);
  };

  const handleObject = () => {
    const prop_updated = 'key';
    setObj({
      ...obj,
        [prop_updated]: 'new_value',
    });
  };

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleList}>Add Item</button>
      <button onClick={(e) => handleObject(e, 'key')}>Add to Object</button>
      <br />
      <span>
        List: {list.join(' - ')}
      </span>
      <br />
      <span>
        Object: {Object.entries(obj).map(([prop, value], index) => {
          return (
            <div key={index}>
              <p>{`${prop}: ${value}`}</p>
            </div>
          );
        })}
      </span>
    </>
  );
};