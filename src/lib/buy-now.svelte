<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="grid gap-1 grid-cols-1 grid-rows-1 px-5 mt-10 xl:mx-40 xl:mt-16 2xl:mx-80 2xl:mt-16">
	<div
		class="grid gap-1 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center"
	>
		<div class="justify-center items-center lg:order-last">
			<h2 class="text-white text-3xl text-center font-bold mb-5 lg:text-3xl xl:text-end">
				¿Qué esperas para comprar criptomonedas?
			</h2>
			<p class=" text-center xl:text-right text-slate-600 mb-5">
				Crea tu cuenta, completa el formulario KYC para ser validado y ya podrás comprar Bitcoin
				(BTC), Tether (USDT), Ethereum (ETH), Cardano (ADA), Dogecoin (DOGE), Polkadot (DOT), entre
				otras altcoins.
			</p>
			<div class="flex justify-center items-center xl:justify-end xl:items-end">
				<Button class="mx-10 my-2 sm:mx-52 md:mx-10 xl:mx-0" gradient color="purpleToBlue"
					>¡Quiero registrarme ahora!</Button
				>
			</div>
		</div>
		<div class="flex justify-center items-center xl:justify-center xl:items-center">
			<img
				class=" w-64 h-64  sm:w-80 sm:h-80 lg:w-96 lg:h-96  object-fit-cover"
				src="https://www.casacoins.com/landing/Wallet.svg"
				alt=""
				srcset=""
			/>
		</div>
	</div>
</div>
