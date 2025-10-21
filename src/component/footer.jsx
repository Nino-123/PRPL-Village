export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'linear-gradient(90deg, #e8f5e9 0%, #d7ccc8 100%)',
      color: '#4e342e',
      padding: '2rem 0 1rem 0',
      marginTop: '3rem',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
      boxShadow: '0 -2px 12px rgba(76,175,80,0.07)',
    }}>
      <div style={{ fontSize: '1.15rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>
        Nino &bull; Rakai &bull; Zahir &bull; Razan
      </div>
      <div style={{ fontSize: '1rem', opacity: 0.85, fontWeight: 500 }}>
        PRPL@2025
      </div>
    </footer>
  );
}
