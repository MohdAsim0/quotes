
function Quote({ quote, author }) {
  return (
    <div className="text-center">
      <h1>{quote}</h1>
      <p>{author}</p>
    </div>
  );
}

export default Quote;
