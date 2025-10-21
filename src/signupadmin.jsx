import { useState } from 'react'

export default function SignupAdmin() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirm: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      alert('Passwords do not match')
      return
    }
    alert('Pendaftaran admin berhasil!')
    window.location.hash = '#/admin'
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
          Data Pendaftaran Admin Desa
        </h2>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Nama Lengkap
          <input
            type="text"
            name="fullname"
            value={form.fullname}
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
          Email
          <input
            type="email"
            name="email"
            value={form.email}
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
          Nomor Telepon
          <input
            type="tel"
            name="phone"
            value={form.phone}
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
          Alamat
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
          Password
          <input
            type="password"
            name="password"
            value={form.password}
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
          Confirm Password
          <input
            type="password"
            name="confirm"
            value={form.confirm}
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
          Daftar Admin
        </button>
      </form>
    </div>
  )
}
