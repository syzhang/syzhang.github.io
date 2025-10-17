export default function PublicationsPage() {
  const publications = [
    {
      title: "Mindspeech: Continuous imagined speech decoding using high-density fNIRS and prompt tuning for advanced human-AI interaction",
      authors: "S. Zhang, et al.",
      venue: "arXiv preprint arXiv:2408.05362",
      year: "2024",
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/2408.05362" }
      ]
    },
    {
      title: "MindGPT: Advancing Human-AI Interaction with Non-Invasive fNIRS-Based Imagined Speech Decoding",
      authors: "S. Zhang, et al.",
      venue: "arXiv preprint arXiv:2408.05361",
      year: "2024",
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/2408.05361" }
      ]
    },
    {
      title: "Computational and neural mechanisms of statistical pain learning",
      authors: "F. Mancini, S. Zhang, and B. Seymour",
      venue: "Nature Communications, vol. 13, no. 1",
      year: "2022",
      links: [
        { text: "Paper", url: "https://doi.org/10.1038/s41467-022-34283-9" }
      ]
    },
    {
      title: "Pain Control by Co-adaptive Learning in a Brain-Machine Interface",
      authors: "S. Zhang et al.",
      venue: "Current Biology, vol. 30, no. 20, pp. 3935-3944",
      year: "2020",
      links: [
        { text: "Paper", url: "https://doi.org/10.1016/j.cub.2020.07.066" },
        { text: "Code", url: "https://github.com/syzhang/coadapt_repo" },
        { text: "Data", url: "https://openneuro.org/datasets/ds002036" }
      ]
    },
    {
      title: "Encoding and Decoding of Pain Relief in the Human Brain",
      authors: "S. Zhang",
      venue: "PhD Thesis, University of Cambridge",
      year: "2019",
      links: [
        { text: "Thesis", url: "https://doi.org/10.17863/CAM.33642" }
      ]
    },
    {
      title: "The control of tonic pain by active relief learning",
      authors: "S. Zhang et al.",
      venue: "eLife, vol. 7, p. e31949",
      year: "2018",
      links: [
        { text: "Paper", url: "https://doi.org/10.7554/eLife.31949" },
        { text: "Data", url: "https://elifesciences.org/articles/31949/figures" }
      ]
    },
    {
      title: "Interlacing Personal and Reference Genomes for Machine Learning Disease-Variant Detection",
      authors: "L. R. Harries et al. (S. Zhang co-author)",
      venue: "NeurIPS Workshop on Machine Learning for Health (ML4H)",
      year: "2018",
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/1811.11674" }
      ]
    },
    {
      title: "Dissociable Learning Processes Underlie Human Pain Conditioning",
      authors: "S. Zhang, H. Mano, G. Ganesh, T. Robbins, and B. Seymour",
      venue: "Current Biology, vol. 26, no. 1, pp. 52–58",
      year: "2016",
      links: [
        { text: "Paper", url: "https://doi.org/10.1016/j.cub.2015.10.066" }
      ]
    },
    {
      title: "Technology for chronic pain",
      authors: "S. Zhang and B. Seymour",
      venue: "Current Biology, vol. 24, no. 18, pp. R930–R935",
      year: "2014",
      links: []
    },
    {
      title: "An automatic classifier of pain scores in chronic pain patients from local field potentials recordings",
      authors: "S. Zhang, A. Green, and P. P. Smith",
      venue: "IEEE/EMBS Conference on Neural Engineering (NER)",
      year: "2013",
      links: [
        { text: "Paper", url: "https://doi.org/10.1109/NER.2013.6696153" }
      ]
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Publications</h1>
      <p className="text-gray-700 mb-8">
        Selected publications from my research in computational neuroscience, machine learning,
        and brain-computer interfaces. For a complete list, see my{' '}
        <a href="https://scholar.google.com/citations?user=2VXl1ckAAAAJ&hl"
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-600 hover:underline">
          Google Scholar profile
        </a>.
      </p>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <article
            key={index}
            className="p-6 rounded-lg border bg-white border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2">
              {pub.title}
            </h3>
            <p className="text-gray-700 text-sm mb-1">{pub.authors}</p>
            <p className="text-gray-600 text-sm mb-3">
              {pub.venue} ({pub.year})
            </p>
            {pub.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {pub.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {link.text} →
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
