import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ProfileCard from "../components/Profile/profileCard.component";

const cookies = new Cookies();

const UserProfilePage = (ctx) => {
  const email = cookies.get("email");
  const token = cookies.get("token");
  const [data, setData] = useState();
  function getCustomer(email) {
    fetch("http://localhost:81/api/v2/customers/email/" + email, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  useEffect(() => {
    //getCustomer(email);
  }, []);
  return (
    <div className="container">
      <ProfileCard />
    </div>
  );
};

export default UserProfilePage;
