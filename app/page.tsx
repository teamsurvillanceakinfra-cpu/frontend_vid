import DownloaderForm from "@/components/DownloaderForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          padding: "6rem 0 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-bg"
          style={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translateX(-60%)",
            width: "50%",
            height: "80%",
            background: "var(--primary)",
            filter: "blur(120px)",
            opacity: 0.15,
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className="glow-bg"
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "30%",
            height: "60%",
            background: "var(--highlight)",
            filter: "blur(120px)",
            opacity: 0.1,
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "50%",
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="hero-h1"
            style={{
              fontSize: "4.5rem",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "var(--foreground)",
              letterSpacing: "-1.5px",
            }}
          >
            All In One Video{" "}
            <span
              style={{
                background: "var(--highlight)",
                color: "#000",
                padding: "0 0.5rem",
                borderRadius: "0.5rem",
                display: "inline-block",
                transform: "rotate(-2deg)",
              }}
            >
              Downloader
            </span>
          </h1>
          <p
            className="hero-p"
            style={{
              color: "var(--text-muted)",
              fontSize: "1.25rem",
              maxWidth: "650px",
              margin: "0 auto 3.5rem auto",
              lineHeight: 1.6,
            }}
          >
            Securely extract high-quality videos instantly from any social
            platform. No watermarks, pristine quality, and completely free.
          </p>

          <DownloaderForm platform="Any Platform" />

          <div
            className="platforms flex justify-center gap-4"
            style={{
              marginTop: "4rem",
              flexWrap: "wrap",
              fontWeight: 600,
              color: "var(--text-muted)",
              fontSize: "0.95rem",
            }}
          >
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              YouTube
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Facebook
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              Twitter/X
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              TikTok
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
              Dailymotion
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.994.499 1.807 1.48 1.807 1.777 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.78.745 2.28.082.099.094.19.069.288-.078.318-.252 1.025-.286 1.163-.045.183-.151.222-.34.134-1.269-.588-2.064-2.433-2.064-3.91 0-3.18 2.311-6.1 6.666-6.1 3.498 0 6.218 2.49 6.218 5.8 0 3.475-2.19 6.265-5.234 6.265-1.022 0-1.983-.532-2.313-1.162l-.634 2.414c-.229.878-.851 1.977-1.272 2.646C10.027 21.841 10.99 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              Pinterest
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features"
        style={{
          padding: "6rem 0",
          background: "var(--secondary)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "4rem",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            Built for scale. Designed for speed.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              className="card text-center flex flex-col items-center"
              style={{
                padding: "3rem 2rem",
                background: "var(--card-bg)",
                border: "none",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--secondary)",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                🚀
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  fontWeight: 700,
                }}
              >
                Lightning Fast
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Our ultra-fast proxy servers process your requests instantly so
                you spend zero time waiting.
              </p>
            </div>

            <div
              className="card text-center flex flex-col items-center"
              style={{
                padding: "3rem 2rem",
                background: "var(--card-bg)",
                border: "none",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--secondary)",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                ✨
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  fontWeight: 700,
                }}
              >
                Lossless Quality
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Download videos up to 4K resolution with perfectly synced native
                audio tracks every time.
              </p>
            </div>

            <div
              className="card text-center flex flex-col items-center"
              style={{
                padding: "3rem 2rem",
                background: "var(--card-bg)",
                border: "none",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--secondary)",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                🛡️
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  fontWeight: 700,
                }}
              >
                100% Secure
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                We maintain strict zero-log policies. Your video downloads
                remain completely anonymous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta"
        style={{
          padding: "7rem 0",
          textAlign: "center",
          background: "var(--background)",
        }}
      >
        <div className="container">
          <h2
            className="hero-h1"
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              marginBottom: "1rem",
              letterSpacing: "-0.5px",
            }}
          >
            Stop Waiting and Start Downloading.
          </h2>
          <p
            className="hero-p"
            style={{
              color: "var(--text-muted)",
              fontSize: "1.2rem",
              marginBottom: "3rem",
            }}
          >
            Join the thousands of users successfully archiving media daily.
          </p>
          <div className="cta-buttons flex justify-center gap-4">
            <Link
              href="/"
              className="btn btn-primary"
              style={{ padding: "0.8rem 2.5rem", fontSize: "1.1rem" }}
            >
              Start Free Extract
            </Link>
            <Link
              href="/about"
              className="btn btn-secondary"
              style={{
                padding: "0.8rem 2.5rem",
                fontSize: "1.1rem",
                border: "1px solid var(--border)",
                background: "var(--card-bg)",
              }}
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
