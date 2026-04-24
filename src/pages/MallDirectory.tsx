import { useEffect, useState } from "react";

interface Mall {
  id: string;
  name: string;
  city: string;
}

import { useEffect, useState } from "react";

type Mall = {
  _id: string;
  name: string;
  city: string;
};

const MallDirectory = () => {
  const [malls, setMalls] = useState<Mall[]>([]);

  useEffect(() => {
    fetch("/api/malls")
      .then((res) => res.json())
      .then((data) => setMalls(data))
      .catch((err) => console.error("Failed to fetch malls:", err));
  }, []);

  return (
    <div>
      <h1>Mall Directory</h1>

      {malls.map((mall) => (
        <div key={mall._id}>
          <h2>{mall.name}</h2>
          <p>{mall.city}</p>
        </div>
      ))}
    </div>
  );
};

export default MallDirectory;
