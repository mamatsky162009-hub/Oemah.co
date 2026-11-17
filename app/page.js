const products = [
  { name: "Mix Plater Bolognese Medium", price: 15000, category: "Food" },
  { name: "Mix Plater Bolognese Large", price: 20000, category: "Food" },
  { name: "Matcha OG", price: 10000, category: "Drink" },
  { name: "Matcha Stroberi", price: 15000, category: "Drink" },
  { name: "Matcha Caramel", price: 14000, category: "Drink" },
  { name: "Kopi Susu", price: 10000, category: "Drink" },
  { name: "Kopi Butterscotch", price: 12000, category: "Drink" },
  { name: "Kopi Gula Aren", price: 12000, category: "Drink" },
  { name: "Stroberi Yakult", price: 15000, category: "Drink" }
];

export default function Home() {
  return (
    <main style={{
      background: "#F3EBDD",
      color: "#29251F",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <nav style={{
        padding: "24px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #d9cbb7"
      }}>
        <h1 style={{ letterSpacing: "4px" }}>OEMAH.CO</h1>
        <div>HOME　 MENU　 ABOUT</div>
      </nav>

      <section style={{
        padding: "100px 8%",
        textAlign: "center"
      }}>
        <p style={{ letterSpacing: "5px" }}>A LITTLE TASTE OF HOME</p>
        <h2 style={{
          fontSize: "clamp(40px, 8vw, 76px)",
          margin: "20px 0"
        }}>
          Made with love,<br />served with warmth.
        </h2>
        <p>Discover your favorite food and drinks at Oemah.co.</p>
        <a href="#menu" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "15px 35px",
          background: "#29251F",
          color: "#F3EBDD",
          textDecoration: "none"
        }}>
          EXPLORE MENU
        </a>
      </section>

      <section id="menu" style={{ padding: "50px 7%" }}>
        <p style={{ color: "#777B5B", letterSpacing: "3px" }}>OUR SELECTION</p>
        <h2 style={{ fontSize: "38px" }}>Menu Favorites</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {products.map((product) => (
            <article key={product.name} style={{
              background: "#fffaf1",
              padding: "25px",
              borderRadius: "12px"
            }}>
              <div style={{
                height: "130px",
                background: "#e8ddca",
                borderRadius: "8px",
                display: "grid",
                placeItems: "center",
                fontSize: "42px"
              }}>
                {product.category === "Food" ? "🍝" : "🥤"}
              </div>
              <p style={{ color: "#777B5B" }}>{product.category}</p>
              <h3>{product.name}</h3>
              <strong>
                Rp{product.price.toLocaleString("id-ID")}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <footer style={{
        background: "#29251F",
        color: "#F3EBDD",
        textAlign: "center",
        padding: "35px"
      }}>
        <h2>OEMAH.CO</h2>
        <p>A LITTLE TASTE OF HOME</p>
        <small>© 2026 Oemah.co</small>
      </footer>
    </main>
  );
}
