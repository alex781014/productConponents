import React, { useEffect ,useRef,useState } from "react";

const Dropdown = ({ label,options, selected, onSelectChange }) => {
    const [open,setOpen] = useState(false)
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick = (e)=>{
            if(ref.current.contains(e.target)){
                return;
            }
            setOpen(false)
        }
        document.body.addEventListener("click",onBodyClick);
        return () =>{
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])

  const getOptions = options.map((option) => {
    // 因為React jsx語法無法顯示null 所以這樣意思是 如果我選的值跟選項的值相同的話，回傳null(讓他不顯示)
    if(option.value === selected.value){
        return null;
    }
    
    return (
      <div className="item" key={option.value} onClick={()=>{onSelectChange(option)}}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            // !open 這樣會提供當前的反值 false>true  true>false
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {getOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
