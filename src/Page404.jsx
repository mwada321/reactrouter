import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>存在しないPageです。</h1>
      <Link to="/">Topに戻る</Link>
    </div>
  );
};
