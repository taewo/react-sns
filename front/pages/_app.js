import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import AppLayout from '../components/AppLayout'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import withRedux from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const NodeBird = ({ Component, store }) => {
	return (
		<Provider store={store}>
			<Head>
				<title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css" />
			</Head>
			<AppLayout>
				<Component />
			</AppLayout>
		</Provider>
	)
}

NodeBird.propTypes = {
	Component: PropTypes.elementType
}

export default withRedux((initialState, options) => {
	const sagaMiddleware = createSagaMiddleware()
	const middlewares = [sagaMiddleware]
	const enhancer = process.env.NODE_ENV === 'production'
	? compose(applyMiddleware(...middlewares))
	:	compose(
		applyMiddleware(...middlewares),
		!options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
	)
	const store = createStore(rootReducer, initialState, enhancer)
	sagaMiddleware.run(rootSaga)
	return store
})(NodeBird)
