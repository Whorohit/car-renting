import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => console.log('Razorpay script loaded');
    script.onerror = () =>{ console.error('Razorpay script failed to load')
        alert("hhhhh")
    };
    document.head.appendChild(script);
  }, []);
  return (
    <Html lang="en">
     <Head>
          <script src="https://checkout.razorpay.com/v1/checkout.js" /> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
