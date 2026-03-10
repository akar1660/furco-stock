import { useState, useEffect } from "react";

const ADMIN_PIN = "1234";

const CATEGORIES = [
  "Sofa & Koltuk",
  "Yatak & Baza",
  "Yemek Masası",
  "Sandalye",
  "TV Ünitesi",
  "Kitaplık",
  "Gardırop",
  "Ofis Mobilyası",
  "Bahçe Mobilyası",
  "Diğer",
];

const STORAGE_KEY = "furniture_stock_data";

const initialProducts = [
  { id: 1, name: "Clayton 3+2 Koltuk Takımı", sku: "SOF-001", category: "Sofa & Koltuk", qty: 12, minQty: 5, price: 2850, location: "A-01", note: "Gri renk" },
  { id: 2, name: "Hudson King Yatak Başlığı", sku: "BED-002", category: "Yatak & Baza", qty: 3, minQty: 4, price: 1200, location: "B-03", note: "Kahve deri" },
  { id: 3, name: "Nordic Yemek Masası 6 Kişilik", sku: "TBL-003", category: "Yemek Masası", qty: 8, minQty: 3, price: 1750, location: "C-02", note: "" },
  { id: 4, name: "Velvet Accent Sandalye", sku: "CHA-004", category: "Sandalye", qty: 24, minQty: 10, price: 380, location: "D-05", note: "Yeşil & Mavi" },
  { id: 5, name: "Moderno TV Ünitesi 180cm", sku: "TV-005", category: "TV Ünitesi", qty: 6, minQty: 4, price: 920, location: "A-04", note: "Parlak beyaz" },
];

function loadData() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveData(products) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e) {}
}

