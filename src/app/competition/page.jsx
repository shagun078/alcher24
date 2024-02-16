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
  title: 'Competitions | Alcheringa',
}

const Page = dynamic(() => import('./competition'), {
  loading: () => <Loadingpage />,
  ssr: false,
})

export default Page;
