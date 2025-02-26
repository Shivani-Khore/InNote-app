import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing navigate for redirection
import Notes from "./Notes"; // Assuming Notes is another component

export const Home = (props) => {
    const { showAlert } = props;
     // Hook for redirection

  // Dependency array ensures it runs only when the component mounts

    return (
        <div>
            <Notes showAlert={showAlert} />
        </div>
    );
};

export default Home;
