// app/test-catalog/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function TestCatalog() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/backend/api/products")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>?????? ???????? ? ??????? ???????</h1>
      {loading ? (
        <p style={{ color: "blue", fontSize: "20px" }}>? ??????? ??? backend-? ?????????? (Loading)...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}