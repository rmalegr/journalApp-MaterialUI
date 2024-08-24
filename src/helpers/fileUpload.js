export const fileUpload = async (file) => {
  if (!file) throw new Error("No hay archivo para subir");
  //CREANDO UNA PETICIÓN HTTP Y MANDANDO EL BODY
  const cloudUrl = "https://api.cloudinary.com/v1_1/deauhmx0e/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-jounalapp");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    console.log(resp);
    if (!resp.ok) throw new Error("No se pudo subir el archivo");
    const cloudResp = await resp.json();
    console.log({ cloudResp });
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
