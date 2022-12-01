MathJax = {
  options: {
    enableMenu: false,
  },
  loader: { load: ["[tex]/physics"] },
  tex: {
    tags: 'ams',
    macros: {
      R: "\\mathbb{R}",
      N: "\\mathbb{N}",
      isotope: ["{}^{#2}\\mathrm{#1}", 2],
      e: ["\\cdot 10^{#1}",1],
      hyp: "\\text{-}",
      bigcap: ["{\\rm #1{\\small #2}}",2]
    },
  },
};
