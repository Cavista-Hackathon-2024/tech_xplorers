// pages/_app.tsx
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app'; // Import the AppProps type from next/app

function MyApp({ Component, pageProps }: AppProps) { // Specify the AppProps type for the props
  return <Component {...pageProps} />;
}

export default MyApp;
