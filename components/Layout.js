import Navbar from "./Navbar";
import LinkPedido from "./LinkPedido";

import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        {children}
      </main>

      <footer >
        <div className="container">
          {/* <div className="row align-items-center bg-secondary text-light h-100"> */}
          <div className="row align-items-center bg-dark text-light rowfooter">
            <div className="col-md-6 text-center ">
              <div>Chato's - Hamburguesas | Alitas | y más</div>
            </div>
            <div className="col-md-6 text-center">
              <LinkPedido />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
