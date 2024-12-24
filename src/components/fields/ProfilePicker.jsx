import { pencilIcon, userIcon } from "@/utils/Svgs";
import Image from "next/image";
import React from "react";

const ProfilePicker = (props) => {
  const [preview, setPreview] = React.useState(null);
  const inputRef = React.useRef();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      props.setProfile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      className={`relative bg-secondaryText cursor-pointer rounded-full  w-[140px] h-[140px] flex items-center justify-center shadow-profileShadow`}
    >
      <div className="flex w-full h-full overflow-hidden rounded-full items-center justify-center">
        {preview ? (
          <Image
            src={preview}
            width={20}
            height={20}
            alt="profile"
            className=" h-full w-full"
          />
        ) : null}
        <input
          ref={inputRef}
          id="upload-button"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center absolute bottom-2 right-0">
        {pencilIcon}
      </div>
    </div>
  );
};

export default ProfilePicker;
