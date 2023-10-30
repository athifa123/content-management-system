import { useLoaderData, useNavigate } from "react-router-dom";
import deleteDocument from "../firebase/deleteblogs";
import { useState } from "react";
import { Popup } from "./popup/popup";

const Previewcard = ({ header, description, content }) => {
  return (
    <>
      <div>{header}</div>
      <div> {description} </div>
      <div> {content} </div>
    </>
  );
};

const BlogPreview = () => {
  const [popUpState, setpopUpState] = useState(false);
  const navigate = useNavigate();
  const document = useLoaderData();
  const data = document.data();

  function togglePopupState() {
    setpopUpState(!popUpState);
  }

  return (
    <div>
      <Previewcard
        header={data.header}
        description={data.description}
        content={data.content}
      >
        
      </Previewcard>
      <button
        className="EditPreview"
        onClick={() => {
          navigate("/blog/" + document.id + "/edit");
        }}
      >
        
        Edit
      </button>
      <button onClick={togglePopupState}> Delete </button>
      {popUpState ? (
        <Popup
          text="Are you sure you want to delete this document? "
          closePopup={togglePopupState}
          yesPopup={() => {
            deleteDocument("blogs", document.id);
            navigate("/");
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BlogPreview;
