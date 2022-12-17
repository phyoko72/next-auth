import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Blog = (props) => {

    console.log('Props of Blog: ',props);

    return ( 
        <>
            <h1>Blog Page</h1>
            <h2 className="text"> {props.data} </h2>
        </>
     );
}
 
export default Blog;

export async function getServerSideProps(context){
    const session = await getSession(context)
    if(!session){
        return {
            redirect:{
                destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false
            }
        }
    };
    
    return {
        props:{
            session,
            data: session ? 'List of 100 personalized blogs':'List of free blogs'
        }
    }
}