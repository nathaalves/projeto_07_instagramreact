import ReactDOM         from 'react-dom';
import PageHeader       from './PageHeader'
import PageMain         from './PageMain'
import MobilePageFooter from './MobilePageFooter';

function App() {
    return (
        <div>
            <PageHeader />
            <PageMain />
            <MobilePageFooter />
        </div>
    )
}

const app = App();
const element = document.querySelector(".root");

ReactDOM.render(app, element);