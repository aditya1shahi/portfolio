# Portfolio Website - Full Stack Setup

Your portfolio has been transformed into a full-stack application with MongoDB backend, modern dark theme, smooth animations, and animated SVG graphics!

## ✨ What's New

✅ **Backend API** - Express.js server to store contact messages  
✅ **Database** - MongoDB Atlas cloud integration  
✅ **Modern Dark Theme** - Vibrant purples, blues, greens, and pinks  
✅ **Smooth Animations** - Scroll animations, parallax effects, and page transitions  
✅ **Animated SVG Graphics** - Custom animated icons for each project  
✅ **Enhanced Form** - Real-time validation and error handling  

## 🚀 Quick Start Guide

### Step 1: Set Up MongoDB Atlas

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new **Free** cluster (M0)
4. Click **Connect** and select "Connect your application"
5. Copy your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`)

### Step 2: Update `.env` File

1. Open the `.env` file in the project root
2. Replace the placeholder with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5000
   ```
3. Save the file

### Step 3: Start the Server

In the project directory, run:
```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║  🚀 Portfolio Server Running           ║
║  📍 http://localhost:5000              ║
║  📧 Messages will be stored in MongoDB  ║
╚════════════════════════════════════════╝
```

### Step 4: Open Your Portfolio

Open your browser and go to:
```
http://localhost:5000
```

## 🎨 Features

### Dark Modern Theme
- Deep blue-black background (#0a0e27)
- Vibrant accent colors:
  - Purple (#7c3aed)
  - Electric Blue (#06b6d4)
  - Neon Green (#10b981)
  - Coral Pink (#f97316)

### Animations
- **Scroll Animations** - Elements fade in as you scroll
- **Parallax Effect** - Hero background moves with scroll
- **SVG Animations**:
  - Shopping cart bounces (E-Commerce)
  - Checkmarks appear (Task Management)
  - Weather effects animate (Weather Dashboard)
  - Pen writes continuously (Blog Platform)
- **Hover Effects** - Smooth transitions on all interactive elements

### Contact Form
- Real-time validation
- Sends messages to MongoDB
- Error handling for network issues
- Success/error messages
- Auto-clears after submission

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── portfolio.html        (Frontend with SVG graphics)
│   ├── portfolio.css         (Modern dark theme + animations)
│   └── portfolio.js          (Form handling + scroll effects)
├── server.js                 (Express backend)
├── package.json              (Dependencies)
├── .env                      (MongoDB credentials)
└── .gitignore               (Never commit .env)
```

## 🔧 API Endpoints

### POST /api/messages
Submit a contact form message
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

### GET /api/messages
Retrieve all stored messages (optional - for admin use)

## 🛑 Troubleshooting

**Error: "Connection refused"**
- Make sure MongoDB URI is correct in `.env`
- Check if MongoDB Atlas cluster is active
- Wait a few seconds and retry

**Error: "Cannot find module 'express'"**
- Run `npm install` to install dependencies

**Form not sending messages**
- Check browser console (F12) for errors
- Ensure server is running (`npm start`)
- Verify `.env` file exists and has correct MongoDB URI

**Animations not showing**
- Scroll down the page to trigger animations
- Check browser console for JavaScript errors

## 📝 Environment Variables

The `.env` file should never be committed to version control. It contains sensitive credentials.

## 🎯 Next Steps

1. Customize the project links to point to real projects
2. Update social media links
3. Add your actual email and contact details
4. Deploy to a hosting service (Heroku, Vercel, Railway, etc.)
5. Set up a custom domain

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Atlas Guide](https://www.mongodb.com/docs/atlas/)
- [SVG Animation Guide](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

**Enjoy your new modern portfolio! 🚀**
