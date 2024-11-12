import React from 'react';
import { BsPlusCircle } from "react-icons/bs";

function ChatRoom({ roomName, currentChannel }) {
    return (
        <div className="chat_area">
            <h4>{roomName}</h4>  {/* 선택된 채팅방 이름 표시 */}
            <ul className="chat_history">
                {/* 여기서 메시지 목록을 표시하면 됩니다. */}
            </ul>
            <div className="chat_input_area">
                <div className="chat_input_box">
                    <div>
                        <label className="inputFileLabel" htmlFor="inputFile">
                            <BsPlusCircle size={30}/>
                        </label>
                        <input type="file" id="inputFile" className="hidden" multiple />
                    </div>
                    <input 
                        type="text" 
                        id="inputChat" 
                        className="inputChat" 
                        placeholder="메세지 보내기"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;
