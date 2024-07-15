import { Card } from './components/card/card';
import App_module from './App.module.scss';

function App() {
    return (
        <div>
            <div className={App_module.gallery}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default App;
