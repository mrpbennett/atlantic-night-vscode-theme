import { AppProps } from 'next/app'
import '../styles/tailwind.css';

function myApp({ Component, pageProps }: AppProps) {
    return <Component { ...pageProps } />
}

export default myApp


import { Module } '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'


@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService]
})

export class AppModule {}