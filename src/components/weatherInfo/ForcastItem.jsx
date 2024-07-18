import dayjs from "dayjs";

function ForcastItem({ day }) {
  console.log(day.date);
  return (
    <li
      className={`${
        day.id === 1 ? "border-br" : "border-transparent"
      } flex flex-col gap-2 px-5 py-4 text-center transition duration-300 border-2  rounded-md cursor-pointer hover:border-2 hover:border-br`}
    >
      <div className="font-semibold">{dayjs(day.date).format("dd")}</div>
      <div className="text-xl text-tx">{day.day.maxtemp_c}</div>
      <div className="text-gray-500">{day.day.condition.text}</div>
    </li>
  );
}

export default ForcastItem;
