import { ref, firebaseAuth } from '../utils/firebase'; 
import { hashHistory } from 'react-router';

export function newAuth (email, pw) {
  return this.props.firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => alert('Login Failed. Please try again'))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return     firebaseAuth().signInWithEmailAndPassword(email, pw)
                .then((userData) =>
                  {
                hashHistory.push('/Dashboard')
                  }
                ).catch((error) =>
                    {
                    alert('Login Failed. Please try again')
                    console.log(error);
                });
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}


export function checkAuth (user){
      firebaseAuth().currentUser(user => {
      if (user) {
        console.log('Logged in:', user);
        this.setState({ showForm: true });
      } else {
        console.log('not logged in')
      }
    });
  }

export function checkauth (self){
      if (firebaseAuth().currentUser) {
      
      self.setState({
        showForm: true,
        user: ''
      });
          
    }
}