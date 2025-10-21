export default function Navbar() {
  const linkStyle = {
    color: '#4e342e',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    fontWeight: 500,
    background: 'transparent',
  }

  const buttonStyle = {
    ...linkStyle,
    background: '#a5d6a7',
    color: '#2e7d32',
    border: '1px solid #81c784',
    boxShadow: '0 1px 4px rgba(76,175,80,0.07)',
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      padding: '0 2rem',
      background: 'linear-gradient(90deg, #e8f5e9 0%, #fffde7 100%)',
      color: '#4e342e',
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(76,175,80,0.08)',
      boxSizing: 'border-box',
    }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => {
          window.location.hash = '#/';
        }}
        title="Kembali ke Beranda"
      >
        <span style={{ fontSize: '1.5rem' }}>�</span>
        KARYA DESA
      </div>
      
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '0.5rem', 
        margin: 0, 
        padding: 0,
        alignItems: 'center'
      }}>
        <li>
          <a
            href="#dashboard"
            style={linkStyle}
            onClick={e => {
              e.preventDefault();
              document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={e => {
              e.target.style.background = '#e0e0e0';
              e.target.style.color = '#2e7d32';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#4e342e';
            }}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#umkm"
            style={linkStyle}
            onClick={e => {
              e.preventDefault();
              document.getElementById('umkm')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={e => {
              e.target.style.background = '#e0e0e0';
              e.target.style.color = '#2e7d32';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#4e342e';
            }}
          >
            UMKM
          </a>
        </li>
        <li>
          <a 
            href="#/admin" 
            style={linkStyle}
            onMouseEnter={e => {
              e.target.style.background = '#e0e0e0';
              e.target.style.color = '#2e7d32';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#4e342e';
            }}
          >
            Admin
          </a>
        </li>
        <li>
          <a 
            href="#/business" 
            style={linkStyle}
            onMouseEnter={e => {
              e.target.style.background = '#e0e0e0';
              e.target.style.color = '#2e7d32';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#4e342e';
            }}
          >
            Business
          </a>
        </li>
        <li>
          <a 
            href="#/login" 
            style={linkStyle}
            onMouseEnter={e => {
              e.target.style.background = '#e0e0e0';
              e.target.style.color = '#2e7d32';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#4e342e';
            }}
          >
            Log in
          </a>
        </li>
        <li>
          <a 
            href="#/signup" 
            style={buttonStyle}
            onMouseEnter={e => {
              e.target.style.background = '#388e3c';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = '#a5d6a7';
              e.target.style.color = '#2e7d32';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  )
}
