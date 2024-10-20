import { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);

  const { currency, backendUrl } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return <div>DoctorProfile</div>;
};

export default DoctorProfile;
