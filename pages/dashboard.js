import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = (props) => {

    console.log('Props of Dashboard: ',props);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const securePage = async()=>{
            const session = await getSession()
            console.log('session: ',session);
            if(!session){
                signIn()
            }else{
                setIsLoading(false)
            }
        }
        securePage()
    },[])

    if(isLoading){
        return <h1>Loading . . .</h1>
    }

    return ( 
        <>
            <h1>Dashboard Page</h1>
        </>
     );
}
 
export default Dashboard;

