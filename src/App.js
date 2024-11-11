import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className='header_area'>
        <div className='logo_box img_box'>
          <img src={process.env.PUBLIC_URL + '/kallaris_logo.png'} alt="logo" />
        </div>  
        <div className='search_box_area'>
          <div className='search_input_box'>
            <input type='text' className='form-control'/>
            <button id='search_box_btn' className='btn btn-primary' type="button">검색</button>
          </div>
        </div>
        <div className='user_area'>
          <a className='user_link'>
            <div className='user_imgBox img_box'>
              <FaRegCircleUser size={50}/>
              {/* <img src={logo} className="App-logo" alt="유저 프로필이미지" />  */}
            </div>
            <div className='user_name_box'>
                <span className='user_name'>유저이름</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}
function Aside() {
  return (
    <div className='aside_sidebar'>
      <div className='aside_sidebar_main_area'>
        <a className='aside_sidebar_main'>
          <img src={process.env.PUBLIC_URL + '/kallaris_logo.png'} alt="logo" />
        </a>
      </div>
      <div className='aside_sidebar_scroll_area'>
        <ul>
          <li className='aside_sidebar_scroll_item'>
            <a>
              <div>테스트방</div>
            </a>
          </li>
          <li className='aside_sidebar_scroll_item'>
            <a>
              <BsPlusCircle size={50}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header ></Header>
      <main>
        <Aside></Aside>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Reacttttttts
            </a>
        </div>
      </main>
    </div>
  );
}

export default App;
