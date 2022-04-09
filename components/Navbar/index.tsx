import Button from '../Button'

import classes from './Navbar.module.scss'

interface Props {
    onSignOut?: () => void
}

const Navbar: React.FC<Props> = ({onSignOut}) => {
    return (
        <div className={classes.container}>
            <img src="/logo.png" alt="logo" />
            {!!onSignOut && (
                <div className={classes['button-container']}>
                    <Button style={{ width: "200px" }} onClick={onSignOut}>Sign Out</Button>
                </div>
            )}
        </div>
    )
}

export default Navbar