import { useState } from "react";
import "../App.css";
import handleSubmit from "../firebase/createblogs"; 
import { useNavigate , useLoaderData } from "react-router-dom";
import UpdateDocument from "../firebase/updateblog";


const Viewpage = () => {
  const navigate = useNavigate();
  const document = useLoaderData();
  const editMode = document ? true : false;
  let defaultData;
  if (editMode == true ){
    defaultData = document.data();
  } else {
    defaultData = {
      "header"  : "",
      "description" : "",
      "content" : ""
  }
  };

    const [content , setContent ] = useState(defaultData);
    function onSave() {
        handleSubmit(content);
        navigate('/');
     }
     function onUpdate(){
      UpdateDocument("blogs" , document.id , content).then(() => {
        navigate('/')
      })
     }

  
     function onHeaderChange(e){
        let cloneContent = Object.assign({} , content)
        cloneContent.header = e.target.value;
        setContent(cloneContent);
     }

     function onDescriptionChange(e){
       let cloneContent = Object.assign({}, content)
       cloneContent.description = e.target.value;
        setContent(cloneContent);
     }
     function onContentChange(e){
       let cloneContent = Object.assign({}, content)
       cloneContent.content = e.target.value;
        setContent(cloneContent);
     }


  return (
    <div>
      <div>
        <div>
        <input  value = {content.header} type="text" onChange = {onHeaderChange} style={{margin : '1px solid black', width: '800px' }}></input>
        </div>
        <div >
        <input value = {content.description} type="text" onChange={onDescriptionChange} style={{margin : '1px solid black', width: '800px' }}></input>
        </div>
        <div >
        <textarea value = {content.content} name="message" rows="10" cols="120" type="text" onChange={onContentChange} > </textarea>
        </div>
        { editMode == true ? <button onClick={onUpdate}>  Update </button> :  <button className="submit" onClick = {onSave}> Save </button> }
        <button onClick= { ()=>{
          navigate(-1);
        }}> Cancel </button>
        
      </div>
    </div>
  );
};

export default Viewpage;
