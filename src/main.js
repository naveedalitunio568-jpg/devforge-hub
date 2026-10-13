import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar reveal">
      <div class="brand-wrap">
        <div class="brand-mark">D</div>
        <span>DevForge</span>
      </div>
      <nav class="main-nav">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="nav-actions">
        <button class="ghost-btn">Log in</button>
        <button class="primary-btn">Create profile</button>
      </div>
    </header>

    <main>
      <section class="hero section">
        <div class="hero-copy reveal">
          <span class="eyebrow">AI-powered portfolio engine</span>
          <h1>Build a developer profile that gets noticed.</h1>
          <p>
            Launch a polished portfolio, generate a standout CV, and use AI to turn your work into opportunities.
          </p>
          <div class="cta-row">
            <button class="primary-btn">Create Your Profile</button>
            <button class="secondary-btn">Explore Developers</button>
          </div>
          <div class="social-proof">
            <div>
              <strong>12k+</strong>
              <span>developer profiles</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </div>
            <div>
              <strong>31%</strong>
              <span>more profile views</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal" aria-label="DevForge dashboard preview">
          <div class="hero-scene" aria-hidden="true">
            <canvas id="hero-canvas"></canvas>
          </div>
          <div class="orb orb-one"></div>
          <div class="orb orb-two"></div>

          <div class="floating-panel panel-main">
            <div class="panel-topbar">
              <span class="dot red"></span>
              <span class="dot amber"></span>
              <span class="dot green"></span>
            </div>

            <div class="panel-content">
              <div class="mini-header">
                <div>
                  <p class="label">Portfolio score</p>
                  <h3>92%</h3>
                </div>
                <span class="pill success">+18% this month</span>
              </div>

              <div class="analytics-grid">
                <div class="metric-card metric-one">
                  <span>Profile views</span>
                  <strong>22.4k</strong>
                </div>
                <div class="metric-card metric-two">
                  <span>CV downloads</span>
                  <strong>1,286</strong>
                </div>
                <div class="metric-card metric-three">
                  <span>AI score</span>
                  <strong>9.7/10</strong>
                </div>
              </div>

              <div class="progress-row">
                <div class="progress-labels">
                  <span>Profile completion</span>
                  <span>86%</span>
                </div>
                <div class="progress-bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div class="floating-panel panel-ghost panel-side-left">
            <div class="avatar-block">
              <div class="avatar-ring"></div>
              <div class="avatar-core"></div>
            </div>
            <div class="mini-copy">
              <strong>Jade Kim</strong>
              <span>Full-Stack Engineer</span>
            </div>
          </div>

          <div class="floating-panel panel-ghost panel-side-right">
            <span class="tiny-label">AI headline</span>
            <h4>Senior Product Engineer leading AI-powered systems.</h4>
          </div>
        </div>
      </section>

      <section class="trusted-strip reveal">
        <span>Trusted by product teams, agencies, and independent developers</span>
        <div class="logo-row">
          <span>Vercel</span>
          <span>GitHub</span>
          <span>Stripe</span>
          <span>Notion</span>
          <span>Linear</span>
        </div>
      </section>

      <section class="features section" id="features">
        <div class="section-heading reveal">
          <span class="eyebrow">Why DevForge</span>
          <h2>Everything you need to sell your work.</h2>
        </div>

        <div class="feature-grid">
          <article class="feature-card reveal">
            <div class="icon-wrap cyan">✦</div>
            <h3>Portfolio Builder</h3>
            <p>Turn raw projects into a premium developer portfolio that feels like a product launch.</p>
          </article>

          <article class="feature-card reveal">
            <div class="icon-wrap purple">◎</div>
            <h3>CV Studio</h3>
            <p>Generate job-ready CV sections with clean structure, ATS-friendly copy, and live previews.</p>
          </article>

          <article class="feature-card reveal">
            <div class="icon-wrap green">✧</div>
            <h3>AI Assistant</h3>
            <p>Improve bios, projects, headlines, and bullet points from your own facts—without fluff.</p>
          </article>

          <article class="feature-card reveal">
            <div class="icon-wrap orange">▣</div>
            <h3>Analytics</h3>
            <p>Track who views your work, downloads your CV, and engages with your profile.</p>
          </article>
        </div>
      </section>

      <section class="workflow section" id="workflow">
        <div class="section-heading reveal">
          <span class="eyebrow">How it works</span>
          <h2>Three steps to a standout profile.</h2>
        </div>

        <div class="workflow-grid">
          <article class="workflow-card reveal">
            <span class="step-number">01</span>
            <h3>Create</h3>
            <p>Build your profile with projects, skills, services, and a polished bio designed for credibility.</p>
          </article>
          <article class="workflow-card reveal">
            <span class="step-number">02</span>
            <h3>Improve</h3>
            <p>Use AI to sharpen hire-ready copy, reposition experience, and highlight achievements clearly.</p>
          </article>
          <article class="workflow-card reveal">
            <span class="step-number">03</span>
            <h3>Share</h3>
            <p>Publish your public profile, share your CV, and attract clients, teams, and recruiters.</p>
          </article>
        </div>
      </section>

      <section class="showcase section reveal">
        <div class="showcase-copy">
          <span class="eyebrow">Developer-first experience</span>
          <h2>Designed to look premium, work fast, and convert attention into opportunity.</h2>
          <ul>
            <li>Smart profile recommendations that keep your work relevant.</li>
            <li>Public profile URLs, contact forms, and downloadable CVs.</li>
            <li>Dashboard analytics that reveal what’s resonating with clients.</li>
          </ul>
        </div>

        <div class="showcase-stack">
          <div class="showcase-card card-top">
            <span class="badge">Featured project</span>
            <h4>AI Workflow Studio</h4>
            <p>Reduced onboarding friction by 38% with a multi-step optimization system.</p>
            <div class="tag-row">
              <span>Next.js</span>
              <span>Node</span>
              <span>AI</span>
            </div>
          </div>
          <div class="showcase-card card-bottom">
            <div class="mini-stat">
              <span>Open to freelance</span>
              <strong>Available now</strong>
            </div>
            <div class="mini-stat">
              <span>Specialty</span>
              <strong>Product & SaaS</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials section">
        <div class="section-heading reveal">
          <span class="eyebrow">Loved by builders</span>
          <h2>Real feedback from developers shipping real work.</h2>
        </div>

        <div class="testimonial-grid">
          <article class="quote-card reveal">
            <p>“I landed 3 client inquiries in my first month after rebuilding my profile with DevForge.”</p>
            <div class="person">
              <span class="person-avatar a1"></span>
              <div>
                <strong>Amir R.</strong>
                <small>Frontend Engineer</small>
              </div>
            </div>
          </article>
          <article class="quote-card reveal">
            <p>“The AI suggestions were genuinely useful. It helped me describe projects like a senior product engineer.”</p>
            <div class="person">
              <span class="person-avatar a2"></span>
              <div>
                <strong>Tara L.</strong>
                <small>Product Designer</small>
              </div>
            </div>
          </article>
          <article class="quote-card reveal">
            <p>“The CV builder is the cleanest one I’ve used. It feels tailored for technical roles and recruiters.”</p>
            <div class="person">
              <span class="person-avatar a3"></span>
              <div>
                <strong>Marco D.</strong>
                <small>Platform Engineer</small>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="pricing section" id="pricing">
        <div class="section-heading reveal">
          <span class="eyebrow">Simple pricing</span>
          <h2>Start free, upgrade when your profile grows.</h2>
        </div>

        <div class="pricing-grid">
          <article class="pricing-card reveal">
            <span class="plan">Starter</span>
            <h3>$0</h3>
            <p>For developers validating their personal brand.</p>
            <ul>
              <li>Portfolio profile</li>
              <li>Basic skills & projects</li>
              <li>1 AI enhancement pack</li>
            </ul>
            <button class="secondary-btn full">Try free</button>
          </article>

          <article class="pricing-card featured reveal">
            <span class="plan">Pro</span>
            <h3>$29<span>/mo</span></h3>
            <p>For freelancers and product builders ready to convert opportunities.</p>
            <ul>
              <li>Custom public profile</li>
              <li>Advanced CV builder</li>
              <li>Unlimited AI improvements</li>
            </ul>
            <button class="primary-btn full">Get started</button>
          </article>

          <article class="pricing-card reveal">
            <span class="plan">Team</span>
            <h3>$79<span>/mo</span></h3>
            <p>For agencies and small tech teams showcasing multiple experts.</p>
            <ul>
              <li>Multiple portfolios</li>
              <li>Team analytics</li>
              <li>Priority support</li>
            </ul>
            <button class="secondary-btn full">Talk to sales</button>
          </article>
        </div>
      </section>

      <section class="faq section" id="faq">
        <div class="section-heading reveal">
          <span class="eyebrow">FAQ</span>
          <h2>Questions people ask before they launch.</h2>
        </div>

        <div class="faq-list reveal">
          <div class="faq-item active">
            <button type="button">What does DevForge include?<span>+</span></button>
            <div class="faq-answer">
              <p>Developer portfolio creation, AI-enhanced CV writing, analytics, public profile publishing, and secure account management.</p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button">Can I customize my public URL?<span>+</span></button>
            <div class="faq-answer">
              <p>Yes. Each profile gets a custom developer page like /u/yourname with SEO metadata and shareable links.</p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button">Is my data secure?<span>+</span></button>
            <div class="faq-answer">
              <p>We use secure auth patterns, role-based access, input validation, and environment-controlled secrets for production deployment.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta section reveal">
        <div>
          <span class="eyebrow">Ready to ship?</span>
          <h2>Build your next opportunity with DevForge.</h2>
        </div>
        <button class="primary-btn">Create Your Profile</button>
      </section>
    </main>

    <footer class="footer reveal">
      <div class="brand-wrap">
        <div class="brand-mark">D</div>
        <span>DevForge</span>
      </div>
      <div class="footer-links">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#pricing">Pricing</a>
      </div>
      <span class="copyright">© 2026 DevForge</span>
    </footer>
  </div>
