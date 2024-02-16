// import Events from "./events";

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