import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Pagingnation from "./components/Pagingnation";
import PostList from "./components/PostList";
import SearchTerm from "./components/SearchTerm";

function PostFeature(props) {
  const [postList, setPostList] = useState(() => {
    return [];
  });
  let check = false;
  const [paging, setPaging] = useState(() => {
    return {
      _limit: 0,
      _page: 0,
      _totalRows: 0,
    };
  });
  const [filter, setFilter] = useState(() => {
    return {
      _page: 1,
      _limit: 5,
      title_like: "",
    };
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const paramString = queryString.stringify(filter);
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPaging(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [filter]);
  const onHandlerChangePage = (value) => {
    const newPage = {
      ...paging,
      _page: paging._page + value,
    };
    setPaging(newPage);
    setFilter(newPage);
  };
  const onSubmitForm = (value) => {
    setFilter({
      ...filter,
      _page: 1,
      title_like: value.title_like,
    });
  };
  return (
    <div>
      <SearchTerm onSubmitForm={onSubmitForm} />
      <PostList postList={postList} />
      <Pagingnation
        paging={paging}
        onHandlerChangePage={onHandlerChangePage}
      ></Pagingnation>
    </div>
  );
}

export default PostFeature;
