import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
];

export default function Dashboard() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 64px)',
      padding: '2rem 1rem',
      background: '#fff',
    }}>
      <h1 style={{
        fontSize: '5vw',
        fontWeight: 900,
        letterSpacing: '-2px',
        margin: 0,
        textAlign: 'center',
        color: '#222',
        lineHeight: 1.1,
      }}>
        K A R Y A - D E S A
      </h1>
      <div style={{
        fontSize: '1.1rem',
        color: '#444',
        margin: '1rem 0 2.5rem 0',
        textAlign: 'center',
      }}>
        A DIGITAL MARKETPLACE FOR LOCAL CREATORS
      </div>
      <div style={{
        position: 'relative',
        width: 'min(95vw, 1300px)',
        height: 'min(80vw, 650px)',
        maxHeight: '80vh',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 48px rgba(0,0,0,0.16)',
        background: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2.5rem',
      }}>
        <img
          src={images[current]}
          alt={`slide-${current}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s',
          }}
        />
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.35)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontWeight: 700,
            color: 'rgba(118,75,162,0.6)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            zIndex: 2,
            transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
            outline: 'none',
            opacity: 0.5,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.92)';
            e.currentTarget.style.color = '#764ba2';
            e.currentTarget.style.opacity = 1;
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(118,75,162,0.13)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.35)';
            e.currentTarget.style.color = 'rgba(118,75,162,0.6)';
            e.currentTarget.style.opacity = 0.5;
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
          }}
          aria-label="Previous slide"
        >
          <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>&#8592;</span>
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.35)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontWeight: 700,
            color: 'rgba(118,75,162,0.6)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            zIndex: 2,
            transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
            outline: 'none',
            opacity: 0.5,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.92)';
            e.currentTarget.style.color = '#764ba2';
            e.currentTarget.style.opacity = 1;
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(118,75,162,0.13)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.35)';
            e.currentTarget.style.color = 'rgba(118,75,162,0.6)';
            e.currentTarget.style.opacity = 0.5;
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
          }}
          aria-label="Next slide"
        >
          <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
