import React, {useState, useEffect} from "react";

import ShareButton from "../ShareButton/ShareButton";
import style from "./Typing.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Typing = ({ handleInputChange, onSubmit }) => {
  const [value, setValue] = useState();

  useEffect(() => { // Called on value change
    handleInputChange(value);
  }, [handleInputChange, value]);

  return ( 
  <div>
      <div data-aos="fade-up">
        <div className={style.editor}>
          <ReactQuill className={style.textarea} theme="snow" value={value} onChange={setValue} placeholder="Start typing here!" />
        </div>
        <div className={style.share}>
          <ShareButton  onSubmit={onSubmit} />
        </div>
      </div>
  </div>
  );
};

export default Typing;
