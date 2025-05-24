# Karagöz - AI Developer Portfolio

A modern, cyberpunk-themed portfolio website built with Next.js, featuring AI-focused content and cutting-edge web technologies.

## 🚀 Features

### 🎨 Design & UI
- **Cyberpunk Theme**: Futuristic design with neon colors and glass morphism effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Advanced Animations**: Framer Motion powered animations and interactions
- **Neural Network Backgrounds**: Dynamic particle systems and animated patterns
- **TiltCard Components**: 3D hover effects with optimized performance

### 📝 Blog System
- **MDX Support**: Write blog posts in Markdown with React components
- **Syntax Highlighting**: Code blocks with rehype-highlight
- **Table of Contents**: Auto-generated with rehype-slug and rehype-autolink-headings
- **Reading Time**: Automatic calculation for each post
- **Tags & Categories**: Organized content with filtering capabilities
- **Featured Posts**: Highlight important articles

### 🤖 AI Integration Ready
- **TensorFlow.js Examples**: Neural network implementations in the browser
- **AI Content**: Technical articles about machine learning and AI development
- **Future Admin Panel**: Prepared structure for next-auth and Firebase/Supabase integration

### 📄 Professional Features
- **CV Download**: PDF download functionality for resume
- **Contact Form**: Professional contact page with animations
- **Projects Showcase**: Interactive project gallery with filtering
- **404 Page**: Custom error page with video background support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.8 with App Router
- **Styling**: Tailwind CSS with custom cyberpunk theme
- **Animations**: Framer Motion for advanced interactions
- **Content**: MDX for blog posts with custom components
- **Icons**: React Icons (Feather Icons, Font Awesome)
- **Particles**: @tsparticles/react for background effects
- **TypeScript**: Full type safety throughout the application

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fatihburakkaragoz/karagoz.git
   cd karagoz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Blog Content Management

### Adding New Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   excerpt: "Brief description of the post"
   date: "2024-01-15"
   tags: ["AI", "Web Development", "Tutorial"]
   featured: true
   author: "Fatih Burak Karagöz"
   readTime: "8 min read"
   ---
   ```

3. Write your content using Markdown and React components

### Custom MDX Components

The blog supports custom styled components:
- **Headings**: Auto-styled with cyberpunk theme
- **Code Blocks**: Syntax highlighting with custom styling
- **Links**: Hover effects and proper routing
- **Images**: Optimized with Next.js Image component
- **Tables**: Responsive design with cyberpunk styling

## 🎯 Performance Optimizations

### TiltCard Component
- Reduced tilt angles from 15° to 8° for stability
- Added spring damping for smoother animations
- Implemented bounds checking to prevent extreme values
- Added `will-change-transform` for GPU acceleration

### Animation Improvements
- Optimized hover effects with shorter durations
- Reduced scale effects for professional appearance
- Implemented proper cleanup for memory management
- Added `backfaceVisibility: hidden` for better rendering

### Memory Management
- Proper tensor disposal in TensorFlow.js examples
- Optimized particle systems for better performance
- Efficient re-renders with React best practices

## 🔧 Configuration

### Next.js Config
The project uses custom Next.js configuration for MDX support:
- **MDX Plugins**: remark-gfm, rehype-highlight, rehype-slug
- **Page Extensions**: Supports .md, .mdx, .ts, .tsx files
- **Image Optimization**: Configured for external domains

### Tailwind Config
Custom cyberpunk theme with:
- **Colors**: Cyan, blue, and purple gradients
- **Animations**: Custom keyframes for neural effects
- **Typography**: Optimized for readability and aesthetics

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layouts for medium screens
- **Desktop**: Full-featured experience with advanced animations
- **Touch Devices**: Proper touch interactions and hover states

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel --prod
```

### Environment Variables
Required for full functionality:
- `NEXT_PUBLIC_SITE_URL`: Your site URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

## 🔮 Future Enhancements

### Admin Panel Integration
- **Authentication**: next-auth setup ready
- **Database**: Firebase/Supabase integration prepared
- **Content Management**: Dynamic blog post creation
- **Analytics**: Advanced visitor tracking

### AI Features
- **Real-time Demos**: Interactive ML model demonstrations
- **Code Generation**: AI-powered code examples
- **Content Suggestions**: Intelligent content recommendations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Fatih Burak Karagöz**
- AI Developer & Full-Stack Engineer
- Email: fatih@karagoz.io
- LinkedIn: [fatihburakkaragoz](https://linkedin.com/in/fatihburakkaragoz)
- GitHub: [fatihburakkaragoz](https://github.com/fatihburakkaragoz)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/fatihburakkaragoz/karagoz/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

*Built with ❤️ and cutting-edge technology*
