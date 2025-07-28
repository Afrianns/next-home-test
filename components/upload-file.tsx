"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";

import { useRef, useState } from "react";

export default function UploadIMG({
  files,
  setFiles,
}: {
  files: File[] | undefined;
  setFiles: (a: File[]) => void;
}) {
  // const [files, setFiles] = useState<File[] | undefined>();

  const [filePreview, setFilePreview] = useState<string | undefined>();

  const handleDrop = (files: File[]) => {
    setFiles(files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };
  return (
    <div className="bg-white w-fit p-1">
      <Dropzone
        accept={{ "image/*": [".png", ".jpg"] }}
        onDrop={handleDrop}
        onError={console.error}
        src={files}
        className="w-[200px] h-[150px] border-dashed p-0 m-0"
      >
        <DropzoneEmptyState />
        <DropzoneContent>
          {filePreview && (
            <div className="h-full w-full">
              <img
                alt="Preview"
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={filePreview}
              />
            </div>
          )}
        </DropzoneContent>
      </Dropzone>
      {filePreview && (
        <div className="flex justify-center mx-auto">
          <p
            onClick={() => {
              setFiles([]);
              setFilePreview(undefined);
            }}
            className="text-red-500 underline"
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}
