async function handleImageUpload(image) {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'instagram');
  data.append('cloud_name', 'dq99ybnvg');

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/dq99ybnvg/image/upload',
    {
      method: 'POST',
      accept: 'application/json',
      body: data,
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse.url;
}

export default handleImageUpload;
