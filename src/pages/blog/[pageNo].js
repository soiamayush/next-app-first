import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await res.json();

  const paths = data.map((currElem) => {
    return {
      params: {
        pageNo: currElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const PageNo = ({ data }) => {
  const router = useRouter();
  const pageNo = router.query.pageNo;
  return (
    <>
      <div> blog no. {pageNo} for you.</div>

      <h3>{data.id}</h3>
      <h2>{data.title}</h2>
    </>
  );
};

export default PageNo;
