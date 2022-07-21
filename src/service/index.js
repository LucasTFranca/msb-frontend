import axios from 'axios';

const baseUrl = 'https://msb-backeend.herokuapp.com';

const uploadFile = async (archive) => {
  const form = new FormData();
  form.append('file', archive);

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const axiosFile = axios.create();

  const { data } = await axiosFile.post(`${baseUrl}/file/upload`, form, config);

  return data;
};

const sendUser = async (user, archive) => {
  const file = await uploadFile(archive);

  await axios.post(`${baseUrl}/user/`, {
    ...user,
    url: file.url,
    fileName: file.name,
  });
};

const getUsers = async () => {
  const { data } = await axios.get(`${baseUrl}/user/`);

  return data;
};

export {
  sendUser,
  getUsers,
};
