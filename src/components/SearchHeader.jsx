import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  //   뒤로가기 시 경로에 맞게 입력창 텍스트도 자동으로 업데이트되도록 변경
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      {/* 로고+아이콘 */}
      <Link to="/">
        <BsYoutube />
        <h1> YOUTUBE</h1>
      </Link>
      {/* 검색창 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
