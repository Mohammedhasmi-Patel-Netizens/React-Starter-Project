const footerLinks = ["Privacy Policy", "Terms of Service", "Contact Support"];

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant/15 bg-surface-container-low/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-headline text-lg font-bold text-on-surface">The Quiet Architect</p>
          <p className="mt-1 max-w-md text-sm text-on-surface-variant">
            A thoughtful communication space designed for clearer ideas, calmer collaboration,
            and meaningful work.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-on-surface-variant sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-6">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="hover:text-primary">
              {link}
            </a>
          ))}
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
