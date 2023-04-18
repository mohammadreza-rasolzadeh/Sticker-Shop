import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id={error} className="text-center mt-10">
      <h1>اووه ! </h1>
      <p>با عرض پوزش، یک خطای غیرمنتظره رخ داده است</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
