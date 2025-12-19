    'use client'

    import { Search } from 'lucide-react';
    import styles from "@/components/atoms/generationBtn/styles.module.css"

    const GenerationBtn = ({ handleAction }) => {
        
        return (
            <button onClick={ handleAction } className={styles.gener_btn}> 
                <Search/>

                Generate new travel
            </button>
        )
    }

    export default GenerationBtn;