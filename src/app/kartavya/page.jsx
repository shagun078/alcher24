// import Kartavya from "./kartavya";

// export const metadata = {
//   title: 'Kartavya | Alcheringa',
// }
 
// function App(){
//   return <Kartavya/>
// }
// export default App;

import dynamic from "next/dynamic";
import Loadingpage from "../components/loading/loading";
export const metadata = {
  title: 'Kartavya | Alcheringa',
}

const Page = dynamic(() => import('./kartavya'), {
  loading: () => <Loadingpage />,
  ssr: true,
})

export default Page;