

const COLOR = {
    primary: 'bg-yellow-500',
    secondary: 'bg-sky-500'
}

const StatisticItem = ({info, color}) => {
    const {itemName, itemPercent} = info;

    const renderBarPercent =()=> {
        return `w-${itemPercent}%`
    }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <p className="font-medium mb-2">{itemName}</p>
        <span className="font-medium">{itemPercent}%</span>
      </div>
      <div className="bg-gray-200 relative w-full h-2 rounded-full">
        <div
          style={{ width: `${itemPercent}%` }}
          className={`${COLOR[color]} absolute top-0 bottom-0 left-0 h-2 rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default StatisticItem