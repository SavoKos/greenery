import { doc, getDoc } from 'firebase/firestore/lite';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth, firestore } from '../../firebase';
import { useEffect } from 'react';
import PlantItem from '@components/PlantItem';
import Spinner from '@components/UI/Spinner';

function Hero() {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => setUser(user));

  useEffect(async () => {
    setLoading(false);
    if (!user) return;
    const userRef = doc(firestore, 'users', auth.currentUser.uid);
    const usersRes = await getDoc(userRef);

    const usersSnap = usersRes.data();

    setWishlist(usersSnap.wishlist);
  }, [user]);

  console.log();

  if (loading)
    return (
      <S.Spinner>
        <Spinner />
      </S.Spinner>
    );

  if (!user)
    return (
      <S.Hero>
        <h2>You have to Log In before adding items to the wishlist</h2>
      </S.Hero>
    );

  if (wishlist.length < 1)
    return (
      <S.Hero>
        <h2>Your wishlist is empty.</h2>
      </S.Hero>
    );

  return (
    <S.Hero>
      {wishlist.map((wish) => (
        <PlantItem plant={wish} key={wish.name} />
      ))}
    </S.Hero>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Hero = styled.div`
  min-height: 50vh;
  margin-top: 3rem;

  h2 {
    text-align: center;
  }
`;

S.Spinner = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
`;

export default Hero;
