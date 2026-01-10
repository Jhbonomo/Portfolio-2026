# Portfolio 2026 - Full Stack Application

A modern, responsive portfolio website built with React and Node.js. Features a beautiful UI with animations, a contact form, and showcases your projects and skills.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Nodemailer** - Email service
- **CORS** - Cross-origin support

## 📁 Project Structure

```
Portfolio-2026-V2/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── assets/          # Styles and static files
│   │   ├── data/            # Project data
│   │   ├── types/           # TypeScript types
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/                  # Node.js backend
│   ├── src/
│   │   ├── routes/          # API routes
│   │   │   └── contact.ts
│   │   └── server.ts        # Express server
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── package.json              # Root package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or manually:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cd backend
   cp .env.example .env
   ```

   Edit `.env` with your email configuration:
   ```env
   PORT=5000
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your.email@gmail.com
   ```

   **Note:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833).

## 🚀 Running the Application

### Development Mode

**Run both frontend and backend together:**
```bash
npm run dev
```

**Or run them separately:**

Frontend (runs on http://localhost:3000):
```bash
npm run dev:frontend
```

Backend (runs on http://localhost:5000):
```bash
npm run dev:backend
```

### Production Build

Build the frontend:
```bash
npm run build
```

## 📝 Customization

### 1. Personal Information

Update the following files with your information:

- **[frontend/src/components/Hero.tsx](frontend/src/components/Hero.tsx)** - Your name and title
- **[frontend/src/components/About.tsx](frontend/src/components/About.tsx)** - About section
- **[frontend/src/components/Contact.tsx](frontend/src/components/Contact.tsx)** - Contact details
- **[frontend/src/components/Footer.tsx](frontend/src/components/Footer.tsx)** - Social links

### 2. Projects

Edit **[frontend/src/data/projects.ts](frontend/src/data/projects.ts)** to add your projects:

```typescript
{
  id: 1,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  imageUrl: '/projects/image.jpg',
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...'
}
```

### 3. Skills

Update skills in **[frontend/src/components/Skills.tsx](frontend/src/components/Skills.tsx)**:

```typescript
const skillsData: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  // Add more skills...
];
```

### 4. Styling

- **Colors:** Edit CSS variables in [frontend/src/assets/styles/global.css](frontend/src/assets/styles/global.css)
- **Component styles:** Each component has its own CSS file

## 📧 Contact Form

The contact form sends emails using Nodemailer. Make sure to:
1. Configure your email credentials in `backend/.env`
2. For Gmail, enable 2FA and create an App Password
3. Test the form in development mode

## 🎨 Features

- ✨ Modern, responsive design
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-friendly navigation
- 📬 Working contact form
- 🎯 TypeScript for type safety
- ⚡ Fast development with Vite
- 🔄 Hot module replacement
- 📊 Skills visualization with progress bars

## 📦 Deployment

### Frontend (Vercel/Netlify)

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### Backend (Heroku/Railway/Render)

1. Push to your git repository
2. Connect to your hosting service
3. Set environment variables
4. Deploy

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this project for your portfolio.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for 2026.
