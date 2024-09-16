import { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjm@gmail.com',
    phone: '+375-99-888-777',
    address: {
      line1: '99th, Cross, Richmond',
      line2: 'Circle, Church Road, London',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=''>
      <img src={userData.image} alt='img pic' />

      {isEdit ? (
        <input
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          type='text'
          value={userData.name}
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              type='text'
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type='text'
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type='text'
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          ) : (
            <p>{userData.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
