# Pages Directory Structure

This directory contains all the page components organized by their functionality.

## Folder Organization

### 📁 LandingPage
The main landing page components that users see first:
- `Navbar.jsx` - Navigation bar component
- `Dashboard.jsx` - Hero section with image carousel
- `UMKMRow.jsx` - UMKM (business) listing grid
- `Footer.jsx` - Footer component
- Corresponding CSS files for each component

### 📁 LoginPage
Login functionality:
- `login.jsx` - Main login page
- `LoginComponent.jsx` - Login form component
- `Login.css` - Login page styles

### 📁 SignupPage
User registration pages:
- `SignupComponent.jsx` - Main signup form
- `SignupBusiness.jsx` - Business owner registration
- `SignupAdmin.jsx` - Admin registration
- `Signup.css` - Signup page styles

### 📁 AdminPage
Admin dashboard:
- `Admin.jsx` - Admin dashboard with UMKM verification
- `Admin.css` - Admin page styles

### 📁 BusinessPage
Business owner dashboard and management:
- `Business.jsx` - Business dashboard
- `AddProduct.jsx` - Add new product form
- `AddPromosi.jsx` - Add new promotion form
- `EditProfileBusiness.jsx` - Edit business profile
- `Business.css` - Business page styles
- `Forms.css` - Shared form styles

### 📁 ProductPage
Product details:
- `ProductDetail.jsx` - Product/UMKM detail page
- `ProductDetail.css` - Product detail page styles

## Import Pattern

When importing from pages, use the relative path from `src`:

```javascript
import Navbar from './pages/LandingPage/Navbar.jsx'
import Admin from './pages/AdminPage/Admin.jsx'
import Business from './pages/BusinessPage/Business.jsx'
```
