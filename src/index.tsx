/// <reference types="prettier-plugin-organize-imports/prettier" />
/// <reference types="prettier-plugin-tailwindcss" />
/// <reference types="vite/client" />

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const rootElement = document.querySelector<HTMLDivElement>('#root')!;
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