`

function initHeroScene(THREE) {
  const visual = document.querySelector('.hero-visual')
  const canvas = document.querySelector('#hero-canvas')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (!visual || !canvas) return

  let renderer

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    })
  } catch (error) {
    console.warn('Three.js hero scene could not initialize; keeping the dashboard preview.', error)
    return
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.z = 8
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))

  scene.add(new THREE.AmbientLight(0x9dcaff, 1.8))

  const cyanLight = new THREE.PointLight(0x62d8ff, 36, 8)
  cyanLight.position.set(-2, 2, 3)
  scene.add(cyanLight)

  const violetLight = new THREE.PointLight(0x9b7bff, 30, 8)
  violetLight.position.set(2, -1, 2)
  scene.add(violetLight)

  const system = new THREE.Group()
  scene.add(system)

  const coreGeometry = new THREE.IcosahedronGeometry(0.92, 2)
  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1b506f,
    emissive: 0x10445d,
    metalness: 0.48,
    roughness: 0.3,
    clearcoat: 0.7,
    flatShading: true,
  })
  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  system.add(core)

  const wireframe = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.08, 1),
    new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      wireframe: true,
      transparent: true,
      opacity: 0.86,
    }),
  )
  system.add(wireframe)

  const ringColors = [0x7dd3fc, 0xb794f4, 0x6ee7b7]
  const ringRotations = [
    [0.8, 0.2, 0.1],
    [1.3, 0.9, 0.4],
    [0.3, 1.2, 0.9],
  ]

  const rings = ringColors.map((color, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.48 + index * 0.12, 0.009, 8, 120),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.8 - index * 0.12,
      }),
    )
    ring.rotation.set(...ringRotations[index])
    system.add(ring)
    return ring
  })

  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xb8f2ff })
  const nodeGeometry = new THREE.SphereGeometry(0.035, 10, 10)
  for (let index = 0; index < 16; index += 1) {
    const angle = index * Math.PI * (3 - Math.sqrt(5))
    const vertical = 1 - ((index / 15) * 2)
    const radius = Math.sqrt(1 - vertical * vertical)
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
    node.position.set(
      Math.cos(angle) * radius * 1.48,
      vertical * 1.48,
      Math.sin(angle) * radius * 1.48,
    )
    system.add(node)
  }

  const starPositions = new Float32Array(210 * 3)
  for (let index = 0; index < 210; index += 1) {
    const offset = index * 3
    starPositions[offset] = (Math.random() - 0.5) * 7
    starPositions[offset + 1] = (Math.random() - 0.5) * 6
    starPositions[offset + 2] = (Math.random() - 0.5) * 3
  }
  const starsGeometry = new THREE.BufferGeometry()
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  const stars = new THREE.Points(
    starsGeometry,
    new THREE.PointsMaterial({
      color: 0xb6ddff,
      size: 0.018,
      transparent: true,
      opacity: 0.62,
      sizeAttenuation: true,
    }),
  )
  scene.add(stars)

  const pointer = new THREE.Vector2()
  const targetRotation = new THREE.Vector2()
  const timer = new THREE.Timer()
  timer.connect(document)
  let animationFrame = 0
  let inView = false

  const render = (timestamp) => {
    animationFrame = 0
    if (!inView || reducedMotion.matches || document.hidden) return

    timer.update(timestamp)
    const elapsed = timer.getElapsed()
    system.rotation.y += (targetRotation.x + elapsed * 0.045 - system.rotation.y) * 0.025
    system.rotation.x += (targetRotation.y - system.rotation.x) * 0.025
    core.rotation.y = elapsed * 0.08
    wireframe.rotation.y = -elapsed * 0.035
    rings.forEach((ring, index) => {
      ring.rotation.z += 0.0015 * (index + 1)
    })
    stars.rotation.y = elapsed * 0.008

    renderer.render(scene, camera)
    animationFrame = window.requestAnimationFrame(render)
  }

  const startAnimation = () => {
    if (!animationFrame && inView && !reducedMotion.matches && !document.hidden) {
      timer.reset()
      animationFrame = window.requestAnimationFrame(render)
    }
  }

  const resizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect
    if (!width || !height) return

    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    system.position.set(width < 620 ? 0.08 : 2.1, 0.06, 0)
    system.scale.setScalar(width < 620 ? 0.84 : 1.2)
    renderer.render(scene, camera)
    startAnimation()
  })
  resizeObserver.observe(visual)

  visual.addEventListener('pointermove', (event) => {
    const bounds = visual.getBoundingClientRect()
    pointer.set(
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      ((event.clientY - bounds.top) / bounds.height) * 2 - 1,
    )
    targetRotation.set(pointer.x * 0.24, pointer.y * 0.18)
  })
  visual.addEventListener('pointerleave', () => targetRotation.set(0, 0))

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting
    if (inView) {
      startAnimation()
    } else if (animationFrame) {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
    }
  })
  visibilityObserver.observe(visual)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationFrame) {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
    } else {
      startAnimation()
    }
  })

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches && animationFrame) {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
      renderer.render(scene, camera)
    } else {
      startAnimation()
    }
  })
}

import('./three-runtime.js')
  .then(({ THREE }) => initHeroScene(THREE))
  .catch((error) => {
    console.warn('Three.js could not be loaded; keeping the dashboard preview.', error)
  })

const faqItems = document.querySelectorAll('.faq-item')
faqItems.forEach((item) => {
  const button = item.querySelector('button')
  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('active')
    faqItems.forEach((faqItem) => { faqItem.classList.remove('active') })

    if (!isOpen) {
      item.classList.add('active')
    }
  })
})

const tiltCards = document.querySelectorAll('.feature-card, .workflow-card, .pricing-card, .quote-card, .floating-panel')
const desktopTilt = window.matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')

tiltCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (!desktopTilt.matches || event.pointerType !== 'mouse') return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 18
    const rotateX = (0.5 - (y / rect.height)) * 18

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.25,
      transformPerspective: 1200,
      ease: 'power2.out',
    })
  })

  card.addEventListener('pointerleave', () => {
    if (!desktopTilt.matches) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  })
})

desktopTilt.addEventListener('change', ({ matches }) => {
  if (!matches) {
    gsap.set(tiltCards, { rotateX: 0, rotateY: 0 })
  }
})

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.set('.reveal', { opacity: 1, y: 0 })
} else {
  gsap.from('.topbar, .hero-copy, .hero-visual', {
    opacity: 0,
    y: 28,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
  })

  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
        },
      },
    )
  })

  gsap.to('.orb-one', {
    y: -18,
    x: 14,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to('.orb-two', {
    y: 16,
    x: -12,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}
