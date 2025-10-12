import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <a href="#" className="bg-white inline-flex p-1 rounded-full aspect-square">
          <Image src={"icons/email.svg"} alt="email" width={14} height={14} />
        </a>
        <p>arsiweb@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="bg-white inline-flex p-1 rounded-full aspect-square">
          <Image src={"icons/marker.svg"} alt="email" width={14} height={14} />
        </a>
        <p>Lorem ipsum, dolor sit amet consectetur.</p>
      </div>
    </div>
  );
}
