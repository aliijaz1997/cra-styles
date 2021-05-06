import Article from "./components/articles";
import LayOut from "./components/Layout";
import { articles } from "./components/data";
import "./App.css";
function App() {
  return (
    <LayOut>
      <div className="flex flex-col items-center">
        <h1 className=" text-xl font-bold  text-indigo-800">
          Articles Details
        </h1>
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              body={article.body}
            />
          );
        })}
      </div>
    </LayOut>
  );
}

export default App;
