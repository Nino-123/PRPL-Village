import { useState } from 'react'

export default function Business() {
	const [profile] = useState({
		name: 'Warung Kopi Makmur',
		image: 'https://via.placeholder.com/120x120?text=Warung',
		description: 'Menjual kopi, makanan ringan, dan hasil bumi lokal.',
		location: 'Jl. Desa Makmur No. 10',
		open: '07:00 - 21:00',
	});

	// Promotions state
	const [promotions, setPromotions] = useState([
		{
			id: 1,
			title: 'Diskon Kopi 20%',
			description: 'Dapatkan diskon 20% untuk pembelian Kopi Desa Premium minggu ini!',
			active: true,
		},
		{
			id: 2,
			title: 'Gratis Keripik untuk Pembelian di atas Rp100.000',
			description: 'Setiap pembelian di atas Rp100.000 akan mendapatkan keripik gratis.',
			active: true,
		},
	]);

	// Add new promotion
	const addPromotion = () => {
		window.location.hash = '#/addpromosi';
	};

	// Edit promotion
	const editPromotion = (id) => {
		const promo = promotions.find(p => p.id === id);
		if (!promo) return;
		const title = prompt('Judul promosi:', promo.title)?.trim() || promo.title;
		const description = prompt('Deskripsi promosi:', promo.description)?.trim() || promo.description;
		setPromotions(prev => prev.map(p => p.id === id ? { ...p, title, description } : p));
	};

	// Deactivate promotion
	const deactivatePromotion = (id) => {
		const promo = promotions.find(p => p.id === id);
		if (!promo) return;
		const ok = confirm(`Akhiri promosi "${promo.title}"?`);
		if (!ok) return;
		setPromotions(prev => prev.map(p => p.id === id ? { ...p, active: false } : p));
	};

	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'Kopi Desa Premium',
			description: 'Biji kopi sangrai dari kebun lokal dengan cita rasa khas.',
			image: 'https://via.placeholder.com/400x250?text=Kopi+Desa',
			price: 45000,
		},
		{
			id: 2,
			name: 'Kerajinan Bambu',
			description: 'Keranjang bambu handmade, ramah lingkungan dan estetik.',
			image: 'https://via.placeholder.com/400x250?text=Kerajinan+Bambu',
			price: 60000,
		},
		{
			id: 3,
			name: 'Madu Hutan',
			description: 'Madu murni hasil panen peternak lebah desa, tanpa campuran.',
			image: 'https://via.placeholder.com/400x250?text=Madu+Hutan',
			price: 75000,
		},
	]);

	const editProfile = () => {
		window.location.hash = '#/editprofilbusiness';
	}

		const addProduct = () => {
			// Navigate to add product page
			window.location.hash = '#/add-product'
		}

	const editProduct = (id) => {
		const p = products.find(x => x.id === id)
		if (!p) return
		const name = prompt('Nama produk:', p.name)?.trim()
		if (!name) return
		const description = prompt('Deskripsi produk:', p.description)?.trim() || ''
		const priceStr = prompt('Harga (angka):', String(p.price))?.trim()
		const price = priceStr && !isNaN(Number(priceStr)) ? Number(priceStr) : p.price
		const image = prompt('URL gambar produk:', p.image)?.trim() || p.image
		setProducts(prev => prev.map(x => x.id === id ? { ...x, name, description, price, image } : x))
	}

	const removeProduct = (id) => {
		const p = products.find(x => x.id === id)
		if (!p) return
		const ok = confirm(`Hapus produk "${p.name}"?`)
		if (!ok) return
		setProducts(prev => prev.filter(x => x.id !== id))
	}

	return (
		<div style={{ padding: '1.5rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
			{/* Business Profile Section */}
			<section style={{
				display: 'flex',
				alignItems: 'center',
				gap: '1.5rem',
				background: '#f9fbe7',
				borderRadius: 16,
				boxShadow: '0 2px 12px rgba(76,175,80,0.07)',
				padding: '1.2rem 1.5rem',
				marginBottom: '1.5rem',
			}}>
				<img src={profile.image} alt={profile.name} style={{ width: 110, height: 110, borderRadius: 14, objectFit: 'cover', background: '#e0e0e0', flexShrink: 0 }} />
				<div style={{ flex: 1 }}>
					<h2 style={{ margin: '0 0 0.3rem', color: '#2e7d32', fontSize: '1.3rem' }}>{profile.name}</h2>
					<div style={{ color: '#4e342e', marginBottom: 6 }}>{profile.description}</div>
					<div style={{ color: '#4e342e', fontSize: '0.98rem', marginBottom: 2 }}>
						<span style={{ fontWeight: 600 }}>Lokasi:</span> {profile.location}
					</div>
					<div style={{ color: '#4e342e', fontSize: '0.98rem' }}>
						<span style={{ fontWeight: 600 }}>Jam buka:</span> {profile.open}
					</div>
				</div>
				<button
					onClick={editProfile}
					style={{
						background: 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)',
						color: '#2e7d32',
						border: '1px solid #81c784',
						borderRadius: 8,
						padding: '0.6rem 1.1rem',
						fontWeight: 700,
						cursor: 'pointer',
						boxShadow: '0 2px 8px rgba(76,175,80,0.07)'
					}}
					onMouseEnter={e => { e.currentTarget.style.background = '#388e3c'; e.currentTarget.style.color = '#fff' }}
					onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)'; e.currentTarget.style.color = '#2e7d32' }}
				>
					Edit Profil
				</button>
			</section>

			{/* Promotions Section */}
			<section style={{
				background: '#fffde7',
				borderRadius: 14,
				boxShadow: '0 2px 12px rgba(76,175,80,0.07)',
				padding: '1.2rem 1.5rem',
				marginBottom: '1.5rem',
			}}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem' }}>
					<h2 style={{ margin: 0, color: '#2e7d32', fontSize: '1.15rem' }}>Promosi</h2>
					<button
						onClick={addPromotion}
						style={{
							background: 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)',
							color: '#2e7d32',
							border: '1px solid #81c784',
							borderRadius: 8,
							padding: '0.5rem 1rem',
							fontWeight: 700,
							cursor: 'pointer',
							boxShadow: '0 2px 8px rgba(76,175,80,0.07)'
						}}
						onMouseEnter={e => { e.currentTarget.style.background = '#388e3c'; e.currentTarget.style.color = '#fff' }}
						onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)'; e.currentTarget.style.color = '#2e7d32' }}
					>
						+ Buat Promosi
					</button>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
					{promotions.length === 0 && (
						<div style={{ color: '#4e342e', fontStyle: 'italic' }}>Belum ada promosi aktif.</div>
					)}
					{promotions.map(promo => (
						<div key={promo.id} style={{
							background: promo.active ? '#e8f5e9' : '#ffcdd2',
							borderRadius: 10,
							boxShadow: '0 2px 8px rgba(76,175,80,0.05)',
							padding: '1rem',
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}>
							<div style={{ fontWeight: 700, color: '#2e7d32', fontSize: '1.05rem' }}>{promo.title}</div>
							<div style={{ color: '#4e342e', marginBottom: 4 }}>{promo.description}</div>
							<div style={{ color: promo.active ? '#388e3c' : '#b71c1c', fontWeight: 600, fontSize: '0.98rem' }}>
								{promo.active ? 'Aktif' : 'Berakhir'}
							</div>
							<div style={{ display: 'flex', gap: '0.5rem' }}>
								<button
									onClick={() => editPromotion(promo.id)}
									style={{
										flex: 1,
										background: '#fffde7',
										color: '#4e342e',
										border: '1px solid #ffe082',
										borderRadius: 8,
										padding: '0.5rem 0.6rem',
										fontWeight: 600,
										cursor: 'pointer'
									}}
									onMouseEnter={e => { e.currentTarget.style.background = '#ffe082' }}
									onMouseLeave={e => { e.currentTarget.style.background = '#fffde7' }}
									disabled={!promo.active}
								>
									Edit
								</button>
								<button
									onClick={() => deactivatePromotion(promo.id)}
									style={{
										flex: 1,
										background: '#ffcdd2',
										color: '#b71c1c',
										border: '1px solid #ef9a9a',
										borderRadius: 8,
										padding: '0.5rem 0.6rem',
										fontWeight: 700,
										cursor: 'pointer'
									}}
									onMouseEnter={e => { e.currentTarget.style.background = '#ef9a9a' }}
									onMouseLeave={e => { e.currentTarget.style.background = '#ffcdd2' }}
									disabled={!promo.active}
								>
									Akhiri
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Product Management Section */}
			<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
				<h1 style={{ color: '#4e342e', margin: 0, fontSize: '1.6rem' }}>Kelola Produk</h1>
				<button
					onClick={addProduct}
					style={{
						background: 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)',
						color: '#2e7d32',
						border: '1px solid #81c784',
						borderRadius: 8,
						padding: '0.6rem 1rem',
						fontWeight: 700,
						cursor: 'pointer',
						boxShadow: '0 2px 8px rgba(76,175,80,0.07)'
					}}
					onMouseEnter={e => { e.currentTarget.style.background = '#388e3c'; e.currentTarget.style.color = '#fff' }}
					onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #a5d6a7 0%, #81c784 100%)'; e.currentTarget.style.color = '#2e7d32' }}
				>
					+ Tambah Produk
				</button>
			</header>

			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
				{products.map(p => (
					<div key={p.id} style={{
						background: '#fff',
						borderRadius: 12,
						boxShadow: '0 4px 16px rgba(76,175,80,0.08)',
						overflow: 'hidden',
						display: 'flex',
						flexDirection: 'column'
					}}>
						<div style={{ position: 'relative', paddingTop: '56.25%', background: '#f1f8e9' }}>
							<img src={p.image} alt={p.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
						</div>
						<div style={{ padding: '0.9rem 0.9rem 1rem' }}>
							<h3 style={{ margin: '0 0 0.25rem', color: '#2e7d32' }}>{p.name}</h3>
							<p style={{ margin: '0 0 0.5rem', color: '#4e342e' }}>{p.description || 'Tidak ada deskripsi.'}</p>
							{typeof p.price === 'number' && (
								<div style={{ marginBottom: '0.75rem', color: '#4e342e', fontWeight: 600 }}>Rp {p.price.toLocaleString('id-ID')}</div>
							)}
							<div style={{ display: 'flex', gap: '0.5rem' }}>
								<button
									onClick={() => editProduct(p.id)}
									style={{
										flex: 1,
										background: '#fffde7',
										color: '#4e342e',
										border: '1px solid #ffe082',
										borderRadius: 8,
										padding: '0.5rem 0.6rem',
										fontWeight: 600,
										cursor: 'pointer'
									}}
									onMouseEnter={e => { e.currentTarget.style.background = '#ffe082' }}
									onMouseLeave={e => { e.currentTarget.style.background = '#fffde7' }}
								>
									Edit
								</button>
								<button
									onClick={() => removeProduct(p.id)}
									style={{
										flex: 1,
										background: '#ffcdd2',
										color: '#b71c1c',
										border: '1px solid #ef9a9a',
										borderRadius: 8,
										padding: '0.5rem 0.6rem',
										fontWeight: 700,
										cursor: 'pointer'
									}}
									onMouseEnter={e => { e.currentTarget.style.background = '#ef9a9a' }}
									onMouseLeave={e => { e.currentTarget.style.background = '#ffcdd2' }}
								>
									Hapus
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

