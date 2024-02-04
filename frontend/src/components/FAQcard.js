import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Announcement({ prop }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <>
      <div className="rounded-xl w-full   font-[Manrope] shadow-xl mt-4 mb-4 p-3 py-5 border-solid  " style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px","backgroundColor":"rgba(252, 252, 253, 1)"}}>
        <div className="flex grid justify-between ">
          <div className="col-start-1 col-end-2 p-2">
            <span className="inline-block allign-middle font-medium ">{`Q ${prop.id}`}</span>
          </div>
          <div className="col-start-2 col-end-10">
            <div className="flex">
              <div class="inline-block w-0.5 self-stretch bg-gray-300 opacity-100 dark:opacity-50"></div>
              <div className="p-2">
                <span className="inline-block allign-middle word-break-all font-medium min-w-[100%]">{`${prop.Question}`}</span>
              </div>
            </div>
          </div>
          <div className="col-start-10 col-end-12 float-right">
            <button
              className="flex items-center w-full text-left font-medium py-2 md:hidden float-right bg-gray-300 p-2 rounded-lg "
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-01`}
            >
              {!accordionOpen && (
                <MdKeyboardArrowDown className="float-right">
                  <rect
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                  <rect
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                </MdKeyboardArrowDown>
              )}
              {accordionOpen && (
                <MdKeyboardArrowUp className="float-right">
                  <rect
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                  <rect
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                </MdKeyboardArrowUp>
              )}
            </button>
            <button
              className="flex items-center w-full max-w-max text-left font-semibold py-2 hidden md:inline-flex float-right bg-gray-300 p-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-01`}
            >
              <span className="float-right pr-4 pl-1">Ans</span>
              {!accordionOpen && (
                <MdKeyboardArrowDown className="float-right">
                  <rect
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                  <rect
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                </MdKeyboardArrowDown>
              )}
              {accordionOpen && (
                <MdKeyboardArrowUp className="float-right">
                  <rect
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                  <rect
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      accordionOpen && "!rotate-180"
                    }`}
                  />
                </MdKeyboardArrowUp>
              )}
            </button>
          </div>
        </div>
        <div className=" grid flex">
          <div
            id={`accordion-text-01`}
            role="region"
            aria-labelledby={`accordion-title-01`}
            className={`grid text-sm text-slate-600  overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 pt-8 ms-[15%] text-[#808080] ">
                {`${prop.Answer}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
