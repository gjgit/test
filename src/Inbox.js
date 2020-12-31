import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import InboxData from "./InboxData";
import { selectCount } from "./features/counter/counterSlice";

const Inbox = () => {
  const count = useSelector(selectCount);
  const productData = [
    {
      id: 1,
      mId: "guid-1",
      unread: true,
      subject: "sasdasd",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      id: 2,
      mId: "guid-2",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
  ];

  const { url } = useRouteMatch();

  const linkList = count.map((product) => {
    return (
      <Link to={`${url}/${product.id}`} className="text-decoration-none">
        <a key={product.id} class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{product.subject}</h5>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <a class="nav-link p-0 px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-flag"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </a>
              <a class="nav-link p-0 px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </a>
            </div>
          </div>
          <p class="mb-1  text-truncate">
            <span dangerouslySetInnerHTML={{ __html: product.content }}></span>
          </p>
        </a>
      </Link>
    );
  });

  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="row">
        <div className="col-md-4 col-lg-4  p-0">
          <div class="list-group sidebar2">{linkList}</div>
        </div>
        <div className="col-md-8 ms-sm-auto col-lg-8 mt-4">
          <Route path={`${url}/:productId`}>
            <InboxData data={count} />
          </Route>
          <Route exact path={url}>
            <div class="card  border-0">
              <div class="card-body mx-auto">Please select any message...</div>
            </div>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
