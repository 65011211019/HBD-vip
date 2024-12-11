import React, { useState, useRef } from "react";
import "./App.css"; // สร้างไฟล์ CSS เพื่อจัดเฟคเฟคสวยๆ

// ข้อมูลเพื่อนแต่ละคน
const friends = [
  {
    name: "นาจา",
    image: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/325271085_703148834819699_3126764094524279861_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Euov0CDpdMMQ7kNvgEedx9N&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=Ao0EgD0klc98CEwZhwNRvau&oh=00_AYC3JEAPeLlygGCknyMxpOed41r9F5Ywjwsw63AXjoYZAA&oe=675FAC25", // แทนที่ด้วย path ของรูปจริง
    message: "สุขสันต์วันเกิด! ขอให้เจอแต่เรื่องดี ๆ และขนมที่อร่อยกว่า....เมื่อวาน!"
  },
  {
    name: "บอล",
    image: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/352769955_1306744406889024_874791746976805427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=I7e4FjtBAlAQ7kNvgHYSrG4&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=A9kqj9-jmD67hZw2IyDe4c2&oh=00_AYBsFIewppu0rPMuCUMUSh5NieepnTpMZ-LHDOpqm1W4hQ&oe=675FBAB0",
    message: "HBD! ขอให้ลูกบอลที่หายได้กลับมา และไม่มีใครเอามาแปะบนหัวอีก!"
  },
  {
    name: "คอปเตอร์(ไผ่)",
    image: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/466866125_1711256369725297_611239386933258603_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=m3iSnurS420Q7kNvgG6lyM4&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=Ak95hCUf4kwxD5nap7QXTSh&oh=00_AYCkKKsJkCKJ3rd5N0mX0-K6fsRE8hLGY5OjMVOlYoqrrw&oe=675FA57A",
    message: "สุขสันต์วันเกิด ขอให้ชีวิตหมุนไปข้างหน้า เหมือนใบพัดที่ไม่เคยหยุด!"
  },
  {
    name: "พร้อม",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/462574466_9369062666460676_5408934081353670663_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=fop5J_ZPW70Q7kNvgF11nQi&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGOlBCWoZSrG__vz88aYlH3z9QHIsk_Z3IrfUuV2I5RJQ&oe=67815899",
    message: "HBD! พร้อมเสมอสำหรับปีนี้ ขอให้รวยไว ๆ และเจอโปรแกรมที่ไม่มีบั๊ก!"
  },
  {
    name: "เครป",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/462577888_1723939044840346_4228256620084619996_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=PBNb2_subMEQ7kNvgFLSCE6&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGByTGsFiYm6yNucycdolg1q6gsRWTJFnt6gSwGTzTuyg&oe=67814497",
    message: "สุขสันต์วันเกิด ขอให้ชีวิตมีแต่ชั้นความสุขแบบเครป!"
  },
  {
    name: "มาย",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/461239165_849026107340118_6084049907672187411_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=y6zSFn-0mncQ7kNvgE-1cTz&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFVwXLWisezgObCWBmDW9eAD3xVMmgjZv_o0NXfTNE3YQ&oe=67815B62",
    message: "HBD! ขอให้มายสมชื่อ ปีนี้เป็นปีที่มาย ๆ ความสุข!"
  },
  {
    name: "ไตเติ้ลX",
    image: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/469278107_2481861995514404_6490873685890640405_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pYbxl6QuStgQ7kNvgF8t599&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AkiF-w5aZRqj1nvc0hTgrqR&oh=00_AYA8Tl-4kwi_gULpjwvan1PmqjHar-x_JOqagPemx71cCQ&oe=675FB0C0",
    message: "HBD! แถมความสุขไปให้สองเท่า ขอให้ผ่านเมษนี้ไปอย่างสดใส!"
  },
  {
    name: "เมษ (แถม)",
    image: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/468899398_3910418269280497_487853204901831397_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_D32ervULY0Q7kNvgFWsD_U&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=Ak1qnBkks91YV0xiQVjQq3Z&oh=00_AYAR2k7BYX5obS2lCbVTWsBvJE2oQwpHkYmWRTrUg-4BpQ&oe=675F8AFD",
    message: "HBD! แถมความสุขไปให้สองเท่า ขอให้ผ่านเมษนี้ไปอย่างสดใส!"
  }
];

const BirthdayCard = ({ friend }) => {
  // ใช้ useRef สำหรับควบคุมตัวเล่นเพลง
  const audioRef = useRef(null);

  // ฟังก์ชั่นเพื่อเล่นเพลง
  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.error("Audio play error:", error));
    }
  };

  // ฟังก์ชั่นเพื่อหยุดเพลง
  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="card">
      <img src={friend.image} alt={friend.name} className="friend-image" />
      <h2 className="friend-name">{friend.name}</h2>
      <p className="friend-message">{friend.message}</p>

      {/* ปุ่มเล่นเพลง */}
      <button className="play-button" onClick={playSong}>
        กดฟังเพลง
      </button>

      {/* ปุ่มหยุดเพลง */}
      <button className="pause-button" onClick={pauseSong}>
        หยุดเพลง
      </button>

      {/* ปุ่มดาวน์โหลดเพลง */}
      <a href="/song/HBDvipSong.mp3" download className="download-button">
        ดาวน์โหลดเพลง
      </a>

      {/* ตัวเล่นเพลง */}
      <audio ref={audioRef} src="/song/HBDvipSong.mp3" />
    </div>
  );
};

const App = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>Happy Birthday เพื่อนๆแบบ VIP!</h1>
        <div className="button-container">
          {friends.map((friend, index) => (
            <button key={index} onClick={() => setSelectedFriend(friend)} className="select-button">
              {friend.name}
            </button>
          ))}
        </div>
      </header>
      <div className="card-container">
        {selectedFriend && <BirthdayCard friend={selectedFriend} />}
      </div>
    </div>
  );
};

export default App;
