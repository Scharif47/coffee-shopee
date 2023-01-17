import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />{" "}
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
