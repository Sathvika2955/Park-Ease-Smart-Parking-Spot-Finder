# Park-Ease: Smart Parking Spot Finder 🚗

## Project Overview
Park-Ease is a full-stack Smart Parking Management System designed to help users view, monitor, and manage parking slot availability in real time.  
The application supports authentication, role-based access, and visual slot mapping using a modern MERN-style architecture.

---

## Tech Stack
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Tools:** VS Code, GitHub, Thunder Client

---

## Milestone 1: Authentication & Verification (COMPLETED)🔐

### Objective
Implement secure user authentication and authorization with role-based access control.

### Features Implemented
- User registration with encrypted passwords (bcrypt)
- User login with JWT token generation
- Role-based access (Admin / User)
- Protected routes using authentication middleware
- Admin-only access control using authorization middleware

### Key Files
- `routes/auth.js` – User registration and login APIs
- `middleware/authMiddleware.js` – JWT verification
- `middleware/admin.js` – Admin access validation
- `models/user.js` – User schema and role definition

### Outcome
✔ Secure authentication system  
✔ Token-based session handling  
✔ Role-based access enforcement  

---

## Milestone 2: Slot Display & Mapping-(IN PROGRESS) 🅿️

### Objective
Visually represent parking slot availability and map backend data to the frontend UI.

### Features Implemented
- Parking slot data stored in MongoDB
- Backend API to fetch all parking slots
- Slot availability status (`isAvailable`)
- React grid-based visualization of slots
- Conditional styling:
  - 🟢 Green → Available
  - 🔴 Red → Booked

### Key Files
- `models/slotmodel.js` – Parking slot schema
- `routes/slotRoutes.js` – Slot retrieval API
- `pages/SlotList.jsx` – Fetching and state management
- `components/SlotGrid.jsx` – Slot visualization UI
- `SlotGrid.css` – Grid and color styling

### Outcome
✔ Backend-frontend data integration  
✔ Real-time slot availability display  
✔ Clean, responsive slot grid UI  

---

## API Endpoints Summary

### Authentication
- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Login user

### Slots
- `GET /api/slots/all` – Fetch all parking slots

---

## How to Run the Project

### Backend
```bash
cd backend
npm install
node server.js

Server runs on:
👉 http://localhost:5000

