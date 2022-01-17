import { useEffect, useState } from "react";

const useFormikError = (formikProps: any, id: string | undefined) => {
  const [error, setError] = useState(null);
  const [visibleError, setVisibleError] = useState(false);

  useEffect(() => {
    if (formikProps && id) {
      setError(formikProps.errors[id]);
      setVisibleError(formikProps.touched[id] || formikProps.submitCount > 0);
    }
  }, [formikProps, id]);

  return { error, visibleError };
};

export default useFormikError;
