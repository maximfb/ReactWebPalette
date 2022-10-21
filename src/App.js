import './App.scss';
import Palette from './components/Palette/Palette';
import PaletteStore from './store/palette/PaletteStore';

function App() {
    return (
        <PaletteStore>
            <div className="wrapper">
                <Palette/>
            </div>
        </PaletteStore>
    );
}

export default App;
