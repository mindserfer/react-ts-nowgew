import React, {usestate} from 'react';

function Example() {
  // new var 
  const [ count, setCount] = useState(0);
  
  return (
    < div> 
      <p>you clicked {count} times </p>
      <button onClick={() => setCount(count+1)}>
        click me
      </button>
    </div>
  );
}
