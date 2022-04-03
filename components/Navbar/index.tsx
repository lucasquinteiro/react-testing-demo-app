import Image from 'next/image'

import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={classes.container}>
            <Image src="/logo.png" alt="logo" height="100px" width="300px"/>
        </div>
    )
}

export default Navbar