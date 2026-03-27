import Account from '../../components/Account/Account';
import Button from '../../components/Button/Button';
import EditNameModal from '../../components/EditNameModal/EditNameModal';
import { getUserProfile, updateUserProfile} from '../../services/apiService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../features/user/userSlice';
import './User.css';

const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance'
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance'
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance'
  }
];

function User() {
  const dispatch = useDispatch()
  const userProfile = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileError, setProfileError] = useState(false);

  useEffect(() => {
    getUserProfile().then((data) => dispatch(setUserProfile(data))).catch(() => setProfileError(true))
  }, [])

  const handleSave = async (_firstName, _lastName) => {
    const data = {
      firstName: _firstName,
      lastName: _lastName
    }

    try {
      await updateUserProfile(data.firstName, data.lastName);
      dispatch(setUserProfile(data))
      setIsModalOpen(false);
    } catch (error) {
      setProfileError(true);
      console.error('Failed to update profile:', error);
    }
  }


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userProfile.firstName ? `${userProfile.firstName} ${userProfile.lastName}` : 'Chargement...'}</h1>
        {profileError && <p>Impossible de modifier le profil.</p>}
        <Button variant="cta" onClick={() => setIsModalOpen(true)}>Edit Name</Button>
      </div>
      <EditNameModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialFirstName={userProfile?.firstName}
        initialLastName={userProfile?.lastName}
      />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
}

export default User;
