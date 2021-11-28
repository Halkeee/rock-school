import axios from "axios";
import React from "react";

const Admin = ({ allImages }) => {
  const imagesEndpoint = "http://localhost:8081/uploads";

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target["profile-file"]);
  }

  return (
    <div className="admin">
      <form
        method="POST"
        // action={`${imagesEndpoint}/profile-upload-single`}
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Upload profile picture</label>
          <input type="file" name="profile-file" required />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>

      <hr />

      <form
        method="POST"
        action="/profile-upload-multiple"
        encType="multipart/form-data"
      >
        <div>
          <label>Upload multiple profile picture</label>
          <input type="file" name="profile-files" required multiple />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>

      {allImages.map((image, k) => (
        <img key={k} src={`${imagesEndpoint}/${image}`} alt="Gallery item" />
      ))}
    </div>
  );
};

export default Admin;

export async function getServerSideProps(ctx) {
  const { data } = await axios.get("http://localhost:8081/all-images");

  return {
    props: {
      allImages: data.images,
    },
  };
}
