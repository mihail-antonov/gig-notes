import '../styles/app.scss'
import Header from "../components/header.jsx";
import Cookies from 'js-cookie';

const note = {
    id: 1,
    name: 'Hi',
    date: 'Today',
    content: 'content'
}
const setCookie = () => {
    Cookies.set('note', JSON.stringify(note), {expires: 365})
}

const getCookie = () => {

    console.log('cookie? ', JSON.parse(Cookies.get('note')))
}

function App() {
   return (
       <>
           <Header />
           IN HERE
           <br />
           <br />
           <a onClick={setCookie}>SET</a>
           <br />
           <br />
           <a onClick={getCookie}>GET</a>
       </>
   )
}

export default App