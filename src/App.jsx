import { useState } from "react";
import questions from "./data/questions.json";
import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
import ScoreCard from "./components/ScoreCard.jsx";
import Pagination from "./components/Pagination.jsx";

const PER_PAGE = 20;
const TOTAL_PAGES = Math.ceil(questions.length / PER_PAGE);

export default function App() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState({}); // { questionId: optionIndex }
  const [revealed, setRevealed] = useState({}); // { questionId: true }

  const answeredCount = Object.keys(selected).length;
  const score = questions.filter((q) => selected[q.id] === q.answer).length;

  const start = page * PER_PAGE;
  const pageQuestions = questions.slice(start, start + PER_PAGE);
  const isLastPage = page === TOTAL_PAGES - 1;

  const goToPage = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const handleSelect = (id, optionIndex) =>
    setSelected((prev) => ({ ...prev, [id]: optionIndex }));

  const handleReveal = (id) =>
    setRevealed((prev) => ({ ...prev, [id]: true }));

  const handleRestart = () => {
    setSelected({});
    setRevealed({});
    goToPage(0);
  };

  return (
    <div className="wrap">
      <Header
        page={page}
        totalPages={TOTAL_PAGES}
        answered={answeredCount}
        total={questions.length}
      />

      {pageQuestions.map((q, i) => (
        <Question
          key={q.id}
          question={q}
          number={start + i + 1}
          selected={selected[q.id]}
          revealed={!!revealed[q.id]}
          onSelect={handleSelect}
          onReveal={handleReveal}
        />
      ))}

      {isLastPage && (
        <ScoreCard
          score={score}
          total={questions.length}
          answered={answeredCount}
          onRestart={handleRestart}
        />
      )}

      <Pagination
        page={page}
        totalPages={TOTAL_PAGES}
        from={start + 1}
        to={start + pageQuestions.length}
        onChange={goToPage}
      />
    </div>
  );
}
