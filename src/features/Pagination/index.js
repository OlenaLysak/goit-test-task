import React from "react";

//Styles
import styles from "./Pagination.module.css";
import classNames from "classnames/bind";

//Constants
import { PAGE_LIMIT } from "../../constants";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, pageByNum, selectPage } from "./paginationSlice";

let cx = classNames.bind(styles);

const Pagination = ({ totalPages, children }) => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / PAGE_LIMIT) * PAGE_LIMIT;
    const paginationGroup = new Array(PAGE_LIMIT).fill().map((_, idx) => {
      return start + idx + 1;
    });
    return paginationGroup;
  };

  return (
    <div>
      {children}
      <div className={styles.pagination}>
        {/* previous button */}
        <button
          onClick={() => dispatch(prevPage())}
          className={cx({ prev: true, disabled: !!(currentPage === 1) })}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => {
          if (item > totalPages) {
            return null;
          } else {
            return (
              <button
                key={index}
                onClick={(e) =>
                  dispatch(pageByNum(Number(e.target.textContent)))
                }
                className={cx({
                  paginationItem: true,
                  active: !!(currentPage === item && currentPage <= totalPages),
                })}
              >
                <span>{item}</span>
              </button>
            );
          }
        })}

        {/* next button */}
        <button
          onClick={() => dispatch(nextPage())}
          className={cx({
            next: true,
            disabled: !!(currentPage === totalPages),
          })}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
