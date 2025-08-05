export default function Features() {
  return (
    <main>
      <section className="features fade-in-section">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Comprehensive AI Moderation</h3>
            <p>Rule-based and ML-driven safety checks for LLM text, object detection outputs, image labels, and pose data.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Performance</h3>
            <p>Low latency firewall that processes AI model outputs on the fly to prevent harmful content from reaching production.</p>
          </div>
          <div className="feature">
            <h3>Audit Logging & Insights</h3>
            <p>Full logging of moderation decisions to support compliance, transparency, and continuous improvement.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
