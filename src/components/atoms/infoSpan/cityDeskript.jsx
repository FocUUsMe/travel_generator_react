    const CityDeskript = (props) => {
        let styles = {
            width: '30%',
            height: '60%',
            color: 'white',
            fontSize: '2rem',
            fontWeight: '700',
            position: 'fixed',
            left: '200px',
            bottom: 'calc(30% - 200px)',
            cursor: 'default',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(10)',
            padding: '30px',
            borderRadius: '15px'
        }

        return (
            <span value={props.value} fact={props.fact} id="city_info" style={styles}>
                
                {props.value}

                <br />
                <br />

                {props.fact}
            </span>
        )
    }

    export default CityDeskript;