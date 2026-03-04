import Account from '../../components/Account/Account';
import Button from '../../components/Button/Button';
import { getUserProfile } from '../../services/apiService';
import { useEffect } from 'react';
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

  useEffect(() => {
    getUserProfile().then((data) => dispatch(setUserProfile(data))).catch(console.error)
  }, [])
  
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userProfile?.firstName} {userProfile?.lastName}</h1>
        <Button variant="cta">Edit Name</Button>
      </div>
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
