# Student Directory Portal

A React app showcasing a student directory with reusable components, nested skill lists, and conditional rendering, built with Vite.

## Components
- **StudentCard**: Reusable component displaying student information with nested skill lists and status badges.

## Links
- **GitHub Repository:** [your-github-link]
- **Live Website:** [your-deployment-link]

## Run Locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` (then open http://localhost:5173)

## Deployment
Deploy on Vercel or Netlify by connecting the GitHub repository. Build command: `npm run build`, Publish directory: `dist`.

## Notes
- Each student card uses a unique `key` (rollNumber)
- Skills are rendered using `map()` inside `StudentCard`
- Active/inactive status rendered conditionally
