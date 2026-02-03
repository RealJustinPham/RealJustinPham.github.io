import { useParams } from "react-router-dom";

export default function Post() {
  const { slug } = useParams();
  return (
    <div className="card">
      <h1 className="h1">Post</h1>
      <p className="p">Slug: {slug}</p>
    </div>
  );
}