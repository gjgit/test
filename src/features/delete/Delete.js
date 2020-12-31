import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeleteData } from "./deleteSlice";

const Inbox = () => {
  const count = useSelector(getDeleteData);

  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="row">
        <div className="col-md-12">
          {count.length > 0 ? (
            <div className="list-group border-0 border-bottom">
              {count.map((person, index) => (
                <span
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  key={index}
                  style={{
                    fontWeight: person.unread ? "700" : "400",
                  }}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{person.subject}</h5>
                  </div>
                  <p
                    className="mb-1"
                    dangerouslySetInnerHTML={{ __html: person.content }}
                  ></p>
                </span>
              ))}
            </div>
          ) : (
            <div className="card border-top-0 border-end-0 ">
              <div className="card-body text-center">
                Sorry No Meessage Found
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
