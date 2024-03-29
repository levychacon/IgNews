import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import {signIn, signOut, useSession} from 'next-auth/client'

export const SignInButton = () => {
  const[session] = useSession()

  console.log(session)
  return session ? (
    <button type="button" className={styles.signInButton} onClick={()=>signOut()}>
      <FaGithub color="#84d361" />
      Levy Chacon
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={()=> signIn('github')} >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
};
