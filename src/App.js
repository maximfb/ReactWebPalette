import './App.scss';
import AlertStore from './store/alert/AlertStore';
import PaletteStore from './store/palette/PaletteStore';
import Palette from './components/Palette/Palette';
import Alert from './components/Alert/Alert';

function App() {
    return (
        <PaletteStore>
            <AlertStore>
                <div className="wrapper">
                    <Palette/>
                    <Alert/>
                </div>
            </AlertStore>
        </PaletteStore>
    );
}

export default App;
