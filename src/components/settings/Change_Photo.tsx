import { useRef } from "react";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineAddAPhoto } from "react-icons/md";

const Change_Photo = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Do something with the file
    console.log(file);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-[#00C2811A] rounded-full items-center p-10 relative cursor-pointer"
      >
        <LuUserRound size={30} color="#00C281" />

        <div className="bg-[#00C281] absolute top-18 left-20 rounded-full p-2 text-[#FAFAFA]">
          <MdOutlineAddAPhoto size={20} />
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
};

export default Change_Photo;
