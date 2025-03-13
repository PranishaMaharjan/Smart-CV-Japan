import { useEffect, useState } from "react";

const useYearRange = (startOffset, endOffset) => {
    const [years, setYears] = useState([]);
  
    useEffect(() => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const startYear = currentYear - startOffset;
      const endYear = currentYear + endOffset;
  
      const yearsArray = [];
      for (let year = endYear; year >= startYear; year--) {
        yearsArray.push(year);
      }
  
      setYears(yearsArray);
    }, [startOffset, endOffset]);
  
    return years;
  };
  
  export default useYearRange;