import { getValue } from "@mui/system";
import {getSession} from "next-auth/client";
import CustomerCard from "../../components/profileCard";

export const getServerSideProps = async (ctx) => {
    try {
        const session = await getSession({req: ctx.req});
        if (session) {
            return {
                props: {
                    session
                }
            }
        }else{
            return{
                redirect: {
                    destination: '/login',
                    permanent: false
                }
            }
        }
    } catch (error) {
        return{
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}

const UserProfilePage = ({
    session
}) => {
    const customer = getValue(session, ["customer"], null);
    return (
        <div className="container">
            <h1 className="title">Profile</h1>
            <CustomerCard>
                name = {customer.name}
                lastName = {customer.lastName}
                email = {customer.email}
            </CustomerCard>
        </div>
    )
}

export default UserProfilePage;