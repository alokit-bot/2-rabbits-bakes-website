import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  CakeSlice,
  Coffee,
  CupSoda,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Sandwich,
  Sparkles,
  Star,
  Wifi,
} from 'lucide-react';
import './styles.css';

const phone = '+91 88844 49239';
const tel = 'tel:+918884449239';
const maps =
  'https://www.google.com/maps/search/?api=1&query=2%20RABBITS%20BAKES%20Koramangala%205th%20Block%20Bengaluru';

const bakes = [
  ['Chocolate Cupcake', '₹90', 'Soft cocoa sponge with a rich frosting swirl.'],
  ['Red Velvet Cupcake', '₹90', 'A celebration-table classic in a neat single serve.'],
  ['Lotus Donut', '₹125', 'Creamy, crunchy, and built for coffee breaks.'],
  ['Nutella Donut', '₹125', 'A chocolate-forward pick for dessert runs.'],
  ['Lotus Cheesecake', '₹170', 'Smooth slice with biscuit warmth and cafe texture.'],
  ['Blueberry Cheesecake', '₹180', 'Bright berry finish over a creamy base.'],
  ['Brownie Box', 'from ₹240', 'Shareable fudgy squares for office and college treats.'],
  ['Chocolate Waffle', '₹210', 'Fresh waffle with a generous chocolate topping.'],
];

const cafe = [
  ['Cappuccino', '₹130', Coffee],
  ['Latte', '₹130', Coffee],
  ['Watermelon Juice', '₹120', CupSoda],
  ['Pineapple Juice', '₹130', CupSoda],
  ['Shakes', 'from ₹160', CupSoda],
  ['Veg Sandwich', '₹180', Sandwich],
  ['Double Decker Burger', '₹325', Sandwich],
  ['Chicken Zinger Burger', '₹250', Sandwich],
  ['Loaded Fries', '₹250', Sparkles],
  ['Cafe meal for two', 'around ₹600', Heart],
];

const reasons = [
  'Dessert counter variety for quick decisions',
  'Celebration cakes and call-ahead orders',
  'Casual indoor seating for Koramangala meetups',
  'Takeaway-friendly bakes, waffles, shakes, and quick bites',
  'Kid-friendly, Wi-Fi, and vegetarian-friendly options',
  'Late-night hours may vary, so call before heading over',
];

