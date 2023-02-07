
export  default function ComponenteButton({url,valor}) {
  return (
    <>
      <button onClick={url}>Esta{valor}</button>
    </>
  );
}

