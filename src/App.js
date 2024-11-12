import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { BsHash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import ChatRoom from './components/ChatRoom';
import VoiceRoom from './components/VoiceRoom';
import InnerAside from './components/layouts/InnerAside';

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
              <div><span>테스트방</span></div>
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
// function InnerAside() {
//   const [currentChannel, setCurrentChannel] = useState('chat');  // 현재 채널을 관리하는 상태
//   const [rooms, setRooms] = useState({ 
//     chat: ['테스트채팅방'],
//     voice: ['테스트통화방']
//   });  // 채팅방과 음성방을 관리하는 상태

//   // 채팅방 추가 함수
//   const addRoom = (channelType) => {
//     const newRoom = prompt('새로운 방의 이름을 입력하세요');
//     if (newRoom) {
//       setRooms((prevRooms) => ({
//         ...prevRooms,
//         [channelType]: [...prevRooms[channelType], newRoom],
//       }));
//     }
//   };
//   return (
//     <Accordion className='chennel_area' defaultActiveKey={['0']} alwaysOpen>
//       <div className='chennel_header'>
//         <h4>테스트방</h4>
//       </div>
//       <Accordion.Item className='chatRoom_list chennelRoom' eventKey="0">
//         <Accordion.Header>
//           <IoMdArrowDropdown className='arrowIcon' /> <span>채팅채널</span> <BsPlusCircle className='addRoomIcon' size={16} onClick={() => addRoom('chat')}/>
//         </Accordion.Header>
//         <Accordion.Body>
//           <ul>
//             {/* <li className='chatRoom_item active list_item' onClick={() => setCurrentChannel('chat')}>
//               <a>
//                 <div>
//                   <BsHash size={21}/><span>테스트채팅방</span>
//                 </div>
//               </a>
//             </li> */}
//             {rooms.chat.map((room, index) => (
//               <li key={index} className='chatRoom_item active list_item' onClick={() => setCurrentChannel('chat')}>
//                 <a>
//                   <div>
//                     <BsHash size={21}/><span>{room}</span>
//                   </div>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item className='meetingRoom_list chennelRoom' eventKey="1">
//         <Accordion.Header>
//           <IoMdArrowDropdown className='arrowIcon' />음성채널 <BsPlusCircle className='addRoomIcon' size={16} onClick={() => addRoom('voice')}/>
//         </Accordion.Header>
//         <Accordion.Body>
//           <ul>
//             {/* <li className='meetingRoom_item list_item' onClick={() => setCurrentChannel('voice')}>
//               <a>
//                 <div><span>테스트통화방</span></div>
//               </a>
//             </li> */}
//             {rooms.voice.map((room, index) => (
//               <li key={index} className='meetingRoom_item list_item' onClick={() => setCurrentChannel('voice')}>
//                 <a>
//                   <div><span>{room}</span></div>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   )
// }
function ConnectedUser() {
  return (
    <div className='connected_user_area'>
      <div className='user_list'>
        <h6>온라인-<span className='online_count'>2</span></h6>
        <ul className='online_user'>
          <li className='user_item'>
            <a className='user_link'>
              <div className='user_imgBox img_box'>
                <FaRegCircleUser size={50}/>
                {/* <img src={logo} className="App-logo" alt="유저 프로필이미지" />  */}
              </div>
              <div className='user_name_box'>
                  <span className='user_name'>유저이름</span>
              </div>
            </a>
          </li>
          <li className='user_item'>
            <a className='user_link'>
              <div className='user_imgBox img_box'>
                <FaRegCircleUser size={50}/>
                {/* <img src={logo} className="App-logo" alt="유저 프로필이미지" />  */}
              </div>
              <div className='user_name_box'>
                  <span className='user_name'>유저이름</span>
              </div>
            </a>
          </li>
        </ul>
        <h6>오프라인-<span className='offline_count'>2</span></h6>
        <ul className='offLine_user'>
          <li className='user_item'>
            <a className='user_link'>
              <div className='user_imgBox img_box'>
                <FaRegCircleUser size={50}/>
                {/* <img src={logo} className="App-logo" alt="유저 프로필이미지" />  */}
              </div>
              <div className='user_name_box'>
                  <span className='user_name'>유저이름</span>
              </div>
            </a>
          </li>
          <li className='user_item'>
            <a className='user_link'>
              <div className='user_imgBox img_box'>
                <FaRegCircleUser size={50}/>
                {/* <img src={logo} className="App-logo" alt="유저 프로필이미지" />  */}
              </div>
              <div className='user_name_box'>
                  <span className='user_name'>유저이름</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
function App() {

  const [currentChannel, setCurrentChannel] = useState('chat');
  const [roomName, setRoomName] = useState('테스트채팅방');

  const handleRoomChange = (channelType, room) => {
    setCurrentChannel(channelType);
    setRoomName(room);  // 채팅방 이름 업데이트
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Aside />
        <div className='content_warp'>
          <InnerAside  setCurrentChannel={setCurrentChannel} onRoomChange={handleRoomChange} />{/* 채팅방 변경 함수 전달 */}
          <div className='content_Area'>
            <div className='chennel_content'>
              {currentChannel === 'chat' && <ChatRoom roomName={roomName} currentChannel={currentChannel} />} {/* 채팅방 이름과 채널을 ChatRoom에 전달 */}
              {currentChannel === 'voice' && <VoiceRoom roomName={roomName} currentChannel={currentChannel}/>}
            </div>
            <ConnectedUser />
          </div>
        </div>
        
        {/* <div className="App-header">
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
        </div> */}
      </main>
    </div>
  );
}

export default App;
