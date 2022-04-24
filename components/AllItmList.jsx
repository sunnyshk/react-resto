import OneItm from "./OneItm";
// import FilterBtns from "./FilterBtns";
function AllItmList({ restoData, setResto }) {
  if (!restoData || restoData.length == 0) {
    return <p>No Hotels available right now</p>;
  }
  const handleRate = (val) => {
    let prevData = [...restoData];
    prevData.sort((a, b) => {
      return a - b ? 1 : -1;
    });
    setResto(prevData);
  };
  return (
    <div className="listCont">
      <div className="btn-cont">
        <div className="rating-sort">
          <select
            className="sortby"
            onChange={(e) => handleRate(e.target.value)}
          >
            <option value="1">Above 1</option>
            <option value="2">Above 2</option>
            <option value="3">Above 3</option>
            <option value="4">Above 4</option>
          </select>
          <button onClick={handleRate}>Sort by ratings</button>
        </div>
        <div className="pay-btns">
          <button>All</button>
          <button>Cash Only</button>
          <button>Card Only</button>
        </div>
      </div>
      {/* <FilterBtns/> */}
      {restoData.map((itm) => (
        <OneItm key={itm.id} item={itm} />
      ))}
    </div>
  );
}

export default AllItmList;
