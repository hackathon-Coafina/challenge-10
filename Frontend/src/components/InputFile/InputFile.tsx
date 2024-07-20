import { useState } from 'react';
import { uploadImage } from './../../helpers';

export const InputFile = () => {
  const [state, setState] = useState<any>(null);

  const handleFile = (e: any) => {
    let file: any = e.target.files[0];
    setState(file);
  };

  const handleUpload = async () => {
    console.log(state);

    // create form data
    const formData = new FormData();
    formData.append("file", state)

    await uploadImage(formData);
  };

  return (
    <>
      <input type="file" name="file" id="" onChange={(e) => handleFile(e)} />
      <button onClick={() => handleUpload()}>button</button>
    </>
  );
};