function App() {
  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#home" aria-label="2 Rabbits Bakes home">
          <span className="mark">2R</span>
          <span>2 RABBITS BAKES</span>
        </a>
        <div className="navlinks">
          <a href="#bakes">Bakes</a>
          <a href="#cafe">Cafe</a>
          <a href="#orders">Orders</a>
          <a href="#visit">Visit</a>
        </div>
        <div className="navActions">
          <a className="iconButton" href={tel} aria-label="Call 2 Rabbits Bakes">
            <Phone size={18} />
          </a>
          <a className="button dark" href={maps} target="_blank" rel="noreferrer">
            <Navigation size={18} />
            Directions
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroCopy">
          <div className="eyebrow">
            <Star size={18} fill="currentColor" />
            4.5 stars from 1,100+ public reviews
          </div>
          <h1>2 RABBITS BAKES</h1>
          <p>
            A bright Koramangala bakery and dessert cafe for celebration cakes, pastries,
            cheesecakes, waffles, coffee, shakes, sandwiches, and late-night sweet cravings.
          </p>
          <div className="heroMeta">
            <span>
              <MapPin size={18} /> Koramangala 5th Block
            </span>
            <span>
              <CakeSlice size={18} /> Cakes from ₹699
            </span>
          </div>
          <div className="ctaRow">
            <a className="button primary" href={tel}>
              <Phone size={19} />
              Call Now
            </a>
            <a className="button light" href={maps} target="_blank" rel="noreferrer">
              <Navigation size={19} />
              Get Directions
            </a>
          </div>
        </div>
        <div className="heroGallery" aria-label="Bakery and dessert images">
          <img
            className="galleryLarge"
            src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&w=1100&q=80"
            alt="Chocolate cake with berries"
          />
          <img
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"
            alt="Donuts and dessert counter"
          />
          <img
            src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80"
            alt="Cheesecake dessert plate"
          />
        </div>
      </section>

      <section id="bakes" className="section">
        <div className="sectionHead">
          <span>Signature bakes</span>
          <h2>Cupcakes, donuts, cheesecakes, waffles, brownies, and cakes.</h2>
          <p>
            Pick up a quick treat, build a dessert box, or call ahead for birthday and
            office celebrations around Koramangala.
          </p>
        </div>
        <div className="cards">
          {bakes.map(([name, price, note]) => (
            <article className="card" key={name}>
              <CakeSlice />
              <div>
                <h3>{name}</h3>
                <strong>{price}</strong>
                <p>{note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cafe" className="split sectionTint">
        <div>
          <span className="sectionKicker">Cafe menu</span>
          <h2>Quick bites, coffee, juices, shakes, and comfort plates.</h2>
          <p>
            The menu suits dessert-first visits, casual work catchups, college groups,
            and an easy cafe meal for two. Pricing is indicative from public menu cues;
            call to confirm availability before visiting.
          </p>
          <a className="button primary" href={tel}>
            <Phone size={19} />
            Call for today&apos;s menu
          </a>
        </div>
        <div className="menuGrid">
          {cafe.map(([name, price, Icon]) => (
            <div className="menuItem" key={name}>
              <Icon size={22} />
              <span>{name}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="orders" className="orders">
        <div className="ordersImage" />
        <div className="ordersCopy">
          <span className="sectionKicker">Celebration orders</span>
          <h2>Birthdays, office treats, college meetups, and late-night dessert runs.</h2>
          <p>
            Call 2 RABBITS BAKES for celebration cakes from ₹699, custom cake enquiries,
            brownie boxes, cupcakes, donuts, cheesecakes, waffles, and cafe add-ons. For
            custom work, share the date, guest count, flavour direction, and pickup timing
            over a quick call.
          </p>
          <div className="quoteGrid" aria-label="Popular reasons to visit">
            <p>Popular reasons to visit: birthday cakes, cheesecake slices, waffle cravings.</p>
            <p>Popular reasons to visit: coffee catchups, snack boxes, and takeaway desserts.</p>
          </div>
          <a className="button dark" href={tel}>
            <Phone size={19} />
            Ask About Cakes
          </a>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Why Koramangala visits</span>
          <h2>Easy dessert decisions in a neighbourhood cafe setting.</h2>
        </div>
        <div className="reasonGrid">
          {reasons.map((reason, index) => (
            <div className="reason" key={reason}>
              {index === 4 ? <Wifi /> : <Sparkles />}
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="visit">
        <div>
          <span className="sectionKicker">Location & hours</span>
          <h2>Find 2 RABBITS BAKES in Koramangala 5th Block.</h2>
          <p>
            Ground Floor, Mamoor Plaza 2, 525/A, 5th Cross Road, opposite McDonald,
            Koramangala 5th Block, Bengaluru, Karnataka 560095.
          </p>
          <p>
            Open daily from around 10:00 AM; late-night hours may vary, call to confirm.
          </p>
        </div>
        <div className="contactPanel">
          <a href={tel}>
            <Phone />
            <span>{phone}</span>
          </a>
          <a href={maps} target="_blank" rel="noreferrer">
            <MapPin />
            <span>Open Google Maps directions</span>
          </a>
          <a href={tel}>
            <CakeSlice />
            <span>Call for celebration cakes and custom pricing</span>
          </a>
        </div>
      </section>

      <footer>
        <div>
          <strong>2 RABBITS BAKES</strong>
          <p>Bakery, desserts, cafe, quick bites, waffles, juices, shakes, and cakes in Koramangala.</p>
        </div>
        <div className="footerActions">
          <a href={tel}>Call {phone}</a>
          <a href={maps} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
