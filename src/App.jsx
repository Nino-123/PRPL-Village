import { useEffect, useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Dashboard from './component/dashboard.jsx'
import UMKMRow from './component/umkmrow.jsx'
import Footer from './component/footer.jsx'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import Business from './business.jsx'
import AddProduct from './addproduct.jsx'
import EditProfilBusiness from './editprofilbusiness.jsx'
import AddPromosi from './addpromosi.jsx'
import ProductDetail from './productdetail.jsx'
import Admin from './admin.jsx'
import SignupBusiness from './signupbusiness.jsx'
import SignupAdmin from './signupadmin.jsx'

export default function App() {
	const [route, setRoute] = useState(typeof window !== 'undefined' ? window.location.hash : '#/')

	useEffect(() => {
		const onHashChange = () => setRoute(window.location.hash || '#/')
		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	const isLogin = route === '#/login'
	const isSignup = route === '#/signup'
	const isBusiness = route === '#/business'
	const isAddProduct = route === '#/add-product'
	const isEditProfilBusiness = route === '#/editprofilbusiness'
	const isAddPromosi = route === '#/addpromosi'
	const isProductDetail = route === '#/productdetail'
	const isAdmin = route === '#/admin'
	const isSignupBusiness = route === '#/signupbusiness'
	const isSignupAdmin = route === '#/signupadmin'

	return (
		<div style={{
			fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
			minHeight: '100vh',
			background: 'linear-gradient(180deg, #f1f8e9 0%, #fffde7 100%)',
			display: 'flex',
			flexDirection: 'column',
		}}>
			<Navbar />
			<main style={{ flex: 1, paddingTop: '64px' }}>
				{isLogin ? (
					<Login />
				) : isSignup ? (
					<Signup />
				) : isBusiness ? (
					<Business />
				) : isAddProduct ? (
					<AddProduct />
				) : isEditProfilBusiness ? (
					<EditProfilBusiness />
				) : isAddPromosi ? (
					<AddPromosi />
				) : isProductDetail ? (
					<ProductDetail />
				) : isAdmin ? (
					<Admin />
				) : isSignupBusiness ? (
					<SignupBusiness />
				) : isSignupAdmin ? (
					<SignupAdmin />
				) : (
					<>
						<div id="dashboard">
							<Dashboard />
						</div>
						<div id="umkm">
							<UMKMRow />
						</div>
					</>
				)}
			</main>
			{!isLogin && !isSignup && !isBusiness && !isAdmin && <Footer />}
		</div>
	)
}

