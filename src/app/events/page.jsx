// import Events from "./events";

// export const metadata = {
//   title: 'Events | Alcheringa',
// }
 
// function App(){
//   return <Events/>
// }
// export default App;

import dynamic from "next/dynamic";
import Loadingpage from "../components/loading/loading";
export const metadata = {
  title: 'Events | Alcheringa',
}

const Page = dynamic(() => import('../events/events'), {
  loading: () => <Loadingpage />,
  ssr: false,
})

export default Page;