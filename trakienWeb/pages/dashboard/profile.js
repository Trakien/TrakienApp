import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ProfileCard from "../../components/profileCard";

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
    getCustomer(email);
  }, []);
  return (
    <div className="container">
      <h1 className="title">Profile</h1>
      <ProfileCard
        name={data.name}
        lastName={data.lastName}
        email={data.email}
        createdAt={data.createdAt}
      />
    </div>
  );
};

export default UserProfilePage;
