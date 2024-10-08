import Block1 from './components/block1';
import Block2 from './components/block2';
import Block3 from './components/block3';
import Block4 from './components/block4';
import './App.css';

export default function App() {
  return (
    <section className="app">
      <h3 className="app-title">Д у ш н и л а</h3>
      <div className="layout-container">
        <Block1 />
        <Block2 />
        <div className="app-block-3-4">
          <Block3 />
          <Block4 />
        </div>
      </div>
    </section>
  );
}
