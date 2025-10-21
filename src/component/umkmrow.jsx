import { useState } from 'react'

export default function UMKMRow() {
  const [search, setSearch] = useState('');
  const businesses = [
    {
      name: 'Warung Bu Tini',
      category: 'Makanan & Minuman',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
    },
    {
      name: 'Kerajinan Bambu Pak Hadi',
      category: 'Kerajinan Tangan',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
    },
    {
      name: 'Toko Batik Mbak Sari',
      category: 'Fashion & Batik',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
    },
    {
      name: 'Kopi Pak Darto',
      category: 'Kedai Kopi',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
    },
    {
      name: 'Roti Bu Rina',
      category: 'Roti & Kue',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
    },
    {
      name: 'Sate Ayam Mas Budi',
      category: 'Kuliner',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
    },
    {
      name: 'Tahu Crispy Bu Siti',
      category: 'Cemilan',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
    },
    {
      name: 'Kerupuk Pak Slamet',
      category: 'Kerupuk & Snack',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
    },
  ];

  const filtered = businesses.filter(biz =>
    biz.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '3rem auto',
      padding: '0 1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#222',
          margin: 0,
        }}>
          UMKM Unggulan
        </h2>
        <input
          type="text"
          placeholder="Cari UMKM..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '0.55rem 1.1rem',
            borderRadius: '7px',
            border: '1px solid #c8e6c9',
            fontSize: '1rem',
            background: '#f9fbe7',
            color: '#2e2e2e',
            minWidth: 220,
            outline: 'none',
            boxShadow: '0 1px 4px rgba(76,175,80,0.07)',
            marginLeft: 'auto',
          }}
        />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '4rem',
      }}>
        {filtered.map((biz, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            width: '100%',
            minHeight: '260px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <img src={biz.image} alt={biz.name} style={{
              width: '100%',
              height: '140px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '0.5rem',
              background: '#f3f4f6',
            }} />
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#222' }}>{biz.name}</div>
            <div style={{ color: '#555', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{biz.category}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontWeight: 600, fontSize: '0.95rem' }}>
              <span>★</span>
              <span style={{ color: '#222' }}>{biz.rating}</span>
            </div>
            <button
              style={{
                position: 'absolute',
                right: '1.25rem',
                bottom: '1.25rem',
                background: '#f3f4f6',
                color: '#764ba2',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1.1rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#764ba2';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.color = '#764ba2';
              }}
              onClick={() => { window.location.hash = '#/productdetail'; }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
