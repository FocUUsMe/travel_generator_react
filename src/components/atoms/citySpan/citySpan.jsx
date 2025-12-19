    const CitySpan = (props) => {
        let styles = {
            color: 'black',
            fontSize: '4rem',
            cursor: 'default'
        }
        
        return (
            <span value={props.value} id="city_span" style={styles}>
                {props.value}
            </span>
        )
    }

    export default CitySpan;