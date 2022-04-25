import Link from 'next/link'
import Button from '../Button'

import classes from './Navbar.module.scss'

interface Props {
    onSignOut?: () => void
}

const Navbar: React.FC<Props> = ({onSignOut}) => {
    return (
        <div className={classes.container}>
            <Link href="/">
                <img src="/logo.png" alt="logo" />
            </Link>
            {!!onSignOut && (
                <div className={classes['button-container']}>
                    <Button style={{ width: "200px" }} onClick={onSignOut}>Sign Out</Button>
                </div>
            )}
        </div>
    )
}

export default Navbar