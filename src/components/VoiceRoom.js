import React, { useState, useEffect } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai"; // 음소거 아이콘 추가
import { IoMdVideocam } from "react-icons/io"; // 비디오 아이콘
import { FaVideoSlash } from "react-icons/fa"; // 비디오 끄기 아이콘

function VideoChatRoom({ roomName, currentChannel }) {
    const [isVideoOn, setIsVideoOn] = useState(true); // 비디오 상태
    const [isAudioOn, setIsAudioOn] = useState(true); // 오디오 상태
    const [videoStream, setVideoStream] = useState(null); // 비디오 스트림 상태
    const [channelType, setChannelType] = useState(null); // 화상 통화인지 카메라 통화인지 선택

    // 비디오 스트림 설정
    useEffect(() => {
        if (channelType === 'video' || channelType === 'audio') {
            const getVideoStream = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: channelType === 'video', audio: true });
                    setVideoStream(stream);
                } catch (err) {
                    console.error('비디오 스트림을 가져오는 데 실패했습니다:', err);
                }
            };
            getVideoStream();
        }
        return () => {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop()); // 컴포넌트가 언마운트 될 때 스트림을 종료
            }
        };
    }, [channelType, videoStream]);

    // 비디오 켜기/끄기 처리
    const toggleVideo = () => {
        setIsVideoOn(!isVideoOn);
        if (videoStream) {
            const videoTrack = videoStream.getVideoTracks()[0];
            videoTrack.enabled = !videoTrack.enabled;
        }
    };

    // 오디오 켜기/끄기 처리
    const toggleAudio = () => {
        setIsAudioOn(!isAudioOn);
        if (videoStream) {
            const audioTrack = videoStream.getAudioTracks()[0];
            audioTrack.enabled = !audioTrack.enabled;
        }
    };

    // 채널 선택 처리
    const handleChannelSelect = (type) => {
        setChannelType(type); // 화상 또는 카메라 채널 선택
    };

    return (
        <div className="chat_area">
            {!channelType ? (
                <div className="channel_select">
                    <h4>채널을 선택하세요</h4>
                    <button onClick={() => handleChannelSelect('video')}>화상 통화</button>
                    <button onClick={() => handleChannelSelect('audio')}>음성 통화</button>
                </div>
            ) : (
                <>
                    <h4>{roomName}</h4>  {/* 선택된 음성방 이름 표시 */}

                    {/* 채팅 영역 */}
                    <div className="chat_history_area">
                        <ul className="chat_history">
                            {/* 채팅 기록을 2~4줄만 보이도록 제한 */}
                            {Array(4).fill(null).map((_, index) => (
                                <li key={index} className="chat_message">
                                    <span>채팅 메시지 {index + 1}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 비디오 및 통화 상대 */}
                    {channelType === 'video' && (
                        <div className="video_area">
                            <video 
                                autoPlay 
                                muted={!isAudioOn} 
                                ref={videoRef => { if (videoRef && videoStream) videoRef.srcObject = videoStream; }} 
                            />
                            <div className="video_controls">
                                <button onClick={toggleVideo} className="control_button">
                                    {isVideoOn ? <FaVideoSlash size={30} /> : <IoMdVideocam size={30} />}
                                    {isVideoOn ? '비디오 끄기' : '비디오 켜기'}
                                </button>
                                <button onClick={toggleAudio} className="control_button">
                                    {isAudioOn ? <AiOutlineAudio size={30} /> : <AiOutlineAudioMuted size={30} />} {/* 음소거 아이콘 */}
                                    {isAudioOn ? '음소거 해제' : '음소거'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* 통화 상대 */}
                    {channelType && (
                        <div className="call_partner">
                            <p>통화 중인 상대방: {channelType === 'video' ? '화상 상대방' : '음성 상대방'}</p>
                        </div>
                    )}

                    {/* 채팅 입력창 */}
                    <div className="chat_input_area">
                        <div className="chat_input_box">
                            <div>
                                <label className="inputFileLabel" htmlFor="inputFile">
                                    <BsPlusCircle size={30} />
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
                </>
            )}
        </div>
    );
}

export default VideoChatRoom;
