import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { firebaseDB } from '../firebase/firebase'; // Firebase 설정 가져오기

const DBHandler = {
  // 채팅 기록 읽기
  async readMessages(ref) {
    const snapshot = await getDocs(collection(firebaseDB, ref));
    return snapshot.docs.map((doc) => {
      return Object.assign(doc.data(), { id: doc.id });
    });
  },

  // 채팅 메시지 작성
  async writeMessage(ref, data) {
    await setDoc(doc(collection(firebaseDB, ref)), {
      nickname: data.nickname,
      message: data.message,
      userId: data.userId,
      timestamp: serverTimestamp(),
    });
  },

  // 채팅 메시지 삭제
  async deleteMessage(id) {
    await deleteDoc(doc(firebaseDB, `chatMessages/${id}`));
  },

  // 댓글 작성 (채팅 메시지에 댓글 추가)
  async writeComment(id, data) {
    await updateDoc(doc(firebaseDB, `chatMessages/${id}`), {
      comments: arrayUnion({ content: data.comment, userId: data.userId }),
    });
  },

  // 댓글 삭제 (채팅 메시지에서 댓글 삭제)
  async deleteComment(id, data) {
    await updateDoc(doc(firebaseDB, `chatMessages/${id}`), {
      comments: arrayRemove({ content: data.comment, userId: data.userId }),
    });
  },
};

export default DBHandler;
