import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'
import { SessionProvider } from 'next-auth/react'


// function MyApp({ Component, pageProps:{session,...pageProps} }) {
 function MyApp({ Component, pageProps}) {

  return <>

          <SessionProvider>
            <Navbar/>
            <Component {...pageProps} />
          </SessionProvider>

        </>
  
}

// function MyApp(Props) {

//   console.log('What is Props@_app.js: ',Props);
//   console.log('What is pageProps@_app.js: ',Props.pageProps);
//   console.log('What is Component@_app.js: ',Props.Component);
//   // console.log('What is Component/Children@_app.js: ',Props.Component().props.children);

//   return <>
//             <Navbar name={'Narathi'} />
//             {/* <Component {...pageProps} /> */}
//             <Props.Component {...Props.pageProps} />

//         </>
  
// }

export default MyApp
