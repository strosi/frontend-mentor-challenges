import crowdfundLogo from './images/logo.svg'
import hamburgerIcon from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close-menu.svg'
import mastercraftLogo from './images/logo-mastercraft.svg';
function App() {
  return (
    <>
      <header className="crowdfund">
        <div className="container crowdfund__content">
          <div className="crowdfund__logo">
            <img src={crowdfundLogo} alt="" />
          </div>
          <div className="crowdfund__menu">
            <input type="checkbox" id="mob-nav-toggle" className="vh crowdfund__toggle" aria-label="navigation toggle" />
            <label for="mob-nav-toggle">
              <img src={hamburgerIcon} alt="" className="crowdfund__menu--closed" />
              <img src={closeIcon} alt="" className="crowdfund__menu--opened" />
            </label>
            <nav className="crowdfund__nav">
              <ul>
                <li className="crowdfund__nav-item"><a>About</a></li>
                <li className="crowdfund__nav-item"><a>Discover</a></li>
                <li className="crowdfund__nav-item"><a>Get Started</a></li>
              </ul>
            </nav>
          </div>
          <h1 className="vh">Crowdfund campaign</h1>
        </div>
      </header>
      <main>
        <header className="mastercraft product-container">
          <div className="mastercraft__logo">
            <img src={mastercraftLogo} alt="" />
          </div>
          <h1 className="mastercraft__title">Mastercraft Bamboo Monitor Riser</h1>
          <p className="mastercraft__descr">A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="mastercraft__bottom">
            <button className="mastercraft__btn">Back this project</button>
            <label for="bookmark" className="mastercraft__bookmark">
              <input type="checkbox" id="bookmark" className="vh" aria-label="bookmark toggle" />
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <span className="mastercraft__bookmark-text">Bookmark</span>
              <span className="mastercraft__bookmark-text-checked">Bookmarked</span>
            </label>
          </div>
        </header>
        <section className="campaign product-container">
          <h2 className="vh">Campaign progress</h2>
          <div className="campaign__statistic">
            <div className="campaign__stat-item">
              <p className="campaign__amount">$89,914</p>
              <p>of $100,000 backed</p>
            </div>
            <div className="campaign__stat-item">
              <p className="campaign__amount">5,007</p>
              <p>total backers</p>
            </div>
            <div className="campaign__stat-item">
              <p className="campaign__amount">56</p>
              <p>days left</p>
            </div>
          </div>
          <div className="campaign__progress">
            <div className="campaign__progress-bar"></div>
          </div>
        </section>
        <section className="project product-container">
          <h2 className="project__title">About this project</h2>
          <p className="project__descr">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className="project__descr">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
          <div className="card">
            <div className="card__header">
              <h3 className="card__title">Bamboo Stand</h3>
              <p className="card__pledge-amount">Pledge $25 or more</p>
            </div>
            <p className="card__descr">
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list.
            </p>
            <div className="card__bottom">
              <p className="card__count-info"><span>101</span> left</p>
              <button className="card__btn">Select Reward</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3 className="card__title">Black Edition Stand</h3>
              <p className="card__pledge-amount">Pledge $75 or more</p>
            </div>
            <p className="card__descr">
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>
            <div className="card__bottom">
              <p className="card__count-info"><span>64</span> left</p>
              <button className="card__btn">Select Reward</button>
            </div>
          </div>
          <div className="card out-of-stock">
            <div className="card__header">
              <h3 className="card__title">Mahogany Special Edition</h3>
              <p className="card__pledge-amount">Pledge $200 or more</p>
            </div>
            <p className="card__descr">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
            <div className="card__bottom">
              <p className="card__count-info"><span>0</span> left</p>
              <button className="card__btn" disabled>Out of Stock</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Rosi</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
