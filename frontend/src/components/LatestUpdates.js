export default function Latest({ prop }) {
  return (
    <>
      <div className="flex flex-col p-4 bg-[#FBFBFB] rounded-lg h-fit w-max ">
        <div>
          <div className="text-gray font-semibold">Latest Updates</div>
        </div>
        <div className="border-l-2 px-2 text-xs border-gray-400 ">
          {prop.Latest_Updates.map((item) => (
            <div className="text-blue mb-2">{`${item.Text}`}</div>
          ))}
        </div>
      </div>
    </>
  );
}