export default function App() {
  const [products, setProducts] = useState(() => loadData() || initialProducts);
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState("dashboard"); // dashboard | list | form | login
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("Tümü");
  const [editProduct, setEditProduct] = useState(null);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [sortBy, setSortBy] = useState("name");
  const [adjustModal, setAdjustModal] = useState(null);
  const [adjustQty, setAdjustQty] = useState("");
  const [adjustType, setAdjustType] = useState("add");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => { saveData(products); }, [products]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = products
    .filter(p => filterCat === "Tümü" || p.category === filterCat)
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "qty") return a.qty - b.qty;
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

  const lowStock = products.filter(p => p.qty <= p.minQty);
  const totalValue = products.reduce((s, p) => s + p.qty * p.price, 0);
  const totalItems = products.reduce((s, p) => s + p.qty, 0);

  function handleLogin() {
    if (pinInput === ADMIN_PIN) {
      setIsAdmin(true);
      setView("dashboard");
      setPinInput("");
      setPinError(false);
      showToast("Admin girişi başarılı ✓");
    } else {
      setPinError(true);
      setPinInput("");
    }
  }

  function handleSave(product) {
    if (editProduct && editProduct.id) {
      setProducts(ps => ps.map(p => p.id === product.id ? product : p));
      showToast("Ürün güncellendi ✓");
    } else {
      const newP = { ...product, id: Date.now() };
      setProducts(ps => [...ps, newP]);
      showToast("Yeni ürün eklendi ✓");
    }
    setView("list");
    setEditProduct(null);
  }

  function handleDelete(id) {
    setProducts(ps => ps.filter(p => p.id !== id));
    setDeleteConfirm(null);
    showToast("Ürün silindi", "warn");
  }

  function handleAdjust() {
    const n = parseInt(adjustQty);
    if (!n || n <= 0) return;
    setProducts(ps => ps.map(p => {
      if (p.id !== adjustModal.id) return p;
      const newQty = adjustType === "add" ? p.qty + n : Math.max(0, p.qty - n);
      return { ...p, qty: newQty };
    }));
    setAdjustModal(null);
    setAdjustQty("");
    showToast(`Stok güncellendi ✓`);
  }

  const navItems = [
    { id: "dashboard", label: "Özet", icon: "⊞" },
    { id: "list", label: "Stok Listesi", icon: "☰" },
    ...(isAdmin ? [{ id: "add", label: "Ürün Ekle", icon: "+" }] : []),
    ...(!isAdmin ? [{ id: "login", label: "Admin Girişi", icon: "⚿" }] : [
      { id: "logout", label: "Çıkış", icon: "↩" }
    ]),
  ];

  function navAction(id) {
    setMobileMenu(false);
    if (id === "logout") { setIsAdmin(false); setView("dashboard"); showToast("Çıkış yapıldı"); return; }
    if (id === "add") { setEditProduct({}); setView("form"); return; }
    setView(id);
  }

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", background: "#F4F1EC", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --wood: #8B6914; --cream: #F4F1EC; --dark: #1C1A17; --accent: #C4873A; --red: #C0392B; --green: #27AE60; --border: #DDD8CE; }
        body { background: #F4F1EC; }
        .nav-link { cursor: pointer; padding: 8px 16px; border-radius: 8px; transition: all 0.2s; font-weight: 500; font-size: 14px; color: #555; display: flex; align-items: center; gap: 8px; }
        .nav-link:hover { background: #EBE7DE; color: #1a1a1a; }
        .nav-link.active { background: #1C1A17; color: #F4F1EC; }
        .btn { cursor: pointer; border: none; border-radius: 8px; font-family: inherit; font-weight: 600; transition: all 0.2s; }
        .btn-primary { background: #1C1A17; color: #F4F1EC; padding: 10px 20px; font-size: 14px; }
        .btn-primary:hover { background: #8B6914; }
        .btn-danger { background: #C0392B; color: white; padding: 8px 16px; font-size: 13px; }
        .btn-danger:hover { background: #a93226; }
        .btn-outline { background: transparent; border: 1.5px solid #DDD8CE; color: #555; padding: 8px 16px; font-size: 13px; }
        .btn-outline:hover { border-color: #8B6914; color: #8B6914; }
        .card { background: white; border-radius: 12px; border: 1px solid #DDD8CE; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
        .badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge-low { background: #FDECEA; color: #C0392B; }
        .badge-ok { background: #E8F8EF; color: #27AE60; }
        .badge-warn { background: #FEF9E7; color: #D4AC0D; }
        input, select, textarea { font-family: inherit; border: 1.5px solid #DDD8CE; border-radius: 8px; padding: 10px 14px; font-size: 14px; width: 100%; background: white; outline: none; transition: border 0.2s; }
        input:focus, select:focus, textarea:focus { border-color: #8B6914; }
        label { font-size: 13px; font-weight: 600; color: #555; display: block; margin-bottom: 5px; }
        .stat-card { background: white; border-radius: 12px; padding: 20px; border: 1px solid #DDD8CE; }
        .toast { position: fixed; bottom: 24px; right: 24px; padding: 12px 20px; border-radius: 10px; font-weight: 600; font-size: 14px; z-index: 9999; animation: slideUp 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .toast-success { background: #1C1A17; color: white; }
        .toast-warn { background: #C0392B; color: white; }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal { background: white; border-radius: 16px; padding: 28px; max-width: 440px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
        .table-row { display: grid; gap: 12px; padding: 14px 16px; border-bottom: 1px solid #F0ECE4; align-items: center; transition: background 0.15s; }
        .table-row:hover { background: #FAFAF7; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hide-mobile { display: none !important; }
          .table-cols { grid-template-columns: 1fr auto !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-nav { display: none !important; }
          .table-cols { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; }
        }
        @media (min-width: 769px) {
          .table-cols { grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr; }
        }
        .pin-btn { width: 64px; height: 64px; border-radius: 50%; border: 2px solid #DDD8CE; background: white; font-size: 20px; font-weight: 600; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
        .pin-btn:hover { background: #1C1A17; color: white; border-color: #1C1A17; }
        .pin-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid #8B6914; transition: all 0.2s; }
        .pin-dot.filled { background: #8B6914; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#1C1A17", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>🪑</span>
          <div>
            <div style={{ color: "#F4F1EC", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>Toronto Furniture</div>
            <div style={{ color: "#8B6914", fontSize: 11, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>Stok Yönetimi</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {navItems.map(item => (
            <div key={item.id} className={`nav-link ${view === item.id ? "active" : ""}`}
              style={{ color: view === item.id ? "#F4F1EC" : "#AAA", background: view === item.id ? "#8B6914" : "transparent" }}
              onClick={() => navAction(item.id)}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
          {isAdmin && <div style={{ marginLeft: 8, background: "#8B6914", color: "white", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>ADMIN</div>}
        </nav>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}
          style={{ background: "none", border: "none", color: "#F4F1EC", fontSize: 22, cursor: "pointer", display: "none" }}>
          {mobileMenu ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      {mobileMenu && (
        <div className="mobile-nav" style={{ background: "#1C1A17", padding: "8px 16px 16px", borderBottom: "1px solid #333" }}>
          {navItems.map(item => (
            <div key={item.id} onClick={() => navAction(item.id)}
              style={{ padding: "12px 16px", color: view === item.id ? "#C4873A" : "#CCC", fontWeight: 500, borderBottom: "1px solid #2a2a2a", cursor: "pointer", display: "flex", gap: 12, alignItems: "center" }}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
          {isAdmin && <div style={{ padding: "8px 16px", color: "#8B6914", fontSize: 12, fontWeight: 700 }}>● ADMIN MODU AKTİF</div>}
        </div>
      )}

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>

        {/* LOW STOCK ALERT */}
        {lowStock.length > 0 && (
          <div style={{ background: "#FDECEA", border: "1px solid #F1948A", borderRadius: 10, padding: "12px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <span style={{ fontWeight: 600, color: "#C0392B", fontSize: 14 }}>
              {lowStock.length} ürün düşük stok seviyesinde:
            </span>
            <span style={{ color: "#922B21", fontSize: 13 }}>{lowStock.map(p => p.name).join(", ")}</span>
          </div>
        )}

        {/* DASHBOARD */}
        {view === "dashboard" && (
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, marginBottom: 6 }}>Stok Özeti</h1>
            <p style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
              {new Date().toLocaleDateString("tr-TR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Toplam Ürün Çeşidi", value: products.length, icon: "📦", color: "#1C1A17" },
                { label: "Toplam Stok (Adet)", value: totalItems.toLocaleString(), icon: "🏭", color: "#8B6914" },
                { label: "Düşük Stok", value: lowStock.length, icon: "⚠️", color: "#C0392B" },
                { label: "Stok Değeri (CAD)", value: `$${totalValue.toLocaleString()}`, icon: "💰", color: "#27AE60" },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Category breakdown */}
            <div className="card" style={{ padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 18, fontSize: 16 }}>Kategoriye Göre Stok</h3>
              {CATEGORIES.filter(c => products.some(p => p.category === c)).map(cat => {
                const catProds = products.filter(p => p.category === cat);
                const total = catProds.reduce((s, p) => s + p.qty, 0);
                const maxTotal = Math.max(...CATEGORIES.map(c => products.filter(p => p.category === c).reduce((s, p) => s + p.qty, 0)));
                const pct = maxTotal ? (total / maxTotal) * 100 : 0;
                return (
                  <div key={cat} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                      <span style={{ fontWeight: 500 }}>{cat}</span>
                      <span style={{ color: "#888" }}>{total} adet · {catProds.length} çeşit</span>
                    </div>
                    <div style={{ background: "#F0ECE4", borderRadius: 6, height: 8 }}>
                      <div style={{ background: "#8B6914", height: 8, borderRadius: 6, width: `${pct}%`, transition: "width 0.5s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Low stock table */}
            {lowStock.length > 0 && (
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 16, color: "#C0392B" }}>⚠️ Düşük Stok Uyarısı</h3>
                {lowStock.map(p => (
                  <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0ECE4" }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#888" }}>{p.sku} · {p.location}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span className="badge badge-low">{p.qty} adet</span>
                      <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>Min: {p.minQty}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STOCK LIST */}
        {view === "list" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700 }}>Stok Listesi</h1>
              {isAdmin && (
                <button className="btn btn-primary" onClick={() => { setEditProduct({}); setView("form"); }}>
                  + Yeni Ürün Ekle
                </button>
              )}
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
              <input placeholder="🔍  Ürün adı, SKU veya konum ara..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ flex: 1, minWidth: 200 }} />
              <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ width: "auto", minWidth: 160 }}>
                <option>Tümü</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ width: "auto", minWidth: 140 }}>
                <option value="name">İsme Göre</option>
                <option value="qty">Miktara Göre</option>
                <option value="category">Kategoriye Göre</option>
              </select>
            </div>

            <div className="card" style={{ overflow: "hidden" }}>
              {/* Table header */}
              <div className="table-row table-cols" style={{ background: "#F8F5EF", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: "#888" }}>
                <span>Ürün</span>
                <span className="hide-mobile">Kategori</span>
                <span>Stok</span>
                <span className="hide-mobile">Konum</span>
                {isAdmin && <span>İşlem</span>}
              </div>

              {filtered.length === 0 ? (
                <div style={{ padding: 40, textAlign: "center", color: "#AAA" }}>Ürün bulunamadı</div>
              ) : filtered.map(p => {
                const stockStatus = p.qty === 0 ? "badge-low" : p.qty <= p.minQty ? "badge-low" : p.qty <= p.minQty * 2 ? "badge-warn" : "badge-ok";
                return (
                  <div key={p.id} className="table-row table-cols">
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{p.sku}{p.note && <span style={{ marginLeft: 8, color: "#AAA" }}>· {p.note}</span>}</div>
                      <div className="hide-mobile" style={{ fontSize: 12, color: "#AAA", marginTop: 1 }}>CAD ${p.price.toLocaleString()}</div>
                    </div>
                    <div className="hide-mobile">
                      <span style={{ fontSize: 12, background: "#F0ECE4", padding: "3px 10px", borderRadius: 20, fontWeight: 500 }}>{p.category}</span>
                    </div>
                    <div>
                      <span className={`badge ${stockStatus}`}>{p.qty} adet</span>
                      <div style={{ fontSize: 11, color: "#BBB", marginTop: 3 }}>Min: {p.minQty}</div>
                    </div>
                    <div className="hide-mobile" style={{ fontWeight: 500, fontSize: 13, color: "#666" }}>{p.location}</div>
                    {isAdmin && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <button className="btn btn-outline" style={{ fontSize: 12, padding: "5px 10px" }}
                          onClick={() => { setAdjustModal(p); setAdjustQty(""); setAdjustType("add"); }}>
                          ± Stok
                        </button>
                        <button className="btn btn-outline" style={{ fontSize: 12, padding: "5px 10px" }}
                          onClick={() => { setEditProduct({ ...p }); setView("form"); }}>
                          ✎
                        </button>
                        <button className="btn btn-danger" style={{ fontSize: 12, padding: "5px 10px" }}
                          onClick={() => setDeleteConfirm(p)}>
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: "#AAA", textAlign: "right" }}>{filtered.length} ürün gösteriliyor</div>
          </div>
        )}

        {/* FORM */}
        {view === "form" && isAdmin && (
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginBottom: 24 }}>
              {editProduct?.id ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}
            </h1>
            <ProductForm
              initial={editProduct}
              onSave={handleSave}
              onCancel={() => { setView("list"); setEditProduct(null); }}
            />
          </div>
        )}

        {/* LOGIN */}
        {view === "login" && !isAdmin && (
          <div style={{ maxWidth: 360, margin: "40px auto", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔐</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Admin Girişi</h2>
            <p style={{ color: "#888", fontSize: 14, marginBottom: 32 }}>4 haneli PIN kodunuzu girin</p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 32 }}>
              {[0,1,2,3].map(i => (
                <div key={i} className={`pin-dot ${pinInput.length > i ? "filled" : ""}`} />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16, maxWidth: 260, margin: "0 auto 16px" }}>
              {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((n, i) => (
                <button key={i} className="pin-btn" style={{ margin: "0 auto" }}
                  onClick={() => {
                    if (n === "⌫") { setPinInput(p => p.slice(0, -1)); setPinError(false); }
                    else if (n !== "" && pinInput.length < 4) {
                      const next = pinInput + n;
                      setPinInput(next);
                      setPinError(false);
                      if (next.length === 4) {
                        setTimeout(() => {
                          if (next === ADMIN_PIN) { setIsAdmin(true); setView("dashboard"); setPinInput(""); showToast("Admin girişi başarılı ✓"); }
                          else { setPinError(true); setPinInput(""); }
                        }, 200);
                      }
                    }
                  }}
                  disabled={n === ""}
                  style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid #DDD8CE", background: n === "" ? "transparent" : "white", fontSize: 20, fontWeight: 600, cursor: n === "" ? "default" : "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {n}
                </button>
              ))}
            </div>

            {pinError && <p style={{ color: "#C0392B", fontWeight: 600, fontSize: 14, marginTop: 16 }}>Hatalı PIN. Tekrar deneyin.</p>}
            <p style={{ color: "#CCC", fontSize: 12, marginTop: 24 }}>Varsayılan PIN: 1234</p>
          </div>
        )}

      </main>

      {/* Adjust Stock Modal */}
      {adjustModal && (
        <div className="modal-overlay" onClick={() => setAdjustModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Stok Güncelle</h3>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>{adjustModal.name} · Mevcut: <strong>{adjustModal.qty} adet</strong></p>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              <button className="btn" style={{ flex: 1, padding: "10px", background: adjustType === "add" ? "#E8F8EF" : "white", border: "2px solid", borderColor: adjustType === "add" ? "#27AE60" : "#DDD", color: adjustType === "add" ? "#27AE60" : "#555", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}
                onClick={() => setAdjustType("add")}>+ Ekle</button>
              <button className="btn" style={{ flex: 1, padding: "10px", background: adjustType === "sub" ? "#FDECEA" : "white", border: "2px solid", borderColor: adjustType === "sub" ? "#C0392B" : "#DDD", color: adjustType === "sub" ? "#C0392B" : "#555", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}
                onClick={() => setAdjustType("sub")}>− Çıkar</button>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label>Miktar (adet)</label>
              <input type="number" min="1" value={adjustQty} onChange={e => setAdjustQty(e.target.value)} placeholder="Örn: 10" autoFocus />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleAdjust}>Kaydet</button>
              <button className="btn btn-outline" onClick={() => setAdjustModal(null)}>İptal</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 40, marginBottom: 12, textAlign: "center" }}>🗑️</div>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, textAlign: "center" }}>Ürünü Sil</h3>
            <p style={{ color: "#666", fontSize: 14, textAlign: "center", marginBottom: 24 }}>
              <strong>"{deleteConfirm.name}"</strong> ürününü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn btn-danger" style={{ flex: 1 }} onClick={() => handleDelete(deleteConfirm.id)}>Evet, Sil</button>
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setDeleteConfirm(null)}>İptal</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && <div className={`toast toast-${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function ProductForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    id: initial?.id || null,
    name: initial?.name || "",
    sku: initial?.sku || "",
    category: initial?.category || CATEGORIES[0],
    qty: initial?.qty ?? "",
    minQty: initial?.minQty ?? "",
    price: initial?.price ?? "",
    location: initial?.location || "",
    note: initial?.note || "",
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  function submit() {
    if (!form.name || !form.sku) return alert("Ürün adı ve SKU zorunludur.");
    onSave({ ...form, qty: parseInt(form.qty) || 0, minQty: parseInt(form.minQty) || 0, price: parseFloat(form.price) || 0 });
  }

  const field = (label, key, type = "text", placeholder = "") => (
    <div style={{ marginBottom: 16 }}>
      <label>{label}</label>
      <input type={type} value={form[key]} onChange={e => set(key, e.target.value)} placeholder={placeholder} />
    </div>
  );

  return (
    <div className="card" style={{ padding: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
        <div style={{ gridColumn: "1/-1" }}>{field("Ürün Adı *", "name", "text", "Örn: Clayton 3+2 Koltuk")}</div>
        {field("SKU Kodu *", "sku", "text", "Örn: SOF-001")}
        <div>
          <label>Kategori</label>
          <select value={form.category} onChange={e => set("category", e.target.value)} style={{ marginBottom: 16 }}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        {field("Mevcut Stok (Adet)", "qty", "number", "0")}
        {field("Min. Stok Uyarı Seviyesi", "minQty", "number", "5")}
        {field("Birim Fiyat (CAD $)", "price", "number", "0.00")}
        {field("Depo Konumu", "location", "text", "Örn: A-01")}
        <div style={{ gridColumn: "1/-1", marginBottom: 16 }}>
          <label>Not / Açıklama</label>
          <input value={form.note} onChange={e => set("note", e.target.value)} placeholder="Renk, boyut, vb." />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button className="btn btn-primary" style={{ flex: 1 }} onClick={submit}>
          {initial?.id ? "Değişiklikleri Kaydet" : "Ürünü Ekle"}
        </button>
        <button className="btn btn-outline" onClick={onCancel}>İptal</button>
      </div>
    </div>
  );
}
