import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { BsPlusCircle, BsHash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";

function InnerAside({ setCurrentChannel, onRoomChange }) {
  const [rooms, setRooms] = useState({ 
    chat: ['테스트채팅방'],
    voice: ['테스트통화방']
  });  // 채팅방과 음성방을 관리하는 상태
  
  // 디폴트 활성화된 방
  const [selectedRoom, setSelectedRoom] = useState({ channelType: 'chat', room: '테스트채팅방' });

  // 채팅방 추가 함수
  const addRoom = (channelType, event) => {
    event.stopPropagation();  // Accordion의 기본 동작(접힘)을 방지
    const newRoom = prompt('새로운 방의 이름을 입력하세요');
    if (newRoom) {
      setRooms((prevRooms) => ({
        ...prevRooms,
        [channelType]: [...prevRooms[channelType], newRoom],
      }));
    }
  };

  const handleRoomClick = (channelType, room) => {
    setSelectedRoom({ channelType, room }); // 선택된 채널과 방 저장
    setCurrentChannel(channelType);  // 채널 변경
    onRoomChange(channelType, room); // 부모 컴포넌트로 채널과 방 이름 전달
  };

  return (
    <Accordion className="chennel_area" defaultActiveKey={['0']} alwaysOpen>
      <div className="chennel_header">
        <h4>테스트방</h4>
      </div>

      <Accordion.Item className={`chennelRoom ${selectedRoom.channelType === 'chat' && selectedRoom.room === '테스트채팅방' ? 'active' : ''}`} eventKey="0">
        <Accordion.Header>
          <IoMdArrowDropdown className="arrowIcon" /> <span>채팅채널</span> 
          <BsPlusCircle className="addRoomIcon" size={16} onClick={(e) => addRoom('chat', e)} />
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            {rooms.chat.map((room, index) => (
              <li 
                key={index} 
                className={`chatRoom_item list_item ${selectedRoom.channelType === 'chat' && selectedRoom.room === room ? 'active' : ''}`} 
                onClick={() => handleRoomClick('chat', room)}  // 채팅방 클릭 시 부모 컴포넌트로 채널과 방 이름 전달
              >
                <a>
                  <div>
                    <BsHash size={21}/><span>{room}</span> <BsFillGearFill className='editRoom'/>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className={`chennelRoom ${selectedRoom.channelType === 'voice' && selectedRoom.room === '테스트통화방' ? 'active' : ''}`} eventKey="1">
        <Accordion.Header>
          <IoMdArrowDropdown className="arrowIcon" /> 음성채널 
          <BsPlusCircle className="addRoomIcon" size={16} onClick={(e) => addRoom('voice', e)} />
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            {rooms.voice.map((room, index) => (
              <li 
                key={index} 
                className={`meetingRoom_item list_item ${selectedRoom.channelType === 'voice' && selectedRoom.room === room ? 'active' : ''}`} 
                onClick={() => handleRoomClick('voice', room)}  // 음성방 클릭 시 부모 컴포넌트로 채널과 방 이름 전달
              >
                <a>
                  <div>
                    <AiFillSound size={21}/><span>{room}</span><BsFillGearFill className='editRoom'/>
                  </div> 
                </a>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default InnerAside;
