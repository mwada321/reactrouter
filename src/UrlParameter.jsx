import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // useLocation でQueryパラメータのsearch情報が取得できる
  const { search } = useLocation();
  // URLSearchParamsでqueryパラメータを使用する為のメソッドが使える
  // ここではgetでnameの情報を取得
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
