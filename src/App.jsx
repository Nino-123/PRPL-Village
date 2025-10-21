import { useEffect, useState } from 'react'
import Navbar from './pages/LandingPage/Navbar.jsx'
import Dashboard from './pages/LandingPage/Dashboard.jsx'
import UMKMRow from './pages/LandingPage/UMKMRow.jsx'
import Footer from './pages/LandingPage/Footer.jsx'
import Login from './pages/LoginPage/login.jsx'
import Signup from './pages/SignupPage/SignupComponent.jsx'
import Business from './pages/BusinessPage/Business.jsx'
import AddProduct from './pages/BusinessPage/AddProduct.jsx'
import EditProfilBusiness from './pages/BusinessPage/EditProfileBusiness.jsx'
import AddPromosi from './pages/BusinessPage/AddPromosi.jsx'
import ProductDetail from './pages/ProductPage/ProductDetail.jsx'
import Admin from './pages/AdminPage/Admin.jsx'
import SignupBusiness from './pages/SignupPage/SignupBusiness.jsx'
import SignupAdmin from './pages/SignupPage/SignupAdmin.jsx'

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

