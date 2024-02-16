// import Sponsor from "./sponsor";

// export const metadata = {
//   title: 'Sponsors | Alcheringa',
// }

// function App(){
//   return <Sponsor/>
// }
// export default App;

import dynamic from "next/dynamic";
import Loadingpage from "../components/loading/loading";
export const metadata = {
  title: 'Sponsors | Alcheringa',
}

const Page = dynamic(() => import('./sponsor'), {
  loading: () => <Loadingpage />,
  ssr: true,
})

export default Page;
