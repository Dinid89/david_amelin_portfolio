function AboutPercent() {
  const progressBars = [
    { label: 'HTML', color: 'bg-orange-800', percent: 90 },
    { label: 'CSS', color: 'bg-blue-500', percent: 80 },
    { label: 'JavaScript', color: 'bg-green-500', percent: 70 },
    { label: 'React', color: 'bg-red-500', percent: 60 },
    { label: 'PHP', color: 'bg-yellow-400', percent: 50 },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 p-4 space-y-4 text-white w-full">
      {progressBars.map((bar) => (
        <div key={bar.label}>
          <div className="mb-1 text-sm font-medium">{bar.label}</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className={`${bar.color} h-2 rounded-full`}
              style={{ width: `${bar.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutPercent;