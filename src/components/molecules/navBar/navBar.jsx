    import styles from "@/components/molecules/navBar/styles.module.css";
    import { Map } from 'lucide-react';

    const NavBar = () => {
        return(
            <div className={styles.nav_bar}>
                <div className={styles.nav_logo}>
                  <div className={styles.logo_box}>
                    <Map size={36}/>

                    Wander Map
                  </div>
                </div>

                <div className={styles.nav_btns}>
                  <div className={styles.chosen}> Destination </div>
                  <div> Bookings </div>
                  <div> Gallery </div>
                  <div> Find a tour </div>
                </div>
            </div>
        )
    }

    export default NavBar;