import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404!</h1>
      <p>Sorry, this page doesn't exist :(</p>
    </div>
  );
}