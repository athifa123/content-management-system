import { useEffect, useState } from "react";
import {readAll}  from "../firebase/readblog";
import CreateCard from "./CreateCard";
import { useNavigate } from "react-router-dom";


const Recentblogs = () => {
  const [contentBlogs, setcontentBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect( () => {
   readAll().then((docs_ref)=>{
    setcontentBlogs(docs_ref);
   });
    
  }, []);


  return  (
   
   
    <div className="overview_card_container">
      
      <div> <CreateCard/> </div>

      {contentBlogs.map((blog) => (
        
        <div className="card-container" documentId={blog.id} onClick={(e)=>{
          const documentId = e.currentTarget.getAttribute("documentId");
          navigate('/blog/' + documentId);
        }}>
          <div className="inner-container">
            {/* <div className="date">{blog.created}</div> */}
            <div className="inner-header">{blog.data().header}</div>
            <div className="Description">{blog.data().description}</div> {/* Fixed the typo here */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recentblogs;
