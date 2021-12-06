import React from 'react'
import { Route, Navigate } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'




const PrivateRoute = ({ element: Elements, auth: { isAuthenticated }, ...rest }) => (
    <Route {...rest}
        render={props => !isAuthenticated ? (
            <Navigate replace to="/login" />
        ) : (
            <>

                <Elements {...props} />

            </>
        )} />
)
// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired,
// }
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute)