export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Suyi Zhang, PhD</h1>
        <p className="text-xl text-gray-700 mb-6">
          AI/ML Engineer | LLMs & Agentic Workflows | Startup Co-founder/CTO
        </p>
        <div className="flex gap-4 text-blue-600">
          <a href="https://github.com/syzhang" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/suyi-zhang/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=2VXl1ckAAAAJ&hl" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Google Scholar
          </a>
          <a href="mailto:suyizhang52@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="prose max-w-none">
          <p>
            I'm an AI/ML Engineer with a PhD in Engineering and 10+ years developing machine learning systems.
            Currently, I'm co-founder and CTO of an AI supply chain startup where I build production-ready
            agentic AI workflows using LLMs and vector search.
          </p>
          <p>
            My expertise spans LLMs, AI agents, reinforcement learning, and statistical modeling, with a proven
            track record deploying scalable AI solutions in cloud environments (AWS). I've worked on everything
            from real-time brain-computer interfaces to automated decision-making systems serving 300+ users.
          </p>
          <p>
            Previously, I was a researcher at University of Oxford and University of Cambridge, where I developed
            ML models for neuroimaging data and brain-machine interfaces. I transitioned from academia to industry
            to focus on building AI systems that create real-world impact.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Work</h2>
        <div className="grid gap-6">

          {/* Startup Project */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">AI Supply Chain Automation</h3>
            <p className="text-gray-600 mb-3">Co-founder/CTO | 2024 - Present</p>
            <p className="text-gray-700 mb-3">
              Built production agentic AI workflows using LLMs for automated decision-making.
              Deployed on AWS with 300+ registered users, implementing multimodal RAG that reduced
              manual operations by 80%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">Google ADK</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">PydanticAI</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">Pinecone</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">AWS CDK</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">FastAPI</span>
            </div>
          </div>

          {/* Brain-Computer Interface */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Brain-Computer Interface for Pain Control</h3>
            <p className="text-gray-600 mb-3">Published in Current Biology, 2020</p>
            <p className="text-gray-700 mb-3">
              Developed a closed-loop brain-machine interface system using reinforcement learning
              for pain treatment. Featured real-time EEG signal decoding and co-adaptive learning algorithms.
            </p>
            <div className="flex gap-3 mt-3">
              <a href="https://doi.org/10.1016/j.cub.2020.07.066" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:underline text-sm">
                Paper
              </a>
              <a href="https://github.com/syzhang/coadapt_repo" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:underline text-sm">
                Code
              </a>
            </div>
          </div>

          {/* MindSpeech */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">MindSpeech: Imagined Speech Decoding</h3>
            <p className="text-gray-600 mb-3">Research | 2024</p>
            <p className="text-gray-700 mb-3">
              Built PyTorch models using Transformers to decode imagined speech from brain signals (fNIRS).
              Implemented prompt tuning for advanced human-AI interaction.
            </p>
            <div className="flex gap-3 mt-3">
              <a href="https://arxiv.org/abs/2408.05362" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:underline text-sm">
                Paper
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Recent Posts Teaser */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            Blog posts coming soon! I'll be writing about building production LLM systems,
            AI agent architectures, and lessons learned from deploying ML in the real world.
          </p>
          <a href="/blog" className="text-blue-600 hover:underline mt-2 inline-block">
            View all posts →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          I'm currently looking for new opportunities in AI/ML engineering.
          Feel free to reach out via{' '}
          <a href="mailto:suyizhang52@gmail.com" className="text-blue-600 hover:underline">
            email
          </a>{' '}
          or connect on{' '}
          <a href="https://www.linkedin.com/in/suyi-zhang/" target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:underline">
            LinkedIn
          </a>.
        </p>
      </section>
    </div>
  );
}
