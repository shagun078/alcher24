// import Home from "./home";

// export const metadata = {
//   title: 'Alcheringa',
// }
 
// function App(){
//   return <Home/>
// }
// export default App;

// import Competition from "./competition";

// export const metadata = {
//   title: 'Competitions | Alcheringa',
// }

// function App(){
//   return <Competition/>
// }
// export default App;

import dynamic from "next/dynamic";
import Loadingpage from "../components/loading/loading";
export const metadata = {
  title: 'Alcheringa',
}

const Page = dynamic(() => import('./home'), {
  loading: () => <Loadingpage />,
  ssr: false,
})

export default Page;
