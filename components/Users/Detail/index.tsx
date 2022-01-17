import Image from "next/image";
import { useRouter } from "next/router";

import LinkButton from "../../LinkButton";

import classes from "./Detail.module.scss";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  location: string;
  createdat: string;
  profilepicture: string;
}

interface Props {
  user: UserProps;
  extended?: boolean;
}

const ExtendedDetail: React.FC<UserProps> = ({ name, email, location }) => {
  return (
    <>
      <h2>User Details</h2>
      <div
        className={classes.container}
        style={{ justifyContent: "flex-start" }}
      >
        <div className={classes["photo-container"]}>
          <Image
            src="/profile-sample.jpeg"
            height="100px"
            width="100px"
            className={classes.photo}
          />
        </div>

        <div className={classes["detail-container"]}>
          <p className={classes.name}>Name: {name}</p>
          <p className={classes.name}>Email: {email}</p>
          <p className={classes.name}>Location: {location}</p>
        </div>
      </div>
    </>
  );
};

const ResumedDetail: React.FC<UserProps> = ({ id, name }) => {
  const router = useRouter();
  const handleRedirectToDetails = () => router.push(`/users/${id}`);

  return (
    <div className={classes.container}>
      <div className={classes["photo-container"]}>
        <Image
          src="/profile-sample.jpeg"
          height="50px"
          width="50px"
          className={classes.photo}
        />
      </div>

      <p className={classes.name}>{name}</p>

      <LinkButton onClick={handleRedirectToDetails}>View Details</LinkButton>
    </div>
  );
};

const Detail: React.FC<Props> = ({ user, extended = false }) => {
  return extended ? <ExtendedDetail {...user} /> : <ResumedDetail {...user} />;
};

export default Detail;
