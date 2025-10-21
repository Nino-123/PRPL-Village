import { useState } from 'react'

export default function Admin() {
  // Dummy data for pending verification requests
  const [verificationRequests, setVerificationRequests] = useState([
    {
      id: 1,
      name: 'Warung Nasi Ibu Siti',
      owner: 'Ibu Siti',
      category: 'Kuliner',
      description: 'Warung nasi dengan menu masakan rumahan khas Jawa Tengah',
      address: 'Jl. Raya Desa No. 12',
      phone: '081234567890',
      requestDate: '2025-10-20',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Kerajinan Bambu Pak Joko',
      owner: 'Pak Joko',
      category: 'Kerajinan',
      description: 'Produksi kerajinan tangan dari bambu berkualitas tinggi',
      address: 'Jl. Kerajinan No. 5',
      phone: '082345678901',
      requestDate: '2025-10-21',
      status: 'pending',
    },
  ])

  // Dummy data for verified businesses
  const [businesses] = useState([
    {
      id: 3,
      name: 'Warung Pecel Madiun',
      owner: 'Ibu Wati',
      category: 'Kuliner',
      rating: 4.8,
      verified: true,
      registeredDate: '2025-09-15',
    },
    {
      id: 4,
      name: 'Toko Batik Laweyan',
      owner: 'Pak Budi',
      category: 'Fashion',
      rating: 4.9,
      verified: true,
      registeredDate: '2025-08-20',
    },
  ])

  // Dummy data for all products
  const [products] = useState([
    { id: 1, name: 'Nasi Pecel', umkm: 'Warung Pecel Madiun', price: 15000, stock: 50 },
    { id: 2, name: 'Sate Kambing', umkm: 'Warung Pecel Madiun', price: 25000, stock: 30 },
    { id: 3, name: 'Batik Tulis', umkm: 'Toko Batik Laweyan', price: 250000, stock: 15 },
    { id: 4, name: 'Batik Cap', umkm: 'Toko Batik Laweyan', price: 150000, stock: 25 },
  ])

  // Dummy data for all promotions
  const [promotions] = useState([
    { id: 1, title: 'Diskon 10% untuk Nasi Pecel', umkm: 'Warung Pecel Madiun', active: true },
    { id: 2, title: 'Gratis Es Dawet', umkm: 'Warung Pecel Madiun', active: true },
    { id: 3, title: 'Beli 2 Gratis 1 Batik Cap', umkm: 'Toko Batik Laweyan', active: false },
  ])

  const handleApprove = (id) => {
    setVerificationRequests(prev =>
      prev.map(req => req.id === id ? { ...req, status: 'approved' } : req)
    )
    alert('UMKM berhasil disetujui!')
  }

  const handleReject = (id) => {
    if (confirm('Apakah Anda yakin ingin menolak registrasi UMKM ini?')) {
      setVerificationRequests(prev =>
        prev.map(req => req.id === id ? { ...req, status: 'rejected' } : req)
      )
      alert('UMKM ditolak.')
    }
  }

  const pendingCount = verificationRequests.filter(r => r.status === 'pending').length

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#2e7d32', marginBottom: '0.5rem' }}>
        Admin Desa - Dashboard
      </h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Kelola semua UMKM, produk, dan promosi di desa Anda
      </p>

      {/* Verification Requests Section */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', margin: 0 }}>
            Permintaan Verifikasi
          </h2>
          {pendingCount > 0 && (
            <span style={{
              background: '#ff5722',
              color: '#fff',
              borderRadius: '50%',
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}>
              {pendingCount}
            </span>
          )}
        </div>

        {verificationRequests.filter(r => r.status === 'pending').length === 0 ? (
          <div style={{
            background: '#e8f5e9',
            padding: '1.5rem',
            borderRadius: 12,
            color: '#2e7d32',
            textAlign: 'center',
          }}>
            Tidak ada permintaan verifikasi baru
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {verificationRequests
              .filter(req => req.status === 'pending')
              .map(req => (
                <div key={req.id} style={{
                  background: '#fff',
                  borderRadius: 14,
                  boxShadow: '0 2px 12px rgba(76,175,80,0.1)',
                  padding: '1.5rem',
                  border: '2px solid #fff3e0',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#2e7d32', margin: '0 0 0.5rem 0' }}>
                        {req.name}
                      </h3>
                      <div style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                        <strong>Pemilik:</strong> {req.owner}
                      </div>
                      <div style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                        <strong>Kategori:</strong> {req.category}
                      </div>
                      <div style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                        <strong>Telepon:</strong> {req.phone}
                      </div>
                      <div style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                        <strong>Alamat:</strong> {req.address}
                      </div>
                      <div style={{ color: '#4e342e', marginTop: '0.8rem', fontSize: '0.98rem' }}>
                        {req.description}
                      </div>
                      <div style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.8rem' }}>
                        Tanggal Pengajuan: {new Date(req.requestDate).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem' }}>
                    <button
                      onClick={() => handleApprove(req.id)}
                      style={{
                        background: '#4caf50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '0.7rem 1.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => e.target.style.background = '#388e3c'}
                      onMouseLeave={e => e.target.style.background = '#4caf50'}
                    >
                      ✓ Setujui
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      style={{
                        background: '#f44336',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '0.7rem 1.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => e.target.style.background = '#d32f2f'}
                      onMouseLeave={e => e.target.style.background = '#f44336'}
                    >
                      ✗ Tolak
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* All Businesses Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: '1.2rem' }}>
          Semua UMKM Terverifikasi ({businesses.length})
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {businesses.map(biz => (
            <div key={biz.id} style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 10px rgba(76,175,80,0.08)',
              padding: '1.2rem',
              border: '1px solid #e8f5e9',
            }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#2e7d32', margin: '0 0 0.5rem 0' }}>
                {biz.name}
              </h3>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                Pemilik: {biz.owner}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                Kategori: {biz.category}
              </div>
              <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '0.3rem' }}>
                ★ {biz.rating}
              </div>
              <div style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Terdaftar: {new Date(biz.registeredDate).toLocaleDateString('id-ID')}
              </div>
              <div style={{
                marginTop: '0.8rem',
                display: 'inline-block',
                background: '#e8f5e9',
                color: '#2e7d32',
                padding: '0.3rem 0.7rem',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: 600,
              }}>
                ✓ Terverifikasi
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Products Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: '1.2rem' }}>
          Semua Produk ({products.length})
        </h2>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 10px rgba(76,175,80,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#e8f5e9', color: '#2e7d32' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700 }}>Nama Produk</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700 }}>UMKM</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 700 }}>Harga</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700 }}>Stok</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, idx) => (
                <tr key={prod.id} style={{
                  borderBottom: idx < products.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}>
                  <td style={{ padding: '1rem', color: '#2e7d32', fontWeight: 600 }}>{prod.name}</td>
                  <td style={{ padding: '1rem', color: '#666' }}>{prod.umkm}</td>
                  <td style={{ padding: '1rem', color: '#388e3c', fontWeight: 600, textAlign: 'right' }}>
                    Rp {prod.price.toLocaleString('id-ID')}
                  </td>
                  <td style={{ padding: '1rem', color: '#666', textAlign: 'center' }}>{prod.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* All Promotions Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: '1.2rem' }}>
          Semua Promosi ({promotions.length})
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {promotions.map(promo => (
            <div key={promo.id} style={{
              background: promo.active ? '#e8f5e9' : '#f5f5f5',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(76,175,80,0.06)',
              padding: '1.2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2e7d32', margin: '0 0 0.3rem 0' }}>
                  {promo.title}
                </h3>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>
                  UMKM: {promo.umkm}
                </div>
              </div>
              <div style={{
                padding: '0.4rem 0.9rem',
                borderRadius: 8,
                fontSize: '0.85rem',
                fontWeight: 600,
                background: promo.active ? '#4caf50' : '#9e9e9e',
                color: '#fff',
              }}>
                {promo.active ? 'Aktif' : 'Nonaktif'}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
