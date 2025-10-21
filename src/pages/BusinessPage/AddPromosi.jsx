import { useState } from 'react'

export default function AddPromosi() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    active: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, save to backend or context
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
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(76,175,80,0.10)',
        padding: '2rem',
        minWidth: 320,
        maxWidth: 520,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <h2 style={{ textAlign: 'center', color: '#4e342e', fontWeight: 700, margin: 0 }}>Tambah Promosi</h2>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Judul Promosi
          <input
            type="text"
            name="title"
            value={form.title}
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
          Detail Promosi
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
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
            }}
          />
        </label>

        <label style={{ color: '#2e7d32', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            style={{ accentColor: '#2e7d32', width: 18, height: 18 }}
          />
          Promosi Aktif
        </label>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button
            type="button"
            onClick={() => (window.location.hash = '#/business')}
            style={{
              flex: 1,
              background: '#fffde7',
              color: '#4e342e',
              border: '1px solid #ffe082',
              borderRadius: 8,
              padding: '0.7rem 0.6rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ffe082' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fffde7' }}
          >
            Batal
          </button>
          <button
            type="submit"
            style={{
              flex: 1,
              background: 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)',
              color: '#2e7d32',
              border: '1px solid #81c784',
              borderRadius: 8,
              padding: '0.7rem 0.6rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(76,175,80,0.07)'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#388e3c'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)'; e.currentTarget.style.color = '#2e7d32' }}
          >
            Simpan Promosi
          </button>
        </div>
      </form>
    </div>
  )
}
