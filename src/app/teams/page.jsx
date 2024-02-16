// import Teams from "./team";

// export const metadata = {
//   title: 'Teams | Alcheringa',
// }
 
// function App(){
//   return <Teams/>
// }
// export default App;

import dynamic from "next/dynamic";
import Loadingpage from "../components/loading/loading";
export const metadata = {
  title: 'Teams | Alcheringa',
}

const Page = dynamic(() => import('./team'), {
  loading: () => <Loadingpage />,
  ssr: true,
})

export default Page;
