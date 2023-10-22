import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#ffffff' ,'#b32d00','#e6b3e6','#ccddff','#660066','#006633','#ffffcc','#ffff80','#002966','#ffaa80','#66ff33','#6666ff','#800080','#ffdf80','#ccccff','#990000','#000000'];

  return (
    <div className="App">
       <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
