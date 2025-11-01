# Render Deployment Guide

## Quick Deploy to Render

### Option 1: One-Click Deploy (Recommended)
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Use these settings:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`

### Option 2: Using render.yaml
1. Push code to GitHub with the `render.yaml` file
2. Go to Render Dashboard
3. Click "New +" → "Blueprint"
4. Connect your repository

## Environment Variables
Add these in Render Dashboard:
- `NODE_ENV`: `production`
- `MONGODB_URI`: Your MongoDB connection string

## MongoDB Options
1. **MongoDB Atlas** (Free): https://cloud.mongodb.com
2. **Render PostgreSQL**: Alternative database option

## URLs After Deployment
- Your app will be available at: `https://your-app-name.onrender.com`
- API endpoints: `https://your-app-name.onrender.com/api/contacts`

## Cost
- Web Service: Free tier available (sleeps after 15min inactivity)
- Database: MongoDB Atlas free tier or Render PostgreSQL