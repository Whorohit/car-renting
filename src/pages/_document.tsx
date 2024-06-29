import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => console.log('Razorpay script loaded');
    document.head.appendChild(script);
  }, []);
  return (
    <Html lang="en">
     <Head>
          <script src="https://checkout.razorpay.com/v1/checkout.js" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
