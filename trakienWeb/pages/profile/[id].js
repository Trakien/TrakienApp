import { useEffect, useState } from "react";
import CustomerCard from "../../components/profileCard";

const CustomerProfilePage = ({ctx}) => {
    const [customer, setCustomer] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const { params } = ctx;
    const customerId = params.id;

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:81/api/v2/customers/${customerId}', {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            setCustomer(data);
            setLoading(false);
      })
    }, [])
    
    if (isLoading) return <h1>Loading...</h1>
    if (!customer) return <h1>No customer data</h1>
    
    return (
    <div className="container">
        <title>Profile</title>
        <main>
            <h1 className="title">Profile</h1>
            <CustomerCard>
                name = {customer.name}
                lastName = {customer.lastName}
                email = {customer.email}
            </CustomerCard>
        </main>
    </div>
  );
}

export default CustomerProfilePage;