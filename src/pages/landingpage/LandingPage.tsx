// interface Props {
//   text: string;
//   fn?: () => void;
//   ok: boolean;
//   counter: number;
//   person: Person;
// }

import { Fragment } from "react";

// interface Person {
//   firstName: string;
//   lastName: string;
// }

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      <section>
        <h1>Greetings!</h1>
        <p>My name is Nathaniel Suarez.</p>
        <p>I am a Junior Software Engineer.</p>
      </section>
      <section>
        <h1>About Me</h1>
        <p>My name is Nathaniel Suarez.</p>
        <p>I am a Junior Software Engineer.</p>
      </section>
    </Fragment>
  );
};
