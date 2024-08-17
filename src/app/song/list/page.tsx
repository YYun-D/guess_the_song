"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SongPage() {
  const [checkedItems, setCheckedItems] = useState({
    check0510: false,
    check1115: false,
    check1620: false,
    check2123: false,
  });


  const handleCheckboxClick = (checkboxId: 'check0510' | 'check1115' | 'check1620' | 'check2123') => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [checkboxId]: !prevState[checkboxId],
    }));
  };

  const router = useRouter();

  const handleClick = () => {
    router.push('/song/game');
  };

  const allChecked = Object.values(checkedItems).some(Boolean);

  return (
    <main>
      <div
        className={`checkbox-like ${checkedItems.check0510 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check0510")}
      >
        05~10
      </div>
      <div
        className={`checkbox-like ${checkedItems.check1115 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check1115")}
      >
        11~15
      </div>
      <div
        className={`checkbox-like ${checkedItems.check1620 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check1620")}
      >
        16~20
      </div>
      <div
        className={`checkbox-like ${checkedItems.check2123 ? "checked" : ""}`}
        onClick={() => handleCheckboxClick("check2123")}
      >
        21~23
      </div>
      <button onClick={handleClick} disabled={!allChecked}>설정</button>
    </main>
  );
}