import PlusSquareDotted from 'bootstrap-icons/icons/plus-square-dotted.svg?react';
import Logo from '../assets/logo.svg?react';

/**
 * The root component.
 */
export function App() {
	return (
		<div className="flex h-full">
			<div className="flex w-80 flex-col border-r border-neutral-300 bg-neutral-200 px-6 py-4">
				<div className="flex-1">
					<header className="mb-4">
						<h1 className="font-display mb-3.5 flex gap-2.5 text-3xl leading-none font-extrabold">
							<Logo className="mt-1.5 h-5" />
							gtmeta
						</h1>
						<h2 className="leading-tight">
							Generate high-quality metadata and icons for your website.
						</h2>
					</header>
					<button
						className={
							'font-display w-full cursor-pointer rounded-md py-2.5 pl-1 leading-none font-bold' +
							' bg-neutral-700 text-neutral-50 transition-colors duration-75 hover:bg-neutral-800' +
							' flex items-center justify-center gap-2'
						}
					>
						New Site
						<PlusSquareDotted />
					</button>
				</div>
				<footer className="text-sm">
					gtmeta is licensed under the GNU General Public License v3.0
					<a
						href="https://github.com/gtmetajs/gtmeta.dev"
						className="float-right text-blue-700 hover:underline"
					>
						GitHub
					</a>
				</footer>
			</div>
			<main className="flex flex-1 items-center justify-center p-4">
				<p className="text-center italic">
					Create a new site to get&nbsp;started!
				</p>
			</main>
		</div>
	);
}
