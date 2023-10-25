import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Index = ({ data }) => {
  return (
    <>
      <div>index blog page</div>
      {data.slice(0, 5).map((currElem) => {
        return (
          <div key={currElem.id}>
            <h3>{currElem.id}</h3>
            <Link href={`/blog/${currElem.id}`}>
              <h2>{currElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Index;
