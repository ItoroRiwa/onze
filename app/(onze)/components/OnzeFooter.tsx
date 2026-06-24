export default function OnzeFooter() {
  return (
    <footer style={{ background: '#0a0a0c', borderTop: '1px solid #1a1a1d' }}>
      <div style={{ padding: '44px 40px 30px', display: 'flex', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 280 }}>
          <div style={{ font: "34px/1 var(--font-anton), 'Anton', sans-serif", letterSpacing: 2, color: '#f4f3ee', marginBottom: 14 }}>ONZE</div>
          <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)', lineHeight: 1.6, margin: 0 }}>
            Maillots authentiques — nations, clubs &amp; éditions fans. Floqués à la demande, livrés en 48h.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            {['▣', '▣', '▣'].map((icon, i) => (
              <button key={i} style={{ width: 34, height: 34, border: '1px solid #2f2f34', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(244,243,238,.6)', background: 'none', cursor: 'pointer', fontSize: 13 }}>
                {icon}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 54 }}>
          <div>
            <div style={{ font: "700 11px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: 1, color: '#f4f3ee', marginBottom: 14 }}>BOUTIQUE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)' }}>
              {['Nations', 'Clubs', 'Fans', 'Nouveautés'].map(l => (
                <a key={l} href="#" style={{ color: 'rgba(244,243,238,.55)', textDecoration: 'none' }}>{l}</a>
              ))}
              <a href="#" style={{ color: '#d4f034', textDecoration: 'none' }}>Soldes</a>
            </div>
          </div>
          <div>
            <div style={{ font: "700 11px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: 1, color: '#f4f3ee', marginBottom: 14 }}>AIDE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)' }}>
              {['Livraison & retours', 'Guide des tailles', 'Suivi de commande', 'FAQ', 'Contact'].map(l => (
                <a key={l} href="#" style={{ color: 'rgba(244,243,238,.55)', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ font: "700 11px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: 1, color: '#f4f3ee', marginBottom: 14 }}>NEWSLETTER</div>
            <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)', lineHeight: 1.5, marginBottom: 12, maxWidth: 200, margin: '0 0 12px' }}>
              -10% sur ta 1re commande.
            </p>
            <div style={{ display: 'flex', border: '1px solid #2f2f34', borderRadius: 8, overflow: 'hidden' }}>
              <input
                placeholder="Ton e-mail"
                style={{ flex: 1, padding: '11px 12px', font: '12px ui-monospace, monospace', color: 'rgba(244,243,238,.4)', background: 'none', border: 'none', outline: 'none' }}
              />
              <button style={{ background: '#d4f034', color: '#0e0e10', padding: '11px 16px', font: "700 12px var(--font-archivo), 'Archivo', sans-serif", border: 'none', cursor: 'pointer' }}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1a1a1d', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.4)' }}>
          © 2026 ONZE · Mentions légales · CGV · Confidentialité
        </span>
        <span style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.4)', letterSpacing: '.5px' }}>
          CB · VISA · MASTERCARD · PAYPAL · APPLE PAY
        </span>
      </div>
    </footer>
  )
}
