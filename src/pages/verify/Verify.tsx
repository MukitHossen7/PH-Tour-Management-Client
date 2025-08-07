import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
  const location = useLocation();
  const [email] = useState(location.state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  return (
    <div>
      <h1>This is Verify component</h1>
    </div>
  );
};

export default Verify;
