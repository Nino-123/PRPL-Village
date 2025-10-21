import { useState } from 'react'

// Dummy data for demonstration; in a real app, this would come from props, context, or a backend
const umkm = {
  name: 'Warung Bu Tini',
  category: 'Makanan & Minuman',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  rating: 4.8,
  open: '07:00 - 21:00',
  description: 'Warung Bu Tini menyediakan aneka makanan dan minuman tradisional khas desa dengan cita rasa otentik dan harga terjangkau.',
  promotions: [
    {
      title: 'Diskon 10% untuk Nasi Pecel',
      description: 'Dapatkan diskon 10% untuk setiap pembelian Nasi Pecel selama bulan ini!',
      active: true,
    },
    {
      title: 'Gratis Es Dawet',
      description: 'Setiap pembelian di atas Rp30.000 gratis Es Dawet.',
      active: true,
    },
  ],
  products: [
    {
      name: 'Nasi Pecel',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      price: 15000,
      desc: 'Nasi dengan sayur pecel dan sambal kacang khas.'
    },
    {
      name: 'Es Dawet',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      price: 8000,
      desc: 'Minuman segar dengan cendol dan santan.'
    },
    {
      name: 'Tempe Mendoan',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      price: 7000,
      desc: 'Tempe goreng tipis khas Banyumas.'
    },
  ]
}

export default function ProductDetail() {
  // In a real app, fetch UMKM data based on route param or context
  const [data] = useState(umkm)

  return (
    <div style={{ maxWidth: 900, margin: '2.5rem auto', padding: '0 1rem' }}>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
        <img src={data.image} alt={data.name} style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 16, background: '#f3f4f6', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#2e7d32', fontWeight: 700 }}>{data.name}</h1>
          <div style={{ color: '#555', fontSize: '1.1rem', marginBottom: 8 }}>{data.category}</div>
          <div style={{ color: '#4e342e', marginBottom: 10 }}>{data.description}</div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>★ {data.rating}</span>
            <span style={{ color: '#2e7d32', fontWeight: 600 }}>Jam buka: {data.open}</span>
          </div>
        </div>
      </div>

      {/* Promosi Section */}
      {data.promotions && data.promotions.length > 0 && (
        <>
          <h2 style={{ color: '#2e7d32', fontSize: '1.18rem', fontWeight: 700, marginBottom: '1.1rem' }}>Promosi Tersedia</h2>
          <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.2rem', flexWrap: 'wrap' }}>
            {data.promotions.filter(p => p.active).map((promo, idx) => (
              <div key={idx} style={{
                background: '#e8f5e9',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(76,175,80,0.07)',
                padding: '1rem 1.2rem',
                minWidth: 220,
                maxWidth: 320,
                flex: '1 1 220px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <div style={{ fontWeight: 700, color: '#2e7d32', fontSize: '1.05rem' }}>{promo.title}</div>
                <div style={{ color: '#4e342e', fontSize: '0.98rem' }}>{promo.description}</div>
                <div style={{ color: '#388e3c', fontWeight: 600, fontSize: '0.97rem' }}>Aktif</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 style={{ color: '#2e7d32', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.2rem' }}>Produk yang Ditawarkan</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {data.products.map((prod, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: 14,
            boxShadow: '0 2px 12px rgba(76,175,80,0.07)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.7rem',
          }}>
            <img src={prod.image} alt={prod.name} style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 10, background: '#f3f4f6' }} />
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#2e7d32' }}>{prod.name}</div>
            <div style={{ color: '#4e342e', fontSize: '0.98rem', textAlign: 'center' }}>{prod.desc}</div>
            <div style={{ color: '#388e3c', fontWeight: 600, fontSize: '1.05rem' }}>Rp {prod.price.toLocaleString('id-ID')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
