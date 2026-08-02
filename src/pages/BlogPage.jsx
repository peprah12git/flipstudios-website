import Navbar from '../components/Navbar'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import {
  ArrowRightIcon,
  WrenchIcon,
  ShieldIcon,
  DevicesIcon,
  SparkleIcon,
  TrendingUpIcon,
} from '../components/Icons'
import { PlaceholderThumb } from '../components/PlaceholderThumb'
import { BrowserFrame } from '../components/BrowserFrame'
import { Reveal, RevealItem } from '../components/Reveal'
import './BlogPage.css'

const CATEGORY_ICONS = {
  Engineering: WrenchIcon,
  Security: ShieldIcon,
  Product: DevicesIcon,
  AI: SparkleIcon,
  'Case Study': TrendingUpIcon,
}

const POSTS = [
  {
    title: 'Why performance budgets matter more than frameworks',
    category: 'Engineering',
    date: 'Jun 12, 2026',
    lead: 'Choosing React, Next.js or Qt matters less than the discipline you build around load time. Here is how we set and enforce ',
    bold: 'performance budgets',
    tail: ' on every build.',
  },
  {
    title: 'Designing for trust: security patterns users actually feel',
    category: 'Security',
    date: 'May 28, 2026',
    lead: 'Enterprise-grade security is invisible when done right. We break down the auth, session and data-handling patterns that keep products ',
    bold: 'safe without slowing users down',
    tail: '.',
  },
  {
    title: 'Shipping cross-platform apps without duplicating logic',
    category: 'Product',
    date: 'May 9, 2026',
    lead: 'How our teams share ',
    bold: 'a single source of truth',
    tail: ' across web, mobile and desktop builds, using Flutter and a unified API layer to stay in sync.',
  },
  {
    title: 'AI-driven features that customers actually adopt',
    category: 'AI',
    date: 'Apr 21, 2026',
    lead: 'Most AI features get ignored. We walk through the framework we use to decide which AI-powered capabilities are ',
    bold: 'worth building into a product roadmap',
    tail: '.',
  },
  {
    title: 'A fintech case study: from prototype to production in 28 days',
    category: 'Case Study',
    date: 'Apr 3, 2026',
    lead: 'A behind-the-scenes look at how we scoped, designed and deployed a full fintech application for a client ',
    bold: 'on our fastest delivery track',
    tail: '.',
  },
  {
    title: 'Scaling without a rewrite: our approach to future-proof systems',
    category: 'Engineering',
    date: 'Mar 15, 2026',
    lead: 'Rewrites are expensive and risky. Here is how we architect systems so they can ',
    bold: 'scale ten times over',
    tail: ' without a ground-up rebuild.',
  },
]

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 40)
}

const [FEATURED, ...REST] = POSTS
const FeaturedIcon = CATEGORY_ICONS[FEATURED.category]

function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="blog-hero bg-dot-grid">
          <Reveal className="container blog-hero__content">
            <RevealItem as="span" className="eyebrow">
              Blog
            </RevealItem>
            <RevealItem as="h1">Insights &amp; updates from FlipStudios</RevealItem>
            <RevealItem as="p">
              Perspectives on software engineering, design and digital
              transformation from the team building your next product.
            </RevealItem>
          </Reveal>
        </section>

        <section className="blog-featured">
          <div className="container">
            <Reveal as="article" className="blog-featured__row">
              <RevealItem className="blog-featured__frame-wrap">
                <BrowserFrame
                  url={`flipstudios.com/blog/${slugify(FEATURED.title)}`}
                  className="blog-featured__frame"
                >
                  <PlaceholderThumb
                    icon={CATEGORY_ICONS[FEATURED.category]}
                    iconSize={72}
                    index={0}
                    className="blog-featured__thumb"
                  />
                </BrowserFrame>
              </RevealItem>

              <RevealItem className="blog-featured__text">
                <span className="eyebrow">Featured</span>
                <div className="blog-card__meta">
                  <span className="blog-card__tag">
                    <FeaturedIcon width={12} height={12} />
                    {FEATURED.category}
                  </span>
                  <span>{FEATURED.date}</span>
                </div>
                <h2>{FEATURED.title}</h2>
                <p>
                  {FEATURED.lead}
                  <strong>{FEATURED.bold}</strong>
                  {FEATURED.tail}
                </p>
                <a href="#" className="blog-card__link">
                  Read article <ArrowRightIcon width={16} height={16} />
                </a>
              </RevealItem>
            </Reveal>
          </div>
        </section>

        <section className="blog-list">
          <div className="container">
            <div className="blog-list__header">
              <span className="eyebrow">More Articles</span>
              <h2 className="section-heading">Recent from the team</h2>
            </div>

            <Reveal className="blog-grid">
              {REST.map((post, i) => {
                const CategoryIcon = CATEGORY_ICONS[post.category]
                return (
                  <RevealItem as="article" className="blog-card" key={post.title}>
                    <div className="blog-card__thumb-frame">
                      <PlaceholderThumb
                        icon={CategoryIcon}
                        index={i}
                        className="blog-card__thumb"
                      />
                    </div>
                    <div className="blog-card__meta">
                      <span className="blog-card__tag">
                        <CategoryIcon width={12} height={12} />
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>
                      {post.lead}
                      <strong>{post.bold}</strong>
                      {post.tail}
                    </p>
                    <a href="#" className="blog-card__link">
                      Read article <ArrowRightIcon width={16} height={16} />
                    </a>
                  </RevealItem>
                )
              })}
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default BlogPage
