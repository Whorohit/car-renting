import Navbar from "@/components/Navbar";
import Sidenavbar from "@/components/sidenavbar";
import store from "../store/configstore";
import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux';
import Login from "@/components/Modal/Login";
import SignUp from "@/components/Modal/SignUp";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Userinfodata from "@/components/useinfomoblieview";
import Popup from "@/components/Popup";
import Editpassword from "@/components/Modal/Editpassword";
import FilterBoard from "@/components/FilterBoard";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {


  return <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <main className="font-sans relative" >
        <Userinfodata />
        <Editpassword />
        <FilterBoard/>
        <SignUp />
        <Login />
        <Sidenavbar />
        <Navbar />
        <Userinfodata />
        <Component {...pageProps} />
      </main>
    </Provider>
  </SessionProvider >


    ;
}
