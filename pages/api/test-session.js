import { getSession } from "next-auth/react";


const TestSession = async (req,res) => {

    console.log('Request of TestSession: ',req);

    const session = await getSession({req});

    console.log('\n\nSession of TestSession: ',session);

    if(session){
        res.status(200).json({
            session,
            message: "Good Status"
        })
    }else{
        res.status(401).json({
            err:"Unauthenticated user"
        })
    }


}
 
export default TestSession;