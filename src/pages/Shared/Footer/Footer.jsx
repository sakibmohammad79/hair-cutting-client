import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer p-12 bg-[#000000] text-neutral-content">
      <aside className="space-y-2">
        <img src={logo} alt="" />
        <p className="text-lg">
          Etiam semper nibh orci, ac timcidunt mi consectetur a.<br></br> In
          quis tortor ex. Morbi cursus sed neque quis dictum.
        </p>
        <form>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-orange-500 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </aside>
      <nav className="space-y-2 font-semibold text-lg">
        <header className="uppercase text-3xl text-white">USEFUL LINKS</header>
        <a className="link link-hover">Refunds & Returns</a>
        <a className="link link-hover">Shipping Details</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Deliveries</a>
        <a className="link link-hover">Information</a>
      </nav>
      <nav className="space-y-2 font-semibold">
        <header className="uppercase text-3xl text-white">Contact</header>
        <a className="link link-hover text-lg"><span className="text-orange-500">Phone:</span> +010 234 789234</a>
        <a className="link link-hover text-lg"><span className="text-orange-500">Fax:</span> +010 435 5798982</a>
        <a className="link link-hover text-lg"><span className="text-orange-500">Email:</span> info@mustachea.com</a>
        <p className="text-lg">1394 Argonne Street, New Castle, USA</p>
      </nav>
      {/* <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav> */}
    </footer>
  );
};

export default Footer;
