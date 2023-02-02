<script>
	import { Button } from 'flowbite-svelte';
	import start from '../lib/img/HeroCrypto.svg';
</script>

<div class="mt-16 px-5 flex flex-col lg:flex lg:flex-row lg:mx-1 lg:mt-20 lg:px-1 xl:mx-20 2xl:mx-64">
	<div class="flex flex-col justify-center items-center sm:pr-5  md:px-4 xl:justify-center xl:items-start">
		<h1 class="text-4xl text-white text-center xl:text-left xl:text-5xl font-bold mb-7">
			Compra criptomonedas sin pagar comisiones
		</h1>
		<p class="text-center xl:text-left text-slate-600">
			Compra fácilmente bitcoins, USDT y otras criptomonedas en menos de 7 minutos y recíbelas en
			cualquier parte del mundo.
		</p>
		<Button gradient color="purpleToBlue" class=" mt-5 py-6 px-5 xl:text-lg">Registrarme como comprador</Button>
	</div>
	<div class="flex justify-center items-center">
		<img class="mt-4 sm:max-w-md lg:max-w-sm xl:max-w-lg 2xl:max-w-6xl " src={start} alt="startImg" />
	</div>
</div>
