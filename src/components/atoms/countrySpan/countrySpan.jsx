    const CountrySpan = (props) => {
        let styles = {
            color: 'black',
            fontSize: '12rem',
            cursor: 'default'
        }

        return (
            <span value={props.value} id="country_span" style={styles}>
                {props.value}
            </span>
        )
    }

    export default CountrySpan;