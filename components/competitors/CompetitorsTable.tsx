import CompetitorRow from "./CompetitorRow";

const mockData = Array.from({ length: 9 }).map(() => ({
  name: "Liza Milano",
  liveSince: "12/02/2024",
  ads: 54,
  products: 249,
  country: "IT",
  followers: "116",
}));

export default function CompetitorsTable() {
  return (
    <div >
      
        <div className="grid grid-cols-[2fr_1fr_1.2fr_1.2fr_1fr_1.5fr_0.8fr_1fr_1fr] gap-4 px-4 py-3 text-sm font-medium text-black items-center">
        <div>Store name</div>
        <div className="text-center">Website</div>
        <div>FB Library</div>
        <div>Live since</div>
        <div className="text-center">Active ads</div>
        <div className="text-center">Number of products</div>
        <div className="text-center">Country</div>
        <div className="text-center">FB profile</div>
        <div className="text-center">FB followers</div>
        </div>

      <div>
        {mockData.map((item, i) => (
          <CompetitorRow key={i} data={item} />
        ))}
      </div>
    </div>
  );
}
