import { FC } from "react";

export interface Props {
  handleFile(e: any): void
  handleUpload(): void
}

export const InputFile: FC<Props> = ({handleFile, handleUpload}) => {
  return (
    <>
      <input type="file" name="file" id="" onChange={(e) => handleFile(e)} />
      <button onClick={() => handleUpload()}>button</button>
    </>
  );
};
