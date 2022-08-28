import DefaultLayout from "../layouts/default";

<DefaultLayout>
  <main className="home">
    <p>
      {isAuthenticated ? (
        pageVisitCount === 1 ? (
          `You have visited this page for the first time!`
        ) : (
          `You have visited this page ${pageVisitCount} times!`
        )
      ) : (
        <>
          Please login or create an account to see how many times you've visited
          this page.
          <br />{" "}
          <span>
            Please keep in mind that we will only count page visits when you're
            logged in{" "}
          </span>
        </>
      )}
    </p>
  </main>
</DefaultLayout>;
