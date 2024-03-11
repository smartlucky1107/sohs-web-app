import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TableMain from "./table/main";
import Link from "next/link";

export default function TestTable(props) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <section className="w-full flex flex-col justify-center items-center p-5">
      <div className="w-full flex max-w-[1725px] flex-col gap-3 justify-center items-center">
        <div className="w-full flex justify-between md:items-center sm:flex-col sm:gap-4 ">
          <div className="flex h-full gap-2 bg-[#f5f5f5]">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-full px-5 py-3 rounded bg-[whitesmoke]"
              placeholder="Search ..."
              style={{
                backgroundColor: "#f5f5f5 !important",
                border: "none",
                outline: "none",
              }}
            />
            <button className="rounded py-3 px-5 uppercase text-black">
              <CiSearch />
            </button>
          </div>
          <div className="flex gap-3">
            <Link
              href="/add-test"
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
            >
              Add Test Result
            </Link>
            <button className="bg-[#0094f1] py-3 px-5 uppercase text-white">
              Import CSV
            </button>
          </div>
        </div>

        <TableMain
          searchText={searchText}
          setEditPopupState={props.setEditPopupState}
        />
      </div>
    </section>
  );
}
