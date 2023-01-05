import Image from "next/image";

interface Props {
  path: string;
  alt: string;
}

const Sponsor = ({ path, alt }: Props) => {
  return (
    <div className="h-48 w-full p-10 bg-blue-dark " id="sponsors">
      <div className="relative h-full">
        <Image src={path} alt={alt} fill style={{objectFit: "contain"}}  />
      </div>
    </div>
  );
};

export default Sponsor;
