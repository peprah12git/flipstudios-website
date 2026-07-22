import Navbar from '../components/Navbar'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { ArrowRightIcon } from '../components/Icons'
import './BlogPage.css'

const POSTS = [
  {
    title: 'Why performance budgets matter more than frameworks',
    category: 'Engineering',
    date: 'Jun 12, 2026',
    excerpt:
      'Choosing React, Next.js or Qt matters less than the discipline you build around load time. Here is how we set and enforce performance budgets on every build.',
    gradient: 'linear-gradient(135deg, #f4d35e 0%, #8a5a2b 60%, #2b1d0e 100%)',
  },
  {
    title: 'Designing for trust: security patterns users actually feel',
    category: 'Security',
    date: 'May 28, 2026',
    excerpt:
      'Enterprise-grade security is invisible when done right. We break down the auth, session and data-handling patterns that keep products safe without slowing users down.',
    gradient: 'linear-gradient(135deg, #6b7280 0%, #374151 60%, #111827 100%)',
  },
  {
    title: 'Shipping cross-platform apps without duplicating logic',
    category: 'Product',
    date: 'May 9, 2026',
    excerpt:
      'How our teams share a single source of truth across web, mobile and desktop builds, using Flutter and a unified API layer to stay in sync.',
    gradient: 'linear-gradient(135deg, #22314f 0%, #1a2a52 50%, #0e3b52 100%)',
  },
  {
    title: 'AI-driven features that customers actually adopt',
    category: 'AI',
    date: 'Apr 21, 2026',
    excerpt:
      'Most AI features get ignored. We walk through the framework we use to decide which AI-powered capabilities are worth building into a product roadmap.',
    gradient: 'linear-gradient(135deg, #7c5cff 0%, #3d2a85 55%, #1a1338 100%)',
  },
  {
    title: 'A fintech case study: from prototype to production in 28 days',
    category: 'Case Study',
    date: 'Apr 3, 2026',
    excerpt:
      'A behind-the-scenes look at how we scoped, designed and deployed a full fintech application for a client on our fastest delivery track.',
    gradient: 'linear-gradient(135deg, #2fbf8f 0%, #1c6e56 55%, #0d3329 100%)',
  },
  {
    title: 'Scaling without a rewrite: our approach to future-proof systems',
    category: 'Engineering',
    date: 'Mar 15, 2026',
    excerpt:
      'Rewrites are expensive and risky. Here is how we architect systems so they can scale ten times over without a ground-up rebuild.',
    gradient: 'linear-gradient(135deg, #e3f27a 0%, #8ea341 55%, #2b3315 100%)',
  },
]

function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="blog-hero">
          <div className="container blog-hero__content">
            <span className="eyebrow">Blog</span>
            <h1>Insights &amp; updates from FlipStudios</h1>
            <p>
              Perspectives on software engineering, design and digital
              transformation from the team building your next product.
            </p>
          </div>
        </section>

        <section className="blog-list">
          <div className="container">
            <div className="blog-grid">
              {POSTS.map((post) => (
                <article className="blog-card" key={post.title}>
                  <div className="blog-card__thumb" style={{ background: post.gradient }} />
                  <div className="blog-card__meta">
                    <span className="blog-card__tag">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="blog-card__link">
                    Read article <ArrowRightIcon width={16} height={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default BlogPage
