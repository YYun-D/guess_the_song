"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SongPage() {
  
  // 체크 리스트
  const [checkedItems, setCheckedItems] = useState({
    check0509: false,
    check1014: false,
    check1519: false,
    check2023: false,
  });

  // 리스트 클릭시 on/off 설정
  const handleCheckboxClick = (checkboxId: 'check0509' | 'check1014' | 'check1519' | 'check2023') => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  const router = useRouter();

  // 설정 버튼 클릭시 설정한 년도들을 파라미터로 보냄
  const handleClick = () => {
    const selectedlist = Object.entries(checkedItems)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(',');

    router.push(`/song/game?list=${selectedlist}`);
  };

  const allChecked = Object.values(checkedItems).some(Boolean);

  return (
    <main>
      <div
        className={`checkbox-like ${checkedItems.check0509 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check0509")}
      >
        05~09
      </div>
      <div
        className={`checkbox-like ${checkedItems.check1014 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check1014")}
      >
        10~14
      </div>
      <div
        className={`checkbox-like ${checkedItems.check1519 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check1519")}
      >
        15~19
      </div>
      <div
        className={`checkbox-like ${checkedItems.check2023 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check2023")}
      >
        20~23
      </div>
      <button onClick={handleClick} disabled={!allChecked}>설정</button>
    </main>
  );
}