'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    console.log('Mermaid component mounted, chart:', chart);

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
    });
  }, []);

  useEffect(() => {
    if (!isClient || !elementRef.current) return;

    console.log('Attempting to render chart...');

    const renderChart = async () => {
      try {
        const cleanChart = chart.trim();
        console.log('Clean chart:', cleanChart);

        if (!cleanChart) {
          setError('Empty chart data');
          return;
        }

        const chartId = `mermaid-chart-${Date.now()}`;
        console.log('Rendering with ID:', chartId);

        const { svg } = await mermaid.render(chartId, cleanChart);
        console.log('SVG generated successfully');

        if (elementRef.current) {
          elementRef.current.innerHTML = svg;
          setError('');
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError(`Error: ${err}`);
      }
    };

    renderChart();
  }, [chart, isClient]);

  if (!isClient) {
    return <div className="my-6 p-4 border rounded">Loading chart...</div>;
  }

  return (
    <div className="my-6">
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded">
          <strong>Mermaid Error:</strong> {error}
        </div>
      )}
      <div ref={elementRef} className="flex justify-center" />
    </div>
  );
}