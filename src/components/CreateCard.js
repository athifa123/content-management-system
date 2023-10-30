import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Addcard"
      onClick={() => navigate("/createblogs")}
      style={{
        background: "black",
        color: "white",
        textAlign: "center",
        height: "150px",
        width: "150px",
        "border-radius": "10px",
        padding: "10px",
      }}
    >
    +
    </div>
   
   
    
  );
};

export default CreateCard;
