import { assets } from '../../assets/assets';

const AddDoctor = () => {
  return (
    <form>
      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt='img pic' />
          </label>
          <input type='file' id='doc-img' hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div>
          <div>
            <div>
              <p>Doctor name</p>
              <input type='text' placeholder='Name' required />
            </div>

            <div>
              <p>Doctor email</p>
              <input type='email' placeholder='Email' required />
            </div>

            <div>
              <p>Doctor Password</p>
              <input type='password' placeholder='Password' required />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
