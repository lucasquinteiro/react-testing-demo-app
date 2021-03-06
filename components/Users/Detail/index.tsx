import Image from "next/image";
import { useRouter } from "next/router";

import LinkButton from "../../LinkButton";

import classes from "./Detail.module.scss";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  location: string;
  profileImage: string;
}

interface Props {
  user: UserProps;
  extended?: boolean;
}

const ExtendedDetail: React.FC<UserProps> = ({id, name, email, profileImage, location }) => {
  return (
      <div
        className={classes.container}
        style={{ justifyContent: "flex-start" }}
      >
        <div className={classes["photo-container"]}>
          <Image
            alt={`profile-${id}`}
            src={profileImage}
            height="100px"
            width="100px"
            className={classes.photo}
            layout="intrinsic"
          />
        </div>

        <div className={classes["detail-container"]}>
          <p className={classes.name}>Name: {name}</p>
          <p className={classes.name}>Email: {email}</p>
          <p className={classes.name}>Location: {location}</p>
        </div>
      </div>
  );
};

const ResumedDetail: React.FC<UserProps> = ({ id, name, profileImage }) => {
  const router = useRouter();
  const handleRedirectToDetails = () => router.push(`/users/${id}`);

  return (
    <div className={classes.container} data-testid={`user-item-${id}`}>
      <div className={classes["photo-container"]}>
        <Image
          alt={`profile-${id}`}
          src={profileImage}
          height="50px"
          width="50px"
          className={classes.photo}
        />
      </div>

      <p className={classes.name} data-testid={`user-name-${id}`}>
        {name}
      </p>

      <LinkButton onClick={handleRedirectToDetails} id={id}>
        View Details
      </LinkButton>
    </div>
  );
};

const Detail: React.FC<Props> = ({ user, extended = false }) => {
  return extended ? <ExtendedDetail {...user} /> : <ResumedDetail {...user} />;
};

export default Detail;
