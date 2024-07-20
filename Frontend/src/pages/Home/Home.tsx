import { useState } from 'react';
import { InputFile } from './../../components';
import { uploadImage } from './../../helpers';


export const Home = () => {
  const [useApi, setUseApi] = useState(false)
  const [state, setState] = useState<any>(null);
  const [data, setData] = useState<any>(null)

  const handleFile = (e: any) => {
    let file: any = e.target.files[0];
    setState(file);
  };

  const handleUpload = async () => {
    console.log(state);

    // create form data
    const formData = new FormData();
    formData.append("file", state)

    const resp = await uploadImage(formData);
    setData(resp)
    setUseApi(true)
  };

  const preview = () => {
    if (!data) {
      return <p>Loading...</p>
    } else {
      return (
        <>
                <img src="" alt="" />
                <p>Author: <span>{data.name}</span></p>
                <p>Type: <span>{data.type}</span></p>
              </>
      )
    }
  }

  return (
    <>
      <main>
        {
          !useApi ? (
            <InputFile handleFile={handleFile} handleUpload={handleUpload}/>
          ) : preview()
        }
      </main>
    </>
  );
};
