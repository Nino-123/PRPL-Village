import { useState } from 'react'

export default function Signup() {
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    phonenumber: '',
    address: '',
    status: 'user',
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
    // If business owner, go to signupbusiness page for extra info
    if (form.status === 'business') {
      window.location.hash = '#/signupbusiness'
    } else if (form.status === 'user') {
      window.location.hash = '#/login'
    } else if (form.status === 'admin') {
      // Optionally handle admin registration here
      window.location.hash = '#/login'
    }
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
          Sign Up for Karya Desa
        </h2>

        <label style={{ color: '#2e7d32', fontWeight: 500 }}>
          Full Name
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
          Username
          <input
            type="text"
            name="username"
            value={form.username}
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
          Phone Number
          <input
            type="tel"
            name="phonenumber"
            value={form.phonenumber}
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
          Address
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

        <div style={{ margin: '0.5rem 0 1.2rem 0' }}>
          <div style={{ color: '#2e7d32', fontWeight: 500, marginBottom: '0.5rem' }}>Pilih Status</div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {[
              { key: 'user', label: 'User', desc: 'Akses fitur umum' },
              { key: 'business', label: 'Business Owner', desc: 'Kelola UMKM Anda' },
              { key: 'admin', label: 'Admin', desc: 'Kelola desa & UMKM' },
            ].map(opt => (
              <div
                key={opt.key}
                onClick={() => setForm(f => ({ ...f, status: opt.key }))}
                style={{
                  flex: 1,
                  cursor: 'pointer',
                  background: form.status === opt.key ? '#a5d6a7' : '#f9fbe7',
                  color: form.status === opt.key ? '#2e7d32' : '#4e342e',
                  border: form.status === opt.key ? '2px solid #388e3c' : '1px solid #c8e6c9',
                  borderRadius: 10,
                  padding: '1rem 0.5rem',
                  boxShadow: form.status === opt.key ? '0 2px 8px rgba(76,175,80,0.10)' : 'none',
                  fontWeight: form.status === opt.key ? 700 : 500,
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  minWidth: 90,
                  userSelect: 'none',
                }}
              >
                <div style={{ fontSize: '1.08rem', marginBottom: 4 }}>{opt.label}</div>
                <div style={{ fontSize: '0.92rem', color: '#666' }}>{opt.desc}</div>
              </div>
            ))}
          </div>
        </div>

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

        {form.status === 'business' ? (
          <button
            type="button"
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
            onClick={e => {
              e.preventDefault()
              if (form.password !== form.confirm) {
                alert('Passwords do not match')
                return
              }
              window.location.hash = '#/signupbusiness'
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
            Lanjutkan ke Data Bisnis
          </button>
        ) : form.status === 'admin' ? (
          <button
            type="button"
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
            onClick={e => {
              e.preventDefault()
              if (form.password !== form.confirm) {
                alert('Passwords do not match')
                return
              }
              window.location.hash = '#/signupadmin'
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
            Lanjutkan ke Data Admin
          </button>
        ) : (
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
            Sign Up
          </button>
        )}
      </form>
    </div>
  )
}
