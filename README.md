# NPA Ghana Petroleum Quiz

A React + Vite quiz with 100 multiple-choice questions (20 per page), built from the
NPA *Petroleum Price Deregulation* write-up and *Guidelines for Quality Assurance of
Petroleum Products Along the Supply Chain*.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build   # outputs to dist/
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages).

## Structure

```
src/
  main.jsx              entry point
  App.jsx               state: page, selected answers, revealed answers, score
  styles.css            all styles (light/dark theme)
  data/questions.json   the 100 questions
  components/
    Header.jsx          title, progress bar, page and answered count
    Question.jsx        one question card with Show answer
    ScoreCard.jsx       total score (shown on the last page)
    Pagination.jsx      Previous / Next
```

## Editing questions

Edit `src/data/questions.json`. Each item has `id`, `source`, `question`,
`options`, `answer` (zero-based index into `options`) and `explanation`.
