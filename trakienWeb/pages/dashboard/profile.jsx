import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ProfileCard from "../../components/Profile/ProfileCard.component";
import TopNavbar from "../../components/Nav/TopNavbar";

const cookies = new Cookies();

const UserProfilePage = () => {
  const email = cookies.get("email");
  const token = cookies.get("token");
  const [customer, setCustomer] = useState();
  async function getCustomer(email) {
    await fetch(
      process.env.NEXT_PUBLIC_CUSTOMERAPI + "/api/v2/customers/email/" + email,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
      });
  }

  useEffect(() => {
    getCustomer(email);
  }, []);
  //if (customer === undefined) return <>Loading ...</>;
  return (
    <>
      {customer === undefined ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <TopNavbar />
          <ProfileCard customer={customer} />
        </>
      )}
    </>
  );
};

export default UserProfilePage;
