import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartItem from './components/CartItem';

function App() {
  const products = [
    {
      id: 1,
      name: 'Halo Desk Light',
      price: 128,
      image: 'https://placehold.co/600x400/e7d8c5/2e2924?text=Halo+Desk+Light',
      description: 'A soft, directional glow for deep work and late-night ideas.',
      tag: 'Best seller',
    },
    {
      id: 2,
      name: 'Fold Wireless Stand',
      price: 74,
      image: 'https://placehold.co/600x400/cad8d1/2e2924?text=Fold+Wireless+Stand',
      description: 'A compact charging dock that keeps your desk beautifully clear.',
      tag: 'New',
    },
    {
      id: 3,
      name: 'Field Notes Speaker',
      price: 196,
      image: 'https://placehold.co/600x400/d6cbdc/2e2924?text=Field+Notes+Speaker',
      description: 'Room-filling sound in a small, tactile form made for slow mornings.',
      tag: 'Staff pick',
    },
  ];
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const cartItem = { ...product, cartItemId: crypto.randomUUID() };
    setCart((currentCart) => [...currentCart, cartItem]);
  }

  function removeFromCart(cartItemId) {
    setCart((currentCart) => currentCart.filter((item) => item.cartItemId !== cartItemId));
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app-shell">
      <Header storeName="ComponentCorner" cartCount={cart.length} />
      <main>
        <Hero
          title="Better tools for your everyday rituals."
          subtitle="A considered collection of clever tech, desk essentials, and little upgrades that make a difference."
          callToAction="Shop the collection"
        />

        <section className="products-section" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The edit</p>
              <h2>Objects with a point of view</h2>
            </div>
            <p className="section-note">01 / 03</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        <section className="cart-section" id="cart" aria-labelledby="cart-heading">
          <div className="cart-content">
            <div className="cart-heading">
              <div>
                <p className="eyebrow">Your selection</p>
                <h2 id="cart-heading">Shopping cart</h2>
              </div>
              <p className="cart-count-label">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">Your bag is empty. Add something you love from the collection.</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <CartItem key={item.cartItemId} item={item} onRemove={removeFromCart} />
                  ))}
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer
        storeName="ComponentCorner"
        description="Thoughtful technology for the way you work, rest, and make things."
        contact="hello@componentcorner.com"
      />
    </div>
  );
}

export default App;