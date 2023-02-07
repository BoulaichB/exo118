import Card from './components/card/card';
import Pikachu from './components/card/public/img/Pikachu.webp';

function App() {
  return (
    <div>
      <Card _param1={Pikachu} _param2='BTC' _param3='bg-slate-600'/>
    </div>
  );
}

export default App;
