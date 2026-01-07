import { memo } from "react";

const ExpContent = ({ expContent }) => {
  return (
    <article className="card-border rounded-xl p-10">
      <h2 className="font-semibold text-3xl">{expContent.title}</h2>

      <p className="text-white-50 mt-1">{expContent.date}</p>

      <p className="text-white-50 mt-4 italic">Responsibilities</p>

      <ul className="list-disc ms-5 mt-3 text-white-50">
        {expContent.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
};

export default memo(ExpContent);
