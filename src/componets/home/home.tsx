import { Show } from "solid-js";

interface IHomeProps {
  isLoggedIn : boolean;
  firstName : string;
}

function Home(props: IHomeProps) {
  return (
    <Show when={props.isLoggedIn}
    fallback={
      <>
        <div>Welcome to the application. Please sign in first.</div>
        {/* <SignInForm /> */}
      </>
    }>
      <div>Welcome back, {props.firstName}!</div>
      {/* <Dashboard /> */}
    </Show>
  )
}