export default function Latest({ prop }) {
  return (
    <>
      <div className="flex flex-col p-4 bg-[#FBFBFB] rounded-lg h-fit w-max my-auto " style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px","backgroundColor":"rgba(252, 252, 253, 1)"}}>
        <div>
          <div className="text-gray font-semibold pb-1">Latest Updates</div>
        </div>
        <div className="border-l-2 px-2 text-xs border-gray-400 ">
          {prop.Latest_Updates.map((item) => (
  <div key={item.id} className="text-blue py-0.5 font-semibold">{`${item.Text}`}</div>
))}

        </div>
      </div>
    </>
  );
}
