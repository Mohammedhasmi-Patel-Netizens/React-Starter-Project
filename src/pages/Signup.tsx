import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <section className="auth-card w-full max-w-md p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Create account
          </p>
          <h1 className="mt-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface">
            Sign up to start chatting
          </h1>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            Set up your account and join your team in a few seconds.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-1.5">
            <label htmlFor="name" className="label-text">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="input-field"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="label-text">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="input-field"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="label-text">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="message-gradient w-full rounded-full px-6 py-3.5 font-headline text-sm font-bold text-on-primary shadow-lg shadow-primary/20"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-on-surface-variant">
          Already have an account?
          <Link to="/login" className="ml-1 font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
