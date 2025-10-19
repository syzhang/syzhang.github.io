'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      themeCSS: `
        .node rect,
        .node circle,
        .node ellipse,
        .node polygon {
          fill: hsl(0, 0%, 100%);
          stroke: hsl(0, 0%, 90%);
          stroke-width: 1px;
        }
        .edgePath .path {
          stroke: hsl(0, 0%, 70%);
          stroke-width: 1.5px;
        }
        .edgeLabel {
          background-color: hsl(0, 0%, 100%);
          text-align: center;
        }
        .cluster rect {
          fill: hsl(0, 0%, 98%);
          stroke: hsl(0, 0%, 70%);
          stroke-width: 1px;
        }
        .titleText {
          text-anchor: middle;
          font-size: 18px;
          fill: hsl(0, 0%, 20%);
        }
      `,
    });
  }, []);

  useEffect(() => {
    if (!isClient || !elementRef.current || !chart.trim()) return;

    const renderChart = async () => {
      try {
        // Generate unique ID for this chart
        const chartId = `mermaid-chart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const { svg } = await mermaid.render(chartId, chart.trim());
        if (elementRef.current) {
          elementRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Error rendering Mermaid chart:', error);
        if (elementRef.current) {
          elementRef.current.innerHTML = `<pre class="text-red-500 p-4 border border-red-300 rounded">Error rendering diagram: ${error}</pre>`;
        }
      }
    };

    renderChart();
  }, [chart, isClient]);

  if (!isClient) {
    return (
      <div className="my-6 flex justify-center">
        <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded"></div>
      </div>
    );
  }

  return <div ref={elementRef} className="my-6 flex justify-center" />;
}