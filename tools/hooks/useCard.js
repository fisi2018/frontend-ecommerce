import {useEffect,useState} from "react";

export const useCard=(initial)=>{
    const [isClick, setIsClick] = useState(initial);
    const handleClick=()=>{
        (isClick)?setIsClick(false):setIsClick(true);
    }
    return{
        handleClick,
        isClick
    }
}