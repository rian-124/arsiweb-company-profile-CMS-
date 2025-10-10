import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex justify-end p-2">
      <button
        id="close-button"
        className="p-1 spin-once rounded-full hover:bg-gray-200"
      >
        <Image
          src={"/icons/closeIcon.svg"}
          alt="closeIcon"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
