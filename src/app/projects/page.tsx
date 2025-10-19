"use client";

import { useState } from "react";

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = [
      {
        "id": "intelligent-workflow-automation",
        "title": "Intelligent Workflow Automation System",
        "description": "Multi-agent AI system for automated information gathering and workflow orchestration using hierarchical ADK architecture with specialized agents.",
        "category": "AI Agents",
        "details": "A multi-agent system built on Google's Agent Development Kit that orchestrates specialized AI agents for complex information processing workflows. The system employs a hierarchical architecture with a root orchestrator coordinating eight specialized sub-agents, leveraging vector search databases, web scraping capabilities, and LLM-powered natural language processing to transform requirements into comprehensive, structured outputs with detailed specifications.",
        "technologies": ["Google ADK", "Multi-Agent Systems", "Vector Search", "Web Scraping", "LLMs", "PostgreSQL", "Docker", "AWS ECS"],
        "image": "/images/projects/intelligent-workflow-automation.png",
        "imageAlt": "Multi-agent system architecture showing workflow orchestration and specialized information processing",
        "links": []
      },
        {
      id: "mindspeech",
      title: "MindSpeech: Brain-AI interface for imagined speech",
      description: "Developing a non-invasive brain-AI interface using high-density fNIRS and LLMs for continuous imagined speech decoding.",
      category: "Brain-Computer Interface",
      details: "MindSpeech enables open-vocabulary, continuous decoding of imagined speech using high-density functional near-infrared spectroscopy (fNIRS) data combined with advanced AI techniques. The project introduces a novel word cloud paradigm for data collection and employs prompt tuning with Llama2 LLM for text generation guided by brain signals, achieving significant improvements in BLEU-1 and BERT P scores.",
      technologies: ["LLMs", "Prompt Tuning", "Pytorch", "fNIRS", "Brain-Computer Interface", "Neuroimaging"],
      image: "/images/projects/mindspeech.png",
      imageAlt: "MindSpeech system showing brain signal processing and text generation pipeline",
      links: []
    },
    {
      id: "eeg",
      title: "EEG-based neurofeedback system",
      description: "Building an EEG-based brain-machine interface system as a prototype device for pain treatment.",
      category: "Neurotechnology",
      details: "This project focused on developing a real-time EEG-based neurofeedback system for chronic pain management. The system uses brain-computer interface technology to help patients learn to modulate their own brain activity patterns associated with pain perception.",
      technologies: ["EEG", "Pytorch",  "Brain-Computer Interface", "Real-time Signal Processing", "Neurofeedback"],
      image: "/images/projects/eeg-featured.png",
      imageAlt: "EEG neurofeedback system showing brain activity patterns and interface",
      links: []
    },
    {
      id: "fmris",
      title: "Modelling aversive learning with fMRI",
      description: "Using reinforcement learning algorithms to model human brain imaging and behavioural data during the learning of pain and relief.",
      category: "Computational Neuroscience",
      details: "This research employed computational modeling approaches to understand how humans learn about pain and relief. We used reinforcement learning frameworks combined with fMRI imaging to identify the neural mechanisms underlying aversive learning processes.",
      technologies: ["fMRI", "Reinforcement Learning", "Computational Modeling", "Behavioral Analysis"],
      image: "/images/projects/fmri-featured.png",
      imageAlt: "fMRI brain imaging showing neural activity patterns during learning",
      links: []
    },
    {
      id: "ml",
      title: "Deep learning for variant calling",
      description: "Generating pileup images from DNA sequencing data and using convolutional neural nets for variant calling.",
      category: "Machine Learning",
      details: "This project explored novel approaches to genomic variant calling by converting DNA sequencing pileups into images and applying deep learning techniques. The method aimed to improve accuracy in detecting genetic variants from next-generation sequencing data.",
      technologies: ["Deep Learning", "Computer Vision", "Bioinformatics", "Genomics"],
      image: "/images/projects/ml-featured.png",
      imageAlt: "Deep learning architecture showing neural network processing DNA sequencing data",
      links: []
    }
  ];

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-700 mb-8">
        Selected projects from my research in neurotechnology, computational neuroscience,
        and machine learning. These projects showcase my work across different domains
        including brain-computer interfaces, fMRI analysis, and deep learning applications.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-6 rounded-lg border bg-white border-gray-200"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <button
                onClick={() => toggleProject(project.id)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedProject === project.id ? "Hide ▲" : "Details ▼"}
              </button>
            </div>
            <p className="text-blue-600 text-sm font-medium mb-3">
              {project.category}
            </p>
            <p className="text-gray-700 mb-4">
              {project.description}
            </p>

            {expandedProject === project.id && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                {project.image && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Visualization</h4>
                    <div className="rounded-lg overflow-hidden bg-gray-50 p-2">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-gray-700">{project.details}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}