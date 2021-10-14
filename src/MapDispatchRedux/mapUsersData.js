

export default function mapDispatchToProps (dispatch) {

    return {
        signUp : ()=> dispatch({type : 'signUp'}) ,
    }
}