import React from "react";

function Article(params) {
  console.log(params);
  return (
    <div className="max-w-sm rounded overflow-hidden mt-2 p-3 shadow-lg bg-red-50 ">
      <h3 className="text-center">{params.title}</h3>
      <p>{params.body}</p>
    </div>
  );
}

export default Article;
