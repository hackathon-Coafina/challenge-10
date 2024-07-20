import { FC } from "react";

export interface Props {
    file: any 
    name: string;
    type: string
}

export const Preview: FC<Props> = ({ file, name, type }) => {
  return (
    <>
        <img src={file} alt={name} />
        <section>
            <p>Author: <span>{name}</span></p>
            <p>Type Picture: <span>{type}</span></p>
        </section>
    </>
  )
}
