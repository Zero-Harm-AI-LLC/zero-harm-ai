export default function Docs() {
  return (
    <main>
      <section className="docs fade-in-section">
        <h2>API Documentation & Integration</h2>
        <p>Zero Harm AI provides modular API endpoints to moderate outputs from various AI pipelines.</p>

        <h3>Endpoints</h3>
        <ul>
          <li><code>POST /api/moderate/llm</code> — Scan LLM prompts and completions.</li>
          <li><code>POST /api/moderate/image</code> — Evaluate image classification results.</li>
          <li><code>POST /api/moderate/object</code> — Detect inappropriate object labels.</li>
          <li><code>POST /api/moderate/pose</code> — Flag abnormal or unsafe poses.</li>
        </ul>

        <h3>Example Payload</h3>
        <pre><code>{`{
  "input": "your model output or image label list here"
}`}</code></pre>

        <h3>Sample Response</h3>
        <pre><code>{`{
  "flagged": true,
  "reason": "contains sensitive content"
}`}</code></pre>

        <h3>Integration Tips</h3>
        <ul>
          <li>Use the API gateway to route your model outputs through the firewall before production.</li>
          <li>Leverage audit logs for compliance and review.</li>
          <li>Extend rules and models based on your domain-specific safety needs.</li>
        </ul>
      </section>
    </main>
  );
}
