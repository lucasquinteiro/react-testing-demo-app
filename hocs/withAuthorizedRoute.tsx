import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const withAuthorizedRoute = (
  Component: React.FC,
  accessibleWithoutAuth = false
) => {
  const hocComponent = (props: any) => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const authString = localStorage.getItem("token");
      const auth = authString ? authString : null;
      if (!auth && !accessibleWithoutAuth) {
        router.push("/");
      } else if (auth && accessibleWithoutAuth) {
        router.push("/users");
      } else {
        setLoaded(true);
      }
    }, []);

    return loaded ? <Component {...props} /> : null;
  };

  return hocComponent;
};

export default withAuthorizedRoute;
