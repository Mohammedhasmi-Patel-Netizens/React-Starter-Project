import { Link } from "react-router-dom"

const Login = () => {
  return (
     <main className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <section className="auth-card w-full max-w-md p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Welcome back
          </p>
          <h1 className="mt-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface">
            Log in to your account
          </h1>
         
        </div>

        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
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
            Log In
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-on-surface-variant">
          Don't have an account?
          <Link to="/" className="ml-1 font-semibold text-primary hover:underline">
           Sign Up
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login