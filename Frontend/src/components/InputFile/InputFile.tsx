import { useState } from 'react';
import { uploadImage, PUT_IMAGE } from './../../helpers'

export const InputFile = () => {
  const [state, setState] = useState<any>(null);

  const handleFile = (e) => {
    let file: any = e.target.files[0];
    setState({ file });
  }

  const handleUpload = async (e) => {
    console.log(state.file);
    await uploadImage(state.file, PUT_IMAGE);
  }
  
  return (
    <>
    <input type="file" name="file" id="" onChange={e => handleFile(e)} />
    <button onClick={e => handleUpload(e)}>button</button>
    </>
  )
};
