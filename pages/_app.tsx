import '../styles/globals.css'
import type { AppProps } from 'next/app'
import stepReducer from "../src/features/step"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
    step: stepReducer,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>)
}

export default MyApp
