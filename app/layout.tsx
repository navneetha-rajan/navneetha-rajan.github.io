import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navneetha Rajan - Backend Engineer | Distributed Systems | Hackathon Winner',
  description: 'Backend engineer with 3 years of production experience at SIXT and 5 hackathon wins. Building distributed systems at scale.',
  keywords: [
    'Navneetha Rajan', 'Software Engineer', 'Backend Developer',
    'Distributed Systems', 'Microservices', 'AWS', 'Java', 'Spring Boot',
    'Python', 'Kafka', 'Kubernetes', 'FastAPI', 'Docker',
    'Arizona State University', 'SIXT', 'Hackathon Winner',
  ],
  authors: [{ name: 'Navneetha Rajan', url: 'https://github.com/navneetha-rajan' }],
  creator: 'Navneetha Rajan',
  publisher: 'Navneetha Rajan',
  category: 'Technology',
  classification: 'Software Development',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
  manifest: '/manifest.json',
  metadataBase: new URL('https://navneetha-rajan.github.io'),
  alternates: { canonical: 'https://navneetha-rajan.github.io/', languages: { 'en-US': '/en-US' } },
  robots: {
    index: true, follow: true, nocache: false,
    googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: '0wv6E1R30LY0sfflwgR1azAYKLvJTlZm0OOHfsi8fzM' },
  openGraph: {
    title: 'Navneetha Rajan - Backend Engineer | Hackathon Winner',
    description: 'Backend engineer with 3 years of production experience at SIXT and 5 hackathon wins. Building distributed systems at scale.',
    type: 'website', url: 'https://navneetha-rajan.github.io/',
    siteName: 'Navneetha Rajan Portfolio', locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Navneetha Rajan - Backend Engineer', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navneetha Rajan - Backend Engineer',
    description: 'Backend engineer with 3 years of production experience at SIXT and 5 hackathon wins. Building distributed systems at scale.',
    site: '@navneetha_rajan', creator: '@navneetha_rajan', images: ['/og-image.jpg'],
  },
  other: {
    'application-name': 'Navneetha Rajan Portfolio',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Navneetha Rajan',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0A090C',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#0A090C',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        {children}
        <Script id="cal-embed-init" strategy="afterInteractive">
          {`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", {origin:"https://cal.com"});
            Cal("ui", {"styles":{"branding":{"brandColor":"#B08090"}},"hideEventTypeDetails":false,"layout":"month_view"});

            // Close Cal modal on browser back button
            (function() {
              var observer = new MutationObserver(function() {
                var modal = document.querySelector('cal-modal-box');
                if (modal && !window.__calModalOpen) {
                  window.__calModalOpen = true;
                  history.pushState({calModal: true}, '');
                } else if (!modal && window.__calModalOpen) {
                  window.__calModalOpen = false;
                }
              });
              observer.observe(document.body, {childList: true, subtree: true});

              window.addEventListener('popstate', function(e) {
                if (window.__calModalOpen) {
                  var modal = document.querySelector('cal-modal-box');
                  if (modal) {
                    var closeBtn = modal.querySelector('[data-testid="close-button"], button[aria-label="Close"], .close-button');
                    if (closeBtn) closeBtn.click();
                    else modal.remove();
                  }
                  window.__calModalOpen = false;
                }
              });
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
