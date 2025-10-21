import { useState } from 'react'

export default function SignupBusiness() {
  const [form, setForm] = useState({
    owner: '',
    category: '',
    contact: '',
    address: '',
    description: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleVerify = (e) => {
    e.preventDefault()
    if (!form.owner || !form.category || !form.contact || !form.address || !form.description) {
      alert('Mohon lengkapi semua data bisnis!')
      return
    }
    alert('Bisnis Anda telah diverifikasi oleh admin!')
    window.location.hash = '#/business'
  }

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      background: 'linear-gradient(180deg, #f1f8e9 0%, #fffde7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem 1rem',
    }}>
      <form onSubmit={handleVerify} style={{
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(76,175,80,0.10)',
        padding: '2.5rem 2rem',
        minWidth: 320,
        maxWidth: 440,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#4e342e',
          fontWeight: 700,
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
        }}>
          Data Bisnis UMKM
        </h2>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Nama Pemilik Bisnis
          <input
            type="text"
            name="owner"
            value={form.owner}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '7px',
              border: '1px solid #c8e6c9',
              marginTop: '0.3rem',
              fontSize: '1rem',
              background: '#f9fbe7',
              color: '#2e2e2e',
              caretColor: '#2e7d32',
            }}
          />
        </label>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Kategori Bisnis
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '7px',
              border: '1px solid #c8e6c9',
              marginTop: '0.3rem',
              fontSize: '1rem',
              background: '#f9fbe7',
              color: '#2e2e2e',
              caretColor: '#2e7d32',
            }}
          />
        </label>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Nomor Kontak
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '7px',
              border: '1px solid #c8e6c9',
              marginTop: '0.3rem',
              fontSize: '1rem',
              background: '#f9fbe7',
              color: '#2e2e2e',
              caretColor: '#2e7d32',
            }}
          />
        </label>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Alamat Bisnis
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '7px',
              border: '1px solid #c8e6c9',
              marginTop: '0.3rem',
              fontSize: '1rem',
              background: '#f9fbe7',
              color: '#2e2e2e',
              caretColor: '#2e7d32',
            }}
          />
        </label>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Deskripsi Singkat Bisnis
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '7px',
              border: '1px solid #c8e6c9',
              marginTop: '0.3rem',
              fontSize: '1rem',
              background: '#f9fbe7',
              color: '#2e2e2e',
              caretColor: '#2e7d32',
              resize: 'vertical',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)',
            color: '#2e7d32',
            border: 'none',
            borderRadius: '7px',
            padding: '0.8rem',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(76,175,80,0.07)',
            marginTop: '0.5rem',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#388e3c'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)'
            e.currentTarget.style.color = '#2e7d32'
          }}
        >
          Verify to Admin
        </button>
      </form>
    </div>
  )
}
