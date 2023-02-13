import React from 'react';
import ReactDOM from 'react-dom';

interface Props {}

const App = ({}: Props) => {
  return (
    <div>
        <h1>Webpack Open!</h1>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('app'));
export default App;