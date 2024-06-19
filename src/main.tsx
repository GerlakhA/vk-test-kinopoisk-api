import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.scss'
import RoutingApp from './routingApp.tsx'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<Toaster position='top-center' theme='light' />
			<RoutingApp />
		</QueryClientProvider>
	</React.StrictMode>
)
