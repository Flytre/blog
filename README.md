# Personal Blog

A modern, responsive blog built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 📝 **Markdown-based content** management
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with metadata
- 🏷️ **Category and tag** system
- ⚡ **Static site generation** for fast loading
- 🎯 **TypeScript** for type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Individual blog posts
│   │   └── category/      # Category pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── content/               # Markdown content
│   └── posts/            # Blog post markdown files
├── lib/                   # Utility functions
│   └── posts.ts          # Post management functions
└── public/               # Static assets
```

## Adding New Posts

1. Create a new markdown file in `content/posts/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
category: "Technology"
tags: ["tag1", "tag2"]
---

# Your Post Content

Write your post content here in markdown...
```

3. The post will automatically appear on your blog!

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component files for specific styling changes

### Content
- Update `app/layout.tsx` for site metadata
- Modify `app/about/page.tsx` for your about page
- Edit `components/Navigation.tsx` for navigation changes

### Configuration
- Update `next.config.js` for Next.js configuration
- Modify `package.json` for dependencies and scripts

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The site can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting service

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [Remark](https://remark.js.org/) - Markdown processing

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Happy blogging! 🎉
