import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { Column,
   TableOptions,
    useTable,
    useSortBy, 
    usePagination } from "react-table";

//HOC - Higher order component
//HOF - Higher order function
export default function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = true
) {
  return function HOC() {
    const option: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6
      }
    };
    const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      page, 
      prepareRow, 
      nextPage, 
      previousPage, 
      canNextPage, 
      canPreviousPage,
      pageCount, 
      state:{pageIndex} } =
      useTable(option, useSortBy, usePagination);
    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {" "}
                    {column.isSorted && <span>{column.isSortedDesc?<AiOutlineSortDescending/>:<AiOutlineSortAscending/>}</span>}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          showPagination && (
            <div className="table-pagination">
              <button disabled={!canPreviousPage} onClick={previousPage} >Prev</button>
              <span>{`${pageIndex+1} Page of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>Next</button>
            </div>
          )
        }
      </div>
    );
  };
}
