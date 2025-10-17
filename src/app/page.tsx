import Link from 'next/link';

export default function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          AI/ML Engineer · LLMs & Agentic Workflows · Startup Co-founder/CTO
        </p>
      </div>

      <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
        <p>
        AI/ML Engineer building production AI agents as cofounder/CTO of an AI supply chain startup.
        Previously Oxford & Cambridge researcher working on neuroimaging and brain-computer interfaces.
        </p>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 mb-8">
          Latest
        </h2>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <article className="py-12">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href="/blog/production-llm-agents"
                        className="text-gray-900 dark:text-gray-100"
                      >
                        Building Production LLM Agent Systems
                      </Link>
                    </h3>
                    <div className="flex flex-wrap mt-3">
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        LLM
                      </span>
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        AI Agents
                      </span>
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        Production ML
                      </span>
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    Lessons from building and deploying agentic AI workflows that serve 300+ users in production,
                    covering architecture decisions, tool selection, and real-world challenges.
                  </div>
                </div>
                <div className="text-base font-medium leading-6">
                  <Link
                    href="/blog/production-llm-agents"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Read more: Building Production LLM Agent Systems"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <article className="py-12">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href="/blog/aws-scaling-ai-services"
                        className="text-gray-900 dark:text-gray-100"
                      >
                        Scaling AI Services on AWS: From 0 to 300+ Users
                      </Link>
                    </h3>
                    <div className="flex flex-wrap mt-3">
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        AWS
                      </span>
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        Infrastructure
                      </span>
                      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:text-primary-400">
                        MLOps
                      </span>
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    Infrastructure decisions, cost optimization strategies, and lessons learned deploying AI services
                    on AWS from prototype to production scale.
                  </div>
                </div>
                <div className="text-base font-medium leading-6">
                  <Link
                    href="/blog/aws-scaling-ai-services"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Read more: Scaling AI Services on AWS"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
