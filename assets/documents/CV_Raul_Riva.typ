#import "@preview/modernpro-cv:1.3.0": *
#set page(
  paper: "us-letter",
)
#show: cv-single.with(
  continue-header: "false",
  name: text(fill: rgb("#4D0066"))[Raul Guarini Riva],
  address: "Praia de Botafogo, 190 - Office 1121B",
  lastupdated: "true",
  pagecount: "true",
  date: "2026-05-11",
  contacts: (
    //(text: "", link: ""),
    (text: "rgriva.github.io", link: "https://rgriva.github.io/"),
    (text: "linkedin.com/in/rgriva", link: "www.linkedin.com/in/rgriva"),
    (text: "raul.riva@fgv.br", link: "mailto:raul.riva@fgv.br"),
  ),
)

#show link: underline

// about

#sectionsep
#section("Employment")
#education(
  institution: [Fundacao Getulio Vargas (FGV EPGE)],
  major: [Assistant Professor of Economics],
  date: "July, 2025 - Present",
  location: "Rio de Janeiro, Brazil",
  
)


#section("Education")
#education(
  institution: [Northwestern University],
  major: [Ph.D. in Finance],
  date: "2019-2025",
  location: "Evanston - USA",
  description: [
    - Main fields: Asset Pricing, Macro-Finance
    - Secondary fields: Econometrics
    - Ph.D. Committee: Viktor Todorov (chair), Torben Andersen (co-chair), Robert Korajczyk, and Caio Almeida
  ],
)
#subsectionsep  
#education(
  institution: [Fundacao Getulio Vargas],
  major: [M.Sc. in Economics],
  date: "2017-2019",
  location: "Rio de Janeiro - Brazil",
)

#subsectionsep
#education(
  institution: [Fundacao Getulio Vargas],
  major: [B.A. in Economics],
  date: "2013-2016",
  location: "Rio de Janeiro - Brazil"
)

#sectionsep
// Working Papers
#section("Working Papers")

#twoline-item(
  entry1: [Risk-Budgeted Mean-Variance Portfolios],
  entry2: [],
  description: [_(joint with Rodrigo Targino and Bernardo Cost)_ \ New draft coming soon!]
)

#twoline-item(
  entry1: link("https://rgriva.github.io/assets/documents/Yield_ML_Paper.pdf")[Asymmetric Violations of the Spanning Hypothesis],
  entry2: [],
  description: [_(joint with Gustavo Freire)_ - R&R at the _Journal of Financial and Quantitative Analysis_ \ Best Paper Award at the Asian Meeting of the Econometric Society - 2026
  ],
)

#twoline-item(
  entry1: link("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4878175")[How Much Unspanned Volatility Can Different Shocks Explain?],
  entry2: [],
  description: [Runner-up for best Quantitative Finance paper at the 2024 Brazilian Finance Society meeting.]
)

#twoline-item(
  entry1: link("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4751840")[Subjective beliefs, disagreement, and market return predictability],
  entry2: [],
  description: [_(joint with Felipe Iachan)_ - R&R at the _Critical Finance Review_ \ ]
)

#sectionsep
// Publication
#section("Publications")

#twoline-item(
  entry1: "Intraday Cross-Sectional Distribution of Systematic Risk",
  entry2: link("https://tinyurl.com/3fs9b43z")[Journal of Econometrics, 2023],
  description: [_(joint with Torben Andersen, Martin Thyrsgaard, Viktor Todorov)_ \ Best paper award at the 2022 SoFiE Annual Meeting in Cambridge, UK]
)

#sectionsep
#section("Service as reviewer")
- Journal of Financial Economics
- Journal of Banking and Finance
- Journal of Financial Econometrics
- International Journal of Forecasting
- Quarterly Review of Economics and Finance

#sectionsep
#section("Presentations")

#oneline-title-item(
  title: [*2026 (including scheduled)*],
  content: [#text(11pt)[_Asian Meeting of the Econometric Society (Abu Dhabi), University of São Paulo (São Paulo), FGV EESP (São Paulo), FinMetrics (Barcelona), IAAE (Lisbon)_]]
)

#oneline-title-item(
  title: [*2025*],
  content: [#text(11pt)[_Fed Board, Emory, Fordham, UC San Diego, University of Miami, FGV EPGE, Puc-Rio, Erasmus, CUNEF, ESADE, Kansas City Fed, QFFE (Marseille), SoFiE Annual Conference (Paris), IAAE (Turin), University of São Paulo (Ribeirão Preto), EBFin (São Paulo)_]]
)

#oneline-title-item(
  title: [*2024*],
  content: [#text(11pt)[_FinEML Seminar Series, Machine Learning for Finance Bootcamp at the Fields Institute, Midwest Macro 2024 (Spring), QFFE 2024, 2024 SoFiE Annual Meeting, 2024 IAAE Annual Meeting, Brazilian Finance Society Meeting, Bachelier Society World Congress, European Meeting of the Econometric Society_]]
)

#oneline-title-item(
  title: [*2023*],
  content: [#text(11pt)[_Northwestern Kellogg, SoFiE Summer School (Brussels), Brazilian Finance Society Meeting, 5th International Workshop in Financial Econometrics, COPPEAD-UFRJ, 17th BRMG Conference on Macro and Financial Econometrics, Trends in Macroeconometrics at UIUC_] ]
)

#oneline-title-item(
  title: [*2022*],
  content: [#text(11pt)[_Northwestern Kellogg, Brazilian Finance Society Meeting_]]
)


#sectionsep
#section("Teaching Experience")


#oneline-title-item(
  title: [Econometrics (Core PhD Sequence)],
  content: [#link("https://github.com/epge-classes/econometrics-fgv-2025")[2025]]
)

#oneline-title-item(
  title: [Asset Pricing (PhD Elective)],
  content: [#link("https://github.com/epge-classes/finance-1-2026")[2026]]
)
#sectionsep
#section("Languages")
#oneline-title-item(
  title: "Programming Languages",
  content: [Python, R, Julia, Matlab, SQL, LaTeX, Markdown, Typst]
)
#oneline-title-item(
  title: "Human Languages",
  content: [Portuguese (native), English (fluent), French (basic)]
)

// // Reference
// #section("References")
// #references(references: (
//   (
//     name: "Viktor Todorov",
//     institution: "Northwestern University",
//     email: "v-todorov@kellogg.northwestern.edu",
//   ),
//   (
//     name: "Torben Andersen",
//     institution: "Northwestern University",
//     email: "t-andersen@kellogg.northwestern.edu",
//   ),
//   (
//     name: "Robert Korajczyk",
//     institution: "Northwestern University",
//     email: "r-korajczyk@kellogg.northwestern.edu",
//   ),
//   (
//     name: "Caio Almeida",
//     institution: "Princeton University",
//     email: "calmeida@princeton.edu",
//   )
// ))
