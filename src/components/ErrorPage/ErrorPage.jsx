import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <div class="grid h-screen place-content-center px-4 dark:bg-gray-900">
        <div class="text-center">
          <h1 class="text-9xl font-black text-rose-600 dark:text-gray-700">
            {status || 404}
          </h1>

          <p class="text-2xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 dark:text-white">
            {error ? error.message : "We can't find that page."}
          </p>

          <Link
            to="/"
            class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
