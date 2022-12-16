import { getSession } from "next-auth/react";

const Blog = (props) => {

    console.log('Props of Blog: ',props);

    return ( 
        <>
            <h1>Blog Page</h1>
            <h2> {props.data} </h2>
        </>
     );
}
 
export default Blog;

export async function getServerSideProps(context){
    const session = await getSession(context)
    return {
        props:{
            session,
            data: session ? 'List of 100 personalized blogs':'List of free blogs'
        }
    }
}