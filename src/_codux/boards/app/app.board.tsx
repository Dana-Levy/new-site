import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 362,
        windowHeight: 768,
        windowBackgroundColor: '#ffffff',
    },
});
