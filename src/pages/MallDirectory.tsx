import { useEffect, useState } from "react";

interface Mall {
  id: string;
  name: string;
  city: string;
}

const MallDirectory = () => {
  const [malls, setMalls] = useState<Mall[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://13.233.95.101:5000/api/malls")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setMalls(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load malls");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading malls...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Mall Directory</h1>
      {malls.map((mall) => (
        <div key={mall.id}>
          <h2>{mall.name}</h2>
          <p>{mall.city}</p>
        </div>
      ))}
    </div>
  );
};

export default MallDirectory;
