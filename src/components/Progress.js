function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  console.log("start");
  console.log(index);
  console.log(numQuestions);
  console.log(points);
  console.log(maxPossiblePoints);
  console.log("end");

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points} </strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
